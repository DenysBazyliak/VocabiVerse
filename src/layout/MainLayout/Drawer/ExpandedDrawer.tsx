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
type ExpandedDrawerProps = {
    rotate: boolean,
}

function ExpandedDrawer({rotate}:ExpandedDrawerProps) {
    const pathname = usePathname()
    return (
        <nav className={`fixed top-0 left-0 h-screen ${rotate ? 'w-[260px]': 'w-[60px]'} mr-[60px] flex flex-col bg-white gap-y-2 border-r-[1px] transition-all duration-300 ease-linear`}>
            <div className={'relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto cursor-pointer'}>
                <Image src={Dictionary} width={300} height={300} alt={'dictionary'} />
            </div>
            <div className={`flex flex-col justify-space-around items-center h-[calc(100vh-200px)]`}>
                <DrawerContent pathname={pathname} rotate={rotate}/>
            </div> 
            <Link href='/dictionary' className={'drawer-item'}>
                    <div><ExitToAppIcon /></div>
                    <span>Exit</span>
                </Link>
        </nav>
    );
}


export default ExpandedDrawer;