'use client';

import React, { useState } from 'react'
import { ArrowRight, Briefcase, ChevronDown, User } from 'lucide-react'
import Link from 'next/link';

const NavList = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false)

  return (
    <nav className="flex items-center gap-1">
      {/* Profile Dropdown */}
      <div className="relative group">
        <button 
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-sky-100/60 backdrop-blur-sm transition-all duration-300 group"
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          <span className="text-sm font-medium">Profile</span>
          <ChevronDown size={16} className="group-hover:rotate-180 transition-transform duration-300" />
        </button>

        {/* Dropdown Menu */}
        <div 
          className={`absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl border border-sky-200/60 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 ${
            isProfileOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 translate-y-2 invisible'
          }`}
          onMouseEnter={() => setIsProfileOpen(true)}
          onMouseLeave={() => setIsProfileOpen(false)}
        >
          {/* Company Profile */}
          <a 
            href="/profile#s" 
            className="block p-4 hover:bg-sky-100/60 transition-all duration-300 group/item border-b border-sky-100/50"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-sky-400 to-blue-500 rounded-lg flex items-center justify-center">
                <Briefcase size={14} className="text-white" />
              </div>
              <div>
                <h4 className="text-slate-800 font-medium text-sm group-hover/item:text-sky-700 transition-colors duration-300">
                  Company Profile
                </h4>
                <p className="text-slate-600 text-xs mt-0.5">
                  Learn about our story
                </p>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover/item:text-sky-600 group-hover/item:translate-x-1 transition-all duration-300 ml-auto" />
            </div>
          </a>

          {/* Our Team */}
          <a 
            href="/team#s" 
            className="block p-4 hover:bg-blue-100/60 transition-all duration-300 group/item"
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-sky-500 rounded-lg flex items-center justify-center">
                <User size={16} className="text-white" />
              </div>
              <div>
                <h4 className="text-slate-800 font-medium text-sm group-hover/item:text-blue-700 transition-colors duration-300">
                  Our Team
                </h4>
                <p className="text-slate-600 text-xs mt-0.5">
                  Meet our experts
                </p>
              </div>
              <ArrowRight size={16} className="text-slate-400 group-hover/item:text-blue-600 group-hover/item:translate-x-1 transition-all duration-300 ml-auto" />
            </div>
          </a>
        </div>
      </div>

      {/* Projects Link */}
      <Link 
        href="/projects#s"
        className="relative px-4 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-sky-100/60 backdrop-blur-sm transition-all duration-300 group overflow-hidden"
      >
        <span className="relative z-10 text-sm font-medium">Projects</span>
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-sky-400 to-blue-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </Link>

      {/* Services Link */}
      <a 
        href="/services#s"
        className="relative px-4 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-blue-100/60 backdrop-blur-sm transition-all duration-300 group overflow-hidden"
      >
        <span className="relative z-10 text-sm font-medium">Services</span>
        <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-sky-400 group-hover:w-full group-hover:left-0 transition-all duration-300" />
      </a>
    </nav>
  )
}

export default NavList;