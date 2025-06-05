import { cookies } from "next/headers";

export default async function Cookie() {

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
    if (test.status == 401  && refresh) {
        return null;
    }


    return token;
}