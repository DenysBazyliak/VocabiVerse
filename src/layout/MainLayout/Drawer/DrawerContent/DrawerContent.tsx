import React from 'react'

// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import ReplyIcon from '@mui/icons-material/Reply';
import HomeIcon from '@mui/icons-material/Home';

// Internal Imports
import DrawerLink from '../../../../_components/DrawerLink'

type DrawerContentProps= {
    pathname:string,
    rotate:boolean
}
const content= [
    {
        name: 'Home',
        link:'/',
        icon:<HomeIcon className={'w-[20px]'}/>
    },
    {
        name: 'Dictionary',
        link:'/dictionary',
        icon:<MenuBookIcon className={'w-[20px]'}/>
    },
    {
        name: 'Favorite',
        link:'/favorite',
        icon:<StarBorderIcon className={'w-[20px]'}/>
    },
    {
        name: 'About',
        link:'/about',
        icon:<ReplyIcon className={'w-[20px]'}/>
    },
    
    
]

function DrawerContent({pathname,rotate}:DrawerContentProps) {
    return content.map((item)=> (
        <DrawerLink key={item.name} name={item.name} link={item.link} icon={item.icon} pathname={pathname} rotate={rotate} />
    ))
}


export default DrawerContent