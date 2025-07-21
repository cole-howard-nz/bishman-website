import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'
import React from 'react'

const Panel = async () => {
  const supabase = await createClient()
  const { data, error } = await supabase.auth.getClaims()

  if (error || !data?.claims) {
    redirect('/auth/login')
  }

  return (
    <div>
      <p>Panel</p>
    </div>
  )
}

export default Panel