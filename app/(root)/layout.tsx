import Header from '@/components/Header';
import React from 'react'

function layout({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <>
            {/* <Header /> */}
            {children}
        </>
    )
}

export default layout