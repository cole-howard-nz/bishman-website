import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='border-[#051123] border-1 rounded-xl bg-[url(/skytower.png)] bg-center bg-cover p-6 h-[98dvh] flex flex-col relative'>
      <div className='relative'>
        <Navbar />
      </div>
      
      <div className='flex-1 flex items-center justify-center flex-col text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.93)]'>
        <div className="flex flex-col items-center">
        </div>
      </div>

      <Link href="/projects" className='absolute bottom-6 left-6'>
        <button className='bg-blue-600/40 hover:bg-blue-950/50 backdrop-blur border border-white/20 rounded-xl px-6 py-3 text-[#f0f1f1] font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.93)]'>
          <div className='flex items-center gap-2'>
            <span>View what we do</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </button>
      </Link>
    </section>
  )
}

export default HeroSection