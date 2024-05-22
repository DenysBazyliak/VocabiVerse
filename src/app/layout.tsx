'use client';

// Library Imports
import React, { useState, useReducer } from 'react';

// Project Imports
// import CommonLayout from '../layout/CommonLayout/index';
import MainLayout from '@/layout/MainLayout';
import './globals.css';
import WordForm from '@/_components/WordForm';
import Grid from '../../public/images/grid.jpg';
import SectionPaper from '@/_components/Sections/SectionPaper/SectionPaper';

// const logged = false;

// Types
type Word = {
    word: string;
    translation: string;
    id: number;
}


const InitialWords = [
    {
        word: 'Dictionary',
        translation: 'das Wörterbuch',
        id: 1

    },
    {
        word: 'Sock',
        translation: 'die Socke',
        id: 2
    },
    {
        word: 'Gauntlet',
        translation: 'die Stulpe',
        id: 3
    },
    {
        word: 'Boot',
        translation: 'der Stiefel',
        id: 4
    },
];

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode; }>) {
    const [form, setForm] = useState<boolean>(false);
    const [section, setSection] = useState<boolean>(true);
    const [words, dispatch] = useReducer(wordsReducer, InitialWords);

    function handleAddTask(word: Word) {
        dispatch({
            type: 'added',
            id: nextId++,
            word
        });
    }

    function handleChangeTask(word: Word) {
        dispatch({
            type: 'changed',
            word
        });
    }

    function handleDeleteTask(wordId:number) {
        dispatch({
            type: 'deleted',
            id: wordId,
        });
    }
    let nextId = 4;
    function wordsReducer(words: any, action: any) {
        switch (action.type) {
            case 'add':
                return [...words, {
                    word: action.payload.word,
                    translation: action.payload.translation,
                    id: nextId++
                }];
            case 'changed':
                return [...words, ]
            case 'deleted':
                return words.filter((word: Word) => word.id !== action.id);
            default:
                return words;
        }
    }



    return (
        <html lang='en'>
        <body className={'h-full bg-gradient-to-r from-[#DA4453] to-[#89216B]'}>
        <div className={'main h-4 w-4'}>
        </div>
        <MainLayout setForm={setForm} form={form} />
        <div className={'absolute bottom-0 right-0 h-[calc(100%-60px)] w-[100%]'}>
            {children}
            {form ? <WordForm form={form} setForm={setForm} /> : null}
            {section ? <SectionPaper setSection={setSection} /> : <button onClick={() => setSection(true)}> + </button>}

        </div>
        </body>
        </html>
    );
}