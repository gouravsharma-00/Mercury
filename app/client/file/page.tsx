"use client"
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function FileViewer() {
  const params = useSearchParams();
  const repoId = params.get("repo_id");
  const token = params.get("token");
  const filePath = params.get("file_path");

  const [content, setContent] = useState(null);

  useEffect(() => {
    if (!repoId || !filePath || !token) return;

    async function fetchFile() {
      const res = await fetch(`/api/gitlab/file?filePath=${encodeURIComponent(filePath)}&repoId=${repoId}`);
      const data = await res.text(); // assuming raw text
      setContent(data);
    }

    fetchFile();
  }, [repoId, filePath, token]);

  return (
    <div>
      <h2>File: {filePath}</h2>
      <pre style={{ background: "#f4f4f4", padding: "1em", whiteSpace: "pre-wrap" }}>
        {content ?? "Loading..."}
      </pre>
    </div>
  );
}
