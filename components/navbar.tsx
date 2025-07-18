import React from 'react'
import { Button } from './ui/button'

const Navbar = () => {
  return (
    <header 
      className='flex justify-between items-center p-16 m-auto'>
        <ul className='flex items-center justify-center gap-4'>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>
        <div className='flex items-center justify-center gap-4'>
          <Button>Admin</Button>
          <Button>Logout</Button>
          <Button>Contact Us</Button>
        </div>
    </header>
  )
}

export default Navbar