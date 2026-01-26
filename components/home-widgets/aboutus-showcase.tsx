'use client'

import React, { useState, useEffect, useRef } from 'react'
import { Users, Zap, ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'

const stats = [
  { value: 30, suffix: '+', label: 'Years Experience' },
  { value: 50, suffix: '+', label: 'Team Members' },
  { value: 500, suffix: '+', label: 'Projects Completed' }
]

const AnimatedCounter = ({ end, suffix = '', duration = 2000 }: { end: number, suffix?: string, duration?: number }) => {
  const [count, setCount] = useState(0)
  const [isVisible, setIsVisible] = useState(false)
  const counterRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    const currentRef = counterRef.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [isVisible])

  useEffect(() => {
    if (!isVisible) return

    let startTime: number
    let animationFrame: number

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime
      const progress = Math.min((currentTime - startTime) / duration, 1)
      
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentCount = Math.floor(easeOutQuart * end)
      
      setCount(currentCount)

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate)
      }
    }

    animationFrame = requestAnimationFrame(animate)

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame)
      }
    }
  }, [isVisible, end, duration])

  return (
    <div ref={counterRef} className="text-2xl md:text-3xl font-bold text-sky-600">
      {count}{suffix}
    </div>
  )
}

const AboutUsShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Main Content */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
            {/* Left Side - Content */}
            <div className="flex flex-col justify-between space-y-6">
              {/* Headline */}
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-800 leading-tight">
                Leading the way in{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  electrical excellence
                </span>
              </h2>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-slate-700 leading-relaxed">
                  Bishman Ltd is a privately owned, 100% New Zealand company delivering comprehensive electrical solutions across commercial, industrial, and residential sectors.
                </p>
                <p className="text-slate-600 text-sm leading-relaxed">
                  From BIM-driven planning to precision installation and commissioning, our experienced teams ensure every project is delivered safely, efficiently, and on schedule. We specialize in design, construction, and maintenance services backed by 30+ years of industry expertise.
                </p>
              </div>

              {/* Features */}
              <div className="grid grid-cols-2 gap-3">
                <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 hover:bg-white/80 hover:border-sky-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-600 rounded-lg flex items-center justify-center mb-3">
                    <Zap size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">Full Service</h4>
                  <p className="text-slate-600 text-xs">End-to-end electrical solutions</p>
                </div>
                <div className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 hover:bg-white/80 hover:border-sky-200 transition-all duration-300">
                  <div className="w-10 h-10 bg-gradient-to-br from-sky-500 to-blue-600 rounded-lg flex items-center justify-center mb-3">
                    <Users size={20} className="text-white" />
                  </div>
                  <h4 className="font-semibold text-slate-800 text-sm mb-1">Expert Team</h4>
                  <p className="text-slate-600 text-xs">Qualified & certified professionals</p>
                </div>
              </div>
            </div>

            {/* Right Side - Image & Stats */}
            <div className="flex flex-col space-y-4 h-full">
              {/* Image - flex-1 makes it take remaining space */}
              <div className="relative flex-1 min-h-[280px] rounded-2xl overflow-hidden border border-slate-200 hover:border-sky-300 transition-all duration-300 group">
                <Image
                  src="/office.jpg"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  alt="Bishman Ltd Office"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-transparent" />
                
                {/* Floating badge on image */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-col sm:flex-row justify-between items-center gap-3 bg-white/95 backdrop-blur-xl border border-white/40 rounded-lg p-3">
                    <p className="text-slate-800 font-medium text-xs text-center sm:text-left">
                      Trusted by leading organizations across New Zealand
                    </p>

                    {/* CTA Button */}
                    <div className="text-center shrink-0">
                      <Link href="/profile#s">
                        <button className="group/btn bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 text-white px-4 sm:px-6 md:px-8 py-2.5 sm:py-3 md:py-3.5 rounded-xl transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 text-xs sm:text-sm font-semibold inline-flex items-center gap-2 whitespace-nowrap">
                          <span>Learn More</span>
                          <ArrowRight size={14} className="sm:w-4 sm:h-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-3">
                {stats.map((stat, index) => (
                  <div 
                    key={index}
                    className="bg-white/60 backdrop-blur-sm border border-slate-200/50 rounded-xl p-4 text-center hover:bg-white/80 hover:border-sky-200 hover:shadow-md transition-all duration-300"
                  >
                    <AnimatedCounter end={stat.value} suffix={stat.suffix} duration={2000} />
                    <p className="text-slate-600 text-[10px] font-medium mt-1 leading-tight">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUsShowcase