"use client"
export const dynamic = "force-dynamic"; // Error occurred prerendering page

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

export function Repo() {
    const [data, setData] = useState(null);
    const params = useSearchParams()

    const ID = params.get("repo_id")
    const Name = params.get("repo_name")
    const token = params.get("token")

   useEffect(() => {
        if (!ID || !token) return;
        async function run() {
            const res = await fetch(`/api/gitlab/review?id=${ID}&token=${token}`);
            const result = await res.json();
            setData(result);
        }
        run();
    }, [ID, token]);

    return (
        <>
            <h3>repo: {Name}</h3>
            <ul>
                <li>{ID}</li>
                <li>{Name}</li>
            </ul>
            {
                !data ? <p>loading...</p> 
                : 
                <>
                    <fieldset>
                        <legend>Files</legend>
                        <ul>
                            {data.files.map((file) => {
                                return <li key={file.id}>{file.name}</li>
                            })}
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>contributors</legend>
                        <ul>
                            {data.contributors.map((contributor, i) => {
                                return <li key={i}>{contributor.name} : commit - {contributor.commits}</li>
                            })}
                        </ul>
                    </fieldset>
                    <fieldset>
                        <legend>Project</legend>
                        <ul>
                            <li>Name : {data.project.name}</li>
                            <li>branch :{data.project.default_branch}</li>
                            <li>group : {data.project.namespace.name}</li>
                            <li>URL : <Link href={data.project.http_url_to_repo}>{data.project.http_url_to_repo}</Link></li>
                            
                        </ul>
                    </fieldset>
                </>

            }
            <span>set up AI Manager for this repo <Link href={`/api/robot?id=${ID}&token=${token}`}>Call</Link></span>
        </>

    )
}

export default function Page() {
    return(
        <Suspense fallback={<p>loading...</p>}>
            <Repo />
        </Suspense>
    )
}