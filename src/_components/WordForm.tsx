// Library Imports
import { useForm, SubmitHandler } from 'react-hook-form';
import React, { useContext } from 'react';
import { WordsDispatchContext } from '@/contexts/WordsContext';

type Inputs = {
    word: string
    translation: string
    article: string
}
type WordFormProps = {
    form: boolean,
    setForm: React.Dispatch<React.SetStateAction<boolean>>
}

let nextId = 5;
const WordForm = ({ form, setForm }: WordFormProps) => {
    const dispatch = useContext(WordsDispatchContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        dispatch({
            type: 'added',
            id: nextId++,
            word: data,
        })
        setForm(!form);
    };
    return (
        <div
            className={' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] z-60 h-[300px] flex flex-col justify-center items-center bg-gradient-to-r from-[#0b0c10] to-[#1f2833] rounded-3xl  '}>
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

export default WordForm;