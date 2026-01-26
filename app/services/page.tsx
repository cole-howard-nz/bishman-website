'use client'

import React, { useState, useEffect } from 'react'
import { 
  Zap, 
  Building2, 
  Cpu, 
  Shield, 
  Lightbulb, 
  Cable, 
  Gauge, 
  Settings,
  Network,
  Anchor,
  Server,
  ThermometerSun,
  CheckCircle2,
  ArrowRight,
  FileText,
  Users,
  Award,
  Target,
  MessageCircle,
  Wrench,
  Sparkles
} from 'lucide-react'
import Link from 'next/link'

// Main services with proper icons
const mainServices = [
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
  }
]

// Related services
const relatedServices = [
  {
    title: "Marina Installation",
    description: "Specialized electrical design for waterfront facilities",
    icon: Anchor,
    gradient: "from-blue-500 to-cyan-600"
  },
  {
    title: "IQP Services",
    description: "Independent Qualified Person inspections and certification",
    icon: Shield,
    gradient: "from-sky-500 to-blue-600"
  },
  {
    title: "Thermal Imaging",
    description: "Thermographic auditing and preventative diagnostics",
    icon: ThermometerSun,
    gradient: "from-cyan-500 to-sky-600"
  },
  {
    title: "Solar/PV",
    description: "Solar panel installation and maintenance services",
    icon: Lightbulb,
    gradient: "from-blue-500 to-sky-600"
  }
]

// Required capabilities
const capabilities = [
  { text: "Qualified IQP personnel", icon: CheckCircle2 },
  { text: "Certified electricians", icon: CheckCircle2 },
  { text: "24/7 emergency support", icon: CheckCircle2 },
  { text: "Advanced tools & tech", icon: CheckCircle2 },
  { text: "Safety first culture", icon: CheckCircle2 },
  { text: "Project management", icon: CheckCircle2 },
  { text: "Quality assurance", icon: CheckCircle2 },
  { text: "Experienced personnel", icon: CheckCircle2 },
  { text: "Insurance coverage", icon: CheckCircle2 }
]

// Why choose us
const whyChooseUs = [
  {
    icon: Award,
    title: "Competitive",
    description: "We are competitively priced backed by 30+ years of experience. We've established strong relationships with suppliers, allowing us to pass competitive prices."
  },
  {
    icon: Users,
    title: "Agile",
    description: "Bishman's is our 100% New Zealand owned and operated company. We work with you based on the results of our quotes, site surveys, planning & project scheduling."
  },
  {
    icon: Target,
    title: "Dedicated services",
    description: "Bishman offers a comprehensive range of electrical contracting services, designed to meet your electrical requirements with reliability, expertise, and efficiency."
  },
  {
    icon: Shield,
    title: "Superb quality",
    description: "We deliver a first class quality electrical service and ensure all projects are finished to the highest standard possible. We are more than physical providers."
  }
]

const CoreServicesPage = () => {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) return null

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden my-16 rounded-[12px]">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(14, 165, 233, 0.1) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient overlays for depth */}
      <div className="absolute inset-0 bg-gradient-to-r from-sky-100/20 via-transparent to-cyan-100/20" />

      <div className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto space-y-24">
        {/* Header */}
        <div id="s" className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-sky-100 px-4 py-2 rounded-full border border-sky-300">
              Our Services
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            Core Services
          </h1>
        </div>

        {/* Main Services Section */}
        <section className='relative group'>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Sparkles className="text-sky-600" size={28} />
              <h2 className='text-slate-800 text-4xl md:text-5xl font-bold'>
                Key Services
              </h2>
            </div>
            <div className="w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 rounded-full" />
          </div>
          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainServices.map((service, index) => {
                const Icon = service.icon
                return (
                  <div
                    key={index}
                    className="group/card relative bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-6 hover:bg-white/80 hover:border-sky-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
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

        {/* Consultation CTA */}
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
                Request an Electrical Services Consultation
              </h2>
              <p className="text-slate-300 mb-8 text-lg max-w-2xl mx-auto">
                Let's discuss designing, installing, validating and executing any projects we may have for you
              </p>
              <Link href="/contacts#s">
                <button className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  
                  <div className="relative flex items-center gap-2">
                    <span className="font-semibold">Schedule Now</span>
                    <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </div>
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section className='relative group'>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-sky-600" size={28} />
              <h2 className='text-slate-800 text-4xl md:text-5xl font-bold'>
                Our Capabilities
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

            <div className="relative grid md:grid-cols-2 gap-12 items-center">
              <div className='space-y-6'>
                <h3 className="text-2xl font-bold text-slate-800">
                  Required capabilities list
                </h3>
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  At Bishman, we offer comprehensive electrical engineering services supported by qualified 
                  personnel, advanced equipment, and a commitment to excellence. Whether you need an upgrade 
                  to existing infrastructure or a complete new installation, we are here to help.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-x-8 gap-y-4">
                {capabilities.map((capability, index) => {
                  const Icon = capability.icon
                  return (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-gradient-to-br from-blue-600 to-cyan-600 rounded-full flex items-center justify-center flex-shrink-0 shadow-sm">
                        <Icon size={14} className="text-white" />
                      </div>
                      <span className="text-slate-700 text-sm font-medium">
                        {capability.text}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Related Services */}
        <section className='relative group'>
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Settings className="text-cyan-600" size={28} />
              <h2 className='text-slate-800 text-4xl md:text-5xl font-bold'>
                Related Services
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
              {relatedServices.map((service, index) => {
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

        {/* Why We're the Best Choice */}
        <section className='relative group'>          
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="relative grid lg:grid-cols-2 gap-12 items-start">
              {/* Left Column - Sticky */}
              <div className="lg:sticky lg:top-24 self-start">
                <div className='space-y-6'>
                  <h3 className="text-4xl md:text-5xl font-bold text-slate-800 group-hover:text-slate-900 transition-colors">
                    Why we're the{' '}
                    <br />
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                      best choice
                    </span>
                  </h3>
                  <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                    Since our foundation, we have established a strong track record 
                    of delivering exceptional electrical services across New Zealand, 
                    earning the trust of clients nationwide.
                  </p>
                  <div className="pt-4">
                    <Link href="/contacts#s">
                      <button className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 text-white px-8 py-3 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                        
                        <div className="relative flex items-center gap-2">
                          <span className="font-medium">Get Started</span>
                          <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                        </div>
                      </button>
                    </Link>
                  </div>
                </div>
              </div>

              {/* Right Column - Scrolling Reasons */}
              <div className="space-y-8">
                {whyChooseUs.map((reason, index) => {
                  const Icon = reason.icon
                  return (
                    <div key={index} className="flex gap-6">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-to-br from-sky-100 to-blue-100 rounded-xl flex items-center justify-center">
                          <Icon size={24} className="text-blue-600" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-xl font-bold text-slate-800 mb-3">
                          {reason.title}
                        </h4>
                        <p className="text-slate-600 leading-relaxed">
                          {reason.description}
                        </p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ CTA Section */}
        <section className='relative group'>
          <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-12 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
            {/* Background effects */}
            <div className="absolute inset-0 rounded-3xl overflow-hidden">
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-br from-sky-500/10 to-cyan-500/10 rounded-full blur-3xl group-hover:scale-150 transition-transform duration-700" />
            </div>

            <div className="relative z-10 text-center">
              <div className="inline-block mb-6">
                <span className="bg-sky-100 text-sky-700 px-4 py-2 rounded-full text-sm font-semibold uppercase tracking-wide border border-sky-300">
                  FAQ
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-6">
                Have questions? We have{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">
                  answers
                </span>
              </h2>
              <p className="text-slate-600 text-lg mb-8 max-w-2xl mx-auto">
                Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              <Link href="/contacts#s">
                <button className="group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 text-white px-8 py-4 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25">
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                  
                  <div className="relative flex items-center gap-2">
                    <MessageCircle size={20} />
                    <span className="font-semibold">Contact Us</span>
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

export default CoreServicesPage