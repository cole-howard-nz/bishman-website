'use client'
import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import LogoutButton from './log-out-button'
import Image from 'next/image'
import { Menu, X, ChevronDown, MessageCircle, ArrowRight, User, Briefcase } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { JwtPayload } from '@supabase/supabase-js'

type MobileNavbarProps = {
  user: JwtPayload | undefined
}

const MobileNavbar = ({ user }: MobileNavbarProps) => {
  const [isOpen, setIsOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)
  const closeMenu = () => {
    setIsOpen(false)
    setProfileOpen(false)
  }

  if (!isMounted) return null

  return (
    <>
      <header 
        className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] h-20 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'mt-4 bg-slate-900/80 backdrop-blur-2xl border border-white/20 shadow-2xl shadow-black/20' 
            : 'mt-6 bg-black/20 backdrop-blur-xl border border-blue-400/30 shadow-lg shadow-blue-500/10'
        } rounded-2xl`}
      >
        {/* Background Effects */}
        <div className="absolute inset-0 rounded-2xl overflow-hidden">
          {/* Animated gradient background */}
          <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5 opacity-0 hover:opacity-100 transition-opacity duration-700" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(59, 130, 246, 0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
          </div>
        </div>

        <div className="relative flex justify-between items-center h-full px-6">
          {/* Contact Button - Hidden on small screens, shown on medium+ */}
          <div className="hidden [@media(min-width:700px)]:block">
            <Link href="/contacts">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/20">
                {/* Animated shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                <div className="relative flex items-center gap-2">
                  <MessageCircle size={18} />
                  <span className="text-sm font-medium">Contact Us</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
                </div>

                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/50 to-cyan-600/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </Link>
          </div>

          {/* Logo */}
          <div className="absolute left-1/2 transform -translate-x-1/2 [@media(max-width:700px)]:static [@media(max-width:700px)]:transform-none">
            <Link href="/">
              <Image src="/bishman_white.svg" width={180} height={180} alt="Bishman Logo" className="[@media(max-width:500px)]:w-[140px] [@media(max-width:500px)]:h-[140px]" />
            </Link>
          </div>

          {/* Menu Toggle Button */}
          <motion.button 
            onClick={toggleMenu} 
            className="relative z-20 w-12 h-12 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center hover:bg-white/20 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 group"
            whileTap={{ scale: 0.95 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: 0, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X className="text-white group-hover:text-blue-300 transition-colors duration-300" size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu className="text-white group-hover:text-blue-300 transition-colors duration-300" size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
              onClick={closeMenu}
            />

            {/* Mobile Menu */}
            <motion.div
              initial={{ x: '100%', opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: '100%', opacity: 0 }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 h-full w-[85%] sm:w-[350px] z-50"
            >
              {/* Menu Background */}
              <div className="h-full bg-slate-900/95 backdrop-blur-2xl border-l border-white/20 shadow-2xl shadow-black/50 flex flex-col">
                {/* Background Effects */}
                <div className="absolute inset-0 overflow-hidden">
                  {/* Animated particles */}
                  <div className="absolute inset-0">
                    {Array.from({ length: 8 }, (_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${Math.random() * 3}s`,
                          animationDuration: `${2 + Math.random() * 3}s`
                        }}
                      />
                    ))}
                  </div>
                  
                  {/* Gradient overlays */}
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 via-transparent to-cyan-600/5" />
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/20 to-transparent rounded-full blur-3xl" />
                  <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-cyan-400/15 to-transparent rounded-full blur-2xl" />
                </div>

                {/* Header */}
                <div className="relative p-6 border-b border-white/10">
                  <div className="w-full items-center justify-center flex">
                    <Link href="/">
                      <Image src="/bishman_white.svg" width={160} height={160} alt="Bishman Logo" />
                    </Link>
                  </div>
                </div>

                {/* Navigation Links */}
                <div className="relative flex-1 p-6 space-y-2 overflow-y-auto">
                  {/* Profile Dropdown */}
                  <div className="mb-2">
                    <motion.button
                      onClick={() => setProfileOpen(!profileOpen)}
                      className="group w-full flex items-center justify-between p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-white font-medium">Profile</span>
                      </div>
                      <ChevronDown 
                        className={`text-slate-400 group-hover:text-blue-300 transition-all duration-300 ${profileOpen ? 'rotate-180' : ''}`} 
                        size={20} 
                      />
                    </motion.button>

                    <AnimatePresence>
                      {profileOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3 }}
                          className="overflow-hidden"
                        >
                          <div className="mt-2 ml-4 space-y-2">
                            <Link href="/profile#s" onClick={closeMenu}>
                              <motion.div 
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                                whileHover={{ x: 4 }}
                              >
                                <div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
                                  <Briefcase size={14} className="text-blue-400" />
                                </div>
                                <span className="text-slate-300 group-hover:text-white text-sm">Company Profile</span>
                              </motion.div>
                            </Link>
                            <Link href="/team#s" onClick={closeMenu}>
                              <motion.div 
                                className="flex items-center gap-3 p-3 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
                                whileHover={{ x: 4 }}
                              >
                                <div className="w-8 h-8 bg-cyan-500/20 rounded-lg flex items-center justify-center">
                                  <User size={14} className="text-cyan-400" />
                                </div>
                                <span className="text-slate-300 group-hover:text-white text-sm">Our Team</span>
                              </motion.div>
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Main Navigation Links */}
                  {[
                    { href: '/projects#s', label: 'Projects' },
                    { href: '/services#s', label: 'Services' },
                    { href: '/contacts#s', label: 'Contact Us' }
                  ].map((item, index) => (
                    <motion.div
                      key={item.href}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link href={item.href} onClick={closeMenu}>
                        <motion.div 
                          className="group w-full flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <span className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">
                            {item.label}
                          </span>
                          <ArrowRight 
                            size={16} 
                            className="ml-auto text-slate-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" 
                          />
                        </motion.div>
                      </Link>
                    </motion.div>
                  ))}
                </div>

                {/* Footer */}
                {user && (
                  <div className="relative p-6 border-t border-white/10 space-y-3">
                    <Link href="/panel" onClick={closeMenu}>
                      <motion.div 
                        className="group w-full flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">
                          Admin Panel
                        </span>
                        <ArrowRight 
                          size={16} 
                          className="ml-auto text-slate-400 group-hover:text-blue-300 group-hover:translate-x-1 transition-all duration-300" 
                        />
                      </motion.div>
                    </Link>
                    
                    <div className="pt-2">
                      <motion.div 
                        className="group w-full flex items-center gap-3 p-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 hover:border-blue-400/30 transition-all duration-300"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <span className="text-white font-medium group-hover:text-blue-300 transition-colors duration-300">
                          Logout
                        </span>
                        <div className='ml-auto'>
                          <LogoutButton />
                        </div>
                      </motion.div>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

export default MobileNavbar