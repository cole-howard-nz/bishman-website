'use client'

import React, { useState, useEffect } from 'react'
import { Sparkles, Zap, Globe, Shield, Rocket, Users, ArrowUpRight, CheckCircle, LucideProps } from 'lucide-react'
import Link from 'next/link'

const iconMap: Record<number, React.ForwardRefExoticComponent<Omit<LucideProps, "ref">>> = {
  1: Globe,
  2: Shield,
  3: Zap,
  4: Users,
  5: Rocket,
  6: Sparkles
}

interface Service {
  id: number
  name: string
  blurb: string
  features?: string[]
  popular?: boolean
}

interface ServiceCardProps {
  service: Service
  index: number
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const [isHovered, setIsHovered] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const IconComponent = iconMap[service.id] || Sparkles
  
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), index * 100)
    return () => clearTimeout(timer)
  }, [index])

  return (
    <div 
      className={`group relative overflow-hidden transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Main Card Container */}
      <div className="relative h-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/20">
        
        {/* Animated background effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          {/* Floating orbs */}
          <div className="absolute -top-8 -right-8 w-24 h-24 bg-gradient-to-br from-sky-500/20 to-cyan-500/10 rounded-full blur-2xl group-hover:scale-150 group-hover:rotate-45 transition-all duration-700" />
          <div className="absolute -bottom-6 -left-6 w-20 h-20 bg-gradient-to-tr from-cyan-400/15 to-sky-500/20 rounded-full blur-xl group-hover:scale-125 group-hover:-rotate-45 transition-all duration-700" />
          
          {/* Subtle grid pattern */}
          <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(14, 165, 233, 0.3) 1px, transparent 0)',
              backgroundSize: '20px 20px'
            }} />
          </div>
        </div>

        {/* Popular Badge */}
        {service.popular && (
          <div className="absolute top-6 right-6 z-10">
            <div className="bg-gradient-to-r from-yellow-400 to-amber-500 text-black text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1 shadow-lg">
              <Sparkles size={12} />
              Popular
            </div>
          </div>
        )}

        {/* Icon Section */}
        <div className="relative mb-8">
          {/* Glowing background */}
          <div className="absolute inset-0 bg-gradient-to-br from-sky-500/30 to-cyan-500/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Icon container */}
          <div className="relative w-20 h-20 bg-gradient-to-br from-sky-600/20 to-cyan-600/10 backdrop-blur-xl border border-sky-400/20 rounded-2xl flex items-center justify-center group-hover:border-sky-300/40 transition-all duration-300">
            <IconComponent 
              className={`w-10 h-10 text-sky-600 transition-all duration-500 ${
                isHovered ? 'rotate-12 scale-110 text-cyan-600' : ''
              }`} 
            />
            
            {/* Pulse ring effect */}
            <div className="absolute inset-0 rounded-2xl border border-sky-400/30 scale-100 group-hover:scale-110 transition-transform duration-500" />
            <div className="absolute inset-0 rounded-2xl border border-cyan-400/20 scale-100 group-hover:scale-125 transition-transform duration-700" />
          </div>

          {/* Floating particles */}
          <div className="absolute top-1 right-1 w-1.5 h-1.5 bg-cyan-400/60 rounded-full animate-bounce" style={{ animationDelay: '0.5s' }} />
          <div className="absolute bottom-2 left-1 w-1 h-1 bg-sky-400/70 rounded-full animate-bounce" style={{ animationDelay: '1s' }} />
        </div>

        {/* Content Section */}
        <div className="space-y-6">
          {/* Title */}
          <h3 className="text-2xl font-bold text-slate-800 group-hover:bg-gradient-to-r group-hover:from-sky-700 group-hover:to-cyan-700 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
            {service.name}
          </h3>
          
          {/* Description */}
          <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
            {service.blurb}
          </p>

          {/* Features List */}
          <div className="space-y-3">
            {service.features?.map((feature, idx) => (
              <div 
                key={idx} 
                className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300"
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <CheckCircle size={16} className="text-green-600 flex-shrink-0" />
                <span className="text-slate-500 text-sm group-hover:text-slate-600 transition-colors duration-300">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-8 pt-6 border-t border-white/10">
          <button className="group/btn relative w-full bg-gradient-to-r from-sky-600/20 to-cyan-600/20 hover:from-sky-600/30 hover:to-cyan-600/30 backdrop-blur-xl border border-sky-400/20 hover:border-sky-300/40 rounded-2xl px-6 py-4 text-slate-800 font-medium transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-sky-500/20 overflow-hidden">
            
            {/* Button background effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-sky-600/0 via-sky-500/10 to-cyan-600/0 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
            
            <div className="relative flex items-center justify-center gap-3">
              <span>Learn More</span>
              <ArrowUpRight className="w-5 h-5 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
            </div>
          </button>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 left-4 w-1 h-12 bg-gradient-to-b from-sky-400 via-cyan-400 to-transparent opacity-20 group-hover:opacity-60 group-hover:h-16 transition-all duration-500" />
        
        {/* Corner accent */}
        <div className="absolute bottom-4 right-4 w-8 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-sky-400 opacity-0 group-hover:opacity-50 group-hover:w-12 transition-all duration-500" />
        
        {/* Status indicator */}
        <div className="absolute top-6 left-6 w-2 h-2 bg-gradient-to-r from-green-400 to-cyan-400 rounded-full animate-pulse opacity-60" />
      </div>
    </div>
  )
}

const ServiceShowcase = ({ services }:{ services: Service[] }) => {
  const [visibleSection, setVisibleSection] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setVisibleSection(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="rounded-[12px] w-full py-16 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50">
        {/* Floating particles */}
        {Array.from({ length: 15 }, (_, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-transparent to-sky-50/40" />
      </div>

      {/* Floating geometric elements */}
      <div className="absolute top-20 right-20 w-3 h-20 bg-gradient-to-b from-sky-400/40 to-transparent blur-sm animate-pulse" />
      <div className="absolute bottom-20 left-20 w-2 h-16 bg-gradient-to-t from-cyan-400/30 to-transparent blur-sm animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 px-8">
        <div className={`transition-all duration-700 ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-sky-100 to-cyan-100 backdrop-blur-xl px-6 py-3 rounded-full border border-sky-300 shadow-lg">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-slate-700 via-sky-600 to-cyan-600 bg-clip-text text-transparent">
            Electrical Solutions
          </h2>
          
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          </p>

          {/* Animated divider */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-sky-400" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-sky-400 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-sky-500 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400" />
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>

      {/* Bottom CTA Section */}
      <div className={`relative z-10 text-center mt-20 transition-all duration-700 delay-500 ${visibleSection ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
        <div className="max-w-3xl mx-auto px-6">
          <p className="text-slate-500 mb-8">
            Need a custom electrical solution? Our expert team is ready to tackle any challenge.
          </p>
          
            <Link href="/contacts">
              <button className="group relative overflow-hidden bg-gradient-to-br from-[#284d85] to-[#3D70BC] hover:from-[#3D70BC] hover:to-[#4A7BC8] px-8 py-4 rounded-2xl text-white font-semibold text-lg transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-sky-500/30 border border-sky-400/20">
                {/* Shine effect */}
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 ease-out" />
                
                <div className="relative flex items-center gap-3">
                  <span>Contact Us</span>
                </div>
              </button>
            </Link>
        </div>
      </div>
    </div>
  )
}

export default ServiceShowcase