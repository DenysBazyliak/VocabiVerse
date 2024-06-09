import React from 'react';

// Mui Icons
import MenuBookIcon from '@mui/icons-material/MenuBook';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import SettingsIcon from '@mui/icons-material/Settings';
import HomeIcon from '@mui/icons-material/Home';

// Internal Imports
import DrawerLink from './DrawerLink';

type DrawerContentProps = {
    pathname: string
}
const content = [
    {
        name: 'Dictionary',
        link: '/dictionary',
        icon: <MenuBookIcon className={'w-[20px]'} />,
    },
    {
        name: 'Home',
        link: '/',
        icon: <HomeIcon className={'w-[20px]'} />,
    },
    {
        name: 'Favorite',
        link:'/favorite',
        icon:<StarBorderIcon className={'w-[20px]'}/>
    },
    {
        name: 'Settings',
        link: '/settings',
        icon: <SettingsIcon className={'w-[20px]'} />,
    },


];

function DrawerContent({ pathname }: DrawerContentProps) {
    return content.map((item) => (
        <DrawerLink key={item.name} name={item.name} link={item.link} icon={item.icon} pathname={pathname} />
    ));
}


export default DrawerContent;