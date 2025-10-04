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

      <Link href="/projects">
        <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/20">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
          
          <div className="relative flex items-center gap-2">
            <span className="text-sm font-medium">View what we do</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
          </div>

          <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/50 to-blue-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
        </button>
      </Link>
    </section>
  )
}

export default HeroSection