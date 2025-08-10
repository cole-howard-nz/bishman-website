import MapView from '@/components/map-view'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import React from 'react'

const Contacts = () => {
  return (
    <section className="flex flex-col sm:flex-row md:flex-row gap-8 text-[#f0f1f1] my-16">
      <div className="w-full md:w-1/2 space-y-4">
        <div className='bg-gradient-to-br from-[#8ca6e9] via-[#758bc7] to-[#4d7aed] border-[#758bc7] border-1 rounded-xl p-2'>
          <MapView />
        </div>
      </div>

      <div className="w-full md:w-1/2 space-y-4">
        <h2 className="text-3xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">Message Us</h2>
        <div>
          <form className="bg-gradient-to-br from-[#8ca6e9] via-[#758bc7] to-[#4d7aed] border-[#758bc7] border-1 rounded-xl p-2 space-y-2">
            <div className="flex flex-col md:flex-row gap-2">
              <input
                type="text"
                placeholder="Enter your preferred name"
                className="w-full p-2 rounded bg-[#284d85]/70 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full p-2 rounded bg-[#284d85]/70 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Your message"
              className="w-full p-2 rounded bg-[#284d85]/70 placeholder-white text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <Button type="submit" className="bg-[#284d85] hover:bg-[#3D70BC] ease-in-out duration-200 w-full">
              Submit
            </Button>
          </form>
        </div>

        <h2 className="text-3xl font-semibold drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)]">Office</h2>
        <div className="bg-gradient-to-br from-[#8ca6e9] via-[#758bc7] to-[#4d7aed] border-[#758bc7] border-1 rounded-xl p-2 space-y-2">
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image alt="Phone" src="/call_end.svg" height={32} width={32} />
              <p>09 270 3644</p>
            </div>

          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image alt="Mail" src="/mail.svg" height={24} width={24} />
              <p>accounts@bishman.nz</p>
            </div>

          </div>

          <div className="flex justify-between items-center">
            <div className="flex items-center gap-2">
              <Image alt="Location" src="/location.svg" height={24} width={24} />
              <p>2 Hotunui Drive, Mount Wellington, Auckland 1060</p>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default Contacts
