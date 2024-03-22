import React from 'react';
import Link from 'next/link';

// Mui Icons
import FirstPageIcon from '@mui/icons-material/FirstPage';
import MenuBookIcon from '@mui/icons-material/MenuBook';

function Header() {
    return (
        <header className=' static top-0 right-0  flex justify-between items-center w-[100%] h-[60px] border-b-2 '>
            <div className={' flex items-center justify-center h-full w-10 ml-6 p-[10px]  cursor-pointer border-r-[1px] border-r-[#e5e7eb]'}>
                <img src={'https://cdn-icons-png.flaticon.com/128/3627/3627782.png'} alt={'😍'} />
            </div>
            <div>
                <FirstPageIcon/>
            </div>
            <div className='flex justify-between w-28 mr-6'>
                <div className={'drawer-icon'}>
                    <Link href='/'/>
                    <MenuBookIcon />
                </div>
                <span className={'flex items-center'}>
                    SWT User
                </span>
            </div>
        </header>
    );
}

export default Header;