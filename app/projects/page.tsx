'use client'
import React, { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { 
  Search, 
  Filter, 
} from 'lucide-react'
import { Project } from '@/lib/types'
import { projects } from '@/lib/temp-data'
import ProjectTile from '@/components/project-tile'

type StatusFilter = 'All' | 'Complete' | 'Ongoing'
type SortOrder = 'Newest' | 'Oldest' | 'A-Z' | 'Z-A'

const Projects = () => {
  const [searchTerm, setSearchTerm] = useState('')
  const [statusFilter, setStatusFilter] = useState<StatusFilter>('All')
  const [sortOrder, setSortOrder] = useState<SortOrder>('Newest')

  const handleStatusChange = (value: string) => {
    if (value === 'All' || value === 'Complete' || value === 'Ongoing') {
      setStatusFilter(value as StatusFilter)
    }
  }

  const handleSortChange = (value: string) => {
    if (value === 'Newest' || value === 'Oldest' || value === 'A-Z' || value === 'Z-A') {
      setSortOrder(value as SortOrder)
    }
  }

  const filteredProjects = projects
    .filter(project => {
      const matchesSearch = project.name.toLowerCase().includes(searchTerm.toLowerCase())
      const matchesStatus =
        statusFilter === 'All' ||
        (statusFilter === 'Complete' && project.isComplete) ||
        (statusFilter === 'Ongoing' && !project.isComplete)
      return matchesSearch && matchesStatus
    })
    .sort((a, b) => {
      if (sortOrder === 'Newest') return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
      if (sortOrder === 'Oldest') return new Date(a.startDate).getTime() - new Date(b.startDate).getTime()
      if (sortOrder === 'A-Z') return a.name.localeCompare(b.name)
      if (sortOrder === 'Z-A') return b.name.localeCompare(a.name)
      return 0
    })

  return (
    <div className="min-h-screen my-16 bg-gradient-to-br rounded-[12px] from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
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
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Floating elements inspired by Sky Tower */}
      <div className="absolute top-20 right-32 w-2 h-40 bg-gradient-to-b from-blue-400/30 to-transparent blur-sm animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-32 w-2 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm animate-pulse hidden lg:block" />

      <div id="s" className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-20">
          <div className="inline-block mb-6">
            <span className="text-blue-400/80 text-sm font-medium tracking-wider uppercase bg-blue-400/10 px-4 py-2 rounded-full border border-blue-400/20">
              Portfolio
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 bg-gradient-to-r from-white via-blue-100 to-white bg-clip-text text-transparent leading-tight">
            Our Projects
          </h1>
          
          <p className="text-xl text-slate-300 max-w-4xl mx-auto leading-relaxed mb-8">
          </p>

          {/* Animated divider */}
          <div className="flex justify-center items-center gap-4 mt-12 mb-12">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-blue-400/50" />
            <div className="w-3 h-3 bg-blue-400/30 rounded-full animate-pulse" />
            <div className="w-24 h-px bg-gradient-to-r from-blue-400/50 to-blue-400/20" />
            <div className="w-2 h-2 bg-cyan-400/40 rounded-full animate-pulse" style={{ animationDelay: '0.5s' }} />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-blue-400/50" />
          </div>

          {/* Search and Filter Section */}
          <div className="mb-8">
            <div className="flex lg:flex-row gap-4 items-center justify-center max-w-2xl mx-auto">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md w-full">
                <Input
                  type="text"
                  placeholder="Search projects..."
                  value={searchTerm}
                  onChange={e => setSearchTerm(e.target.value)}
                  className="h-12 bg-white/5 border-white/20 rounded-xl text-white placeholder:text-gray-400 focus:bg-white/10 focus:border-blue-400/50 transition-all backdrop-blur-xl"
                />
              </div>
              
              {/* Filter Popover */}
              <Popover>
                <PopoverTrigger asChild>
                  <Button className="h-12 px-6 bg-white/10 hover:bg-white/20 border border-white/20 rounded-xl text-white transition-all backdrop-blur-xl">
                    <Filter size={18} className="mr-2" />
                    Filter & Sort
                  </Button>
                </PopoverTrigger>

                <PopoverContent className="w-fit bg-slate-900/95 backdrop-blur-2xl border-white/20 rounded-2xl shadow-2xl" align="end">
                  <div className="space-y-6 p-2">
                    <div className="space-y-3">
                      <Label className="text-white font-medium">Project Status</Label>
                      <Select value={statusFilter} onValueChange={handleStatusChange}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/20 rounded-xl">
                          <SelectItem value="All" className="text-white">All Projects</SelectItem>
                          <SelectItem value="Complete" className="text-white">Complete</SelectItem>
                          <SelectItem value="Ongoing" className="text-white">Ongoing</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-3">
                      <Label className="text-white font-medium">Sort Order</Label>
                      <Select value={sortOrder} onValueChange={handleSortChange}>
                        <SelectTrigger className="bg-white/10 border-white/20 text-white rounded-xl">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className="bg-slate-900 border-white/20 rounded-xl">
                          <SelectItem value="Newest" className="text-white">Newest First</SelectItem>
                          <SelectItem value="Oldest" className="text-white">Oldest First</SelectItem>
                          <SelectItem value="A-Z" className="text-white">A to Z</SelectItem>
                          <SelectItem value="Z-A" className="text-white">Z to A</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Results Counter */}
          <div className="mb-6">
            <p className="text-slate-400">
              Showing {filteredProjects.length} project{filteredProjects.length !== 1 ? 's' : ''}
            </p>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8 justify-items-center w-full">
          {filteredProjects.map((project: Project, index: number) => (
            <div
              key={project.id}
              className="w-full max-w-md"
              style={{
                animationDelay: `${index * 150}ms`
              }}
            >
              <ProjectTile project={project} />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-16">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-white/5 flex items-center justify-center backdrop-blur-xl border border-white/10">
              <Search size={32} className="text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No projects found</h3>
            <p className="text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}

export default Projects