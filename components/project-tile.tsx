import { Project } from '@/lib/types'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ProjectTileProps {
  project: Project
}

const ProjectTile = ({ project }: ProjectTileProps) => {
  const completeStatus = project.isComplete ? 
    <Button className='rounded-full w-fit cursor-default bg-green-500/60 hover:bg-green-500/60 p-4 '>Complete</Button> 
      : 
    <Button className='rounded-full w-fit cursor-default bg-orange-600/60 hover:bg-orange-600/60 p-4 '>Ongoing</Button>

  const dateIcons = project.finishDate ?
    <section className='flex gap-2'>
      <div className='flex gap-1 items-center bg-[#284d85]/70 w-fit p-2 px-4 text-gray-100 font-normal rounded-[12px] text-sm'>
        <Image alt='Clock' src={ '/schedule.svg'} height={18} width={18}/>{ project.startDate }
      </div>

      <div className='flex gap-1 items-center bg-[#284d85]/70 w-fit p-2 px-4 text-gray-100 font-normal rounded-[12px] text-sm'>
        <Image alt='Calendar' src={ '/today.svg'} height={16} width={16}/>{ project.finishDate }
      </div>
    </section>
      :
    <div className='flex gap-1 items-center bg-[#284d85]/70 w-fit p-2 px-4 text-gray-100 font-normal rounded-[12px] text-sm'>
      <Image alt='Clock' src={ '/schedule.svg'} height={16} width={16}/>{ project.startDate }
    </div>

  return (
    <Link href={ '/projects/' + project.id}>
      <div className='rounded-[12px] h-full min-h-[320px]'>
        <div className='rounded-[12px] bg-[url(/skytower.png)] bg-center bg-cover h-full flex flex-col justify-between p-4'>
          <div className='flex flex-col gap-2'>
            { completeStatus }
            <h3 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(128,128,128,0.6)] text-xl font-semibold'>{ project.name }</h3>
          </div>

          <div className='flex justify-between items-center'>
            { dateIcons }

            <Button className='bg-[#284d85] hover:bg-[#3D70BC] ease-in-out duration-200 p-4 hover:shadow-xl font-normal rounded-[8px] text-sm'>
              <p>See more</p><Image alt='See more' src={ '/see_more.svg'} height={20} width={20}/>
            </Button>
          </div>
          
        </div>
      </div>
    </Link>
  )
}

export default ProjectTile