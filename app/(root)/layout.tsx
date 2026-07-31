import ChatWidget from '@/components/ChatWidget';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React from 'react'

function layout({ children }: Readonly<{children: React.ReactNode;}>) {
    return (
        <>
            <Header />
            <div className='pt-23.5'>
                {children}
            </div>
            <Footer/>
            <ChatWidget />
        </>
    )
}

export default layout