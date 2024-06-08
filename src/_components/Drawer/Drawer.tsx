'use client';

// Libraries
import React, { useState } from 'react';

// Project Imports
import DrawerContent from '@/_components/Drawer/DrawerContent';
import { usePathname } from 'next/navigation';

// Types
// type SectionGroupProps = {
//     setSection: React.Dispatch<React.SetStateAction<boolean>>
// }

const Drawer = () => {
    const [contracted, setContracted] = useState<boolean>(true);
    const pathname = usePathname();
    return (
        <>
            <div
                onMouseOver={() => setContracted(false)}
                onMouseLeave={() => setContracted(true)}
                className=
                    {`fixed left-0 top-0 my-20 px-4 py-4 w-[260px] h-[75%] break-inside-avoid border border-gray-300 bg-white/20 
                        backdrop-blur-lg backdrop-filter  bg-white rounded-3xl 
                        shadow-[10px_10px_30px_-10px_rgb(0,0,0,0.3)]
                        transition-all duration-300 ease-in-out
                        ${contracted ? 'left-[-238px]' : 'left-0'}
                        ${contracted ? 'opacity-0' : 'opacity-1'}
                        `}>
                <DrawerContent pathname={pathname} />
            </div>

        </>

    );
};

export default Drawer;