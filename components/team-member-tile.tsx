"use client"

import { Team } from '@/lib/types'
import React from 'react'
import Image from 'next/image'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

interface TeamMemberTileProps {
  member: Team
}

const MAX_PREVIEW_LENGTH = 300

const TeamMemberTile = ({ member }: TeamMemberTileProps) => {
  const preview =
    member.blurb.length > MAX_PREVIEW_LENGTH
      ? member.blurb.slice(0, MAX_PREVIEW_LENGTH) + "..."
      : member.blurb

  return (
    <div className="w-full bg-gradient-to-br from-[#9bb5f7]/80 via-[#758bc7]/80 to-[#4d7aed]/80 border-[#758bc7] border rounded-xl shadow-md p-3 flex gap-3 items-center">
      
      <div className="w-28 h-28 md:w-32 md:h-32 lg:w-36 lg:h-36 relative rounded-lg overflow-hidden shrink-0">
        <Image
          src={'/default.jpg'}
          fill
          className="object-cover"
          alt={member.name}
        />
      </div>

      <div className="flex flex-col justify-between flex-1">
        <div className="space-y-0.5">
          <h3 className="font-semibold text-base md:text-lg leading-tight text-gray-100">{member.name}</h3>
          <p className="text-sm text-gray-200">{member.role}</p>
          <p className="text-sm text-gray-200">{member.email}</p>
        </div>

        <div className="text-gray-100 text-sm leading-snug mt-1">
          {preview}
          {member.blurb.length > MAX_PREVIEW_LENGTH && (
            <Dialog>
              <DialogTrigger asChild>
                <Button
                  variant="link"
                  className="text-gray-200 p-0 ml-1 h-fit underline"
                >
                  Read More
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-lg bg-gradient-to-br from-[#4d7aed]/70 via-[#758bc7] to-[#4d7aed]/70 border-[#758bc7] border rounded-xl shadow-sm p-4">
                <DialogHeader>
                  <DialogTitle className='text-[#f0f1f1]'>{member.name}</DialogTitle>
                  <DialogDescription className='text-[#f0f1f1]'>
                    {member.role} — {member.email}
                  </DialogDescription>
                </DialogHeader>
                <p className="text-[#f0f1f1] mt-2">{member.blurb}</p>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  )
}

export default TeamMemberTile
