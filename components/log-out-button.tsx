'use client'

import { createClient } from '@/lib/supabase/client'
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
    <p onClick={ logout }>Logout</p>
  )
}

export default LogoutButton