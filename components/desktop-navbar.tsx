'use client'

import React, { useEffect, useState } from 'react'
import NavList from './navlist'
import Image from 'next/image'
import { ArrowRight, LogOut, MessageCircle, Shield } from 'lucide-react'
import { JwtPayload } from '@supabase/supabase-js'
import Link from 'next/link'

type DesktopNavbarProps = {
  user: JwtPayload | undefined
}

const DesktopNavbar = ({ user }: DesktopNavbarProps) => {
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

  if (!isMounted) return null

  return (
    <header 
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 w-[95%] max-w-7xl h-20 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'mt-4 bg-white/90 backdrop-blur-2xl border border-sky-200/60 shadow-2xl shadow-sky-200/30' 
          : 'mt-6 bg-white/70 backdrop-blur-xl border border-sky-300/50 shadow-lg shadow-sky-300/20'
      } rounded-2xl`}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 rounded-2xl overflow-hidden">
        {/* Animated gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/20 via-transparent to-blue-100/20 opacity-0 hover:opacity-100 transition-opacity duration-700" />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]">
          <div className="absolute inset-0" style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(56, 189, 248, 0.4) 1px, transparent 0)',
            backgroundSize: '20px 20px'
          }} />
        </div>
      </div>

      <div className="relative flex justify-between items-center h-full px-6">
        {/* Navigation Links */}
        <div className="flex items-center">
          <NavList />
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            <Image src="/bishman_black.svg" width={228} height={228} alt="Bishman Logo" />
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Admin Panel (if user exists) */}
          {user && (
            <div className="flex items-center gap-3">
              <a 
                href="/panel"
                className="w-10 h-10 bg-sky-100/60 backdrop-blur-sm border border-sky-200/60 rounded-xl flex items-center justify-center text-sky-700 hover:bg-sky-200/70 hover:border-sky-300/70 hover:scale-110 transition-all duration-300 group"
              >
                <Shield size={18} className="group-hover:text-sky-800 transition-colors duration-300" />
              </a>

              {/* Logout Button */}
              <button className="w-10 h-10 bg-red-50/60 backdrop-blur-sm border border-red-200/60 rounded-xl flex items-center justify-center text-red-600 hover:bg-red-100/70 hover:border-red-300/70 hover:scale-110 transition-all duration-300 group">
                <LogOut size={18} className="group-hover:text-red-700 transition-colors duration-300" />
              </button>
            </div>
          )}

          {/* Contact Us Button */}
          <a href="/contacts#s">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/20">
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              {/* Button content */}
              <div className="relative flex items-center gap-2">
                <MessageCircle size={18} />
                <span className="text-sm font-medium">Contact Us</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/50 to-blue-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          </a>
        </div>
      </div>

      {/* Bottom border glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-sky-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </header>
  )
}

export default DesktopNavbar