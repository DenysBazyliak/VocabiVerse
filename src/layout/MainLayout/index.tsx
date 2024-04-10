'use client'
// Project Imports
import Drawer from './Drawer/index'
import Header from './Header'
import { useState } from 'react';

function MainLayout(){
    const [expand, setExpand] = useState<boolean>(false)
    return (
        <>
            <Drawer expand={expand}/>
            <Header expand={expand} setExpand={setExpand}/>
        </>
    )
}

export default MainLayout