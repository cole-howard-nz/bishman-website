import React from 'react'
import DesktopNavbar from './desktop-navbar'
import MobileNavbarWrapper from './mobile-navbar-wrapper'

const Navbar = () => {
  return (
    <>
      <div className="hidden [@media(min-width:1111px)]:block">
        <DesktopNavbar />
      </div>
      <div className="block [@media(min-width:1111px)]:hidden">
        <MobileNavbarWrapper />
      </div>
    </>
  )
}

export default Navbar
