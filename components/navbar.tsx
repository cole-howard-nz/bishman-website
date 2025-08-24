import React from 'react'
import MobileNavbarWrapper from './mobile-navbar-wrapper'
import DesktopNavbarWrapper from './desktop-navbar-wrapper'

const Navbar = () => {
  return (
    <>
      <div className="hidden [@media(min-width:1111px)]:block">
        <DesktopNavbarWrapper />
      </div>
      <div className="block [@media(min-width:1111px)]:hidden">
        <MobileNavbarWrapper />
      </div>
    </>
  )
}

export default Navbar
