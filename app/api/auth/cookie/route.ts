// app/api/auth/cookie/route.ts
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const refresh = searchParams.get("refresh");

  if (!refresh) {
    return NextResponse.json(
      { error: "Missing refresh token" },
      { status: 400 }
    );
  }

  // Exchange the refresh_token for a new access_token
  const tokenRes = await fetch("https://gitlab.com/oauth/token", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      grant_type: "refresh_token",
      refresh_token: refresh,
      client_id: process.env.ID,
      client_secret: process.env.SECRET,
    }),
  });

  if (!tokenRes.ok) {
    // GitLab returned an error (e.g., invalid_grant)
    const errData = await tokenRes.json();
    // Clear cookies on failed refresh
    await (await cookies()).delete("gitlab_token");
    await (await cookies()).delete("gitlab_refresh_token");
    return NextResponse.json(errData, { status: tokenRes.status });
  }

  const data = await tokenRes.json();

  // Set the new access token cookie (use GitLab’s expires_in for “maxAge”)
  if (data.access_token) {
    await (await cookies()).set("gitlab_token", data.access_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: data.expires_in, // match GitLab’s expires_in (in seconds)
      path: "/",
    });
  }

  // If GitLab passed a new refresh token, replace the old one
  if (data.refresh_token) {
    // GitLab sometimes returns a new refresh token; else you can re-use the old
    await (await cookies()).set("gitlab_refresh_token", data.refresh_token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 30, // e.g. 30d (or use data.refresh_expires_in if provided)
      path: "/",
    });
  }

  // Return the new tokens to the caller (so they can use the fresh access_token immediately)
  return NextResponse.json(data);
}
