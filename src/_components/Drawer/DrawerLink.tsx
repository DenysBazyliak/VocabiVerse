import Link from "next/link"
import React from 'react';

type DrawerLinkProps={
    name: string,
    link:string,
    icon: React.ReactElement,
    pathname:string

}
function DrawerLink({name, link, icon, pathname}:DrawerLinkProps) {
    return (
        <Link href={link} className={'drawer-link'} key={name}>
            <div className={`${pathname === link ? 'drawer-item active ' : 'drawer-item'}`}>{icon} {<span className={'ml-2'}>{name}</span>}</div>
        </Link>
    )
}
export default DrawerLink