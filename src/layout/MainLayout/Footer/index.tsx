'use client';

import React from 'react';
import { useState } from 'react';
import WordForm from '@/_components/WordForm';
 type FooterProps = {
     setForm: React.Dispatch<React.SetStateAction<boolean>>,
     form: boolean
 }

function Footer({setForm, form}:FooterProps) {

    console.log(form);
    return (
        <footer className={'absolute z-30 bottom-0 flex justify-center items-center h-[60px] w-full border-t-2 '}>
            <button className={' w-[100px] m-3 h-8 rounded-3xl text-[#0B0C10] bg-[#C5C6C7] '}
                    onClick={() => setForm(!form)}>Add Word
            </button>
        </footer>
    );
}

export default Footer;