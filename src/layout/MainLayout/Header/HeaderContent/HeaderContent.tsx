import React from 'react'

// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import SettingsIcon from '@mui/icons-material/Settings';

// Internal Imports
import HeaderLink from '../../../../_components/HeaderLink'

type HeaderContentProps= {
    pathname:string
}
const content= [
    {
        name: 'Settings',
        link:'/settings',
        icon:<SettingsIcon className={'w-[20px]'}/>
    },
    {
        name: 'Dictionary',
        link:'/dictionary',
        icon:<MenuBookIcon className={'w-[20px]'}/>
    }
]

function HeaderContent({pathname}:HeaderContentProps) {
    return content.map((item)=> (
        <HeaderLink key={item.link} link={item.link} icon={item.icon} pathname={pathname}/>
    ))
}


export default HeaderContent