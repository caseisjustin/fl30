import React from 'react'
import Link from 'next/link'
import { SidebarWrapper } from './Sidebar.styles'

const Sidebar = () => {
    return (
        <SidebarWrapper>
            <nav>
                <ul>
                    <li>
                        <Link href="/students">
                            <b>Students</b>
                        </Link>
                    </li>
                    <li>
                        <Link href="/teachers">
                            <b>Teachers</b>
                        </Link>
                    </li>
                    <li>
                        <Link href="/school-info">
                            <b>School Info</b>
                        </Link>
                    </li>
                    <li>
                        <Link href="/classes">
                            <b>Classes</b>
                        </Link>
                    </li>
                </ul>
            </nav>
        </SidebarWrapper>
    )
}

export default Sidebar
