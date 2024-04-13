'use client'

import ExpandedDrawer from "./ExpandedDrawer"
import CollapsedDrawer from "./CollapsedDrawer" 

type DrawerProps = {
    rotate: boolean,
}

function Drawer({rotate}: DrawerProps){
    return (
        <div className="transition-all duration-300 ease-linear ">{rotate ? (<ExpandedDrawer rotate={rotate}/>) : (<CollapsedDrawer/>)}</div>
)
}

export default Drawer