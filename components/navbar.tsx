import React from 'react'
import { Button } from './ui/button'
import { createClient } from '@/lib/supabase/server'
import AdminDropdown from './admin-dropdown'

const Navbar = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  console.log(user)
  
  return (
    <header 
      className='flex justify-between items-center w-[100dvw] p-16 m-auto'>
        <img className='w-36' src="/logo.svg" alt="Bishman Logo" />

        <ul className='flex items-center justify-center gap-4'>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>

        <div className='flex items-center justify-center gap-4'>
          { user && 
            <AdminDropdown />
          }
          <Button>Contact Us</Button>
        </div>
    </header>
  )
}

export default Navbar