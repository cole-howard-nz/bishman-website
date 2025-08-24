"use client"

import { Team } from '@/lib/types'
import React, { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Mail, User, ArrowRight, Quote } from 'lucide-react'

interface TeamMemberTileProps {
  member: Team
}

const MAX_PREVIEW_LENGTH = 170

const TeamMemberTile = ({ member }: TeamMemberTileProps) => {
  const [isHovered, setIsHovered] = useState(false)
  
  const preview =
    member.blurb.length > MAX_PREVIEW_LENGTH
      ? member.blurb.slice(0, MAX_PREVIEW_LENGTH) + "..."
      : member.blurb

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="group w-full"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 overflow-hidden">
        {/* Animated background effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-16 -translate-y-16 group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 left-0 w-28 h-28 bg-gradient-to-tr from-cyan-400/8 to-blue-500/10 rounded-full blur-2xl transform -translate-x-14 translate-y-14 group-hover:scale-150 transition-transform duration-700" />
          
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>

        {/* Enhanced Quote Icon */}
        <div className="absolute top-8 right-8 opacity-5 group-hover:opacity-15 transition-opacity duration-300">
          <Quote size={40} className="text-blue-300 transform group-hover:rotate-6 transition-transform duration-300" />
        </div>

        {/* Profile Image */}
        <div className="relative mb-6 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 relative rounded-2xl overflow-hidden border-4 border-white/20 group-hover:border-blue-400/40 transition-all duration-500 shadow-xl">
              <Image
                src={member.image}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                alt={member.name}
              />
            </div>
            {/* Profile glow */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-cyan-400/10 rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
        </div>

        {/* Member Info */}
        <div className="relative text-center mb-6">
          <h3 className="text-white font-bold text-xl mb-2 group-hover:text-blue-200 transition-colors duration-300">
            {member.name}
          </h3>
          
          <div className="flex items-center justify-center gap-2 mb-2">
            <p className="text-blue-200 font-medium">{member.role}</p>
          </div>
          
          <div className="flex items-center justify-center gap-2">
            <Mail size={16} className="text-slate-400" />
            <p className="text-slate-400 text-sm">{member.email}</p>
          </div>
        </div>

        {/* Bio Preview */}
        <div className="relative">
          <p className="text-slate-200 leading-relaxed text-sm group-hover:text-white transition-colors duration-300 text-center">
            &quot;{preview}&quot;
          </p>

          {member.blurb.length > MAX_PREVIEW_LENGTH && (
            <div className="mt-4 flex justify-center">
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    variant="ghost"
                    className="group/btn relative overflow-hidden bg-white/10 hover:bg-white/20 border border-white/20 hover:border-blue-400/50 text-white px-6 py-2 rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-700" />
                    
                    <div className="relative flex items-center gap-2">
                      <span className="text-sm font-medium">Read More</span>
                      <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                    </div>
                  </Button>
                </DialogTrigger>
                
                <DialogContent className="max-w-2xl bg-slate-900/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-2xl">
                  {/* Dialog background effects */}
                  <div className="absolute inset-0 rounded-3xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-transparent rounded-full blur-3xl" />
                    <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-transparent rounded-full blur-2xl" />
                  </div>

                  <div className="relative">
                    <DialogHeader className="text-center pb-6 border-b border-white/10">
                      <div className="flex justify-center mb-4">
                        <div className="w-20 h-20 relative rounded-2xl overflow-hidden border-2 border-white/20">
                          <Image
                            src={member.image}
                            fill
                            className="object-cover"
                            alt={member.name}
                          />
                        </div>
                      </div>
                      <DialogTitle className='text-white text-2xl font-bold mb-2'>{member.name}</DialogTitle>
                      <DialogDescription className='text-slate-300 text-lg'>
                        {member.role}
                      </DialogDescription>
                      <div className="flex items-center justify-center gap-2 mt-2">
                        <Mail size={16} className="text-blue-400" />
                        <span className="text-blue-200">{member.email}</span>
                      </div>
                    </DialogHeader>
                    
                    <div className="pt-6">
                      <p className="text-slate-200 leading-relaxed text-center">&quot;{member.blurb}&quot;</p>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </div>

        {/* Accent elements */}
        <div className="absolute top-6 left-6 w-1 h-12 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent opacity-30 group-hover:opacity-80 group-hover:h-16 transition-all duration-500" />
        <div className="absolute bottom-6 right-6 w-8 h-1 bg-gradient-to-r from-transparent via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-60 group-hover:w-12 transition-all duration-500" />
      </div>
    </motion.div>
  )
}

export default TeamMemberTile