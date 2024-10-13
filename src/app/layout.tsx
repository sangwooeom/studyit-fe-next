import MSWComponent from '@/mocks/MSWComponent';
import './globals.scss';
import { Navigation } from "@/components";

export default function RootLayout({children}: {children: React.ReactNode}) {
    return (
        <html lang="ko">
            <body>
                <MSWComponent>
                    <Navigation />
                    <main>{children}</main>
                </MSWComponent>
            </body>
        </html>
    )
}