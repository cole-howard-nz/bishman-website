'use client'

import { createClient } from '@/lib/supabase/client'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'

const LogoutButton = () => {
  const router = useRouter()

  const logout = async () => {
    const supabase = createClient()
    await supabase.auth.signOut()
    router.push('/auth/login')
    router.refresh()
  };

  return (
    <Image className='cursor-pointer' onClick={ logout } src='/logout.svg' width={ 22 } height={ 22 } alt='Logout'/>
  )
}

export default LogoutButton