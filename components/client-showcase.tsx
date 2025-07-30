import { Client } from '@/lib/types'
import React from 'react'
import ClientCarousel from './client-carousel'

interface ClientShowcaseProps {
  header: string
  clients: Client[]
}

const ClientShowcase = ({ header, clients }: ClientShowcaseProps) => {
  return (
    <div className='w-full py-16'>
      <h2 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold pb-2'>{ header }</h2>

      <ClientCarousel clients={ clients }/>
    </div>
  )
}

export default ClientShowcase