'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {usePathname}  from 'next/navigation';

// Mui Icons
import FirstPageIcon from '@mui/icons-material/FirstPage';


// Project Imports
import ButtonComponent from './HeaderContent/ButtonComponent'
import HeaderContent from './HeaderContent/HeaderContent'
import Dictionary from '../../../../public/images/book.png'

// Types
// type HeaderProps = {
//     rotate: boolean,
//     setRotate: React.Dispatch<React.SetStateAction<boolean>>
// }

function Header() {
    const pathname = usePathname()
        return (
        <header className={`z-10 absolute top-0 right-0 px-4 flex justify-end items-center w-[100%] h-[60px]  bg-[#0B0C10] transition-all duration-200 ease-in`}>
            {/* <ButtonComponent rotate={rotate} setRotate={setRotate} icon={<FirstPageIcon className={'expand-icon'}/>} /> */}
            <div className='relative flex justify-end w-[160px] mr-6'>
            
                <HeaderContent pathname={pathname} />
                <span className={' w-36 flex items-center justify-center  text-[#66FCF1] '}>
                    User
                </span>
            </div>
        </header>
    );
}

export default Header;