import React from 'react'
import { team } from '@/lib/temp-data'
import TeamMemberTile from '@/components/team-member-tile'

const Team = () => {
  return (
    <div className="min-h-screen my-16 bg-gradient-to-br  rounded-[12px] from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Floating elements inspired by Sky Tower */}
      <div className="absolute top-20 right-32 w-2 h-40 bg-gradient-to-b from-blue-400/30 to-transparent blur-sm animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-32 w-2 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm animate-pulse hidden lg:block" />

      <div id="s" className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-blue-400/80 text-sm font-medium tracking-wider uppercase bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
              Our Team
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
            Meet the Bishman Team
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
            These are the passionate individuals behind the Bishman name. From design to development,
            strategy to support, our team works together to build impactful solutions every day.
          </p>

          {/* Animated divider */}
          <div className="flex justify-center items-center gap-4 mt-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400/50" />
            <div className="w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" />
            <div className="w-24 h-px bg-gradient-to-r from-blue-400/50 to-blue-400/20" />
            <div className="w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>
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
