import React from 'react'

// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import HomeIcon from '@mui/icons-material/Home';

// Internal Imports
import DrawerItem from './DrawerItem'

type DrawerContentProps= {
    pathname:string,
    rotate:boolean
}
const content= [
    {
        name: 'Home',
        linkEnd:'/',
        icon:<HomeIcon className={'w-[20px] mr-2'}/>
    },
    {
        name: 'Dictionary',
        linkEnd:'/dictionary',
        icon:<MenuBookIcon className={'w-[20px] mr-2'}/>
    },
    {
        name: 'Favorite',
        linkEnd:'/favorite',
        icon:<StarBorderIcon className={'w-[20px] mr-2'}/>
    },
    {
        name: 'About',
        linkEnd:'/about',
        icon:<ReplyIcon className={'w-[20px] mr-2'}/>
    },
    
    
]

function DrawerContent({pathname,rotate}:DrawerContentProps) {
    return content.map((item)=> (
        <DrawerItem key={item.name} name={item.name} linkEnd={item.linkEnd} icon={item.icon} pathname={pathname} rotate={rotate} />
    ))
}


export default DrawerContent