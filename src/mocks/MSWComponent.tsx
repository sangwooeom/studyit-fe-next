'use client'

import { useState, useEffect } from "react"

export default function MSWComponent({children}: {children: React.ReactNode}) {
    const [ready, setReady] = useState<boolean>(false);

    async function init() {
        const res = await import('./browser');
        setReady(true);
        await res.worker.start();
    }

    useEffect(() => { !ready && init(); }, [ready]);

    return <>{children}</>
}