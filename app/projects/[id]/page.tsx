import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/temp-data'
import Link from 'next/link'
import { Button } from '@/components/ui/button'

type ProjectPageProps = {
  params: {
    id: string
  }
}

const ProjectPage = ({ params }: ProjectPageProps) => {
  const projectId = Number(params.id)
  const project = projects.find(p => p.id === projectId)

  if (isNaN(projectId) || !project) {
    return notFound()
  }

  return (
    <section className="p-2">
      <div className='mt-16 flex items-center gap-2 text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold'>
        <Link href={'/projects'}>Projects </Link>  
        <p>&gt;</p>
        <p>{project.name}</p>
      </div>

      <div className="grid grid-cols-1 gap-2 my-4">
        <div className='w-full border-[#051123] border-1 rounded-xl bg-[url(/skytower.png)] bg-center bg-cover h-[66dvh]'></div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
          <div className='w-half border-[#051123] border-1 rounded-xl bg-[url(/skytower.png)] bg-center bg-cover h-[33dvh]'></div>
          <div className='w-half border-[#051123] border-1 rounded-xl bg-[url(/skytower.png)] bg-center bg-cover h-[33dvh]'></div>
        </div>
      </div>

      <div className="text-white space-y-4 my-16">
        <div className="flex items-center justify-between">
          <h1 className="text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold">{project.name}</h1>          
          { project.isComplete ? 
            <Button className='rounded-full w-fit cursor-default bg-green-500/60 hover:bg-green-500/60 p-4 px-8 text-lg h-6'>Complete</Button> :
            <Button className='rounded-full w-fit cursor-default bg-orange-600/60 hover:bg-orange-600/60 p-4 px-8 text-lg h-6'>Ongoing</Button>
          }
        </div>

        <div className='flex flex-col justify-between bg-gradient-to-br from-[#b2c6f8] via-[#758bc7] to-[#8ca6e9]  border-[#758bc7] border-1 rounded-[12px] p-2'>
          <p className="pb-8">{project.blurb}</p>

          <section className='flex gap-2'>
            <div className='flex gap-1 items-center bg-[#284d85] w-fit p-2 px-4 text-gray-100 font-normal rounded-[12px] text-sm'>
              <Image alt='Clock' src={ '/schedule.svg'} height={18} width={18}/>{ project.startDate }
            </div>
            { project.finishDate && 
              <div className='flex gap-1 items-center bg-[#284d85] w-fit p-2 px-4 text-gray-100 font-normal rounded-[12px] text-sm'>
                <Image alt='Calendar' src={ '/today.svg'} height={16} width={16}/>{ project.finishDate }
              </div>
            }
            <div className='flex gap-1 items-center bg-[#284d85] w-fit p-2 px-4 text-gray-100 font-normal rounded-[12px] text-sm'>
              <Image alt='Location' src={ '/location.svg'} height={18} width={18}/>{ project.location }
            </div>
          </section>
        </div>
      </div>
    </section>
  )
}

export default ProjectPage
