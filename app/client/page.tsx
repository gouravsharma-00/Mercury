"use client"
export const dynamic = "force-dynamic"; // Error occurred prerendering page
import fetchAllFileContents from '@libs/gitlab/lab'

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect, Suspense } from "react";

function Repo() {
    const [data, setData] = useState(null);
    const [feed, setFeed] = useState(null);

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
            console.log(result.files)
        }
        run();
    }, [ID, token]);

    async function handleFeed() {
        console.log("fetch all")
        const res = await fetchAllFileContents( data.files, ID)
        console.log("ppppppppppppppppppppppppppppp")
        setFeed(res)
    }
    useEffect(() => {
        console.log(feed)
    }, [feed])

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
                                return <li key={file.id}>
                                    <Link target="_blank" href={`/client/file?repo_id=${ID}&token=${token}&file_path=${file.path}`}>{file.name}</Link>
                                    </li>
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
            <button onClick={handleFeed}>set up AI Manager for this repo</button>
            {feed ? 
                <pre style={{ background: "#f4f4f4", padding: "1em", whiteSpace: "pre-wrap" }}>
                    {feed}
                </pre> : <p></p>}
            
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