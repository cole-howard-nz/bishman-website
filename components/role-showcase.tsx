import { Team } from '@/lib/types'
import React from 'react'
import TeamMemberTile from './team-member-tile'

interface RoleShowcaseProps {
  header: string
  blurb: string
  team: Team[]
}

const RoleShowcase = ({ header, blurb, team }: RoleShowcaseProps) => {
  return (
    <section className="py-8">
      <h2 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold'>{ header } Team</h2>
      <h2 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-xl font-semibold pb-4'>{ blurb }</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-2">
        { team.map((member) => (
          <TeamMemberTile key={ member.id } member={ member } />
        ))}
      </div>
    </section>
  )
}

export default RoleShowcase