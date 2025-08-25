'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Clock, Calendar, ArrowRight } from 'lucide-react';
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

  // Initialize image indices and visibility
  useEffect(() => {
    setCurrentImageIndices(projects.map(() => 0));
    const timer = setTimeout(() => setIsVisible(true), 200);
    return () => clearTimeout(timer);
  }, []);

  // Enhanced responsive items per view
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

  // Auto-advance carousel with enhanced timing
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

  // Enhanced background image cycling
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

  // Enhanced drag functionality
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
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
        {/* Dynamic particles */}
        {Array.from({ length: 25 }, (_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-20 w-2 h-32 bg-gradient-to-b from-blue-400/30 to-transparent blur-sm animate-pulse" />
      <div className="absolute bottom-20 left-20 w-2 h-24 bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm animate-pulse" style={{ animationDelay: '1s' }} />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-16 px-8">
        <div className={`transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-6">
            <span className="text-blue-400/90 text-sm font-medium tracking-wider uppercase bg-gradient-to-r from-blue-400/10 to-cyan-400/10 backdrop-blur-xl px-6 py-3 rounded-full border border-blue-400/20 shadow-lg">
              Our Latest Projects
            </span>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 bg-gradient-to-r from-white via-blue-100 to-cyan-100 bg-clip-text text-transparent">
            Some of our recent work
          </h2>
          
          <p className="text-slate-300 max-w-4xl mx-auto text-lg leading-relaxed mb-8">
          </p>

          {/* Enhanced divider */}
          <div className="flex justify-center items-center gap-4 mt-8">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400/60" />
            <div className="flex gap-2">
              <div className="w-2 h-2 bg-blue-400/40 rounded-full animate-pulse" />
              <div className="w-3 h-3 bg-blue-500/50 rounded-full animate-pulse" style={{ animationDelay: '0.3s' }} />
              <div className="w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.6s' }} />
            </div>
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-cyan-400/60" />
          </div>
        </div>
      </div>

      {/* Main Carousel Container */}
      <div className="relative z-10 mx-auto px-6">
        <div className="relative">
          <div 
            ref={carouselRef}
            className={`relative overflow-hidden rounded-3xl shadow-2xl shadow-black/40 ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}
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
                    
                    {/* Enhanced Background Images */}
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
                    
                    {/* Enhanced Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/30 to-transparent transition-all duration-500" />
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20 opacity-0 transition-opacity duration-500" />
                    
                    {/* Animated decorative elements */}
                    <div className="absolute top-6 right-6 w-1 h-16 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent opacity-40 group-hover:opacity-80 group-hover:h-20 transition-all duration-500" />
                    <div className="absolute bottom-6 left-6 w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-60 group-hover:w-16 transition-all duration-500" />
                    
                    {/* Content */}
                    <div className={`absolute inset-0 flex flex-col justify-between z-10 ${
                      itemsPerView === 1 ? 'p-8 md:p-10 lg:p-12' : 'p-6 md:p-7'
                    }`}>
                      
                      {/* Enhanced Header */}
                      <div className="space-y-4">
                        <div className="flex items-center gap-3 flex-wrap">
                          {/* Status Badge */}
                          <div className={`backdrop-blur-xl transition-all rounded-xl flex items-center gap-2 px-4 py-2 text-white font-semibold border shadow-lg ${
                            itemsPerView === 1 ? 'text-base md:text-lg' : 'text-sm'
                          } ${
                            project.isComplete 
                              ? 'bg-gradient-to-r from-green-600/80 to-emerald-600/80 border-green-400/50 shadow-green-500/20' 
                              : 'bg-gradient-to-r from-blue-600/80 to-cyan-600/80 border-blue-400/50 shadow-blue-500/20'
                          }`}>
                            <div className={`w-2 h-2 rounded-full animate-pulse ${project.isComplete ? 'bg-green-300' : 'bg-blue-300'}`} />
                            {project.isComplete ? 'COMPLETED' : 'IN PROGRESS'}
                          </div>
                        </div>
                        
                        {/* Project Title */}
                        <h2 className={`text-white font-bold leading-tight drop-shadow-xl transition-all duration-300 ${
                          itemsPerView === 1 
                            ? 'text-3xl md:text-5xl lg:text-6xl' 
                            : itemsPerView === 2 
                              ? 'text-2xl md:text-3xl' 
                              : 'text-xl md:text-2xl'
                        }`}>
                          {project.name}
                        </h2>
                      </div>

                      {/* Enhanced Footer */}
                      <div className={`flex justify-between items-end ${
                        itemsPerView > 2 ? 'flex-col gap-4 items-start' : ''
                      }`}>
                        {/* Enhanced Date Badges */}
                        <div 
                          className={`hidden sm:flex gap-3 ${itemsPerView > 2 ? 'flex-col' : 'flex-wrap'}`}
                        >
                          {project.finishDate && project.isComplete ? (
                            <div className='gap-3 flex flex-wrap items-end justify-end'>
                              <div className={`bg-slate-800/90 backdrop-blur-xl rounded-xl text-slate-200 border border-blue-400/30 flex items-center gap-2 transition-all duration-300 hover:bg-blue-600/20 hover:border-blue-400/50 hover:scale-105 ${
                                itemsPerView === 1 ? 'px-4 py-3 text-sm md:text-base' : 'px-3 py-2 text-xs'
                              }`}>
                                <Clock size={itemsPerView === 1 ? 18 : 16} className="text-blue-300" />
                                <span className="font-medium">Started {project.startDate}</span>
                              </div>
                              <div className={`bg-slate-800/90 backdrop-blur-xl rounded-xl text-slate-200 border border-green-400/30 flex items-center gap-2 transition-all duration-300 hover:bg-green-600/20 hover:border-green-400/50 hover:scale-105 ${
                                itemsPerView === 1 ? 'px-4 py-3 text-sm md:text-base' : 'px-3 py-2 text-xs'
                              }`}>
                                <Calendar size={itemsPerView === 1 ? 18 : 16} className="text-green-300" />
                                <span className="font-medium">Completed {project.finishDate}</span>
                              </div>
                            </div>
                          ) : (
                            <div className={`bg-slate-800/90 backdrop-blur-xl rounded-xl text-slate-200 border border-cyan-400/30 flex items-center gap-2 transition-all duration-300 hover:bg-cyan-600/20 hover:border-cyan-400/50 hover:scale-105 ${
                              itemsPerView === 1 ? 'px-4 py-3 text-sm md:text-base' : 'px-3 py-2 text-xs'
                            }`}>
                              <Clock size={itemsPerView === 1 ? 18 : 16} className="text-cyan-300" />
                              <span className="font-medium">Started {project.startDate}</span>
                            </div>
                          )}
                        </div>

                        {/* Enhanced CTA Button */}
                        <a href={`/projects/${project.id}`}>
                          <button className={`group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl text-white hover:scale-105 active:scale-95 flex items-center gap-3 font-semibold ${
                            itemsPerView === 1 ? 'px-6 py-4 text-base md:text-lg' : 'px-5 py-3 text-sm'
                          }`}>
                            {/* Enhanced shine effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
                            
                            <div className="relative flex items-center gap-3">
                              <span>View Project</span>
                              <ArrowRight size={itemsPerView === 1 ? 20 : 18} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
                            </div>

                            {/* Glow effect */}
                            <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/50 to-cyan-600/50 blur-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10" />
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
                className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 ${
                  currentIndex === 0 ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <ChevronLeft size={26} className="text-white" />
              </button>
              
              <button 
                onClick={goToNext}
                disabled={currentIndex >= maxIndex}
                className={`absolute right-4 top-1/2 transform -translate-y-1/2 w-14 h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white/20 hover:border-blue-400/50 hover:shadow-lg hover:shadow-blue-500/20 ${
                  currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed' : 'opacity-90 hover:opacity-100'
                }`}
              >
                <ChevronRight size={26} className="text-white" />
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
                      ? 'w-10 h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/30' 
                      : 'w-3 h-3 bg-white/20 rounded-full hover:bg-white/40 hover:scale-110'
                  }`}
                >
                  {index === currentIndex && (
                    <div className="absolute inset-0 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full animate-pulse" />
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