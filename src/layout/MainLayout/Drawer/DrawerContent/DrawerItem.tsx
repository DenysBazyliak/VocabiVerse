import Link from "next/link"

type DrawerItemProps={
    name: string,
    linkEnd:string,
    icon: React.ReactElement,
    pathname:string,
    rotate:boolean

}
function DrawerItem({name, linkEnd, icon, pathname, rotate}:DrawerItemProps) {
    return (
        <Link href={pathname} className={'drawer-link'} key={name}>
            <div className={`${pathname === linkEnd ? 'drawer-item active border-r-2 border-r-[#0b71ff] ' : 'drawer-item'}`}>{icon} {rotate?<span>{name}</span>:''}</div>
                </Link>
    )
}
export default DrawerItem