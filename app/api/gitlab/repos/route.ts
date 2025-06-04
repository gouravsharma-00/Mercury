import Cookie from "@utils/cookie";

export async function GET(req: Request) {
    const token = await Cookie()

    const res = await fetch('https://gitlab.com/api/v4/projects?membership=true&per_page=100', {
        headers: {
        Authorization: `Bearer ${token}`,
        },
    });
    const repos = await res.json();

    return new Response(JSON.stringify(repos), {
        status: 200
    })

}