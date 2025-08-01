import React from 'react'
import { Role, RoleDescriptions } from '@/lib/types'
import RoleShowcase from '@/components/role-showcase'
import { team } from '@/lib/temp-data'

const Team = () => {
  const roles = Object.values(Role)

  return (
    <div className="my-16">
      <div className="my-16 text-center py-10 px-4 bg-gradient-to-b from-[#9bb5f7] via-[#758bc7] to-[#4d7aed] border-[#758bc7] border-1 text-white rounded-xl shadow-md">
        <h1 className="text-4xl font-bold mb-2">Meet the Bishman Team</h1>
        <p className="text-lg max-w-2xl mx-auto text-left">
          These are the passionate individuals behind Bishman. From design to development,
          strategy to support—our team works together to build impactful solutions every day.
        </p>
      </div>

      {roles.map((role) => {
        const members = team.filter((member) => member.role === role)

        return (
          <RoleShowcase key={ role } header={ role } blurb={ RoleDescriptions[role] } team={ members } />
        )
      })}
    </div>
  )
}

export default Team
