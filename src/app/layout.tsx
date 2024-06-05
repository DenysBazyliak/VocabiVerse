'use client';

// Library Imports
import React, { useState, useReducer, useEffect } from 'react';

// Project Imports
import MainLayout from '@/layout/MainLayout';
import './globals.css';
import WordForm from '@/_components/WordForm';
import SectionPaper from '@/_components/Sections/SectionPaper/SectionPaper';



// Types
import { WordType} from '@/types/WordTypes';

const InitialWords = [
    {
        word: 'Dictionary',
        translation: 'Wörterbuch',
        article:'das',
        id: 1,

    },
    {
        word: 'Sock',
        translation: 'Socke',
        article:'die',
        id: 2,
    },
    {
        word: 'Gauntlet',
        translation: 'Stulpe',
        article:'die',
        id: 3,
    },
    {
        word: 'Boot',
        translation: 'Stiefel',
        article:'der',
        id: 4,
    },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [form, setForm] = useState<boolean>(false);
    const [section, setSection] = useState<boolean>(true);


    let nextId = 4;


    return (
        <html lang='en'>
        <body className={'h-full bg-gradient-to-r from-[#DA4453] to-[#89216B]'}>
        <div className={'main h-4 w-4'}>
        </div>
                <MainLayout setForm={setForm} form={form} />
                <div className={'absolute bottom-0 right-0 h-[calc(100%-60px)] w-[100%]'}>
                    {children}
                    {form ? <WordForm form={form} setForm={setForm} /> : null}
                    {section ? <SectionPaper setSection={setSection} /> :
                        <button onClick={() => setSection(true)}> + </button>}

                </div>
        </body>
        </html>
    );
}