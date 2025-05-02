import React from 'react'
import { NavbarWrapper } from './Navbar.styles'
import Link from 'next/link'

const Navbar = () => {
    return (
        <NavbarWrapper>
            <div className="logo">
                MySchool
            </div>
            <nav className="menu">
                <Link href="/home">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/services">Services</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </NavbarWrapper>
    )
}

export default Navbar
