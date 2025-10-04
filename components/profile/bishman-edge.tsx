import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Building2 } from 'lucide-react'

const BishmanEdge = () => {
  return (
    <section className='relative group'>
      <div className="">
        <div className="flex items-center gap-3 mb-4">
          <Building2 className="text-sky-600" size={28} />
          <h2 className='text-slate-800 text-4xl md:text-5xl font-bold bg-clip-text'>
            Our Profile
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" />
      </div>
      
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/20 group-hover:border-sky-400/40 transition-all duration-500">
              <Image
                src="/office.jpg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Bishman Office"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
            <div className='space-y-6'>
              <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                Bishman Ltd established in 1992, is a trusted leader in delivering comprehensive electrical maintenance services. We specialise in ensuring that electrical systems remain operational, efficient, and safe through proactive care and consistent solutions.
              </p>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                Our commitment is to extend the lifespan of electrical infrastructure, minimise downtime, and optimise system performance across Auckland and beyond.
              </p>
            </div>
            
            <div className="pt-4">
              <Link href="/contacts">
                <Button className="group/contact w-full relative overflow-hidden bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 border border-sky-400/30 text-white px-8 py-6 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-sky-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/contact:translate-x-[100%] transition-transform duration-700" />
                  
                  <div className="relative flex items-center justify-center gap-3">
                    <span className="font-semibold text-lg">Contact Us</span>
                    <ArrowRight size={20} className="group-hover/contact:translate-x-1 transition-transform duration-300" />
                  </div>
                </Button>
              </Link>
            </div>
          </div>
        </div>

        {/* Accent elements */}
        <div className="absolute top-6 left-6 w-1 h-16 bg-gradient-to-b from-sky-400 via-cyan-400 to-transparent opacity-40 group-hover:opacity-80 group-hover:h-20 transition-all duration-500" />
      </div>
    </section>
  )
}

export default BishmanEdge