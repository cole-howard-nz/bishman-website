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
        {/* Navigation Links */}
        <div className="flex items-center">
          <NavList />
        </div>

        {/* Logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link href="/">
            {/* Since we can't import the actual logo, we'll create a stylized text logo */}
            <Image src="/bishman_white.svg" width={228} height={228} alt="Bishman Logo" />
          </Link>
        </div>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Admin Panel (if user exists) */}
          {user && (
            <div className="flex items-center gap-3">
              <a 
                href="/panel"
                className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-white/20 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 group"
              >
                <Shield size={18} className="group-hover:text-blue-300 transition-colors duration-300" />
              </a>

              {/* Logout Button */}
              <button className="w-10 h-10 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl flex items-center justify-center text-white hover:bg-red-500/20 hover:border-red-400/50 hover:scale-110 transition-all duration-300 group">
                <LogOut size={18} className="group-hover:text-red-300 transition-colors duration-300" />
              </button>
            </div>
          )}

          {/* Contact Us Button */}
          <a href="/contacts">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/20">
              {/* Animated shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              {/* Button content */}
              <div className="relative flex items-center gap-2">
                <MessageCircle size={18} />
                <span className="text-sm font-medium">Contact Us</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-blue-600/50 to-cyan-600/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          </a>
        </div>
      </div>

      {/* Bottom border glow effect */}
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/3 h-px bg-gradient-to-r from-transparent via-blue-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </header>
  )
}

export default DesktopNavbar