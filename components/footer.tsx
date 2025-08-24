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
      
      <div className="relative flex justify-between items-start p-8 min-h-[320px]">
        {/* Left section */}
        <div className="flex flex-col justify-between h-full min-h-[320px] max-w-md">
          {/* Logo */}
          <div className="group">
            <Link href="/" className="inline-block">
              <div className="relative">
                <Image 
                  src="/bishman_white.svg" 
                  width={180} 
                  height={180} 
                  alt="Bishman Logo"
                  className="transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                />
              </div>
            </Link>
          </div>
          
          {/* Navigation Links */}
          <div className="absolute right-32 space-y-2 text-sm mb-6">
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
          
          {/* Address and copyright */}
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
        <div className="flex flex-col justify-between items-end h-full min-h-[320px]">
          {/* Decorative elements */}
          <div className="flex flex-col items-end space-y-8 pr-4">
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
          <div>
            <Link href="/contacts">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(59,130,246,0.3)] border border-blue-500/20 hover:border-blue-400/40">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-600/0 via-white/20 to-cyan-600/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
                
                {/* Button content */}
                <div className="relative flex items-center gap-3">
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