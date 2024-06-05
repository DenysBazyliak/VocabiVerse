'use client';

import { useContext } from 'react';
import { WordsContext } from '@/contexts/WordsContext';
import { WordType } from '@/types/WordTypes';

const ButtonsArray = [
    {
        name: 'English',
    },
    {
        name: 'Deutsch',
    },
];
const Words = () => {
    const words: WordType[] = useContext(WordsContext);
    return words.map((word) => {
        return (
            <div key={word.id}
                 className={' mr-6 my-4 px-6 py-4 w-[260px] h-[100px] rounded-md flex flex-col items-center justify-center bg-[#0b0c10] text-[#c5c6c7] border border-[#45A29E] transition-all duration-300 ease-in-out hover:translate-y-1 hover:scale-110'}>
                <span>{word.word}</span>
                <span
                    className={'truncate'}> {word.article} {word.translation.charAt(0).toUpperCase() + word.translation.slice(1)}</span>
            </div>
        );
    });
};

const Buttons = () => {
    return ButtonsArray.map((button) => {
        return (
            <button key={button.name}
                    className={' border-b-[1.3px] border-[#45A29E] text-[#66FCF1] pr-2'}>{button.name} </button>
        );
    });
};
export default function Dictionary() {
    return (
        <main className={'w-[calc(100vw-260px)] fixed right-0 '}>
            <p className={'mt-12 ml-16 text-[#66FCF1] text-5xl'}>DICTIONARY</p>
            <div className={'flex flex-row mt-4'}>
                <span className={'pl-2 border-b-[1.3px] w-[67px] border-[#45A29E] pb-1'}></span>
                <Buttons />
                <button className={' border-b-[1.3px] border-[#45A29E] text-[#66FCF1] pr-1'}>+</button>
            </div>
            <div className={'flex flex-row px-[67px] flex-wrap'}>
                <Words />
            </div>
        </main>
    );
}
