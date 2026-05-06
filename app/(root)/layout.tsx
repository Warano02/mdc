import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

function layout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            <Header />
            <div className='pt-26'>
                {children}
            </div>
            <Footer/>
        </>
    )
}

export default layout