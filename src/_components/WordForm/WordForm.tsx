'use client'

// Library Imports
import { useForm } from 'react-hook-form';


// Actions
import { addWord } from '@/app/_actions/word';
import React from 'react';


type WordFormProps = {
    form: boolean
    setForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Articles = [
    {
        article:'der'
    },
    {
        article:'die'
    },
    {
        article:'das'
    }
]

export default function WordForm({form, setForm}: WordFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<WordType>();
    const action: () => void = handleSubmit(async (data) => {
        const response = await addWord(data);
         setForm(!form)
        console.log(response);
    });

    return (
        <div
            className={' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] z-60 h-[300px] flex flex-col justify-center items-center break-inside-avoid border border-gray-300 bg-white/20 backdrop-blur-lg backdrop-filter  bg-white rounded-3xl shadow-[10px_10px_30px_-10px_rgb(0,0,0,0.3)] '}>
            <form action={action}
                  className={'flex flex-col items-center justify-between gap-4 w-full h-[90%]'}>
                <input placeholder={'word'} {...register('word', { required: 'word is required :(' })}
                       className={'word-form-input'} />
                <input placeholder={'translation'} {...register('translation', { required: 'word is required :(' })}
                       className={'word-form-input'} />
                {errors.translation && <span>This field is required</span>}
                <div className={'w-full flex flex-row justify-evenly'}>
                    {
                        Articles.map((article) => (
                            <label key={article.article} htmlFor='field-wind' className={'flex items-center justify-between w-[15%] text-[#45A29E]'}>
                                <input
                                    {...register('article')}
                                    type='radio'
                                    value={article.article}
                                    id='field-wind'
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
    );
};