import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const ID = req.nextUrl.searchParams.get("id")
  const token = req.nextUrl.searchParams.get("token")

  const res = await fetch(`https://gitlab.com/api/v4/projects/${ID}/repository/archive`, {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${token}`,
      Accept: "application/zip",
    }
  })

  const result = await res.json()

  console.log(result)

  return new Response(JSON.stringify(result), {status: 200})
}