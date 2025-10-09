import React from 'react'
import BishmanEdge from '@/components/profile/bishman-edge'
import OurBusiness from '@/components/profile/our-business'
import CapabilitiesExperience from '@/components/profile/capabilities-experience'

const Profile = () => {
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

      <div className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto space-y-16">
        {/* Header */}
        <div id="s" className="text-center mb-16">
          <div className="inline-block mb-6">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-sky-100 px-4 py-2 rounded-full border border-sky-300">
              Company Profile
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-4">
            About Bishman
          </h1>
        </div>

        <BishmanEdge />
        <OurBusiness />
        <CapabilitiesExperience />
      </div>
    </div>
  )
}

export default Profile