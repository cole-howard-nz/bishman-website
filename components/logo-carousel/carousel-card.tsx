import Image from 'next/image'
import React from 'react'

interface CarouselCardProps {
  image: string
}

const CarouselCard = ({ image }: CarouselCardProps) => {
  return (
    <div className='flex justify-center items-center'>
      <Image 
        src={ image }
        alt={ image }
        width={ 400 }
        height={ 200 }
      />
    </div>
  )
}

export default CarouselCard