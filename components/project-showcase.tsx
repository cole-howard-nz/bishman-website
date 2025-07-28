import { Project } from '@/lib/types'
import React from 'react'
import ProjectTile from './project-tile'

interface ProjectShowcaseProps {
  header: string
  projects: Project[]
}

const ProjectShowcase = ({ header, projects }: ProjectShowcaseProps) => {
  return (
    <div className='w-full'>
      <h2 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold pb-2'>{ header }</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[1fr] m-auto p-2 rounded-[12px] bg-gradient-to-br from-[#b2c6f8] via-[#758bc7] to-[#8ca6e9]  border-[#758bc7] border-1">
        { projects.map( project => <ProjectTile key={ project.id } project={ project }/>)}
      </div>
    </div>
  )
}

export default ProjectShowcase