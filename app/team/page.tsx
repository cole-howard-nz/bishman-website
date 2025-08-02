import React from 'react'
import { team } from '@/lib/temp-data'
import TeamMemberTile from '@/components/team-member-tile'

const Team = () => {
  return (
    <div className="my-16">
      <div className="my-16 text-center py-10 px-4 bg-gradient-to-br from-[#9bb5f7] via-[#758bc7] to-[#4d7aed] border-[#758bc7] border-1 text-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-2">Meet the Bishman Team</h1>
        <p className="text-lg max-w-2xl mx-auto text-left text-[#e9e9eb]">
          These are the passionate individuals behind the Bishman name. From design to development,
          strategy to support, our team works together to build impactful solutions every day.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 justify-items-center">
        {team.map((member) => (
          <TeamMemberTile key={member.id} member={member} />
        ))}
      </div>
    </div>
  )
}

export default Team
