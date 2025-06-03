import { NextRequest, NextResponse } from "next/server";
import connect from "../../../_libs/gitlab/git";

export async function GET(req: NextRequest) {

    const token = process.env.GIT_TOKEN;
    const projectIdStr = process.env.PROJECT_ID;

    if (!token || !projectIdStr) {
        return NextResponse.json({ error: "Missing token or project ID" }, { status: 500 });
    }

    const projectId = parseInt(projectIdStr, 10);
    if (isNaN(projectId)) {
        return NextResponse.json({ error: "Invalid project ID" }, { status: 500 });
    }

    try {
        const result = await connect(token, projectId);
        return NextResponse.json({ success: true, result });
        
    } catch (error) {
        return NextResponse.json({ error: "Connection failed", details: String(error) }, { status: 500 });
    }
}
