import React from 'react'
import { team } from '@/lib/temp-data'
import TeamMemberTile from '@/components/team-member-tile'

const Team = () => {
  return (
    <div className="min-h-screen my-16 bg-gradient-to-br rounded-[12px] from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
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
        </div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-transparent to-cyan-400/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-transparent to-sky-50/40" />
      </div>

      {/* Floating elements inspired by Sky Tower */}
      <div className="absolute top-20 right-32 w-2 h-40 bg-gradient-to-b from-sky-400/40 to-transparent blur-sm animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-32 w-2 h-32 bg-gradient-to-t from-cyan-400/30 to-transparent blur-sm animate-pulse hidden lg:block" />

      <div id="s" className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-sky-100 px-4 py-2 rounded-full border border-sky-300">
              Our Team
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-slate-800 mb-8 leading-tight">
            Meet the Bishman Team
          </h1>
          
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed mb-8">
            These are the passionate individuals behind the Bishman name. From design to development,
            strategy to support, our team works together to build impactful solutions every day.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 justify-items-center">
          {team.map((member, index) => (
            <div
              key={member.id}
              className="w-full max-w-md"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <TeamMemberTile member={member} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Team