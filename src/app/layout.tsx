'use client';

// Library Imports
import React, { useState } from 'react';

// Project Imports
import './globals.css';



// Types
import Footer from '@/_components/Footer/Footer';
import Drawer from '@/_components/Drawer/Drawer';

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [form, setForm] = useState<boolean>(false)



    return (
        <html lang='en'>
        <body className={'h-full'}>
        <div className={'main'}>
            <div className={'gradient'}/>
        </div>

                <div className={'absolute bottom-0 right-0 h-[calc(100%-60px)] w-[100%]'}>
                    {children}
                    <Drawer/>
                </div>

        <Footer setForm={setForm} form={form}/>
        </body>
        </html>
    );
}