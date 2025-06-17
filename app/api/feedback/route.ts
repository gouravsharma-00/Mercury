import { NextRequest, NextResponse } from 'next/server';
import Cookie from '@utils/cookie';

export async function POST(req: NextRequest) {
    const token = await Cookie();
  try {
    const { repoId, feedback } = await req.json();

    if ( !repoId || !feedback) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const FILE_PATH = 'feedback.md';
    const BRANCH = 'main';

    const baseUrl = `https://gitlab.com/api/v4/projects/${encodeURIComponent(repoId)}/repository/files/${encodeURIComponent(FILE_PATH)}`;

    // Check if file exists
    const checkRes = await fetch(`${baseUrl}?ref=${BRANCH}`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (checkRes.ok) {
      // File exists -> Update it
      const updateRes = await fetch(baseUrl, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          branch: BRANCH,
          content: feedback,
          commit_message: 'Update feedback.md with latest code feedback',
        }),
      });

      if (!updateRes.ok) {
        const errData = await updateRes.json();
        return NextResponse.json({ error: 'Failed to update file', details: errData }, { status: 500 });
      }

      return NextResponse.json({ message: 'feedback.md updated' });
    } else if (checkRes.status === 404) {
      // File doesn't exist -> Create it
      const createRes = await fetch(`${baseUrl}?ref=${BRANCH}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          branch: BRANCH,
          content: feedback,
          commit_message: 'Add feedback.md with code feedback',
        }),
      });

      if (!createRes.ok) {
        const errData = await createRes.json();
        return NextResponse.json({ error: 'Failed to create file', details: errData }, { status: 500 });
      }

      return NextResponse.json({ message: 'feedback.md created' });
    } else {
      const err = await checkRes.json();
      console.error('GitLab API error:', err);
      return NextResponse.json({ error: 'GitLab API error', details: err }, { status: checkRes.status });
    }
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
