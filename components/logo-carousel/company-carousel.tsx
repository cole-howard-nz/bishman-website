import { company } from '@/lib/temp-data'
import React from 'react'
import CarouselCard from './carousel-card'

const CompanyCarousel = () => {
  return (
    <div className='flex mt-16'>
      { company.map( c => <CarouselCard key={ c.id } image={ c.image } />)}
    </div>
  )
}

export default CompanyCarousel