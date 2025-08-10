'use client'

import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'
import { Button } from '../ui/button'
import { Company } from '@/lib/types'
import { AnimatePresence, motion } from 'framer-motion'

interface CarouselCardProps {
  company: Company
}

const CarouselCard = ({ company }: CarouselCardProps) => {
  const [showOverlay, setShowOverlay] = useState(false)

  return (
    <motion.div
      className="relative flex justify-center items-center 
           h-[140px] min-w-[120px] sm:h-[180px] sm:min-w-[160px] 
           md:h-[200px] md:min-w-[200px]"
      onHoverStart={() => setShowOverlay(true)}
      onHoverEnd={() => setShowOverlay(false)}
    >
      <Image
        src={company.image}
        alt={company.name}
        width={400}
        height={300}
        className="object-contain max-h-full max-w-full"
      />

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            className="absolute inset-0 z-10 flex justify-center items-center p-2 top-32"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Link href={company.link} className="w-full">
              <Button
                className="w-full bg-[#284d85]/90 hover:bg-[#3D70BC]/80 
                           ease-in-out duration-200 py-3 sm:py-4 
                           hover:shadow-xl font-normal rounded-[8px] text-sm sm:text-base"
              >
                <div className="flex items-center gap-2 justify-center">
                  <motion.p
                    initial={{ y: 10 }}
                    animate={{ y: 0 }}
                    exit={{ y: 10 }}
                  >
                    {company.name}
                  </motion.p>
                  <Image
                    alt="See more"
                    src="/see_more.svg"
                    height={18}
                    width={18}
                    className="sm:h-[20px] sm:w-[20px]"
                  />
                </div>
              </Button>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default CarouselCard
