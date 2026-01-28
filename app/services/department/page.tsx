'use client'

import React, { useState, useEffect } from 'react'
import { 
  Wrench,
  Shield,
  Clock,
  CheckCircle2,
  ArrowRight,
  FileCheck,
  Zap,
  ThermometerSun,
  Battery,
  Sun,
  Lightbulb,
  PhoneCall,
  Award,
  Users,
  Target,
  ClipboardCheck
} from 'lucide-react'
import Link from 'next/link'

const Gauge = ({ size, className }: { size: number, className: string }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 14 4-4"/>
    <path d="M3.34 19a10 10 0 1 1 17.32 0"/>
  </svg>
)

// Service offerings from the proposal
const maintenanceServices = [
  {
    title: "MSB/Distribution Boards",
    description: "Visual inspections, cleaning, and comprehensive reporting of main switchboards and distribution boards",
    icon: Zap,
    gradient: "from-blue-500 to-cyan-600",
    frequency: "Annual"
  },
  {
    title: "Thermal Imaging",
    description: "Thermal imaging and detailed reporting for MSBs and site-wide distribution boards",
    icon: ThermometerSun,
    gradient: "from-orange-500 to-red-600",
    frequency: "Annual"
  },
  {
    title: "RCD Testing",
    description: "Testing of installed RCD units at switchboards and field RCD units on walls",
    icon: Shield,
    gradient: "from-green-500 to-emerald-600",
    frequency: "Annual"
  },
  {
    title: "Emergency Lighting",
    description: "6-month and 12-month testing with IQP 12A sign off for BWOF compliance",
    icon: Lightbulb,
    gradient: "from-yellow-500 to-orange-600",
    frequency: "6-Monthly"
  },
  {
    title: "UPS Systems",
    description: "Preventative maintenance, battery discharge tests, and system optimization",
    icon: Battery,
    gradient: "from-purple-500 to-pink-600",
    frequency: "6-Monthly"
  },
  {
    title: "Solar/PV Systems",
    description: "Panel cleaning, visual inspection, string testing, and inverter maintenance",
    icon: Sun,
    gradient: "from-amber-500 to-yellow-600",
    frequency: "Annual"
  }
]

// Additional services
const additionalServices = [
  {
    title: "EV Chargers",
    description: "Code compliance electrical tests and inspection reports",
    icon: Zap,
    gradient: "from-sky-500 to-blue-600"
  },
  {
    title: "Lighting Control",
    description: "Health checks on DALI controllers and relay units",
    icon: Lightbulb,
    gradient: "from-cyan-500 to-sky-600"
  },
  {
    title: "Power Factor Correction",
    description: "Cleaning, servicing, and inspection reports",
    icon: Gauge,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "Earthing Systems",
    description: "Visual inspection of main earthing and connection tightness verification",
    icon: Shield,
    gradient: "from-green-500 to-emerald-600"
  }
]

// Why choose service department
const benefits = [
  {
    icon: Clock,
    title: "24/7 Availability",
    description: "Round-the-clock emergency support through our dedicated business line with minimum 3-hour callout response"
  },
  {
    icon: Users,
    title: "Experienced Team",
    description: "Backed by Bishman's head office and production team with over 30 years of proven track record"
  },
  {
    icon: FileCheck,
    title: "Compliance Assurance",
    description: "All appropriate test sheets and paperwork kept up to date for authorities and building WOFs"
  },
  {
    icon: Target,
    title: "Flexible Approach",
    description: "Open book arrangement providing the flexibility that both organizations require"
  }
]

const ServiceDepartmentPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden my-16 rounded-[12px]">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100/20 via-transparent to-cyan-100/20" />

      <div className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div id="s" className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-cyan-700 text-sm font-medium tracking-wider uppercase bg-cyan-100 px-4 py-2 rounded-full border border-cyan-300">
              Service Department
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6">
            Ongoing Support &
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-sky-600">
              Preventative Maintenance
            </span>
          </h1>

          <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
            Dedicated maintenance services ensuring your electrical systems remain compliant, 
            safe, and operating at peak efficiency
          </p>
        </div>

        {/* Key Benefits */}
        <section className='relative group'>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Award className="text-cyan-600" size={28} />
              <h2 className='text-slate-800 text-4xl md:text-5xl font-bold'>
                Service Advantages
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full" />
          </div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-sky-400/8 to-cyan-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="relative grid md:grid-cols-2 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div key={index} className="flex gap-4 bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 hover:border-cyan-200/60 transition-all duration-300">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-xl flex items-center justify-center shadow-md">
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 mb-2">{benefit.title}</h3>
                      <p className="text-slate-600 text-sm leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Core Maintenance Services */}
        <section className='relative group'>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <ClipboardCheck className="text-sky-600" size={28} />
              <h2 className='text-slate-800 text-4xl md:text-5xl font-bold'>
                Maintenance Programs
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" />
          </div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {maintenanceServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group/card relative bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 hover:border-sky-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Frequency badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-cyan-100 text-cyan-700 text-xs font-semibold px-3 py-1 rounded-full border border-cyan-300">
                        {service.frequency}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="mb-4">
                      <div className={`w-14 h-14 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-md`}>
                        <Icon size={28} className="text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-slate-800 mb-3 group-hover/card:text-slate-900 transition-colors">
                      {service.title}
                    </h3>

                    {/* Underline */}
                    <div className={`w-12 h-1 bg-gradient-to-r ${service.gradient} rounded-full mb-3`} />

                    {/* Description */}
                    <p className="text-slate-600 leading-relaxed text-sm group-hover/card:text-slate-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Additional Services */}
        <section className='relative group'>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Wrench className="text-cyan-600" size={28} />
              <h2 className='text-slate-800 text-4xl md:text-5xl font-bold'>
                Additional Services
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-sky-400 rounded-full" />
          </div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-sky-400/8 to-cyan-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="relative grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {additionalServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group/card relative bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 hover:border-cyan-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    {/* Icon */}
                    <div className="mb-4 flex justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-xl flex items-center justify-center group-hover/card:scale-110 transition-transform duration-300 shadow-md`}>
                        <Icon size={32} className="text-white" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-center font-bold text-slate-800 mb-3 group-hover/card:text-slate-900 transition-colors">
                      {service.title}
                    </h3>

                    {/* Description */}
                    <p className="text-center text-sm text-slate-600 leading-relaxed group-hover/card:text-slate-700 transition-colors">
                      {service.description}
                    </p>
                  </div>
                )
              })}
            </div>
          </div>
        </section>

        {/* Service Rates & Response */}
        <section className='relative group'>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-cyan-500/10 to-sky-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Info */}
              <div className="space-y-6">
                <div className="flex items-center gap-3 mb-4">
                  <PhoneCall className="text-cyan-600" size={32} />
                  <h2 className='text-slate-800 text-3xl md:text-4xl font-bold'>
                    24/7 Emergency Support
                  </h2>
                </div>
                
                <div className="space-y-4">
                  <div className="bg-white/60 backdrop-blur-sm border border-white/40 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <Clock className="text-cyan-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-slate-800 mb-1">Normal Business Hours</h4>
                        <p className="text-slate-600 text-sm">6:30 AM - 5:00 PM</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-5">
                    <div className="flex items-start gap-3">
                      <PhoneCall className="text-cyan-600 flex-shrink-0 mt-1" size={24} />
                      <div>
                        <h4 className="font-bold text-slate-800 mb-2">Emergency Contact</h4>
                        <a href="tel:092703644" className="text-cyan-600 font-semibold text-lg hover:text-cyan-700 transition-colors">
                          09 270 3644
                        </a>
                        <p className="text-slate-600 text-sm mt-1">Available 24/7 for emergencies</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right - Features */}
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-slate-800 mb-6">What&apos;s Included</h3>
                <div className="space-y-4">
                  {[
                    'All vehicle operating expenses (excluding parking)',
                    'Communication expenses',
                    'General equipment and tools',
                    'Comprehensive inspection reports',
                    'IQP certification sign-offs',
                    'Monthly cost reporting',
                    'Materials at cost plus 15% margin',
                    'Subcontracts at cost plus 15% margin'
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3 bg-white/40 backdrop-blur-sm rounded-lg p-4">
                      <div className="w-6 h-6 bg-gradient-to-br from-cyan-500 to-sky-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <CheckCircle2 size={14} className="text-white" />
                      </div>
                      <span className="text-slate-700 text-sm leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className='relative group'>
          <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
                backgroundSize: '40px 40px'
              }} />
            </div>

            {/* Content */}
            <div className="relative z-10 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Request a Service Agreement
              </h2>
              <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Let us create a customized preventative maintenance plan tailored to your facility&apos;s needs
              </p>
              <Link href="/contacts#s">
                <button className="group/btn relative overflow-hidden bg-gradient-to-r from-cyan-600 to-sky-600 hover:from-cyan-500 hover:to-sky-500 border border-cyan-400/30 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  
                  <div className="relative flex items-center gap-2">
                    <span className="font-semibold">Get a Quote</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ServiceDepartmentPage