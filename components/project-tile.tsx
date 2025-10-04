'use client';

import React, { useState, useEffect } from 'react';
import {  ArrowRight } from 'lucide-react';
import { Project } from '@/lib/types';

interface ProjectTileProps {
  project: Project;
  size?: 'small' | 'medium' | 'large';
  className?: string;
}

const ProjectTile: React.FC<ProjectTileProps> = ({ 
  project, 
  size = 'medium',
  className = '' 
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [_isHovered, setIsHovered] = useState(false);

  // Cycle through project images
  useEffect(() => {
    if (project.images.length <= 1) return;
    
    const interval = setInterval(() => {
      setCurrentImageIndex(prev => (prev + 1) % project.images.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [project.images.length]);

  const getSizeClasses = () => {
    switch (size) {
      case 'small':
        return {
          container: 'h-[300px] md:h-[350px]',
          padding: 'p-4 md:p-5',
          title: 'text-lg md:text-xl',
          badge: 'px-3 py-1.5 text-xs',
          button: 'px-4 py-2 text-sm',
          dateInfo: 'px-3 py-2 text-xs',
          iconSize: 14
        };
      case 'large':
        return {
          container: 'h-[500px] md:h-[650px] lg:h-[750px]',
          padding: 'p-8 md:p-10 lg:p-12',
          title: 'text-3xl md:text-5xl lg:text-6xl',
          badge: 'px-4 py-2 text-base md:text-lg',
          button: 'px-6 py-4 text-base md:text-lg',
          dateInfo: 'px-4 py-3 text-sm md:text-base',
          iconSize: 18
        };
      default: // medium
        return {
          container: 'h-[400px] md:h-[450px] lg:h-[500px]',
          padding: 'p-6 md:p-7',
          title: 'text-xl md:text-2xl',
          badge: 'px-4 py-2 text-sm',
          button: 'px-5 py-3 text-sm',
          dateInfo: 'px-3 py-2 text-xs',
          iconSize: 16
        };
    }
  };

  const sizeClasses = getSizeClasses();

  return (
    <div 
      className={`relative overflow-hidden group rounded-2xl lg:rounded-3xl ${sizeClasses.container} ${className}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Images */}
      <div className="absolute inset-0">
        {project.images.map((image, imageIndex) => (
          <div
            key={imageIndex}
            className={`absolute inset-0 bg-center bg-cover bg-no-repeat transition-all duration-1000 ${
              imageIndex === currentImageIndex 
                ? 'opacity-100 scale-105' 
                : 'opacity-0 scale-100'
            }`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      
      {/* Enhanced Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 via-slate-800/30 to-transparent transition-all duration-500" />
      <div className="absolute inset-0 bg-gradient-to-r from-blue-900/20 via-transparent to-cyan-900/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      
      {/* Animated decorative elements */}
      <div className="absolute top-6 right-6 w-1 h-16 bg-gradient-to-b from-blue-400 via-cyan-400 to-transparent opacity-40 group-hover:opacity-80 group-hover:h-20 transition-all duration-500" />
      <div className="absolute bottom-6 left-6 w-12 h-1 bg-gradient-to-r from-transparent via-cyan-400 to-blue-400 opacity-0 group-hover:opacity-60 group-hover:w-16 transition-all duration-500" />
      
      {/* Content */}
      <div className={`absolute inset-0 flex flex-col justify-between z-10 ${sizeClasses.padding}`}>
        
        {/* Header */}
        <div className="space-y-4">
          <div className="flex items-center gap-3 flex-wrap">
            {/* Status Badge */}
            <div className={`backdrop-blur-xl transition-all rounded-xl flex items-center gap-2 text-white font-semibold border shadow-lg ${sizeClasses.badge} ${
              project.isComplete 
                ? 'bg-gradient-to-r from-green-600/80 to-emerald-600/80 border-green-400/50 shadow-green-500/20' 
                : 'bg-gradient-to-r from-blue-600/80 to-cyan-600/80 border-blue-400/50 shadow-blue-500/20'
            }`}>
              <div className={`w-2 h-2 rounded-full animate-pulse ${project.isComplete ? 'bg-green-300' : 'bg-blue-300'}`} />
              {project.isComplete ? 'COMPLETED' : 'IN PROGRESS'}
            </div>
          </div>
          
          {/* Project Title */}
          <h2 className={`text-white font-bold leading-tight drop-shadow-xl transition-all duration-300 ${sizeClasses.title}`}>
            {project.name}
          </h2>
        </div>

        {/* Footer */}
        <div className={`flex flex-col items-end gap-4`}>
          {/* CTA Button */}
          <a href={`/projects/${project.id}#s`}>
            <button className={`group/btn relative overflow-hidden bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl text-white hover:scale-105 active:scale-95 flex items-center gap-3 font-semibold ${sizeClasses.button}`}>
              {/* Shine effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000" />
              
              <div className="relative flex items-center gap-3">
                <span>View Project</span>
                <ArrowRight size={sizeClasses.iconSize + 2} className="group-hover/btn:translate-x-1 group-hover/btn:-translate-y-0.5 transition-transform duration-300" />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/50 to-cyan-600/50 blur-lg opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300 -z-10" />
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectTile;