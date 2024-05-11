import NavItem from "./navItem"

const Nav = () => {
    return (
        <nav className="flex items-center gap-5">
            <NavItem href="/" label="Beranda"/>
            <NavItem href="/kontak" label="Kontak"/>
            <NavItem href="/paket" label="Paket"/>
            <NavItem href="/testimonial" label="Testimonial"/>
        </nav>
    )
}

export default Nav