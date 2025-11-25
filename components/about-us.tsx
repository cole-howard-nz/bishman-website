import React from 'react'
import Image from 'next/image'

const AboutUs = () => {
  return (
    <section className='relative group max-w-7xl mx-auto'>
      <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:bg-white/8 hover:border-white/20 transition-all duration-500 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 rounded-3xl overflow-hidden">
          <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
          <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
        </div>

        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Image Section */}
          <div className="w-full">
            <div className="relative h-80 lg:h-96 rounded-2xl overflow-hidden border border-white/20 group-hover:border-sky-400/40 transition-all duration-500">
              <Image
                src="/team/temp.jpg"
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                alt="Bishman Team"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
            </div>
          </div>
          
          {/* Content Section */}
          <div className="w-full flex flex-col justify-center space-y-6">
            {/* Header */}
            <div className="space-y-2">
              <h2 className="text-4xl font-bold text-slate-900 group-hover:text-sky-700 transition-colors duration-300">
                About Us
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-sky-500 to-cyan-400 rounded-full group-hover:w-32 transition-all duration-500" />
            </div>

            {/* Main intro paragraph */}
            <p className="text-slate-700 text-lg font-medium leading-relaxed group-hover:text-slate-800 transition-colors duration-300">
              At Bishman Ltd, we&apos;re more than just an electrical contractor. We&apos;re a team of dedicated professionals committed to excellence in every project we undertake.
            </p>

            {/* Supporting paragraphs */}
            <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
              With over 30 years of combined experience, our family oriented approach sets us apart. We believe in building lasting relationships with our clients, partners, and team members.
            </p>
            <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
              Our values of integrity, safety, and innovation drive everything we do. From training the next generation of electricians to delivering cutting edge electrical solutions, we&apos;re proud to serve Auckland and contribute to its growth.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutUs