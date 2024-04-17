'use client';
import React from 'react';
import Link from 'next/link';
import {usePathname}  from 'next/navigation';

// Mui Icons
import FirstPageIcon from '@mui/icons-material/FirstPage';


// Project Imports
import ButtonComponent from './HeaderContent/ButtonComponent'
import HeaderContent from './HeaderContent/HeaderContent'
// Types
type HeaderProps = {
    rotate: boolean,
    setRotate: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ rotate, setRotate }: HeaderProps) {
    const pathname = usePathname()
        return (
        <header className={` absolute top-0 right-0 px-4 flex justify-between items-center ${ rotate ? 'w-[calc(100%-260px)]':"w-[calc(100%-60px)]"}  h-[60px] border-b-2 bg-[#ffffff] transition-all duration-200 ease-in`}>
            <ButtonComponent rotate={rotate} setRotate={setRotate} icon={<FirstPageIcon className={'expand-icon'}/>} />
            <div className='relative flex justify-between w-[160px] mr-6'>
            
                <HeaderContent rotate={rotate} pathname={pathname} />
                <span className={'flex items-center'}>
                    SWT User
                </span>
            </div>
        </header>
    );
}

export default Header;