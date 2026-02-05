'use client'

import React, { useState, useEffect } from 'react'
import { 
  Zap, 
  Wrench,
  ArrowRight,
  CheckCircle2
} from 'lucide-react'
import Link from 'next/link'

const ServicesSelectionPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden my-16 rounded-[12px]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100/20 via-transparent to-cyan-100/20" />

      <div className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">
        {/* Service Cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Key Services Card */}
          <Link href="/services/core#s">
            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-10 hover:bg-white/80 hover:border-sky-200/60 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-2">
              {/* Background effects */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-sky-500/25">
                    <Zap size={40} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-sky-600 transition-colors duration-300">
                  Key Services
                </h2>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full mb-6" />

                {/* Description */}
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Complete electrical engineering solutions from design to installation for commercial and industrial projects
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    'LV & HV Installation',
                    'Data & Communications',
                    'Design & Engineering',
                    'Marina & Specialized Systems'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-sky-500 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-sky-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore Key Services</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>

          {/* Service Department Card */}
          <Link href="/services/department#s">
            <div className="group relative bg-white/60 backdrop-blur-xl border border-white/40 rounded-3xl p-10 hover:bg-white/80 hover:border-indigo-200/60 transition-all duration-500 overflow-hidden cursor-pointer hover:shadow-xl hover:-translate-y-2">
              {/* Background effects */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-purple-400/8 to-indigo-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="mb-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg shadow-indigo-500/25">
                    <Wrench size={40} className="text-white" />
                  </div>
                </div>

                {/* Title */}
                <h2 className="text-3xl font-bold text-slate-800 mb-4 group-hover:text-indigo-600 transition-colors duration-300">
                  Service Department
                </h2>

                {/* Divider */}
                <div className="w-16 h-1 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full mb-6" />

                {/* Description */}
                <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                  Dedicated ongoing support and preventative maintenance for completed and active projects
                </p>

                {/* Features */}
                <div className="space-y-3 mb-8">
                  {[
                    '24/7 Emergency Support',
                    'Preventative Maintenance',
                    'Compliance & Testing',
                    'IQP Certification Services'
                  ].map((feature, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <CheckCircle2 size={12} className="text-white" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-indigo-600 font-semibold group-hover:gap-4 transition-all duration-300">
                  <span>Explore Service Department</span>
                  <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ServicesSelectionPage