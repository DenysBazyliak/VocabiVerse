import db from '@/db/db';
import React from 'react';


export default function Dictionary() {
    return (
        <main className={'w-[calc(100vw-260px)] fixed right-0 '}>
            <p className={'mt-12 ml-16 bg-gradient-to-r from-[#2266e7] to-[#0a8bb7] inline-block bg-clip-text text-transparent text-[60px]'}>DICTIONARY</p>
            <div className={'flex flex-row px-[67px] flex-wrap'}>
                <Words />
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
            article: true
        }
    });
}

 async function Words  (){
    const words = await getAllWords()
    return words.map((word) => {
        return (
            <div key={word.id}
                 className={' mr-6 my-4 px-6 py-4 w-[300px] h-[100px]' +
                     ' break-inside-avoid bg-white/20 backdrop-blur-lg backdrop-filter ' +
                     ' bg-white shadow-[10px_10px_30px_-10px_rgb(0,0,0,0.3)] rounded-3xl ' +
                     'flex flex-col items-center justify-center text-[#c5c6c7] border border-gray-300  transition-all duration-300 ease-in-out hover:translate-y-1 hover:scale-105'}>
                <span>{word.word}</span>
                <span
                    className={'truncate'}> {word.article} {word.translation.charAt(0).toUpperCase() + word.translation.slice(1)}</span>
            </div>
        );
    });
}
