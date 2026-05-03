import Header from '@/components/Header';
import React from 'react'

function layout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            <Header />
            <div className='pt-26'>
                {children}
            </div>
        </>
    )
}

export default layout