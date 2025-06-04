import React from 'react'
import Cookie from '@utils/cookie'
import User from '@components/user'

export default async function Page() {

    const token = await Cookie()

    return (
        <>
            <main style={{padding: "1rem"}}>
                <h1>Welcome To Mercury | AI Manager</h1>
                {
                    token == null ? 
                    <span>Continue to app via <a href="api/auth/url"><b>Gitlab</b></a></span>
                    : 
                    (
                        <>
                            <User token={token}/>
                        </>

                        
                    )
                }
            </main>
        </>
    )
}