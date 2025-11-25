import React from 'react'
import Test from './test'

const ProjectShowcase = () => {
  return (
    <div className='w-full py-16 mb-4 max-w-7xl mx-auto'>
      <Test />

      {/* <h1 className='text-[#f0f1f1] drop-shadow-[0_1.8px_1.8px_rgba(0,0,0,0.6)] text-[72px] font-bold pb-2'>{ header }</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[1fr] m-auto p-2 rounded-[12px] bg-gradient-to-br from-[#b2c6f8] via-[#758bc7] to-[#8ca6e9]  border-[#758bc7] border-1">
        { projects.map( project => <ProjectTile key={ project.id } project={ project }/>)}
      </div> */}
    </div>
  )
}

export default ProjectShowcase