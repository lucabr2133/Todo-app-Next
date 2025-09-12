import React from "react";
import "@/styles/globals.css";
import { Providers } from "./providers";
export default function RootLayout({children}:{children:React.ReactNode}){
    return (
        <>
        <html suppressHydrationWarning  lang="en">
        <head >
            
        </head>
        <body  className="min-h-dvh dark text-foreground bg-background" >
            <Providers>
                {children}

            </Providers>
        </body>
        </html>
        </>
    )
}