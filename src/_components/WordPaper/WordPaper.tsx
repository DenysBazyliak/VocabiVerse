'use client';

import React, { useEffect } from 'react';
import { cn } from '@/utilities/Merge';
import { deleteWord } from '@/app/_actions/word';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import WordForm from '@/_components/WordForm/WordForm';

type WordPaperProps = {
    word: string,
    translation: string,
    id: string,
    article: string | null
};

export default function WordPaper({ word, translation, id, article }: WordPaperProps) {
    const [showTag, setShowTag] = React.useState<boolean>(false);
    const [editThisWord, setEditThisWord] = React.useState<boolean>(false);
    const [deleteThisWord, setDeleteThisWord] = React.useState<string>('');

    useEffect(() => {
        (async () => {
            await deleteWord(deleteThisWord);
        })();
    }, [deleteThisWord]);

    return (
        <>
            <div
                onClick={() => {
                    setShowTag(!showTag);
                }}
                className={' relative mr-6 my-4 px-6 py-4 w-[300px] h-[100px]' +
                    ' bg-white/20 bg-white shadow-[10px_10px_30px_-10px_rgb(0,0,0,0.3)] rounded-3xl ' +
                    'flex flex-col items-center justify-center text-[#c5c6c7] border border-gray-300  transition-all duration-300 ease-in-out group hover:scale-105 cursor-pointer'}>
                <div className={'flex items-center justify-center w-fit'}>
                    <span>{word.charAt(0).toUpperCase() + word.slice(1)}</span>
                </div>
                <div
                    className={cn('absolute bg-white flex flex-row items-center justify-between border border-gray-300 w-[80px] h-8 p-1 m-2 min-w-max right-[-35px] top-[-50px] z-50 rounded-md shadow-md transition-all ', showTag ? 'scale-100 duration-300 ease-in-out' : 'scale-0 duration-300 ease-in-out')}>
                    {showTag ? (
                        <>
                            <div
                                className={'flex items-center justify-center w-[44%] rounded-md text-red-400 hover:bg-gray-100  transition-all duration-200'}>
                                <EditIcon onClick={() => setEditThisWord(true)}
                                          className={'w-[22px] h-[22px] text-blue-400'} />
                            </div>
                            <div className={'w-0 h-full border-[1px] border-gray-300 '} />
                            <div
                                className={'flex items-center justify-center w-[44%] rounded-md text-red-400 hover:bg-gray-100  transition-all duration-200'}>
                                <DeleteIcon onClick={() => setDeleteThisWord(id)}
                                            className={'w-[22px] h-[22px] text-red-500'} />
                            </div>
                        </>
                    ) : null}
                </div>
                <div className={'flex items-center justify-center w-fit'}>
                    <div
                        className={'truncate'}>{article} {translation.charAt(0).toUpperCase() + translation.slice(1)}</div>
                </div>
            </div>
            {editThisWord ? <WordForm setForm={setEditThisWord} word={{ word, translation, article,id }} /> : null}
        </>

    );
}