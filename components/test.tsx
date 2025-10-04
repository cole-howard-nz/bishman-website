'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { projects } from '@/lib/temp-data';

const ResponsiveCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [currentImageIndices, setCurrentImageIndices] = useState<number[]>([]);
  const [itemsPerView, setItemsPerView] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [_, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    setCurrentImageIndices(projects.map(() => 0));
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const updateItemsPerView = () => {
      const width = window.innerWidth;
      if (width >= 1536) setItemsPerView(Math.min(4, projects.length));
      else if (width >= 1280) setItemsPerView(Math.min(3, projects.length));
      else if (width >= 1024) setItemsPerView(Math.min(2, projects.length));
      else setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener('resize', updateItemsPerView);
    return () => window.removeEventListener('resize', updateItemsPerView);
  }, []);

  const maxIndex = Math.max(0, projects.length - itemsPerView);

  useEffect(() => {
    if (!isAutoPlaying || itemsPerView > 1 || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = prev + 1;
        return next >= projects.length ? 0 : next;
      });
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, itemsPerView, isDragging]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndices(prev => 
        prev.map((imageIndex, projectIndex) => {
          const project = projects[projectIndex];
          return (imageIndex + 1) % project.images.length;
        })
      );
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(Math.max(0, currentIndex - 1));
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex(Math.min(maxIndex, currentIndex + 1));
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(Math.min(index, maxIndex));
    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  const handleMouseDown = (e: { pageX: React.SetStateAction<number>; }) => {
    if (itemsPerView <= 1) return;
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.pageX);
    setScrollLeft(currentIndex);
  };

  const handleMouseMove = (e: { preventDefault: () => void; pageX: number; }) => {
    if (!isDragging || itemsPerView <= 1) return;
    e.preventDefault();
    const x = e.pageX;
    const walk = (startX - x) / 200;
    const newIndex = Math.round(Math.max(0, Math.min(maxIndex, scrollLeft + walk)));
    setCurrentIndex(newIndex);
  };

  const handleMouseUp = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsAutoPlaying(true), 2000);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setIsDragging(true);
    setIsAutoPlaying(false);
    setStartX(e.touches[0].pageX);
    setScrollLeft(currentIndex);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const x = e.touches[0].pageX;
    const walk = (startX - x) / 200;
    const newIndex = Math.round(Math.max(0, Math.min(maxIndex, scrollLeft + walk)));
    setCurrentIndex(newIndex);
  };

  const handleTouchEnd = () => {
    if (isDragging) {
      setIsDragging(false);
      setTimeout(() => setIsAutoPlaying(true), 2000);
    }
  };

  const itemWidth = 100 / itemsPerView;

  return (
    <div className="rounded-[12px] w-full py-16 relative overflow-hidden">
      {/* Light Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-sky-50 via-blue-50 to-indigo-50">
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-sky-300/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-100/40 via-transparent to-blue-100/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-white/40" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-2 h-32 bg-gradient-to-b from-sky-300/40 to-transparent blur-sm animate-pulse" />
      <div className="absolute bottom-20 left-20 w-2 h-24 bg-gradient-to-t from-blue-300/30 to-transparent blur-sm animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-sky-100/60 to-blue-100/60 backdrop-blur-xl px-6 py-3 rounded-full border border-sky-200/60 shadow">
              Our Latest Projects
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6 bg-gradient-to-r from-sky-800 via-slate-700 to-blue-800 bg-clip-text text-transparent">
            Some of our recent work
          </h2>
          
          <p className="text-slate-600 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          </p>

          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-sky-300/70" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-sky-300/50 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-sky-400/60 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 bg-blue-300/50 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-300/70" />
          </div>
        </div>
      </div>

      {/* Main Carousel Container */}
      <div className="relative z-10 mx-auto px-6">
        <div className="relative">
          <div 
            ref={carouselRef}
            className={`relative overflow-hidden rounded-3xl shadow-2xl shadow-sky-300/40 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            <div 
              className="flex transition-transform duration-700 ease-out p-2"
              style={{ 
                transform: `translateX(-${(currentIndex * itemWidth)}%)`,
              }}
            >
              {projects.map((project, projectIndex) => (
                <div 
                  key={project.id} 
                  className="flex-shrink-0 relative"
                  style={{ width: `${100 / itemsPerView}%` }}
                  onMouseEnter={() => setHoveredProject(projectIndex)}
                  onMouseLeave={() => setHoveredProject(null)}
                >
                  <div className={`relative overflow-hidden group ${
                    itemsPerView === 1 
                      ? 'h-[500px] md:h-[650px] lg:h-[750px] rounded-3xl mx-0' 
                      : 'h-[400px] md:h-[450px] lg:h-[500px] rounded-2xl mx-2'
                  }`}>
                    <div className="absolute inset-0">
                      {project.images.map((image, imageIndex) => (
                        <div
                          key={imageIndex}
                          className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-1000 ${
                            imageIndex === currentImageIndices[projectIndex] 
                              ? 'opacity-100 scale-105' 
                              : 'opacity-0 scale-100'
                          }`}
                          style={{ backgroundImage: `url(${image})` }}
                        />
                      ))}
                    </div>

                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/85 via-slate-900/40 to-transparent transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-blue-600/10 to-indigo-600/20 opacity-60 group-hover:opacity-80 transition-opacity duration-500" />

                    <div className="absolute top-6 right-6 w-1 h-16 bg-gradient-to-b from-white via-sky-200 to-transparent opacity-70 group-hover:opacity-100 group-hover:h-20 transition-all duration-500" />
                    <div className="absolute bottom-6 left-6 w-12 h-1 bg-gradient-to-r from-transparent via-white to-sky-200 opacity-60 group-hover:opacity-90 group-hover:w-16 transition-all duration-500" />

                    <div className={`absolute inset-0 flex flex-col justify-between z-10 ${
                      itemsPerView === 1 ? 'p-8 md:p-10 lg:p-12' : 'p-6 md:p-7'
                    }`}>
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          <div className={`backdrop-blur-xl transition-all rounded-xl flex items-center gap-2 px-4 py-2 text-slate-900 font-semibold border shadow-lg ${
                            itemsPerView === 1 ? 'text-base md:text-lg' : 'text-sm'
                          } ${
                            project.isComplete 
                              ? 'bg-gradient-to-r from-green-100 to-emerald-100 border-green-300/60 shadow-green-400/20' 
                              : 'bg-gradient-to-r from-sky-100 to-blue-100 border-sky-300/60 shadow-sky-400/20'
                          }`}>
                            <div className={`w-2 h-2 rounded-full animate-pulse ${project.isComplete ? 'bg-green-500' : 'bg-sky-500'}`} />
                            {project.isComplete ? 'COMPLETED' : 'IN PROGRESS'}
                          </div>
                        </div>

                        <h2 className={`font-bold leading-tight transition-all duration-300 bg-gradient-to-br from-white via-sky-50 to-white bg-clip-text text-transparent ${
                          itemsPerView === 1 
                            ? 'text-3xl md:text-5xl lg:text-6xl' 
                            : itemsPerView === 2 
                              ? 'text-2xl md:text-3xl' 
                              : 'text-xl md:text-2xl'
                        }`}
                        style={{
                          textShadow: '0 4px 20px rgba(255, 255, 255, 0.9), 0 2px 8px rgba(14, 165, 233, 0.4), 0 0 40px rgba(255, 255, 255, 0.3)'
                        }}>
                          {project.name}
                        </h2>
                      </div>

                      <div className={`flex justify-between items-end ${
                        itemsPerView > 2 ? 'flex-col gap-4 items-start' : ''
                      }`}>
                        {/* Enhanced CTA Button */}
                        <a href={`/projects/${project.id}#s`}>
                          <button className={`group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl text-white hover:scale-105 active:scale-95 flex items-center gap-3 font-semibold ${
                            itemsPerView === 1 ? 'px-6 py-4 text-base md:text-lg' : 'px-5 py-3 text-sm'
                          }`}>
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                            <div className="relative flex items-center gap-3">
                              <span>View Project</span>
                              <ArrowRight size={itemsPerView === 1 ? 20 : 18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-400/50 to-blue-500/50 blur-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10" />
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced Navigation Arrows */}
          {itemsPerView > 1 && (
            <>
              <button 
                onClick={goToPrevious}
                disabled={currentIndex === 0}
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/80 backdrop-blur-xl border border-sky-200/60 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/90 hover:border-sky-300/70 hover:shadow-lg hover:shadow-sky-300/30 ${
                  currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <ChevronLeft size={26} className="text-sky-700" />
              </button>
              
              <button 
                onClick={goToNext}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/80 backdrop-blur-xl border border-sky-200/60 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/90 hover:border-sky-300/70 hover:shadow-lg hover:shadow-sky-300/30 ${
                  currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <ChevronRight size={26} className="text-sky-700" />
              </button>
            </>
          )}
        </div>

        {/* Enhanced Controls */}
        <div className="flex justify-center items-center gap-6 mt-12">
          {/* Enhanced Dots Indicator */}
          {itemsPerView === 1 && (
            <div className="flex gap-3">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-10 h-3 bg-gradient-to-r from-sky-400 to-blue-400 rounded-full shadow-lg shadow-sky-300/40' 
                      : 'w-3 h-3 bg-sky-200/60 rounded-full hover:bg-sky-300/70 hover:scale-110'
                  }`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-sky-300 to-blue-300 rounded-full animate-pulse" />
                  )}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveCarousel;