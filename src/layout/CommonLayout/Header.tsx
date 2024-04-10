'use client'
// Library Imports
import React from 'react';
import { useRouter } from 'next/navigation';

// Mui Icons


// Types


function Header() {
    const router = useRouter()
    return (
        <header
            className='absolute top-0 px-4 flex justify-between items-center w-[100%] h-[60px] border-b-2 bg-[#121212]'>
            <div>Icon </div>
            <button type='button' className='py-2 px-4  rounded-lg text-white bg-[#505ae3]' onClick={()=> router.push('/main')}>
                Try now
            </button>
        </header>
    );
}

export default Header;