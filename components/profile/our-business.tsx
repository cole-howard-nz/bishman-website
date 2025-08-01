import Link from 'next/link'
import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'

const OurBusiness = () => {
  return (
    <section className='pb-16'>
      <h2 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold pb-2'>Our Business</h2>
      
      <div className="flex flex-col space-y-4">
        <div className="min-h-96 flex rounded-[12px] p-2 w-full bg-gradient-to-br from-[#8ca6e9] via-[#758bc7] to-[#8ca6e9] border-[#758bc7] border-1 text-[#f0f1f1]">
          <div>
            <h3 className='text-xl'>Header</h3>
            <p>Message</p>
          </div>
        </div>

        <div className="min-h-96 flex rounded-[12px] p-2 w-full bg-gradient-to-br from-[#8ca6e9] via-[#758bc7] to-[#8ca6e9] border-[#758bc7] border-1 text-[#f0f1f1]">
          <div className="flex items-end w-1/2 rounded-[12px] bg-[url(/skytower.png)] bg-center bg-cover bg-no-repeat p-2">
            <Link href={ '/projects' }>
              <Button className='w-fit bg-[#284d85]/70 hover:bg-[#3D70BC]/90 ease-in-out duration-200 p-2 hover:shadow-xl font-normal rounded-[8px] text-sm'>
                <div className='flex items-center gap-2'>
                  See more<Image alt='See more' src={ '/see_more.svg'} height={20} width={20}/>
                </div>
              </Button>
            </Link>
          </div>

          <div className="w-1/2 pl-2">
            <h3 className='text-xl'>Header</h3>
            <p>Message</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default OurBusiness