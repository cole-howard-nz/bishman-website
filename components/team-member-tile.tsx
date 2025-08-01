import { Team } from '@/lib/types'
import React from 'react'
import Image from 'next/image'

interface TeamMemberTileProps {
  member: Team
}

const TeamMemberTile = ({ member }: TeamMemberTileProps) => {
  return (
    <div className="w-[22rem] h-[30rem] bg-[#7395f1] rounded-xl shadow-sm p-4 text-center flex flex-col justify-between">
      <div className="w-full h-3/4 relative rounded-lg overflow-hidden">
        <Image
          src={ '/Gibby.webp' }
          layout="fill"
          objectFit="cover"
          alt={member.name}
        />
      </div>

      <div className="text-left mt-6 text-gray-100 ">
        <h3 className="font-semibold text-lg leading-tight">{member.name}</h3>
        <p className="text-sm font-medium">{member.role}</p>
        <p className="text-sm mt-2 line-clamp-3">{member.blurb}</p>
      </div>
    </div>
  )
}

export default TeamMemberTile
