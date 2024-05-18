// Library Imports
import { useForm, SubmitHandler } from 'react-hook-form';
import React from 'react';

type Inputs = {
    example: string
    exampleRequired: string
}
type WordFormProps = {
    form: boolean,
    setForm: React.Dispatch<React.SetStateAction<boolean>>
}

const Attributes = [
    {
        attribute: 'der',
    }, 
    {
        attribute: 'die',
    }, 
    {
        attribute: 'das',
    },
];

const WordForm = ({ form, setForm }: WordFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);
    return (
        <div
            className={' absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] z-60 h-[300px] flex flex-col justify-center items-center bg-gradient-to-r from-[#0b0c10] to-[#1f2833] rounded-3xl  '}>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={'flex flex-col items-center justify-between gap-4 w-full h-[90%]'}>
                <input placeholder={'word'} {...register('example', { required: 'word is required :(' })}
                       className={'word-form-input'} />
                <input placeholder={'translation'} {...register('exampleRequired', { required: 'word is required :(' })}
                       className={'word-form-input'} />
                {errors.exampleRequired && <span>This field is required</span>}
                <div className={'w-full flex flex-row justify-evenly'}>
                    {Attributes.map((attribute) => (
                        <label key={attribute.attribute} htmlFor={attribute.attribute}
                               className={'flex items-center justify-between w-[15%] text-[#45A29E]'}><input name={'radio'}
                                                                                                         type={'radio'}
                                                                                                         value={attribute.attribute} />{attribute.attribute}</label>
                    ))}
                </div>
                <input type='submit' value={'Submit'}
                       className={'w-[80%] p-2 flex justify-center items-center border border-[#45A29E] rounded-3xl text-[#45A29E] '} />
            </form>
        </div>
    );
};

export default WordForm;
  