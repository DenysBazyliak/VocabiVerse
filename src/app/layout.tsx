'use client';

// Library Imports
import { useState } from 'react';

// Project Imports
// import CommonLayout from '../layout/CommonLayout/index';
import MainLayout from '@/layout/MainLayout';
import './globals.css';
import WordForm from '@/_components/WordForm';


// const logged = false;


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [form, setForm] = useState<boolean>(false);
    return (
        <html lang='en'>
        <body className={'h-full'}>
            <MainLayout setForm={setForm} form={form} />
            <div className={'absolute bottom-0 right-0 h-[calc(100%-60px)] w-[100%] bg-[#0B0C10]'}>
                {children}
                {form ? <WordForm form={form} setForm={setForm} /> : null}
            </div>
        </body>
        </html>
    );
}