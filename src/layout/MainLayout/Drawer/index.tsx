"use client"
// Libraries
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'
import {usePathname}  from 'next/navigation';



// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// Internal Imports
import Dictionary from '../../../../public/images/book.png'
import DrawerContent from './DrawerContent/DrawerContent'

// Types
type DrawerProps = {
    rotate: boolean,
}

function Drawer({rotate}:DrawerProps) {
    const pathname = usePathname()
    return (
        <nav className={`fixed top-0 left-0 h-screen ${rotate ? 'w-[260px]': 'w-[60px]'} mr-[60px] flex flex-col bg-white gap-y-2 border-r-[1px] transition-all duration-200 ease-in`}>
            <div className={'relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto cursor-pointer'}>
                <Image src={Dictionary} width={300} height={300} alt={'dictionary'} /> {rotate ? (<span>VocabiVerse</span>):""}
            </div>
            <div className={`flex flex-col justify-space-around items-center h-[calc(100vh-200px)]`}>
                <DrawerContent pathname={pathname} rotate={rotate}/>
            </div> 
            <Link href='/exit' className={'drawer-link'}>
                    <div className={`${rotate?'drawer-item':'drawer-icon'}`}><ExitToAppIcon className={'w-[20px]'} /> {rotate?<span className='ml-2'>Exit</span>:''}</div>                    
                </Link>
        </nav>
    );
}


export default Drawer;