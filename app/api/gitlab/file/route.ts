import Cookie from "@utils/cookie";

export async function GET(req: Request) {
    const token = await Cookie();
    const { searchParams } = new URL(req.url);
    
    const filePath = searchParams.get("filePath");
    const repoId = searchParams.get("repoId");

    if (!filePath || !repoId || !token) {
        return new Response(JSON.stringify({ error: "Missing parameters" }), { status: 400 });
    }

    const encodedPath = encodeURIComponent(filePath);
    const gitlabRes = 
    await fetch(`https://gitlab.com/api/v4/projects/${repoId}/repository/files/${encodedPath}/raw?ref=main`, {
        headers: {
            Authorization: `Bearer ${token}`,
        },
    });

    if (!gitlabRes.ok) {
        return new Response(JSON.stringify({ error: "Failed to fetch file" }), { status: gitlabRes.status });
    }

    const fileContent = await gitlabRes.text();
    return new Response(fileContent, { status: 200 });
}
