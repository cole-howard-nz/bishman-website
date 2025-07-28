import React from 'react'
import Navbar from './navbar'

const HeroSection = () => {
  return (
    <section className='border-[#051123] border-1 rounded-xl bg-[url(/skytower.png)] bg-center bg-cover p-6 h-[98dvh] flex flex-col'>
      <Navbar />
      
      <div className='flex-1 flex items-center justify-center flex-col text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.93)]'>
        <div className="flex flex-col items-center">
          <h2 className="text-3xl font-semibold pb-2">Professional Electrical Contractors</h2>
          <p className="text-sm">Message message, message message message message.</p>
        </div>
      </div>
    </section>
  )
}

export default HeroSection