import Link from "next/link"

type DrawerLinkProps={
    name: string,
    link:string,
    icon: React.ReactElement,
    pathname:string,
    rotate:boolean

}
function DrawerLink({name, link, icon, pathname, rotate}:DrawerLinkProps) {
    return (
        <Link href={link} className={'drawer-link'} key={name}>
            <div className={`${rotate ? `${pathname === link ? 'drawer-item active border-r-2 border-r-[#0b71ff] ' : 'drawer-item'}`:'drawer-icon'}`}>{icon} {rotate?<span className={'ml-2'}>{name}</span>:''}</div>
        </Link>
    )
}
export default DrawerLink