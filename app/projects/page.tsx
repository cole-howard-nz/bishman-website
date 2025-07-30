'use client'
import React, { useState } from 'react'
import ProjectTile from '@/components/project-tile'
import { projects as allProjects } from '@/lib/temp-data'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Label } from '@/components/ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'

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

  const filteredProjects = allProjects
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
    <section className="space-y-4 overflow-x-hidden my-16">
      <div className="flex flex-col sm:flex-row gap-2 sm:items-center rounded-xl p-1 bg-gradient-to-br from-[#8ca6e9] via-[#758bc7] to-[#4d7aed] border-[#758bc7] border-1">
        <Input
          type="text"
          placeholder="Search for something specific..."
          value={searchTerm}
          onChange={e => setSearchTerm(e.target.value)}
          className="flex-grow text-white/90 placeholder:text-white/80 border-0 rounded-xl"
        />
        
        <Popover>
          <PopoverTrigger asChild>
            <Button className="bg-[#0f2547] hover:bg-[#152d51]/60 ease-in-out duration-200 px-4 py-2 rounded-lg text-white">
              Filter
            </Button>
          </PopoverTrigger>

          <PopoverContent className="w-full max-w-[300px] bg-[#0f2547] text-white border-none shadow-lg overflow-hidden" align="end">
            <div className="grid gap-4">
              <div className="space-y-2">
                <Label>Status</Label>
                <Select value={statusFilter} onValueChange={handleStatusChange}>
                  <SelectTrigger className="bg-[#152d51] border-none text-white">
                    <SelectValue placeholder="Select status" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#152d51] text-white border-none max-w-[300px] w-full">
                    <SelectItem value="All">All</SelectItem>
                    <SelectItem value="Complete">Complete</SelectItem>
                    <SelectItem value="Ongoing">Ongoing</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label>Sort By</Label>
                <Select value={sortOrder} onValueChange={handleSortChange}>
                  <SelectTrigger className="bg-[#152d51] border-none text-white">
                    <SelectValue placeholder="Sort projects" />
                  </SelectTrigger>
                  <SelectContent className="bg-[#152d51] text-white border-none">
                    <SelectItem value="Newest">Newest</SelectItem>
                    <SelectItem value="Oldest">Oldest</SelectItem>
                    <SelectItem value="A-Z">A-Z</SelectItem>
                    <SelectItem value="Z-A">Z-A</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </PopoverContent>
        </Popover>
      </div>

      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4 auto-rows-[1fr] m-auto p-2 rounded-[12px] bg-gradient-to-br from-[#b2c6f8] via-[#758bc7] to-[#8ca6e9]  border-[#758bc7] border-1'>
        { filteredProjects.map(project => <ProjectTile key={ project.id } project={ project } />) }
      </div>
    </section>
  )
}

export default Projects