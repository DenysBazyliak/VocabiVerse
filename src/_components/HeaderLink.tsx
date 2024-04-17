import Link from "next/link"

type HeaderLinkProps={
    link:string,
    icon: React.ReactElement,
    pathname:string,

}
function HeaderLink({ link, icon, pathname}:HeaderLinkProps) {
    return (
        <Link href={pathname} className={'drawer-link'} key={link}>
            <div className={'header-icon'}>{icon}</div>
        </Link>
    )
}
export default HeaderLink