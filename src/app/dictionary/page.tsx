import db from '@/db/db';
import React from 'react';


// Project Imports
import WordPaper from '@/_components/WordPaper/WordPaper';




export default async function Dictionary() {

    const words = await getAllWords();
    return (
        <main className={'w-[calc(100vw-260px)] fixed right-0 '}>
            <p className={'mt-12 ml-16 bg-gradient-to-r from-[#2266e7] to-[#0a8bb7] inline-block bg-clip-text text-transparent text-[60px]'}>DICTIONARY</p>
            <div className={'flex flex-row px-[67px] flex-wrap'}>
                { words.map((word) => (
                    <WordPaper word={word.word} translation={word.translation} id={word.id} article={word.article} key={word.id} />
                ))}
            </div>
        </main>
    );
}

export async function getAllWords() {
    return db.word.findMany({
        select: {
            word: true,
            translation: true,
            id: true,
            article: true,
        },
    });
}



