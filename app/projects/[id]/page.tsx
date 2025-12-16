import Image from 'next/image'
import { notFound } from 'next/navigation'
import { projects } from '@/lib/temp-data'
import Link from 'next/link'
import { ArrowLeft, Clock, Calendar, MapPin } from 'lucide-react'

type ProjectPageProps = {
  params: Promise<{
    id: string
  }>
}

const ProjectPage = async ({ params }: ProjectPageProps) => {
  const { id } = await params
  const projectId = Number(id)
  const project = projects.find(p => p.id === projectId)

  if (isNaN(projectId) || !project) {
    return notFound()
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 20 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-sky-400/30 rounded-full animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/10 via-transparent to-cyan-400/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-100/60 via-transparent to-sky-50/40" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-32 w-2 h-40 bg-gradient-to-b from-sky-400/40 to-transparent blur-sm animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-32 w-2 h-32 bg-gradient-to-t from-cyan-400/30 to-transparent blur-sm animate-pulse hidden lg:block" />

      <div className="relative z-10 pt-24 pb-16 px-4 max-w-7xl mx-auto">
        {/* Breadcrumb Navigation */}
        <div className="mb-12">
          <Link 
            href="/projects#s"
            className="inline-flex items-center gap-3 transition-all duration-300 group"
          >
            <div className="p-2 rounded-xl bg-white/80 border border-sky-200 backdrop-blur-xl group-hover:bg-white transition-all duration-300">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
            </div>
            <span className="text-lg font-medium">Back to Projects</span>
          </Link>
        </div>

        {/* Project Header */}
        <div id='s' className="mb-16">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-800 leading-tight">
                {project.name}
              </h1>
              
              {/* Status Badge */}
              <div className={`inline-flex items-center gap-3 px-6 py-3 rounded-2xl backdrop-blur-xl border text-white font-semibold shadow-lg transition-all duration-300 ${
                project.isComplete 
                  ? 'bg-gradient-to-r from-green-600/80 to-emerald-600/80 border-green-400/50 shadow-green-500/20' 
                  : 'bg-gradient-to-r from-sky-600/80 to-cyan-600/80 border-sky-400/50 shadow-sky-500/20'
              }`}>
                <span>{project.isComplete ? 'PROJECT COMPLETED' : 'IN PROGRESS'}</span>
              </div>
            </div>

            {/* Project Metadata */}
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-3 bg-white/80 border border-sky-200 rounded-xl backdrop-blur-xl text-slate-700 hover:bg-white transition-all duration-300">
                <Clock size={18} className="text-sky-600" />
                <span className="font-medium">{project.startDate}</span>
              </div>
              
              {project.finishDate && project.isComplete && (
                <div className="flex items-center gap-2 px-4 py-3 bg-white/80 border border-sky-200 rounded-xl backdrop-blur-xl text-slate-700 hover:bg-white transition-all duration-300">
                  <Calendar size={18} className="text-green-600" />
                  <span className="font-medium">{project.finishDate}</span>
                </div>
              )}
              
              <div className="flex items-center gap-2 px-4 py-3 bg-white/80 border border-sky-200 rounded-xl backdrop-blur-xl text-slate-700 hover:bg-white transition-all duration-300">
                <MapPin size={18} className="text-cyan-600" />
                <span className="font-medium">{project.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Project Images */}
        <div className="mb-16 space-y-6">
          {/* Main Image */}
          {project.images && project.images[0] && (
            <div className="group relative overflow-hidden rounded-3xl border border-sky-200 backdrop-blur-xl shadow-2xl">
              <div className="aspect-[16/9] lg:aspect-[21/9] relative">
                <Image
                  src={project.images[0]}
                  alt={project.name}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          )}

          {/* Additional Images Grid */}
          {project.images && project.images.length > 1 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.images.slice(1, 4).map((img, idx) => (
                <div
                  key={idx}
                  className="group relative overflow-hidden rounded-2xl border border-sky-200 backdrop-blur-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="aspect-[4/3] relative">
                    <Image
                      src={img}
                      alt={`${project.name} ${idx + 2}`}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Project Description */}
        <div className="relative">
          {/* Background card */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/80 via-sky-50/50 to-cyan-50/50 rounded-3xl border border-sky-200 backdrop-blur-2xl shadow-2xl" />
          
          {/* Decorative elements */}
          <div className="absolute top-6 right-6 w-1 h-20 bg-gradient-to-b from-sky-400 to-cyan-400 opacity-30 rounded-full" />
          <div className="absolute bottom-6 left-6 w-20 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-30 rounded-full" />
          
          <div className="relative p-8 md:p-12 lg:p-16">
            <div className="mb-8">
              <div className="inline-block mb-6">
                <span className="text-sky-700 text-sm font-medium tracking-wider uppercase bg-sky-100 px-4 py-2 rounded-full border border-sky-300">
                  Project Overview
                </span>
              </div>
              
              <h2 className="text-2xl md:text-3xl font-bold text-slate-800 mb-6 leading-relaxed">
                About This Project
              </h2>
            </div>

            <div className="prose prose-lg max-w-none">
              <p className="text-slate-700 text-lg md:text-xl leading-relaxed font-light">
                {project.blurb}
              </p>
            </div>

            {/* Project Details Grid */}
            <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-white/50 rounded-2xl border border-sky-200 backdrop-blur-xl hover:bg-white/80 transition-all duration-300">
                <Clock size={24} className="text-sky-600 mb-4" />
                <h3 className="text-slate-800 font-semibold mb-2">Start Date</h3>
                <p className="text-slate-600">{project.startDate}</p>
              </div>
              
              {project.finishDate && project.isComplete && (
                <div className="p-6 bg-white/50 rounded-2xl border border-sky-200 backdrop-blur-xl hover:bg-white/80 transition-all duration-300">
                  <Calendar size={24} className="text-green-600 mb-4" />
                  <h3 className="text-slate-800 font-semibold mb-2">Completion Date</h3>
                  <p className="text-slate-600">{project.finishDate}</p>
                </div>
              )}
              
              <div className="p-6 bg-white/50 rounded-2xl border border-sky-200 backdrop-blur-xl hover:bg-white/80 transition-all duration-300">
                <MapPin size={24} className="text-cyan-600 mb-4" />
                <h3 className="text-slate-800 font-semibold mb-2">Location</h3>
                <p className="text-slate-600">{project.location}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Link 
            href="/projects#s"
            className="inline-flex items-center gap-3 transition-all duration-300 group"
          >
            <div className="p-2 rounded-xl bg-white/80 border border-sky-200 backdrop-blur-xl group-hover:bg-white transition-all duration-300">
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
            </div>
            <span className="text-lg font-medium">Back to Projects</span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ProjectPage