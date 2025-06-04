import { NextResponse } from 'next/server';

export async function GET() {
  const response = NextResponse.redirect(new URL('/', process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000'));

  response.headers.set(
    'Set-Cookie',
    `gitlab_token=; gitlab_refresh_token=; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT; HttpOnly; SameSite=Strict`
  );

  return response;
}
