'use client';
import React, { useState } from 'react';
import Link from 'next/link';

// Mui Icons
import FirstPageIcon from '@mui/icons-material/FirstPage';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

// Types


function Header() {
    const [expand, setExpander] = useState<boolean>(false);
    return (
        <header
            className=' absolute top-0 right-0 px-4 flex justify-between items-center w-[calc(100%-60px)] h-[60px] border-b-2 bg-[#ffffff] '>
            <div className={`expand-icon ${expand ? 'rotate-180' : ''}`} onClick={() => setExpander(!expand)}>
                <FirstPageIcon />
            </div>
            <div className='relative flex justify-between w-[160px] mr-6'>
                <div className={'drawer-icon'}>
                    <Link href='/' />
                    <MenuBookIcon />
                </div>
                <div className={'drawer-icon'}>
                    <Link href='/' />
                    <SettingsIcon />
                </div>
                <span className={'flex items-center'}>
                    SWT User
                </span>
            </div>
        </header>
    );
}

export default Header;