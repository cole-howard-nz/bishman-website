import React from 'react'

const CapabilitiesExperience = () => {
  return (
    <section className='pb-16 text-[#f0f1f1]'>
      <h2 className='text-[#f0f1f1] drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.6)] text-3xl font-semibold pb-2'>The Brand</h2>
      
      <div className="flex flex-col space-y-4 p-2 rounded-[12px] bg-gradient-to-br from-[#8ca6e9] via-[#758bc7] to-[#8ca6e9] border-[#758bc7] border-1">
        <div className="min-h-32 flex w-full text-[#f0f1f1]">
          <div className="flex items-center justify-center w-1/2 h-48 rounded-[12px] bg-[url(/bishman_black.svg)] bg-no-repeat bg-center bg-[270px_auto]">
          </div>

          <div className="w-1/2 pl-2">
            <p>
              Bishman Ltd was formed in 1992 and has spent the last 30 years as one of the leaders in the Auckland electrical industry. 
              Our history is deeper than that with the original business dating back to the early 1970's when the brand first came into existence. 
              Our brand today draws on over 50 years of depth and experience the name is as proud today as it was then.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CapabilitiesExperience