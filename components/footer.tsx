import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50 border border-sky-200/60 text-slate-800 rounded-3xl">
      {/* Background patterns */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-100/20 via-transparent to-blue-100/20"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(56,189,248,0.15),transparent_50%)]"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(59,130,246,0.12),transparent_50%)]"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-[0.05] bg-[linear-gradient(rgba(56,189,248,0.3)_1px,transparent_1px),linear-gradient(90deg,rgba(56,189,248,0.3)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
      
      <div className="relative p-6">
        {/* Main content grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-8">
          
          {/* Left section - Logo and Address */}
          <div className="lg:col-span-4 flex lg:flex-col flex-row justify-between gap-8 item-center h">
            <div className="group">
              <Link href="/" className="inline-block">
                <Image 
                  src="/bishman_black.svg" 
                  width={150} 
                  height={150} 
                  alt="Bishman Logo"
                  className="lg:w-48 lg:h-48 w-42 h-42 xs:w-32 xs:h-32 transition-all duration-500 group-hover:scale-105 group-hover:drop-shadow-[0_0_20px_rgba(56,189,248,0.4)]"
                />
              </Link>
            </div>
            
            <div className="flex items-center">
              <div className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sky-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <p className="text-slate-700 hover:text-sky-700 transition-colors duration-300 leading-relaxed text-sm">
                  2 Hotunui Drive, Mount Wellington<br />
                  Auckland 1060, New Zealand
                </p>
              </div>
            </div>
          </div>

          {/* Middle section - Navigation */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <h3 className="text-slate-800 font-semibold text-lg mb-6">Quick Links</h3>
              <div className="grid grid-cols-2 gap-3">
                <Link 
                  href="/profile" 
                  className="group flex items-center gap-2 text-slate-700 hover:text-sky-700 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-sky-50/50"
                >
                  <span className="text-sm">Company Profile</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/team" 
                  className="group flex items-center gap-2 text-slate-700 hover:text-blue-700 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-blue-50/50"
                >
                  <span className="text-sm">Our Team</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/projects" 
                  className="group flex items-center gap-2 text-slate-700 hover:text-indigo-700 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-indigo-50/50"
                >
                  <span className="text-sm">Projects</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
                <Link 
                  href="/services" 
                  className="group flex items-center gap-2 text-slate-700 hover:text-sky-700 transition-all duration-300 py-2 px-3 rounded-lg hover:bg-sky-50/50"
                >
                  <span className="text-sm">Services</span>
                  <svg className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>

          {/* Right section - CTA and Social */}
          <div className="lg:col-span-3 flex flex-col justify-between items-start lg:items-end gap-8">
            <div className="w-full">
              <h3 className="text-slate-800 font-semibold text-lg mb-6 lg:text-right">Connect With Us</h3>
              <div className="flex gap-3 lg:justify-end">
                <Link 
                  href="https://www.linkedin.com/company/bishman-limited/?originalSubdomain=nz"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative overflow-hidden bg-gradient-to-r from-sky-400 to-sky-500 hover:from-sky-500 hover:to-sky-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(56,189,248,0.4)] border border-sky-300/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-sky-400/0 via-white/30 to-sky-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <svg className="w-5 h-5 text-white relative z-10" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </Link>
                
                <Link 
                  href="mailto:info@bishman.co.nz"
                  className="group relative overflow-hidden bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-500 hover:to-blue-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(59,130,246,0.4)] border border-blue-300/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/30 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </Link>
                
                <Link 
                  href="tel:+6495550123"
                  className="group relative overflow-hidden bg-gradient-to-r from-green-400 to-green-500 hover:from-green-500 hover:to-green-600 p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-[0_10px_20px_rgba(34,197,94,0.4)] border border-green-300/40"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-green-400/0 via-white/30 to-green-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  <svg className="w-5 h-5 text-white relative z-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </Link>
              </div>
            </div>
            
            <Link href="/contacts" className="w-full lg:w-auto">
              <button className="group relative overflow-hidden bg-gradient-to-r from-sky-400 to-blue-500 hover:from-sky-500 hover:to-blue-600 px-8 py-4 rounded-2xl text-white font-semibold text-base transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(56,189,248,0.4)] border border-sky-300/40 w-full">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-400/0 via-white/30 to-blue-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
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

        {/* Bottom bar */}
        <div className="border-t border-sky-200/40 pt-6 gap-4">
          <p className="text-slate-600 text-xs font-medium tracking-wide text-center">
            &copy; {new Date().getFullYear()} BISHMAN LIMITED. All rights reserved.
          </p>
          
          <div className='flex align-center justify-center mt-2'>
            <Link href="https://github.com/cole-howard-nz/bishman-website">
              <div className="group flex items-center gap-2 text-xs text-slate-600 hover:text-sky-700 transition-all duration-300">
                <svg className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0C5.374 0 0 5.373 0 12 0 17.302 3.438 21.8 8.207 23.387c.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/>
                </svg>
                <span className="font-mono">colecodes</span>
              </div>
            </Link>
          </div>
          
        </div>
      </div>
      
      {/* Bottom highlight line */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-sky-400/60 to-transparent"></div>
    </footer>
  );
};

export default Footer;