import { Team } from '@/lib/types'
import React from 'react'

interface TeamMemberTile {
  member: Team
}

const TeamMemberTile = ({ member }: TeamMemberTile) => {
  return (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col space-y-2 m-auto p-2 rounded-[12px] bg-gradient-to-br from-[#b2c6f8] via-[#758bc7] to-[#8ca6e9] border-[#758bc7] border-1'>
        <span className='bg-transparent w-64 h-96' style={{ clipPath: 'circle()' }}></span>
      </div>

      <div className='flex flex-col items-center justify-center leading-3'>
        <h3 className='font-bold text-xl'>{ member.name }</h3>
        <p className='font-light text-[#3e6cb4]'>{ member.role }</p>
      </div>
    </div>
  )
}

export default TeamMemberTile