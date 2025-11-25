'use client'

import { company } from '@/lib/temp-data'
import React, { useEffect, useRef, useState } from 'react'
import CarouselCard from './carousel-card'
import { motion, useMotionValue } from 'framer-motion'

const CompanyCarousel = () => {
  const [width, setWidth] = useState(0)
  const containerRef = useRef<HTMLDivElement>(null)
  const xTranslation = useMotionValue(0)

  useEffect(() => {
    if (!containerRef.current) return
    const measured = containerRef.current.scrollWidth / 4
    setWidth(measured)
  }, [])

  useEffect(() => {
    if (!width) return

    const oneSetWidth = width
    const startTime = Date.now()

    const animate = () => {
      const elapsed = Date.now() - startTime
      const duration = 60000
      const progress = (elapsed % duration) / duration
      xTranslation.set(-progress * oneSetWidth)
      
      requestAnimationFrame(animate)
    }

    const frame = requestAnimationFrame(animate)

    return () => {
      cancelAnimationFrame(frame)
    }
  }, [width, xTranslation])

  const items = [...company, ...company, ...company, ...company]

  return (
    <div className="w-full py-12 overflow-hidden">
      <div className="relative z-10 text-center mb-16 px-8">
        <div className="transition-all duration-700 opacity-100 translate-y-0">
          <div className="inline-block">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-sky-100/60 to-blue-100/60 backdrop-blur-xl px-6 py-3 rounded-full border border-sky-200/60 shadow">
              Our Partners
            </span>
          </div>
          
          {/* <h2 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Trusted by Industry Leaders 
          </h2> */}
        </div>
      </div>

      <div className="overflow-hidden w-full">
        <motion.div
          ref={containerRef}
          className="flex flex-nowrap items-center gap-12"
          style={{ x: xTranslation }}
        >
          {items.map((c, index) => (
            <CarouselCard 
              key={`${c.id}-${index}`} 
              company={c}
            />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default CompanyCarousel