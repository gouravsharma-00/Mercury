export default async function fetchAllFileContents(files, repoId) {
  const results = [];

  for (const file of files) {
    const filePath = file.path;
    if(file.type !== 'blob') continue;

    try {
      const res = await fetch(`/api/gitlab/file?filePath=${encodeURIComponent(filePath)}&repoId=${repoId}`);
      if (!res.ok) {
        console.error(`Failed to fetch: ${filePath}`);
        results.push({ path: filePath, content: null, error: true });
        continue;
      }

      const content = await res.text();

      // Send content to server-side AI API
      const feedbackRes = await fetch("/api/gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      const feedbackData = await feedbackRes.json();

      results.push({ path: filePath, content: feedbackData, error: false });

    } catch (err) {
      console.error(`Error fetching file ${filePath}`, err);
      results.push({ path: filePath, content: null, error: true });
    }
  }

//   return results;
    console.log(results)
}
