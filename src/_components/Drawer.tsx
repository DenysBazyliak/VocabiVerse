// Libraries
import React from 'react';
import Link from 'next/link';

// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

// Internal Imports


function Drawer() {
    return (
        <nav className='fixed top-0 left-0 h-screen w-[60px] mr-[60px] flex flex-col bg-white gap-y-2 border-r-[1px]'>
            <div className={'flex flex-col justify-space-around items-center h-[calc(100vh-200px)]'}>
                <div className={'drawer-icon'}>
                    <Link href='/'/>
                    <MenuBookIcon />
                </div>
                <div className={'drawer-icon'}>
                    <StarBorderIcon />
                </div>
                <div className={'drawer-icon'}>
                    <ReplyIcon />
                </div>
            </div>
            <div className={'drawer-icon'}>
                <ExitToAppIcon />
            </div>
        </nav>
    );
}


export default Drawer;