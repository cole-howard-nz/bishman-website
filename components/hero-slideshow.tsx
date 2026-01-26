'use client'

import React, { useState, useEffect } from 'react'
import { Briefcase, ChevronLeft, ChevronRight, Wrench } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

const slides = [
  {
    title: "Trusted Expertise Backed by 30+ Years of Experience",
    desc: "With proven capability across data centres, healthcare, marina, and government facilities, we bring dependable workmanship and industry-leading technical standards to every job.",
    image: "/landing/one.jpg",
    alt: "Sky Tower Auckland"
  },
  {
    title: "End to End Electrical Solutions for Complex Projects",
    desc: "From BIM driven planning to precision installation and commissioning, our experienced teams ensure every project is delivered safely, efficiently, and on schedule.",
    image: "/landing/one.jpg",
    alt: "Sky Tower Auckland"
  },
  {
    title: "Trusted Expertise Backed by 30+ Years of Experience",
    desc: "With proven capability across data centres, healthcare, marina, and government facilities, we bring dependable workmanship and industry-leading technical standards to every job.",
    image: "/landing/one.jpg",
    alt: "Sky Tower Auckland"
  }
]

const HeroSlideshow = () => {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isMounted, setIsMounted] = useState(false)
  const [progressKey, setProgressKey] = useState(0)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
      setProgressKey(prev => prev + 1)
    }, 15000)

    return () => clearInterval(timer)
  }, [isMounted])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
    setProgressKey(prev => prev + 1)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
    setProgressKey(prev => prev + 1)
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
            className="object-cover object-center"
            priority={index === 0}
            sizes="100vw"
            quality={90}
          />
            <div className="absolute inset-0 bg-gradient-to-b from-slate-400/10 via-slate-500/10 to-slate-500/10" />
          </div>
        ))}
      </div>

      {/* Hero text and CTA */}
      <div className='z-10 flex flex-col h-full'>
        <div className="max-w-4xl px-6 pt-32 md:pt-40 lg:px-12">
          <div className="relative">
            <div className="absolute left-0 top-20 w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
            <div className="absolute right-0 top-40 w-96 h-96 bg-cyan-400 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
            <div className="absolute left-1/3 top-60 w-96 h-96 bg-slate-800 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
            
            <div className="relative space-y-6">
              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight'>
                {slides[currentSlide].title}
              </h1>

              <p className='text-lg md:text-xl lg:text-2xl text-white/90 font-light leading-relaxed max-w-3xl'>
                {slides[currentSlide].desc}
              </p>
            </div>
          </div>

          <div className="relative flex flex-wrap gap-4 pt-10 z-20">
            <Link href="/services#s">
              <button className="group relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-blue-500/25 border border-blue-400/20">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                <div className="relative flex items-center gap-2">
                  <Wrench size={18} />
                  <span className="text-sm font-medium">Our Services</span>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-sky-400/50 to-blue-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </Link>

            <Link href="/projects#s">
              <button className="group relative overflow-hidden bg-white/10 backdrop-blur-sm border-2 border-white/30 hover:bg-white/20 px-6 py-3 rounded-xl text-white font-semibold transition-all duration-300 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                
                <div className="relative flex items-center gap-2">
                  <Briefcase size={18} />
                  <span className="text-sm font-medium">View Projects</span>
                </div>

                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-slate-400/50 to-slate-500/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
              </button>
            </Link>
          </div>
        </div>
      </div>
      
      {/* Slideshow Content */}
      <div className='z-10 flex flex-col p-6 pt-24 h-full [@media(max-width:511px)]:hidden'>
        <div className="flex flex-col items-end justify-end mt-auto gap-4">
          <div className="flex gap-2">
            {slides.map((slide, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`relative w-32 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                  index === currentSlide 
                    ? 'border-white/80 scale-105' 
                    : 'border-white/30 hover:border-white/50'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              >
                <Image 
                  src={slide.image} 
                  alt={slide.alt}
                  fill
                  className="object-cover"
                  sizes="120px"
                />
                <div className="absolute inset-0 bg-black/30" />
                
                {/* Progress bar */}
                {index === currentSlide && (
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/30 overflow-hidden">
                    <div 
                      key={progressKey}
                      className="h-full bg-white w-0"
                      style={{
                        animation: 'progress 15s linear forwards'
                      }}
                    />
                  </div>
                )}
              </button>
            ))}
          </div>
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

        @keyframes blob {
          0% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
          100% {
            transform: translate(0px, 0px) scale(1);
          }
        }

        @keyframes progress {
          from {
            width: 0%;
          }
          to {
            width: 100%;
          }
        }

        .animate-blob {
          animation: blob 7s infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }

        .animation-delay-4000 {
          animation-delay: 4s;
        }
        
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </>
  )
}

export default HeroSlideshow