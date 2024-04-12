'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Mui Icons
import FirstPageIcon from '@mui/icons-material/FirstPage';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

// Types
type HeaderProps = {
    expand: boolean,
    setExpand: React.Dispatch<React.SetStateAction<boolean>>
}

function Header({ expand, setExpand }: HeaderProps) {
    return (
        <header
            className={` absolute top-0 right-0 px-4 flex justify-between items-center ${ expand?'w-[calc(100%-260px)]':"w-[calc(100%-60px)]"}  h-[60px] border-b-2 bg-[#ffffff]`}>
            <button className={`drawer-icon ${expand ? 'rotate-180' : ''}`} onClick={() => {
                console.log(expand);
                return setExpand(!expand);
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