import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {

    const token = req.nextUrl.searchParams.get('token')
    const ID = req.nextUrl.searchParams.get('id');

    const headers = {
        Authorization: `Bearer ${token}`,
    };
    
    const [projectRes, filesRes, contributorsRes] = await Promise.all([
        fetch(`https://gitlab.com/api/v4/projects/${ID}`, { headers }),
        fetch(`https://gitlab.com/api/v4/projects/${ID}/repository/tree`, { headers }),
        fetch(`https://gitlab.com/api/v4/projects/${ID}/repository/contributors`, { headers }),
    ]);

    const [project, files, contributors] = await Promise.all([
        projectRes.json(),
        filesRes.json(),
        contributorsRes.json(),
    ]);

  return Response.json({ project, files, contributors });
}