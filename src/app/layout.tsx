import './globals.scss';
import { Navigation } from "@/components";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ko">
            <body>
                <Navigation />
                <main>{children}</main>
            </body>
        </html>
    )
}