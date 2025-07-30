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
    <section className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold">{ header }</h2>
      <p className="text-lg font-light mb-4">{ blurb }</p>

      <div className="flex flex-wrap gap-6">
        {team.map((member) => (
          <TeamMemberTile key={ member.id } member={ member } />
        ))}
      </div>
    </section>
  )
}

export default RoleShowcase