'use client';

import React, { useEffect } from 'react';
import { cn } from '@/utilities/Merge';
import { deleteWord } from '@/app/_actions/word';
import DeleteIcon from '@mui/icons-material/Delete';

type WordPaperProps = {
    word: string,
    translation: string,
    id: string,
    article: string | null
};

export default function WordPaper({ word, translation, id, article }: WordPaperProps) {
    const [showDeleteTag, setShowDeleteTag] = React.useState<boolean>(false);
    // const [showEdit, setShowEdit] = React.useState<boolean>(false);
    const [deleteThisWord, setDeleteThisWord] = React.useState<string>('');

    useEffect(() => {
        (async () => {
            await deleteWord(deleteThisWord)
        })()
    }, [deleteThisWord])
    // useEffect(() => {
    //     (async () => {
    //         await changeWord
    //     })()
    // }, [deleteThisWord])

    return (
        <div

            // onClick={()=>{
            //     setShowChange(true)
            // }}
            onDoubleClick={() => {
                setShowDeleteTag(true);
            }}
            className={' relative mr-6 my-4 px-6 py-4 w-[300px] h-[100px]' +
                ' bg-white/20 bg-white shadow-[10px_10px_30px_-10px_rgb(0,0,0,0.3)] rounded-3xl ' +
                'flex flex-col items-center justify-center text-[#c5c6c7] border border-gray-300  transition-all duration-300 ease-in-out group hover:scale-105 cursor-pointer'}>
            <div className={'flex items-center justify-center w-full'}>


                <span>{word}</span>
            </div>
            <div
                onClick={()=>setDeleteThisWord(id)}
                className={cn('absolute bg-white flex flex-row items-center justify-evenly border border-gray-300 w-[50px] h-8 p-2 m-2 min-w-max right-[-35px] top-[-50px] z-50 rounded-md shadow-md transition-all ', showDeleteTag ? 'scale-100 duration-300 ease-in-out' : 'scale-0 duration-300 ease-in-out')}>
                {showDeleteTag ? (
                    <DeleteIcon className={'w-5 h-5 text-red-400'} />
                ) : null}
            </div>
            <span
                className={'truncate'}> {article} {translation.charAt(0).toUpperCase() + translation.slice(1)}</span>
        </div>
    );
}