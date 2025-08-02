import React from 'react'
import { Button } from './ui/button'
import { createClient } from '@/lib/supabase/server'
import NavList from './navlist'
import Link from 'next/link'
import LogoutButton from './log-out-button'
import Image from 'next/image'

const DesktopNavbar = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  return (
    <header className="h-[80px] relative w-[90%] flex justify-between items-center bg-black/20 border-[#758bc7] border-1 shadow-sm p-2 px-4 m-auto rounded-[12px] z-10">
      <ul className="flex items-center gap-4">
        <NavList />
      </ul>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image src="/bishman_white.svg" width={228} height={228} alt="Bishman Logo" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user && 
          <>
            <Link href="/panel">
              <Image src="/Shield.svg" width={22} height={22} alt="Admin Panel" />
            </Link>
            <LogoutButton />
          </>
        }

        <Link href="/contacts">
          <Button className="bg-[#284d85] hover:bg-[#3D70BC] ease-in-out duration-200 p-6 hover:shadow-xl font-normal rounded-[8px] text-[16px]">
            Contact Us
          </Button>
        </Link>
      </div>
    </header>
  )
}

export default DesktopNavbar