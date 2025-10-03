import React from 'react'
import Navbar from './navbar'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

const HeroSection = () => {
  return (
    <section className='border-sky-200/60 border-1 rounded-xl bg-[url(/skytower.png)] bg-center bg-cover p-6 h-[98dvh] flex flex-col relative'>
      
      <div className='relative'>
        <Navbar />
      </div>
      
      <div className='flex-1 flex items-center justify-center flex-col text-slate-800 drop-shadow-[0_2px_4px_rgba(255,255,255,0.8)] relative z-10'>
        <div className="flex flex-col items-center">
        </div>
      </div>

      <Link href="/projects" className='absolute bottom-6 left-6 z-10'>
        <button className='group bg-sky-400/70 hover:bg-sky-500/80 backdrop-blur-xl border border-sky-300/60 hover:border-sky-400/70 rounded-xl px-6 py-3 text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-sky-400/30 drop-shadow-[0_2px_8px_rgba(255,255,255,0.4)]'>
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 rounded-xl" />
          
          <div className='relative flex items-center gap-2'>
            <span>View what we do</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
          </div>
        </button>
      </Link>
    </section>
  )
}

export default HeroSection