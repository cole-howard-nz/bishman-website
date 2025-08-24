import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 border border-gray-700/50 text-slate-100 rounded-3xl">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/10 via-transparent to-cyan-900/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(6,182,212,0.08),transparent_50%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.03] bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="relative flex flex-col lg:flex-row justify-between items-start p-4 sm:p-6 lg:p-8 min-h-[320px]">
        {/* Left section */}
        <div className="flex flex-col justify-between h-full min-h-[280px] lg:min-h-[320px] max-w-md w-full lg:w-auto">
          {/* Logo */}
          <div className="group mb-6 lg:mb-0">
            <Link href="/" className="inline-block">
              <div className="relative">
                <Image 
                  src="/bishman_white.svg" 
                  width={150} 
                  height={150} 
                  alt="Bishman Logo"
                  className="w-32 h-32 sm:w-40 sm:h-40 lg:w-44 lg:h-44 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                />
              </div>
            </Link>
          </div>
          
          {/* Social Media Buttons - Desktop */}
          <div className="hidden lg:flex gap-4 mb-6">
            {/* LinkedIn Button */}
            <Link 
              href="https://www.linkedin.com/company/bishman-limited/?originalSubdomain=nz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] border border-blue-500/20 hover:border-blue-400/40"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            
            {/* Email Button */}
            <Link 
              href="mailto:info@bishman.co.nz"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(6,182,212,0.3)] border border-cyan-500/20 hover:border-cyan-400/40"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-white/20 to-cyan-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            
            {/* Phone Button */}
            <Link 
              href="tel:+6495550123"
              className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(34,197,94,0.3)] border border-green-500/20 hover:border-green-400/40"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-white/20 to-green-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
          
          {/* Address and copyright - Desktop */}
          <div className="hidden lg:block space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-300 hover:text-blue-300 transition-colors duration-300 leading-relaxed">
                2 Hotunui Drive, Mount Wellington<br />
                Auckland 1060, New Zealand
              </p>
            </div>
            
            <p className="text-slate-400 text-xs font-medium tracking-wide">
              &copy; {new Date().getFullYear()} BISHMAN LIMITED. All rights reserved.
            </p>
          </div>
        </div>

        {/* Navigation Links - Mobile/Tablet */}
        <div className="w-full lg:hidden my-8">
          <div className="grid grid-cols-2 gap-4 text-sm mb-8">
            <Link 
              href="/profile/company" 
              className="block text-slate-300 hover:text-blue-300 transition-colors duration-300 py-2 px-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50"
            >
              Company Profile
            </Link>
            <Link 
              href="/profile/team" 
              className="block text-slate-300 hover:text-cyan-300 transition-colors duration-300 py-2 px-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50"
            >
              Our Team
            </Link>
            <Link 
              href="/projects" 
              className="block text-slate-300 hover:text-purple-300 transition-colors duration-300 py-2 px-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50"
            >
              Projects
            </Link>
            <Link 
              href="/services" 
              className="block text-slate-300 hover:text-green-300 transition-colors duration-300 py-2 px-4 bg-gray-800/50 rounded-xl hover:bg-gray-700/50"
            >
              Services
            </Link>
          </div>

          {/* Social Media Buttons - Mobile */}
          <div className="flex gap-4 mb-6">
            {/* LinkedIn Button */}
            <Link 
              href="https://www.linkedin.com/company/bishman-limited/?originalSubdomain=nz"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(59,130,246,0.3)] border border-blue-500/20 hover:border-blue-400/40"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/0 via-white/20 to-blue-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </Link>
            
            {/* Email Button */}
            <Link 
              href="mailto:info@bishman.co.nz"
              className="group relative overflow-hidden bg-gradient-to-r from-cyan-600 to-cyan-700 hover:from-cyan-500 hover:to-cyan-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(6,182,212,0.3)] border border-cyan-500/20 hover:border-cyan-400/40"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-white/20 to-cyan-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </Link>
            
            {/* Phone Button */}
            <Link 
              href="tel:+6495550123"
              className="group relative overflow-hidden bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(34,197,94,0.3)] border border-green-500/20 hover:border-green-400/40"
            >
              {/* Animated background */}
              <div className="absolute inset-0 bg-gradient-to-r from-green-600/0 via-white/20 to-green-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
              
              <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </Link>
          </div>
          
          {/* Address and copyright - Mobile */}
          <div className="space-y-3 text-sm">
            <div className="flex items-start gap-3">
              <svg className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <p className="text-slate-300 hover:text-blue-300 transition-colors duration-300 leading-relaxed">
                2 Hotunui Drive, Mount Wellington<br />
                Auckland 1060, New Zealand
              </p>
            </div>
            
            <p className="text-slate-400 text-xs font-medium tracking-wide">
              &copy; {new Date().getFullYear()} BISHMAN LIMITED. All rights reserved.
            </p>
          </div>
        </div>

        {/* Right section */}
        <div className="flex flex-col justify-between items-end h-full min-h-[280px] lg:min-h-[320px] w-full lg:w-auto">
          {/* Navigation Links - Desktop */}
          <div className="hidden lg:block absolute right-32 space-y-2 text-sm mb-6">
            <div className="text-lg flex items-center gap-16">
              <Link 
                href="/profile/company" 
                className="block text-slate-300 hover:text-blue-300 transition-colors duration-300 py-1"
              >
                Company Profile
              </Link>
              <Link 
                href="/profile/team" 
                className="block text-slate-300 hover:text-cyan-300 transition-colors duration-300 py-1"
              >
                Our Team
              </Link>
              <Link 
                href="/projects" 
                className="block text-slate-300 hover:text-purple-300 transition-colors duration-300 py-1"
              >
                Projects
              </Link>
              <Link 
                href="/services" 
                className="block text-slate-300 hover:text-green-300 transition-colors duration-300 py-1"
              >
                Services
              </Link>
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="hidden lg:flex flex-col items-end space-y-8 pr-4">
            {/* Auckland Sky Tower inspired element */}
            <div className="relative">
              <div className="w-2 h-24 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent rounded-full opacity-60 animate-pulse"></div>
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-blue-400 rounded-full animate-ping"></div>
            </div>
            
            {/* Floating city lights */}
            <div className="relative w-24 h-16">
              <div className="absolute top-2 right-4 w-3 h-3 bg-gradient-to-br from-blue-400 to-cyan-400 rounded-full animate-pulse shadow-lg shadow-blue-400/50"></div>
              <div className="absolute top-8 right-8 w-2 h-2 bg-gradient-to-br from-cyan-400 to-blue-400 rounded-full animate-pulse shadow-md shadow-cyan-400/40" style={{ animationDelay: '0.7s' }}></div>
              <div className="absolute top-12 right-2 w-2.5 h-2.5 bg-gradient-to-br from-blue-300 to-cyan-300 rounded-full animate-pulse shadow-md shadow-blue-300/40" style={{ animationDelay: '1.4s' }}></div>
              <div className="absolute bottom-0 right-6 w-1.5 h-1.5 bg-gradient-to-br from-cyan-300 to-blue-300 rounded-full animate-pulse shadow-sm shadow-cyan-300/30" style={{ animationDelay: '0.3s' }}></div>
            </div>
            
            {/* Tech pattern decoration */}
            <div className="flex flex-col space-y-2 opacity-20">
              <div className="w-16 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent"></div>
              <div className="w-12 h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent ml-4"></div>
              <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-300 to-transparent"></div>
            </div>
          </div>
          
          {/* CTA Button */}
          <div className="w-full lg:w-auto mt-auto">
            <Link href="/contacts">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 lg:px-8 lg:py-4 rounded-2xl text-white font-semibold text-base lg:text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] border border-blue-500/20 hover:border-blue-400/40 w-full lg:w-auto text-center">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-white/20 to-cyan-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                
                {/* Button content */}
                <div className="relative flex items-center justify-center gap-3">
                  <span>Get In Touch</span>
                  <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Bottom highlight line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      {/* Source link */}
      <div className="absolute left-1/2 bottom-3 transform -translate-x-1/2">
        <Link href="https://github.com/cole-howard-nz/bishman-website">
          <div className="group flex items-center gap-2 text-xs text-slate-500 hover:text-blue-400 transition-all duration-300">
            <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
            </svg>
            <span className="font-mono">colecodes</span>
          </div>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;