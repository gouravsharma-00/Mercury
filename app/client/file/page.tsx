"use client"
export const dynamic = "force-dynamic"; // Error occurred prerendering page
import { useSearchParams } from "next/navigation";
import { useEffect, useState, Suspense } from "react";

function FileViewer() {
  const params = useSearchParams();
  const repoId = params.get("repo_id");
  const token = params.get("token");
  const filePath = params.get("file_path");

  const [content, setContent] = useState(null);
  const [report, SetReport] = useState(null);

  useEffect(() => {
    if (!repoId || !filePath || !token) return;

    async function fetchFile() {
      const res = await fetch(`/api/gitlab/file?filePath=${encodeURIComponent(filePath)}&repoId=${repoId}`);
      const data = await res.text(); // assuming raw text
      setContent(data);
    }

    fetchFile();
  }, [repoId, filePath, token]);

  async function handleReport() {
    const feedbackRes = await fetch("/api/gen", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content }),
      });

      const feedbackData = await feedbackRes.json();
      SetReport(feedbackData)
  }

  return (
    <div>
      <h2>File: {filePath}</h2>
      <pre style={{ background: "#f4f4f4", padding: "1em", whiteSpace: "pre-wrap" }}>
        {content ?? "Loading..."}
      </pre>
      {content ? <p>Create a report on your code ? <button onClick={() => handleReport()}>Yes!!!</button></p> : <p></p>}
      {
      report ? 
      <pre style={{ background: "#f4f4f4", padding: "1em", whiteSpace: "pre-wrap" }}>
        {report.text}
      </pre> : <p></p>
      }

    </div>
  );
}


export default function Page() {
    return(
        <Suspense fallback={<p>loading...</p>}>
            <FileViewer />
        </Suspense>
    )
}