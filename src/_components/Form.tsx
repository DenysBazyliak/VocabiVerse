'use client';

import { useForm, SubmitHandler } from 'react-hook-form';

type Inputs = {
    name: string,
    email: string
}

export default function Form() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue={''} {...register('name', { required: true })} />
            <input defaultValue={'example@mail.com'} {...register('email', { required: true })} />
            {errors.name && errors.email && <span> This field is required</span>}

            <input type='submit' />
        </form>
    );
}