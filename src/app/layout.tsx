'use client';

// Library Imports
import React, { useState } from 'react';

// Project Imports
// import CommonLayout from '../layout/CommonLayout/index';
import MainLayout from '@/layout/MainLayout';
import './globals.css';
import WordForm from '@/_components/WordForm';
import Grid from '../../public/images/grid.jpg';
import SectionPaper from '@/_components/Sections/SectionPaper/SectionPaper';


// const logged = false;


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [form, setForm] = useState<boolean>(false);
    const [section, setSection] = useState<boolean>(true);
    return (
        <html lang='en' >
        <body className={'h-full bg-gradient-to-r from-[#DA4453] to-[#89216B]'} >
        <div className={'main h-4 w-4'}>

        </div>
            <MainLayout setForm={setForm} form={form} />
            <div className={'absolute bottom-0 right-0 h-[calc(100%-60px)] w-[100%]'}>
                {children}
                {form ? <WordForm form={form} setForm={setForm} /> : null}
                {section ?  <SectionPaper setSection={setSection}/> : <button onClick={() => setSection(true)}> + </button>}

            </div>
        </body>
        </html>
    );
}