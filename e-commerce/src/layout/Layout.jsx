import React from 'react'
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import { Navbar, PromoBar } from '../components';


function Layout() {
  return (
    <div>
      <PromoBar />
      <Navbar />
      <main style={{ minHeight: "50vh" }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default Layout;