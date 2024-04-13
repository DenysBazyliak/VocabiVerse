'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Mui Icons
import FirstPageIcon from '@mui/icons-material/FirstPage';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

// Types
type HeaderProps = {
    rotate: boolean,
    setRotate: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ rotate, setRotate }: HeaderProps) {
    return (
        <header
            className={` absolute top-0 right-0 px-4 flex justify-between items-center ${ rotate ? 'w-[calc(100%-260px)]':"w-[calc(100%-60px)]"}  h-[60px] border-b-2 bg-[#ffffff] transition-all duration-300 ease-linear`}>
            <button className={`drawer-icon ${rotate ? '' : 'rotate-180'}`} onClick={() => {
                console.log(rotate);
                return setRotate(!rotate);
            }}>

                <FirstPageIcon />
            </button>
            <div className='relative flex justify-between w-[160px] mr-6'>

                <Link href={'/log-in'}>
                    <div className={'drawer-icon'}><MenuBookIcon /></div>
                </Link>
                <Link href={'/settings'}>
                    <div className={'drawer-icon'}><SettingsIcon /></div>
                </Link>
                <span className={'flex items-center'}>
                    SWT User
                </span>
            </div>
        </header>
    );
}

export default Header;