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

    const finalPosition = -(width) / 2
    const controls = animate(xTranslation, [0, finalPosition], {
      ease: 'linear',
      duration: 33,       
      repeat: Infinity,
      repeatType: 'loop',
      repeatDelay: 0
    })

    return () => controls.stop()
  }, [xTranslation, width])

  const items = [...company, ...company, ...company, ...company, ...company, ...company]

  return (
    <div className="overflow-hidden w-full">
      <motion.div
        ref={ref}
        className="flex flex-nowrap items-center gap-8 mb-8"
        style={{ x: xTranslation }}
      >
        {items.map(c => (
          <CarouselCard key={c.id + Math.random()} company={c} />
        ))}
      </motion.div>
    </div>
  )
}

export default CompanyCarousel
