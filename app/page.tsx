import React from 'react'

export default async function Page() {
    const res = await fetch("http://localhost:3000/api/gitlab")
    const result = await res.json()

    console.log(result)
    return (
        <span>Hello</span>
    )
}