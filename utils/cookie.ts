import { cookies } from "next/headers";

export default async function Cookie() {
    "use server"
    const cookieStore = await cookies();
    const token = cookieStore.get('gitlab_token')?.value;
    const refresh = cookieStore.get('gitlab_refresh_token')?.value;
    if(!token) {
        return null
    }
    // Try using the token
    const test = await fetch('https://gitlab.com/api/v4/user', {
        headers: { Authorization: `Bearer ${token}` },
    });

    // If expired, refresh
    if (test.status === 401 && refresh) {
        const res = await fetch('https://gitlab.com/oauth/token', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                grant_type: 'refresh_token',
                refresh_token: refresh,
                client_id: process.env.ID,
                client_secret: process.env.SECRET, 
            })
        });
        const data = await res.json();
        if (data.access_token) {
        (await cookies()).set('gitlab_token', data.access_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 2,
                path: '/',
            });
        }
        if (data.refresh_token) {
            (await cookies()).set('gitlab_refresh_token', data.refresh_token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                maxAge: 60 * 60 * 24 * 30,
                path: '/',
            });
        }
        return data.access_token;
    }


    return token;
}