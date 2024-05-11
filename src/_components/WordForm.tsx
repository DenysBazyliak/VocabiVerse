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
            <form onSubmit={handleSubmit(onSubmit)}>
                <input defaultValue='test' {...register('example')} />
                <input {...register('exampleRequired', { required: true })} />
                {errors.exampleRequired && <span>This field is required</span>}
                <input type='submit' className={''} />
            </form>
        </div>
    );
};

export default WordForm;
  