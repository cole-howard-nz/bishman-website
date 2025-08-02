'use client'
import React, { useState } from 'react'
import { Button } from './ui/button'
import Link from 'next/link'
import LogoutButton from './log-out-button'
import Image from 'next/image'
import { Menu, X, ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const MobileNavbar = ({ user }: { user: any }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setProfileOpen(false)
  }

  return (
    <header className="relative h-[80px] w-[90%] flex justify-between items-center bg-black/20 shadow-sm p-2 px-4 m-auto rounded-[12px] z-10">
      <div className="hidden [@media(min-width:700px)]:block items-center gap-4">
        <Link href="/contacts">
          <Button className="bg-[#284d85] hover:bg-[#3D70BC] ease-in-out duration-200 p-6 hover:shadow-xl font-normal rounded-[8px] text-[16px]">
            Contact Us
          </Button>
        </Link>
      </div>

      <div className="absolute left-1/2 transform -translate-x-1/2 [@media(max-width:700px)]:static [@media(max-width:700px)]:transform-none">
        <Link href="/">
          <Image src="/bishman_white.svg" width={228} height={228} alt="Bishman Logo" />
        </Link>
      </div>

      <button onClick={toggleMenu} className="z-20">
        {isOpen ? <X className="text-[#f8fafc]" size={42} /> : <Menu className="text-[#f8fafc]" size={42} />}
      </button>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black z-10"
              onClick={closeMenu}
            />

            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
              className="fixed top-0 right-0 h-full w-[80%] sm:w-[300px] bg-[#0f172a] text-white z-20 shadow-lg rounded-l-2xl flex flex-col items-start justify-between gap-6 p-8 overflow-y-auto"
            >
              <div className='flex flex-col gap-8'>
                <div>
                  <button
                    onClick={() => setProfileOpen(!profileOpen)}
                    className="flex items-center w-full text-lg hover:text-[#3D70BC]"
                  >
                    Profile <ChevronDown className={`ml-2 transition-transform ${profileOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {profileOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="flex flex-col pl-4 mt-2 gap-2 text-sm"
                      >
                        <Link href="/profile" onClick={closeMenu} className="hover:text-[#3D70BC]">Company Profile</Link>
                        <Link href="/team" onClick={closeMenu} className="hover:text-[#3D70BC]">Our Team</Link>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/projects" onClick={closeMenu} className="text-lg hover:text-[#3D70BC]">Projects</Link>
                <Link href="/services" onClick={closeMenu} className="text-lg hover:text-[#3D70BC]">Services</Link>
                <Link href="/contacts" onClick={closeMenu} className="text-lg hover:text-[#3D70BC]">Contact Us</Link>
              </div>

              {user && (
                <div className='flex items-center justify-between w-full'>
                  <Link href="/panel" onClick={closeMenu} className="text-lg hover:text-[#3D70BC]">Admin Panel</Link>
                  <LogoutButton />
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  )
}

export default MobileNavbar