import React from 'react'
import Link from 'next/link'
import Cookie from '@utils/cookie'

export async function Header() {
    const token = await Cookie()
    return(
        <header role='banner'>
            <fieldset>
                <nav role='navigation'>
                    <ul>
                        <li><Link href="/">Home</Link></li>
                        <li><Link href="https://github.com/gouravsharma-00/Mercury">Github</Link></li>
                        {
                            token ? <li><Link href="/api/auth/logout">logout</Link></li> : ""
                        }
                    </ul>
                </nav>              
            </fieldset>
        </header>
    )
}

export function Footer() {
    return(
        <footer role='banner'>
            <fieldset style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <span>Made with 💖 by <Link href='https://github.com/gouravsharma-00'>Gourav Sharma</Link></span>             
            </fieldset>
        </footer>
    )
}