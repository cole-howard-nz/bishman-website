import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import { ArrowRight, Briefcase, Award } from 'lucide-react'

const OurBusiness = () => {
  return (
    <section className='relative group'>
      <div className="">
        <div className="flex items-center gap-3 mb-4">
          <Briefcase className="text-cyan-600" size={28} />
          <h2 className='text-slate-800 text-4xl md:text-5xl font-bold'>
            Our Business
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full" />
      </div>
      
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 rounded-full blur-3xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-sky-400/8 to-cyan-500/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 items-stretch">
          {/* Content Section */}
          <div className="lg:w-1/2 flex flex-col justify-between space-y-6">
            <div className='space-y-6'>
              <p className="text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
                We are a privately and wholly New Zealand owned company with 30+ years experience in design, construction, and maintenance electrical services.
              </p>
              <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                Our family orientated business aims to raise the bar in the electrical industry by training our own apprentices with the view to professionally develop them into future tradespeople and leaders.
              </p>

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 border border-sky-400/30 rounded-full px-4 py-2">
                <Award size={16} className="text-sky-600" />
                <span className="text-sky-700 text-sm font-medium">Master Electricians Member</span>
              </div>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/20 group-hover:border-cyan-400/40 transition-all duration-500">
              <Image
                src="/msb.jpg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Bishman Electrical Work"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              
              {/* Floating CTA */}
              <div className="absolute bottom-6 right-6">
                <Link href="/projects">
                  <Button className="group/btn relative overflow-hidden bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 border border-cyan-400/30 text-white px-6 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    
                    <div className="relative flex items-center gap-2">
                      <span className="text-sm font-medium">See Projects</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBusiness