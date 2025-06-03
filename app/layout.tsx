import React from 'react'

export default function RootLayout({children} : {children : React.ReactNode}) {
    return(
        <html lang='en'>
            <head>
                <meta name="description" 
                content="An AI-powered application that analyzes GitLab commits and generates intelligent reports directly in your repository." />

                {/* Favicon | https://icons8.com"*/}
                <link rel="image/png" href="/favicon16x16.png" />

                {/* Open Graph / Social Media Meta Tags */}
                <meta property="og:title" content="mercury | AI Manager" />
                <meta property="og:description" 
                content="An AI-powered application that analyzes GitLab commits and generates intelligent reports directly in your repository." />
                <meta property="og:image" content="/favicon16x16.png" />
                <meta property="og:url" content="https://mercury.vercel.app" />
                <meta property="og:type" content="website" />

                {/* Twitter Card */}
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content="mercury | AI Manager" />
                <meta name="twitter:description" 
                content="An AI-powered application that analyzes GitLab commits and generates intelligent reports directly in your repository." />
                <meta name="twitter:image" content="/favicon96x96.png" />

                <title>mercury | AI Manager</title></head>
            <body>
                {children}
            </body>
        </html>
    )
}