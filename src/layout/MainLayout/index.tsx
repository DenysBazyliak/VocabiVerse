'use client'
// Project Imports
import Drawer from './Drawer/ExpandedDrawer'
import Header from './Header'
import { useState } from 'react';

function MainLayout(){
    const [rotate, setRotate] = useState<boolean>(false)
    return (
        <>
            <Drawer rotate={rotate}/>
            <Header rotate={rotate} setRotate={setRotate}/>
        </>
    )
}

export default MainLayout