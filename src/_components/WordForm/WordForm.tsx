'use client';

// Library Imports
import { useForm } from 'react-hook-form';


// Actions
import { addWord, changeWord } from '@/app/_actions/word';
import React from 'react';


type WordFormProps = {
    setForm: React.Dispatch<React.SetStateAction<boolean>>
    word?: {
        id: string,
        word: string,
        translation: string,
        article: string | null
    } | null
}

const Articles = [
    {
        article: 'der',
    },
    {
        article: 'die',
    },
    {
        article: 'das',
    },
];

// @ts-ignore
export default function WordForm({ setForm, word }: WordFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<WordType>(
        {
            defaultValues: {
                word: word?.word,
                translation: word?.translation,
                article: word?.article,
            },
        }
    );
    const action: () => void = handleSubmit(async (data) => {
        setForm(false);
        if (word) {
            return changeWord(word.id ,data);
        }
        return addWord(data);
    });

    return (
        <div className={'w-[100%] h-[100%] fixed top-0 left-0'}>
            <div
                className={' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] z-60 h-[300px] flex flex-col justify-center items-center break-inside-avoid border border-gray-300 bg-white/20 backdrop-blur-lg backdrop-filter  bg-white rounded-3xl shadow-[10px_10px_30px_-10px_rgb(0,0,0,0.3)] '}>
                <form action={action}
                      className={'flex flex-col items-center justify-between gap-4 w-full h-[90%]'}>
                    <input
                        placeholder={'word'} {...register('word', {
                        required: 'word is required :(',
                    })}
                        className={'word-form-input'} />
                    <input
                        placeholder={'translation'} {...register('translation', {
                        required: 'word is required :(',
                    })}
                        className={'word-form-input'} />
                    {errors.translation && <span>This field is required</span>}
                    <div className={'w-full flex flex-row justify-evenly'}>
                        {
                            Articles.map((article) => (
                                <label key={article.article + Math.random()} htmlFor='field-wind'
                                       className={'flex items-center justify-between w-[15%] text-[#45A29E]'}>
                                    <input
                                        {...register('article')}
                                        type='radio'
                                        id='field-wind'
                                        value={article.article}
                                    />
                                    {article.article}
                                </label>
                            ))
                        }
                    </div>
                    <input type='submit' value={'Submit'}
                           className={'w-[80%] p-2 flex justify-center items-center border border-[#45A29E] rounded-3xl text-[#45A29E] '} />
                </form>
            </div>

        </div>

    );
};