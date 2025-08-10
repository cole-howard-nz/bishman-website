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
    <motion.div
      ref={ref}
      className="flex flex-nowrap mt-8 items-center gap-8"
      style={{ x: xTranslation }}
    >
      {items.map(c => (
        <CarouselCard key={c.id + Math.random()} company={c} />
      ))}
    </motion.div>
  )
}

export default CompanyCarousel
