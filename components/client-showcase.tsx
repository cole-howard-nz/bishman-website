'use client';

import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { Client } from '@/lib/types';

const ClientShowcase = ({ clients }:{ clients: Client[]}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [visibleCards, setVisibleCards] = useState(3);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState(0);
  const [dragOffset, setDragOffset] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const startPosRef = useRef(0);
  const currentTranslateRef = useRef(0);

  // Enhanced responsive design
  useEffect(() => {
    const updateVisibleCards = () => {
      const width = window.innerWidth;
      if (width >= 1400) setVisibleCards(Math.min(3, clients.length));
      else if (width >= 1024) setVisibleCards(Math.min(3, clients.length));
      else if (width >= 768) setVisibleCards(Math.min(2, clients.length));
      else setVisibleCards(1);
    };

    updateVisibleCards();
    window.addEventListener('resize', updateVisibleCards);
    return () => window.removeEventListener('resize', updateVisibleCards);
  }, [clients.length]);

  // Calculate max index
  const maxIndex = Math.max(0, clients.length - visibleCards);

  // Auto-play with smooth transitions
  useEffect(() => {
    if (!isAutoPlaying || clients.length <= visibleCards || isDragging) return;
    
    const interval = setInterval(() => {
      setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, visibleCards, clients.length, isDragging, maxIndex]);

  const nextSlide = () => {
    if (clients.length <= visibleCards) return;
    setCurrentIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    if (clients.length <= visibleCards) return;
    setCurrentIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(Math.min(index, maxIndex));
  };

  // Enhanced drag functionality
  const handleDragStart = (clientX: number) => {
    if (clients.length <= visibleCards) return;
    
    setIsDragging(true);
    setIsAutoPlaying(false);
    setDragStart(clientX);
    startPosRef.current = clientX;
    currentTranslateRef.current = -currentIndex * (100 / visibleCards);
  };

  const handleDragMove = (clientX: number) => {
    if (!isDragging || clients.length <= visibleCards) return;

    const diff = clientX - startPosRef.current;
    const containerWidth = carouselRef.current?.offsetWidth || 1000;
    const dragPercent = (diff / containerWidth) * 100;
    
    setDragOffset(dragPercent);
  };

  const handleDragEnd = (clientX: number) => {
    if (!isDragging || clients.length <= visibleCards) return;

    setIsDragging(false);
    setDragOffset(0);
    
    const diff = clientX - dragStart;
    const threshold = 50;

    if (Math.abs(diff) > threshold) {
      if (diff > 0) {
        prevSlide();
      } else {
        nextSlide();
      }
    }

    setTimeout(() => setIsAutoPlaying(true), 3000);
  };

  // Mouse and touch events
  const handleMouseDown = (e: { preventDefault: () => void; clientX: number; }) => {
    e.preventDefault();
    handleDragStart(e.clientX);
  };

  const handleMouseMove = (e: { clientX: number; }) => {
    handleDragMove(e.clientX);
  };

  const handleMouseUp = (e: { clientX: number; }) => {
    handleDragEnd(e.clientX);
  };

  const handleMouseLeave = (e: { clientX: number; }) => {
    if (isDragging) {
      handleDragEnd(e.clientX);
    }
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    handleDragStart(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    e.preventDefault();
    handleDragMove(e.touches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.changedTouches.length > 0) {
      handleDragEnd(e.changedTouches[0].clientX);
    }
  };

  const cardWidth = 100 / visibleCards;
  const translateX = isDragging 
    ? currentTranslateRef.current + dragOffset 
    : -currentIndex * cardWidth;

  return (
    <div className="w-full py-8 md:py-16 my-10 md:my-20 relative overflow-hidden rounded-[12px]">
      {/* Animated background with Auckland skyline inspiration */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 15 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/20 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-blue-600/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Floating elements inspired by Sky Tower */}
      <div className="absolute top-10 right-20 w-2 h-32 bg-gradient-to-b from-blue-400/30 to-transparent blur-sm animate-pulse hidden md:block" />
      <div className="absolute bottom-10 left-20 w-2 h-24 bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm animate-pulse hidden md:block" />

      {/* Header Section */}
      <div className="relative z-10 text-center mb-8 md:mb-16 px-4 md:px-8">
        <div className="inline-block mb-4">
          <span className="text-blue-400/80 text-xs md:text-sm font-medium tracking-wider uppercase bg-blue-400/10 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-blue-400/20">
            Client Testimonials
          </span>
        </div>
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent">
          What Our Clients Say
        </h2>
        
        {/* Animated divider */}
        <div className="flex justify-center items-center gap-2 md:gap-4 mt-4 md:mt-8">
          <div className="w-8 md:w-16 h-px bg-gradient-to-r from-transparent to-blue-400/50" />
          <div className="w-2 md:w-3 h-2 md:h-3 bg-blue-400/30 rounded-full animate-pulse" />
          <div className="w-12 md:w-24 h-px bg-gradient-to-r from-blue-400/50 to-blue-400/20" />
          <div className="w-1.5 md:w-2 h-1.5 md:h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
          <div className="w-8 md:w-16 h-px bg-gradient-to-l from-transparent to-blue-400/50" />
        </div>
      </div>

      {/* Main Carousel Container */}
      <div 
        className="relative mx-auto px-4 md:px-6"
        onMouseEnter={() => !isDragging && setIsAutoPlaying(false)}
        onMouseLeave={() => !isDragging && setIsAutoPlaying(true)}
      >
        {/* Enhanced Navigation */}
        {clients.length > visibleCards && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-2 md:left-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 group shadow-lg shadow-black/20"
              disabled={isDragging}
            >
              <ChevronLeft size={20} className="md:w-6 md:h-6 group-hover:text-blue-300 transition-colors duration-300" />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-2 md:right-0 top-1/2 -translate-y-1/2 z-20 w-10 h-10 md:w-14 md:h-14 bg-white/10 backdrop-blur-xl border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:border-blue-400/50 hover:scale-110 transition-all duration-300 group shadow-lg shadow-black/20"
              disabled={isDragging}
            >
              <ChevronRight size={20} className="md:w-6 md:h-6 group-hover:text-blue-300 transition-colors duration-300" />
            </button>
          </>
        )}

        {/* Carousel */}
        <div className="overflow-hidden rounded-2xl md:rounded-3xl mx-8 md:mx-12">
          <div 
            ref={carouselRef}
            className={`flex transition-all ${isDragging ? 'duration-0' : 'duration-700'} ease-out select-none`}
            style={{
              transform: `translateX(${translateX}%)`,
              cursor: isDragging ? 'grabbing' : 'grab'
            }}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseLeave}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {clients.map((client, index) => (
              <div
                key={client.id}
                className="flex-shrink-0 px-2 md:px-4 transition-all duration-700"
                style={{ minWidth: `${cardWidth}%` }}
              >
                <div 
                  className={`group relative h-64 md:h-80 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-3xl p-4 md:p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/10 ${
                    hoveredCard === index ? 'bg-white/10 border-white/20 scale-105' : ''
                  }`}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Animated background effects */}
                  <div className="absolute inset-0 rounded-2xl md:rounded-3xl overflow-hidden">
                    <div className="absolute top-0 right-0 w-20 md:w-32 h-20 md:h-32 bg-gradient-to-br from-blue-500/10 to-cyan-500/5 rounded-full blur-2xl md:blur-3xl transform translate-x-8 md:translate-x-16 -translate-y-8 md:-translate-y-16 group-hover:scale-150 transition-transform duration-700" />
                    <div className="absolute bottom-0 left-0 w-16 md:w-28 h-16 md:h-28 bg-gradient-to-tr from-cyan-400/8 to-blue-500/10 rounded-full blur-xl md:blur-2xl transform -translate-x-8 md:-translate-x-14 translate-y-8 md:translate-y-14 group-hover:scale-150 transition-transform duration-700" />
                    
                    {/* Subtle border glow */}
                    <div className="absolute inset-0 rounded-2xl md:rounded-3xl bg-gradient-to-r from-blue-500/0 via-blue-400/5 to-cyan-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Header Section */}
                  <div className="relative flex items-center gap-3 md:gap-5 mb-4 md:mb-8">
                    {/* Enhanced Avatar */}
                    <div className="relative">
                      <div className="w-10 h-10 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 via-blue-600 to-cyan-600 rounded-xl md:rounded-2xl flex items-center justify-center text-white font-bold text-sm md:text-xl shadow-xl border border-blue-400/30 group-hover:shadow-blue-500/20 transition-all duration-300">
                        {client.name.charAt(0).toUpperCase()}
                      </div>
                      {/* Animated glow */}
                      <div className="absolute inset-0 bg-gradient-to-br from-blue-400/30 to-cyan-400/20 rounded-xl md:rounded-2xl blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    </div>

                    {/* Client Info */}
                    <div className="flex-1 min-w-0">
                      <h3 className="text-white font-bold text-sm md:text-lg mb-1 truncate group-hover:text-blue-200 transition-colors duration-300">
                        {client.name}
                      </h3>
                      <p className="text-blue-200 text-xs md:text-sm font-medium truncate mb-1">
                        {client.role}
                      </p>
                      <p className="text-slate-400 text-xs truncate">
                        {client.company}
                      </p>
                    </div>

                    {/* Enhanced Stars */}
                    <div className="flex flex-col items-end">
                      <div className="flex gap-0.5 md:gap-1 mb-1">
                        {Array.from({ length: 5 }, (_, starIndex) => (
                          <Star
                            key={starIndex}
                            size={12}
                            className={`md:w-4 md:h-4 ${starIndex < client.stars 
                              ? "fill-yellow-400 text-yellow-400 group-hover:scale-110 transition-transform duration-300" 
                              : "text-slate-600"
                            }`}
                            style={{ transitionDelay: `${starIndex * 50}ms` }}
                          />
                        ))}
                      </div>
                      <span className="text-yellow-400 text-xs font-medium">
                        {client.stars}.0
                      </span>
                    </div>
                  </div>

                  {/* Enhanced Quote Icon */}
                  <div className="absolute top-4 md:top-8 right-4 md:right-8 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                    <Quote size={24} className="md:w-8 md:h-8 text-blue-300 transform group-hover:rotate-6 transition-transform duration-300" />
                  </div>

                  {/* Testimonial Text */}
                  <div className="relative">
                    <p className="text-slate-200 leading-relaxed text-xs md:text-sm group-hover:text-white transition-colors duration-300 line-clamp-6 md:line-clamp-4">
                      &quot;{client.blurb}&quot;
                    </p>
                  </div>

                  {/* Accent line inspired by Sky Tower */}
                  <div className="absolute top-4 md:top-6 left-3 md:left-6 w-0.5 md:w-1 h-8 md:h-12 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent opacity-30 group-hover:opacity-80 group-hover:h-10 md:group-hover:h-16 transition-all duration-500" />
                  
                  {/* Bottom accent */}
                  <div className="absolute bottom-3 md:bottom-6 right-3 md:right-6 w-6 md:w-8 h-0.5 md:h-1 bg-gradient-to-r from-transparent via-blue-400 to-cyan-400 opacity-0 group-hover:opacity-60 group-hover:w-8 md:group-hover:w-12 transition-all duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Enhanced Controls */}
        <div className="flex justify-center items-center gap-6 mt-6 md:mt-12">
          {/* Enhanced Pagination Dots */}
          {clients.length > visibleCards && (
            <div className="flex gap-2 md:gap-3">
              {Array.from({ length: maxIndex + 1 }, (_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  disabled={isDragging}
                  className={`relative overflow-hidden transition-all duration-300 ${
                    index === currentIndex 
                      ? 'w-6 md:w-8 h-2 md:h-3 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full shadow-lg shadow-blue-400/30' 
                      : 'w-2 md:w-3 h-2 md:h-3 bg-white/20 rounded-full hover:bg-white/40 hover:scale-110'
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

export default ClientShowcase;