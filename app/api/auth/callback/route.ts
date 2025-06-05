import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(req: Request) {

  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');

  const response = await fetch('https://gitlab.com/oauth/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: process.env.ID,
      client_secret: process.env.SECRET,
      code,
      grant_type: 'authorization_code',
      redirect_uri: process.env.URL,
    }),
  });

  const data = await response.json();
  if (!data.access_token) {
    return new Response(JSON.stringify({ error: 'Token exchange failed', data }));
  }

  // Access Token
  (await cookies()).set('gitlab_token', data.access_token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    maxAge: 60 * 60 * 24 * 30, // 30 day
    path: '/',
  });

  // Refresh Token
  // (await cookies()).set('gitlab_refresh_token', data.refresh_token, {
  //   httpOnly: true,
  //   secure: process.env.NODE_ENV === 'production',
  //   maxAge: 60 * 60 * 24 * 30, // 30 days
  //   path: '/',
  // });

  // Redirect to dashboard or home
  return NextResponse.redirect(new URL('/', req.url));
  
}