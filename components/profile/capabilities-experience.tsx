import React from 'react'
import Image from 'next/image'
import { Award, Calendar } from 'lucide-react'

const CapabilitiesExperience = () => {
  return (
    <section className='relative group'>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Award className="text-blue-400" size={28} />
          <h2 className='text-white text-4xl md:text-5xl font-bold bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent'>
            Our Heritage
          </h2>
        </div>
        <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-blue-400 rounded-full" />
      </div>
      
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-blue-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-blue-400/8 to-blue-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
        </div>

        <div className="relative flex flex-col lg:flex-row gap-8 items-center">
          {/* Logo Section */}
          <div className="lg:w-1/2">
            <div className="relative h-80 lg:h-96 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-700/50 border border-white/20 group-hover:border-blue-400/40 transition-all duration-500 flex items-center justify-center overflow-hidden">
              {/* Logo background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.2) 1px, transparent 0)',
                  backgroundSize: '40px 40px'
                }} />
              </div>
              
              <div className="relative z-10 transition-transform duration-700 group-hover:scale-110">
                <Image
                  src="/bishman_white.svg"
                  width={300}
                  height={200}
                  alt="Bishman Logo"
                  className="filter opacity-90 group-hover:opacity-100 transition-all duration-500"
                />
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-2 h-2 bg-blue-400/60 rounded-full animate-pulse" />
              <div className="absolute bottom-4 right-4 w-3 h-3 bg-blue-400/40 rounded-full animate-pulse" style={{ animationDelay: '1s' }} />
            </div>
          </div>

          {/* Content Section */}
          <div className="lg:w-1/2 space-y-6">
            {/* Timeline badges */}
            <div className="flex flex-wrap gap-3 mb-6">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full px-4 py-2">
                <Calendar size={16} className="text-blue-400" />
                <span className="text-blue-200 text-sm font-medium">Est. 1970s</span>
              </div>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 border border-blue-400/30 rounded-full px-4 py-2">
                <Calendar size={16} className="text-blue-400" />
                <span className="text-blue-200 text-sm font-medium">Bishman Ltd 1992</span>
              </div>
            </div>

            <div className='space-y-6'>
              <p className="text-slate-200 leading-relaxed group-hover:text-white transition-colors duration-300">
                Bishman Ltd was formed in 1992 and has spent the last 30 years as one of the leaders in the Auckland electrical industry.
              </p>
              <p className="text-slate-300 leading-relaxed group-hover:text-slate-200 transition-colors duration-300">
                Our history is deeper than that with the original business dating back to the early 1970&apos;s when the brand first came into existence. Our brand today draws on over 50 years of depth and experience — the name is as proud today as it was then.
              </p>

              {/* Statistics */}
              <div className="grid grid-cols-2 gap-4 pt-4">
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">50+</div>
                  <div className="text-slate-300 text-sm">Years Experience</div>
                </div>
                <div className="text-center p-4 bg-white/5 rounded-xl border border-white/10">
                  <div className="text-2xl font-bold text-blue-400">30+</div>
                  <div className="text-slate-300 text-sm">Years as Bishman Ltd</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Accent elements */}
        <div className="absolute top-6 left-6 w-1 h-16 bg-gradient-to-b from-blue-200 via-blue-400 to-transparent opacity-40 group-hover:opacity-80 group-hover:h-20 transition-all duration-500" />
      </div>
    </section>
  )
}

export default CapabilitiesExperience