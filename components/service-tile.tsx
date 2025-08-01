import { Service } from '@/lib/types'
import React from 'react'
import { Button } from './ui/button'
import Image from 'next/image'
import Link from 'next/link'

interface ServiceTileProps {
  service: Service
  isImageFirst: boolean
}

const ServiceTile = ({ service, isImageFirst }: ServiceTileProps) => {
  const ImageDiv = <div className='w-1/2 border-[#051123] border-1 rounded-xl bg-[url(/skytower.png)] bg-center bg-cover h-[44dvh]'></div>
  const ServiceInfo = 
    <div className='w-1/2 flex flex-col justify-between px-2'>
      <div className='text-[#f0f1f1]'>
        <h3 className='drop-shadow-[0_1.2px_1.2px_rgba(128,128,128,0.6)] text-xl font-semibold'>{ service.name }</h3>
        <p>{ service.blurb }</p>
      </div>
          
      <Link href={ '/services' }>
        <Button className='w-full bg-[#284d85] hover:bg-[#3D70BC] ease-in-out duration-200 p-4 hover:shadow-xl font-normal rounded-[8px] text-sm'>
          <div className='flex items-center gap-2'>
            See more<Image alt='See more' src={ '/see_more.svg'} height={20} width={20}/>
          </div>
        </Button>
      </Link>
    </div>
  
  const DivStyle = 'w-full flex gap-4 bg-black/20 p-2 rounded-[12px]'

  return (
    <div className='rounded-[12px]'>
      <div className='rounded-[12px]'>
        { isImageFirst ? 
        <div className={ DivStyle }>
          { ImageDiv }
          { ServiceInfo }
        </div>
          :
        <div className={ DivStyle }>
          { ServiceInfo }
          { ImageDiv }
        </div>
        }
        
      </div>
    </div>
  )
}

export default ServiceTile