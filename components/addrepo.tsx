"use client"
import Link from "next/link";
import { useState } from "react"

export default function Addrepo({token}) {
    const [repos, setRepo] = useState(null);

    async function add() {
        const res = await fetch("/api/gitlab/repos")
        const repo = await res.json()

        setRepo(repo);
        
    }
    return(
        <>
            <button onClick={add}>
                Add Repo?
            </button>
            {
                !repos ? <span>try clicking add repo button</span> : 
                <ul>
                    {
                        repos.map(repo => {
                            return <li key={repo.id}><Link href={`/client?repo_id=${repo.id}&repo_name=${repo.name}&token=${token}`}>{repo.name}</Link></li>
                        })
                    }
                </ul>
            }
        
        </>

    )
}