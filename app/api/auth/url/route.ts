
export async function GET(req: Request) {
    
    const base = 'https://gitlab.com/oauth/authorize';
    const params = new URLSearchParams({
        client_id: process.env.ID,
        redirect_uri: process.env.URL,
        response_type: 'code',
        scope: 'read_user read_repository api read_api',
    });

    return Response.redirect(`${base}?${params.toString()}`);
}