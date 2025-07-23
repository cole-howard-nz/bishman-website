import React from 'react'
import { Button } from './ui/button'
import { createClient } from '@/lib/supabase/server'
import NavList from './navlist'
import Link from 'next/link'
import LogoutButton from './log-out-button'
import Image from 'next/image'

const Navbar = async () => {
  const supabase = await createClient()
  const { data } = await supabase.auth.getClaims()
  const user = data?.claims

  return (
    <header className="relative flex justify-between items-center bg-[#EDF1FC] border-[#051123] border-1 shadow-sm p-2 px-4 m-auto rounded-[12px] z-10">
      <ul className="flex items-center gap-4">
        <NavList />
      </ul>

      <div className="absolute left-1/2 transform -translate-x-1/2">
        <Link href="/">
          <Image src="/logo.svg" width={128} height={128} alt="Bishman Logo" />
        </Link>
      </div>

      <div className="flex items-center gap-4">
        {user && (
          <>
            <Link href="/panel">
              <Image src="/Shield.svg" width={22} height={22} alt="Admin Panel" />
            </Link>
            <LogoutButton />
          </>
        )}

        <Button className="bg-[#152d51] hover:bg-[#284d85] p-4 hover:shadow-xl font-normal rounded-[8px] text-sm">
          Contact Us
        </Button>
      </div>
    </header>
  )
}

export default Navbar