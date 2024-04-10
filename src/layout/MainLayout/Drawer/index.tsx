'use client'

import ExpandedDrawer from "./ExpandedDrawer"
import CollapsedDrawer from "./CollapsedDrawer" 

type DrawerProps = {
    expand: boolean,
}

function Drawer({expand}: DrawerProps){
    return expand ? (<ExpandedDrawer/>) : (<CollapsedDrawer/>)
}

export default Drawer