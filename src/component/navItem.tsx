import Link from "next/link"

type Props = {
    href : string,
    label : string
}

const NavItem = ({ href, label} : Props) =>{
    return (
        <Link href={href} className="text-sm tex-gray-600 font-label font-bold px-4">
            {label}
        </Link>
    )
}

export default NavItem