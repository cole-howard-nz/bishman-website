import React from 'react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback } from './ui/avatar'
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuTrigger } from './ui/dropdown-menu'
import Link from 'next/link'
import LogoutButton from './log-out-button'
import { createClient } from '@/lib/supabase/server'

const Navbar = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  console.log(user)
  
  return (
    <header 
      className='flex justify-between items-center w-[100dvw] p-16 m-auto'>
        <img className='w-48' src="/logo.svg" alt="Bishman Logo" />

        <ul className='flex items-center justify-center gap-4'>
          <li>Page</li>
          <li>Page</li>
          <li>Page</li>
        </ul>

        <div className='flex items-center justify-center gap-4'>
          { user && 
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Avatar>
                  <AvatarFallback>A</AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem className='cursor-pointer'>
                  <Link href='/panel'>Admin Panel</Link>
                </DropdownMenuItem>
                <DropdownMenuItem className='cursor-pointer'>
                  <LogoutButton />
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          }
          <Button>Contact Us</Button>
        </div>
    </header>
  )
}

export default Navbar