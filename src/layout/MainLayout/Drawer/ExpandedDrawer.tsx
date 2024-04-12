"use client"
// Libraries
import React from 'react';
import Link from 'next/link';
import Image from 'next/image'


// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// Internal Imports
import Dictionary from '../../../../public/images/book.png'

// Types
// type ExpandedDrawerProps = {
//     expand: boolean,
// }

function ExpandedDrawer() {
    return (
        <nav className={`fixed top-0 left-0 h-screen w-[200px] mr-[60px] flex flex-col bg-white gap-y-2 border-r-[1px] `}>
            <div className={'relative flex items-center justify-center h-12 w-12 mt-2 mb-2 mx-auto cursor-pointer'}>
                <Image src={Dictionary} width={300} height={300} alt={'dictionary'} />
            </div>
            <div className={`flex flex-col justify-space-around items-center h-[calc(100vh-200px)]`}>

                <Link href='/dictionary' className={'drawer-button border-r-4 border-blue-500'}>
                    <div><MenuBookIcon /></div>
                    <span>Home</span>
                </Link>
                <Link href='/dictionary' className={'drawer-button'}>
                    <div><StarBorderIcon /></div>
                    <span>Favorite</span>
                </Link>
                <Link href='/dictionary' className={'drawer-button'}>
                    <div><ReplyIcon /></div>
                    <span>About</span>
                </Link>
            </div> 
            <Link href='/dictionary' className={'drawer-button'}>
                    <div><ExitToAppIcon /></div>
                    <span>Exit</span>
                </Link>
        </nav>
    );
}


export default ExpandedDrawer;