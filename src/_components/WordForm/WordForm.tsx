// Library Imports
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';

// Database
import db from '@/db/db';
import { WordType } from '@/types/WordTypes';

type Inputs = {
    word: string
    translation: string
    article: string
}
type WordFormProps = {
    form: boolean,
    setForm: React.Dispatch<React.SetStateAction<boolean>>
}


async function createWord({ word, translation, article }: Inputs) {
    console.log('word', word, 'translation', translation, 'article', article);
    const newWord = await db.word.create({
        data: {
            word: word,
            translation: translation,
            article: article,
        }
    });
    console.log('newWord', newWord);

    const words = await db.word.findMany(
        {
            select: {
                word: true
            }
        }
    );
    console.log('words', words);

}

// async function createWord({ word, translation, article }: Inputs): Promise<WordType> {
//     try {
//         const newWord = await db.word.create({
//             data: {
//                 word,
//                 translation,
//                 article,
//             },
//         });
//         return newWord;
//     } catch (error: unknown) {
//         if (error instanceof Error) {
//             throw new Error(`Error creating Word: ${error.message}`);
//         } else {
//             throw new Error(`Unknown error occurred: ${error}`);
//         }
//     }
// }
// async function createWorddd({ word, translation, article }: Inputs) {
//     const newWord = await db.word.create({
//         data: {
//             word:word,
//             translation:translation,
//             article:article
//         }
//
//     })
// if (newWord) {
//     console.log('New word created');
//     return newWord;
// }
// return console.log('Error creating word');
// }

export default function WordForm({ form, setForm }: WordFormProps) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();

    const onSubmit: SubmitHandler<Inputs> = async (data) => {
        await createWord(data);
        setForm(!form);

    };
    return (
        <div
            className={' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] z-60 h-[300px] flex flex-col justify-center items-center break-inside-avoid border border-gray-300 bg-white/20 backdrop-blur-lg backdrop-filter  bg-white rounded-3xl shadow-[10px_10px_30px_-10px_rgb(0,0,0,0.3)] '}>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={'flex flex-col items-center justify-between gap-4 w-full h-[90%]'}>
                <input placeholder={'word'} {...register('word', { required: 'word is required :(' })}
                       className={'word-form-input'} />
                <input placeholder={'translation'} {...register('translation', { required: 'word is required :(' })}
                       className={'word-form-input'} />
                {errors.translation && <span>This field is required</span>}
                <div className={'w-full flex flex-row justify-evenly'}>

                    <label htmlFor='field-wind' className={'flex items-center justify-between w-[15%] text-[#45A29E]'}>
                        <input
                            {...register('article')}
                            type='radio'
                            value='der'
                            id='field-wind'
                        />
                        der
                    </label>
                    <label htmlFor='field-wind' className={'flex items-center justify-between w-[15%] text-[#45A29E]'}>
                        <input
                            {...register('article')}
                            type='radio'
                            value='die'
                            id='field-wind'
                        />
                        die
                    </label>
                    <label htmlFor='field-wind' className={'flex items-center justify-between w-[15%] text-[#45A29E]'}>
                        <input
                            {...register('article')}
                            type='radio'
                            value='das'
                            id='field-wind'
                        />
                        das
                    </label>
                </div>
                <input type='submit' value={'Submit'}
                       className={'w-[80%] p-2 flex justify-center items-center border border-[#45A29E] rounded-3xl text-[#45A29E] '} />
            </form>
        </div>
    );
};