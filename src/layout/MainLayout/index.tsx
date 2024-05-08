'use client'

// Libraries
// import { useState } from 'react';

// Project Imports
import Drawer from './Drawer'
import Header from './Header/Header'
import Footer from './Footer'



function MainLayout(){
    // const [rotate, setRotate] = useState<boolean>(false)
    return (
        <>
            {/* <Drawer rotate={rotate}/> */}
            <Header />
            <Footer/>  
        </>
    )
}

export default MainLayout