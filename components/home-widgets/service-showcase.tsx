'use client'

import React, { useState, useEffect } from 'react'
import { 
  Zap, 
  Gauge, 
  Network,
  Wrench,
  FileText,
  ArrowRight,
  Users
} from 'lucide-react'
import Link from 'next/link'

const services = [
  {
    title: "LV Installation",
    description: "Low voltage electrical systems for commercial and industrial facilities",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "HV Installation", 
    description: "High voltage power distribution and reticulation systems",
    icon: Gauge,
    gradient: "from-sky-500 to-blue-600"
  },
  {
    title: "Data & Comms",
    description: "Complete data and communication infrastructure solutions",
    icon: Network,
    gradient: "from-cyan-500 to-sky-600"
  },
  {
    title: "Maintenance",
    description: "Preventative maintenance and 24/7 emergency support services",
    icon: Wrench,
    gradient: "from-blue-500 to-sky-600"
  },
  {
    title: "Design Services",
    description: "Electrical engineering design and CAD draughting capabilities",
    icon: FileText,
    gradient: "from-sky-500 to-cyan-600"
  },
  {
    title: "Services Department",
    description: "Dedicated on-site team for ongoing maintenance and compliance",
    icon: Users,
    gradient: "from-indigo-500 to-purple-600",
    isDepartment: true
  }
]

const ServiceShowcase = () => {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="w-full py-12">
      {/* Header */}
      <div className="text-center mb-16 px-4">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-sky-100/60 to-blue-100/60 backdrop-blur-xl px-6 py-3 rounded-full border border-sky-200/60 shadow">
              Our Core Services
            </span>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service, index) => {
            const Icon = service.icon
            
            return (
              <Link 
                key={index}
                href="/services#s"
                className={ "group relative overflow-hidden rounded-2xl bg-white/10 hover:bg-white/80 backdrop-blur-sm border border-slate-200/50 hover:border-sky-300/50 transition-all duration-300 h-[200px] hover:shadow-lg" }
              >
                {/* Gradient overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Content */}
                <div className="relative h-full flex flex-col justify-between p-6">
                  <div>
                    {/* Icon and badge row */}
                    <div className="flex items-start justify-between mb-3">
                      <div className={`w-10 h-10 bg-gradient-to-br ${service.gradient} rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                        <Icon size={20} className="text-white" />
                      </div>
                      
                      {service.isDepartment && (
                        <span className="bg-indigo-100 text-indigo-700 text-[10px] font-semibold px-2 py-1 rounded-md border border-indigo-200">
                          Internal Team
                        </span>
                      )}
                    </div>

                    {/* Title */}
                    <h3 className="font-bold text-slate-800 mb-2 text-lg group-hover:text-slate-900 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-slate-600 text-xs leading-relaxed line-clamp-2">
                      {service.description}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div className={`flex items-center gap-1 text-xs font-medium transition-all duration-300 ${
                    service.isDepartment ? 'text-indigo-600' : 'text-sky-600'
                  } opacity-0 group-hover:opacity-100 group-hover:translate-x-1`}>
                    <span>Learn more</span>
                    <ArrowRight size={12} />
                  </div>
                </div>
              </Link>
            )
          })}
        </div>

        {/* Compact CTA */}
        <div className="text-center mt-8 flex justify-center items-center">
          {/* Enhanced CTA Button */}
          <button className="px-5 py-3 text-sm group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl text-white hover:scale-105 active:scale-95 flex items-center gap-3 font-semibold">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
            <div className="relative flex items-center gap-3">
              <span>View All Services</span>
              <ArrowRight size={ 18 } className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
            </div>
            {/* Glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/50 to-blue-500/50 blur-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10" />
          </button>
        </div>
      </div>
    </div>
  )
}

export default ServiceShowcase