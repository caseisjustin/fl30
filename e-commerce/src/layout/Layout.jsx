import React from 'react'
import Header from './Header/Header';
import { Outlet } from 'react-router';
import Footer from './Footer/Footer';
import { Navbar, PromoBar } from '../components';


function Layout() {
  return (
    <div>
      <PromoBar />
      <Navbar />
        <Header/>
        <main style={{ minHeight: "50vh" }}>
            <Outlet />
        </main>
        <Footer />
    </div>
  )
}

export default Layout;