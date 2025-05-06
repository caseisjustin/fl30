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
                <Link href="/login">Log In</Link>
                <Link href="/register">Sign Up</Link>
            </nav>
        </NavbarWrapper>
    )
}

export default Navbar
