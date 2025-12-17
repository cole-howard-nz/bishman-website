'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const slides = [
  {
    title: "Powering New Zealand's Critical Infrastructure",
    desc: "Delivering reliable electrical design, installation, and maintenance for commercial, industrial, and high demand environments where performance, safety, and uptime matter most.",
    image: "/skytower.png",
    alt: "Sky Tower Auckland"
  },
  {
    title: "End to End Electrical Solutions for Complex Projects",
    desc: "From BIM driven planning to precision installation and commissioning, our experienced teams ensure every project is delivered safely, efficiently, and on schedule.",
    image: "/skytower.png",
    alt: "Renewable energy infrastructure"
  },
  {
    title: "Trusted Expertise Backed by 30+ Years of Experience",
    desc: "With proven capability across data centres, healthcare, marina, and government facilities, we bring dependable workmanship and industry-leading technical standards to every job.",
    image: "/skytower.png",
    alt: "Network connectivity"
  }
]

const projectPhotos = [
  "/projects/uoa1.jpg",
  "/projects/munroe1.jpg",
  "/projects/wqip1.jpg",
  "/projects/aotea1.jpg",
]

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return
    
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 15000)
    return () => clearInterval(timer)
  }, [isMounted])

  useEffect(() => {
    setCurrentProjectIndex(currentSlide % projectPhotos.length)
  }, [currentSlide])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projectPhotos.length)
  }

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projectPhotos.length) % projectPhotos.length)
  }

  return (
    <>
      {/* Background Slideshow */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Image 
              src={slide.image} 
              alt={slide.alt} 
              fill
              className="object-cover"
              priority={index === 0}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-400/10 via-slate-500/10 to-slate-500/10" />
          </div>
        ))}
      </div>

      {/* Content and Controls */}
      <div className='relative z-10 flex flex-col h-full p-6 pt-24'>
        <div className='flex-1 flex justify-between items-center gap-8'>
          {/* Left Content */}
          <div className='flex-1 flex flex-col justify-center text-white/90 leading-relaxed backdrop-blur-sm bg-slate-900/20 rounded-xl p-4 border border-white/10 max-w-fit' 
            style={{ textShadow: '0 1px 2px rgba(0, 0, 0, 0.2)' }}
          >
            <h1 
              key={isMounted ? currentSlide : 'initial'}
              className={`text-white font-semibold text-3xl md:text-5xl max-w-2xl ${isMounted ? 'animate-fade-in' : ''}`}
            >
              {/* {slides[currentSlide].title} */}
            </h1>
            <p
              className={`text-slate-100 font-medium max-w-2xl md:text-base pt-4 ${isMounted ? 'animate-fade-in' : ''}`}
            >
              {/* {slides[currentSlide].desc} */}
            </p>
          </div>

          {/* Right Project Slideshow with Side Previews */}
          <div className='hidden lg:block relative w-[400px] h-[300px] mr-32'>
            {/* Previous Image - Behind and to the left */}
            <div className='absolute -left-32 top-3 w-[400px] h-[280px] rounded-lg overflow-hidden opacity-40 hover:opacity-60 transition-opacity cursor-pointer z-0'
              onClick={prevProject}
            >
              <Image 
                src={projectPhotos[(currentProjectIndex - 1 + projectPhotos.length) % projectPhotos.length]} 
                alt="Previous project" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent" />
            </div>

            {/* Main Image - On top */}
            <div className='relative w-[400px] h-[300px] rounded-lg overflow-hidden bg-white/5 backdrop-blur-sm border border-white/10 shadow-2xl z-10'>
              {projectPhotos.map((photo, index) => (
                <div 
                  key={index}
                  className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                    index === currentProjectIndex 
                      ? 'opacity-100 scale-100' 
                      : 'opacity-0 scale-105'
                  }`}
                >
                  <Image 
                    src={photo} 
                    alt={`Project ${index + 1}`} 
                    fill
                    className="object-cover"
                  />
                  <div className={`absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent transition-opacity duration-700 ${
                    index === currentProjectIndex ? 'opacity-100' : 'opacity-0'
                  }`} />
                </div>
              ))}
            </div>

            {/* Next Image - Behind and to the right */}
            <div className='absolute -right-32 top-3 w-[400px] h-[280px] rounded-lg overflow-hidden opacity-40 hover:opacity-60 transition-opacity cursor-pointer z-0'
              onClick={nextProject}
            >
              <Image 
                src={projectPhotos[(currentProjectIndex + 1) % projectPhotos.length]} 
                alt="Next project" 
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/40 to-transparent" />
            </div>
          </div>
        </div>

        {/* Navigation and Button */}
        <div className="flex items-center justify-between mt-8">
          <div className="flex gap-3">
            <button
              onClick={prevSlide}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Previous slide"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all"
              aria-label="Next slide"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          <Link href="/projects">
            <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
              
              <div className="relative flex items-center gap-2">
                <span className="text-sm font-medium">View what we do</span>
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-300" />
              </div>

              <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/50 to-blue-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </>
  )
}

export default HeroSlideshow