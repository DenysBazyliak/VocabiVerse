// Library Imports
import React from 'react';
// import { useState } from 'react';

// Project Imports
import Drawer from './Drawer'
import Header from './Header/Header'
import Footer from './Footer'

type MainLayoutProps = {
    setForm: React.Dispatch<React.SetStateAction<boolean>>
    form: boolean
}


function MainLayout({setForm, form}:MainLayoutProps) {
    // const [rotate, setRotate] = useState<boolean>(false)
    return (
        <>
            {/* <Drawer rotate={rotate}/> */}
            <Header />
            <Footer setForm={setForm} form={form}/>
        </>
    )
}

export default MainLayout