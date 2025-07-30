import { Service } from '@/lib/types'
import React from 'react'
import ServiceTile from './service-tile'

interface ServiceShowcaseProps {
  header: string
  services: Service[]
}

const ServiceShowcase = ({ header, services }: ServiceShowcaseProps) => {
  return (
    <div className='w-full pb-16'>
      <h2 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold pb-2'>{ header }</h2>

      <div className="space-y-2 m-auto p-2 rounded-[12px] bg-gradient-to-br from-[#b2c6f8] via-[#758bc7] to-[#8ca6e9] border-[#758bc7] border-1">
        { services.map( (service, index) => <ServiceTile key={service.id} service={service} isImageFirst={ index % 2 === 0 }/>) }
      </div>
    </div>
  )
}

export default ServiceShowcase