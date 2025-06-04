"use client"
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function Page() {
    const [data, setData] = useState(null);
    const params = useSearchParams()

    const ID = params.get("repo_id")
    const Name = params.get("repo_name")
    const token = params.get("token")

    useEffect(() => {
        async function run() {
            const res = await fetch(`/api/gitlab/review?id=${ID}&token=${token}`)
            const result = await res.json()
            setData(result)
        }
        run()
    }, [])

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
            <span>set up AI Manager for this repo <button>call</button></span>
        </>

    )
}