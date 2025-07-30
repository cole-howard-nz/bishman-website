import React from 'react'
import { Role, RoleDescriptions } from '@/lib/types'
import RoleShowcase from '@/components/role-showcase'
import { team } from '@/lib/temp-data'

const Team = () => {
  const roles = Object.values(Role)

  return (
    <div className="space-y-6">
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
