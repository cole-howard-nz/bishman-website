import { Team } from '@/lib/types'
import React from 'react'
import Image from 'next/image'

interface TeamMemberTileProps {
  member: Team
}

const TeamMemberTile = ({ member }: TeamMemberTileProps) => {
  return (
    <div className="w-full bg-[#7395f1] rounded-xl shadow-sm p-4 flex flex-col gap-4 items-start">
      <div className="flex items-center w-full gap-2">
        <div className="w-full aspect-[3/4] relative rounded-lg overflow-hidden">
          <Image
            src={'/dad.jpg'}
            fill
            className="object-cover"
            alt={member.name}
          />
        </div>
        <div className='w-full'>
          <h3 className="font-semibold text-lg leading-tight mt-3 text-gray-100">{member.name}</h3>
          <p className="text-sm font-medium text-gray-200">{member.role}</p>
          <p className="text-sm font-medium text-gray-200">{member.email}</p>
        </div>
      </div>

      <div className="flex-1 text-gray-100 text-sm self-center">
        {member.blurb}
      </div>
    </div>
  )
}

export default TeamMemberTile
