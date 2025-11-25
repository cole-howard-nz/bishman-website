import React from 'react'
import Navbar from './navbar'
import HeroSlideshow from './hero-slideshow'

const HeroSection = () => {
  return (
    <section className='border-sky-200/60 border-1 rounded-xl overflow-hidden h-[98dvh] flex flex-col relative'>
      <div className='relative z-100 p-6'>
        <Navbar />
      </div>

      <HeroSlideshow />
    </section>
  )
}

export default HeroSection