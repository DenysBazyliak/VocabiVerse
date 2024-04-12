import React from 'react'
import Link from 'next/link';

// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';

type DrawerContentProps= {
    pathname:string
}
const content= [
    {
        name: 'Home',
        pathname:'/home',
        icon:<MenuBookIcon className={'w-[20px] mr-2'}/>
    },
    {
        name: 'Favorite',
        pathname:'/favorite',
        icon:<StarBorderIcon className={'w-[20px] mr-2'}/>
    },
    {
        name: 'About',
        pathname:'/about',
        icon:<ReplyIcon className={'w-[20px] mr-2'}/>
    }
]

function DrawerContent({pathname}:DrawerContentProps) {
    return content.map((item)=> (
        <Link href={item.pathname} className={'drawer-link'} key={item.name}>
            <div className={`${pathname === item.pathname ? 'drawer-item active border-r-2 border-r-[#0b71ff] ' : 'drawer-item'}`}>{item.icon} <span>{item.name}</span></div>
                </Link>
    ))
}

export default DrawerContent