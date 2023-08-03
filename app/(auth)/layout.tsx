import '@/styles/global.css'
import GlassPane from "@/components/glass-pane"
import { ReactNode } from "react"

type AuthRootLayoutProps = {
    children: ReactNode
}

export default function AuthRootLayout({children}: AuthRootLayoutProps) {
    return (
        <html lang="en">
            <head/>
            <body className="h-screen w-screen rainbow-mesh p-6">
                <GlassPane className="w-full h-full flex items-center jus">
                    {children}
                </GlassPane>
            </body>
        </html>
    )
}