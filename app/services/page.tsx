'use client'

import React, { useState, useEffect } from 'react';
import { Zap, Clock, Wrench, CheckCircle } from 'lucide-react';

const Services = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Floating particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-400/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-transparent to-cyan-400/10" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-sky-300/30 to-transparent rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-blue-200/25 to-transparent rounded-full blur-2xl" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className={`max-w-4xl w-full transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          
          {/* Main Card */}
          <div className="relative bg-white/80 backdrop-blur-xl border border-sky-200/60 rounded-3xl p-8 md:p-12 shadow-2xl shadow-sky-300/40 overflow-hidden">
            
            {/* Card Background Effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16" />
              
              {/* Grid pattern */}
              <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                  backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.4) 1px, transparent 0)',
                  backgroundSize: '20px 20px'
                }} />
              </div>
            </div>

            {/* Content */}
            <div id="s" className="relative space-y-8 text-center">
              
              {/* Icon Section */}
              <div className="flex justify-center">
                <div className="relative">
                  {/* Glowing background */}
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-cyan-500/20 rounded-3xl blur-2xl opacity-75 animate-pulse" />
                  
                  {/* Icon container */}
                  <div className="relative w-24 h-24 bg-gradient-to-br from-sky-600/20 to-cyan-600/10 backdrop-blur-xl border-2 border-sky-400/30 rounded-3xl flex items-center justify-center">
                    <Wrench className="w-12 h-12 text-sky-600 animate-bounce" style={{ animationDuration: '2s' }} />
                    
                    {/* Orbiting dots */}
                    <div className="absolute inset-0">
                      <div className="absolute top-2 right-2 w-2 h-2 bg-cyan-400 rounded-full animate-ping" />
                      <div className="absolute bottom-2 left-2 w-2 h-2 bg-sky-400 rounded-full animate-ping" style={{ animationDelay: '0.5s' }} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Badge */}
              <div className="flex justify-center">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-sky-500/20 to-cyan-500/20 border border-sky-400/30 rounded-full px-4 py-2">
                  <Clock size={16} className="text-sky-600" />
                  <span className="text-sky-700 text-sm font-medium">Under Development</span>
                </div>
              </div>

              {/* Title */}
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-slate-800 bg-gradient-to-r from-slate-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
                  Services Page
                </h1>
                <h2 className="text-2xl md:text-3xl font-semibold text-slate-700">
                  Coming Soon
                </h2>
              </div>

              {/* Description */}
              <p className="text-slate-600 text-lg leading-relaxed max-w-2xl mx-auto">
                We&apos;re crafting something special to showcase our comprehensive electrical services. 
              </p>

              {/* Features Preview */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
                {[
                  { icon: Zap, label: 'Design & Installation' },
                  { icon: Wrench, label: 'Maintenance' },
                  { icon: CheckCircle, label: 'Testing & Compliance' }
                ].map((item, idx) => (
                  <div 
                    key={idx}
                    className="group bg-gradient-to-br from-sky-500/10 to-cyan-500/5 border border-sky-300/30 rounded-2xl p-4 hover:border-sky-400/50 hover:from-sky-500/15 hover:to-cyan-500/10 transition-all duration-300"
                    style={{ animationDelay: `${idx * 100}ms` }}
                  >
                    <item.icon className="w-6 h-6 text-sky-600 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                    <p className="text-slate-700 text-sm font-medium">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Need immediate assistance? Contact us directly at{' '}
              <a href="mailto:accounts@bishman.co.nz" className="text-sky-600 hover:text-sky-700 font-medium underline">
                accounts@bishman.co.nz
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;