'use client'

import { company } from '@/lib/temp-data'
import React, { useEffect } from 'react'
import CarouselCard from './carousel-card'
import useMeasure from 'react-use-measure'
import { animate, motion, useMotionValue } from 'framer-motion'

const CompanyCarousel = () => {
  const [ref, { width }] = useMeasure()
  const xTranslation = useMotionValue(0)

  useEffect(() => {
    if (!width) return

    // Calculate the width of one complete set (including gaps)
    // We have 10 items with gap-16 (64px) between them
    const oneSetWidth = width * 4
    
    // Animate through exactly one complete set, then loop
    const controls = animate(xTranslation, [0, -oneSetWidth], {
      ease: 'linear',
      duration: 60,    
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    })

    return () => controls.stop()
  }, [xTranslation, width])

  // Double the array for seamless infinite loop
  const items = [...company, ...company, ...company, ...company]

  return (
    <div className="w-full py-12">
      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 px-8">
        <div className={`transition-all duration-700 opacity-100 translate-y-0`}>
          <div className="inline-block mb-6">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-sky-100/60 to-blue-100/60 backdrop-blur-xl px-6 py-3 rounded-full border border-sky-200/60 shadow">
              Our Partners
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-sky-800 via-slate-700 to-blue-800 bg-clip-text text-transparent">
            Trusted by Industry Leaders 
          </h2>
          
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          </p>
        </div>
      </div>
      <div className="overflow-w-full">
        <motion.div
          ref={ref}
          className="flex flex-nowrap items-center gap-16"
          style={{ x: xTranslation }}
        >
          {items.map((c, index) => (
            <CarouselCard key={`${c.id}-${index}`} company={c} />
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default CompanyCarousel
