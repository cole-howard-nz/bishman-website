import MapView from '@/components/map-view'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Send, MessageSquare, Building2 } from 'lucide-react'
import React from 'react'

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden rounded-[12px] my-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
        {/* Animated particles */}
        <div className="absolute inset-0">
          {Array.from({ length: 25 }, (_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-sky-400/20 rounded-full animate-pulse"
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
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-transparent to-cyan-400/5" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-32 w-2 h-40 bg-gradient-to-b from-sky-400/30 to-transparent blur-sm animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-32 w-2 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm animate-pulse hidden lg:block" />

      <div id="s" className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Section */}
          <div className="space-y-8">
            <div className="relative group">
              {/* Background card */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-sky-200/50 transition-all duration-500" />
              
              {/* Background effects */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-1 h-20 bg-gradient-to-b from-sky-400 to-cyan-400 opacity-30 rounded-full group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-20 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-30 rounded-full group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-sky-500/20 rounded-xl border border-sky-400/30">
                      <MapPin size={24} className="text-sky-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Find Us</h2>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/40 shadow-lg">
                  <MapView />
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="relative group">
              {/* Background card */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-cyan-200/50 transition-all duration-500" />
              
              {/* Background effects */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 rounded-full blur-3xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-sky-400/8 to-cyan-500/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-1 h-16 bg-gradient-to-b from-cyan-400 to-sky-400 opacity-30 rounded-full group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400/30">
                      <Building2 size={24} className="text-cyan-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Office Details</h2>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="group/item flex items-center gap-4 p-4 bg-white/40 rounded-2xl border border-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="p-3 bg-green-500/20 rounded-xl border border-green-400/30 group-hover/item:scale-110 transition-transform duration-300">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Phone</p>
                      <p className="text-slate-800 font-semibold text-lg">09 270 3644</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group/item flex items-center gap-4 p-4 bg-white/40 rounded-2xl border border-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30 group-hover/item:scale-110 transition-transform duration-300">
                      <Mail size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Email</p>
                      <p className="text-slate-800 font-semibold text-lg">accounts@bishman.nz</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group/item flex items-start gap-4 p-4 bg-white/40 rounded-2xl border border-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-400/30 group-hover/item:scale-110 transition-transform duration-300 mt-1">
                      <MapPin size={20} className="text-orange-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Address</p>
                      <p className="text-slate-800 font-semibold text-lg leading-relaxed">
                        2 Hotunui Drive, Mount Wellington<br />
                        Auckland 1060
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form Section */}
          <div className="space-y-8">
            <div className="relative group">
              {/* Background card */}
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-sky-200/50 transition-all duration-500" />
              
              {/* Background effects */}
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-1 h-24 bg-gradient-to-b from-sky-400 to-cyan-400 opacity-30 rounded-full group-hover:opacity-60 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-24 h-1 bg-gradient-to-r from-sky-400 to-cyan-400 opacity-30 rounded-full group-hover:opacity-60 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-sky-500/20 rounded-xl border border-sky-400/30">
                      <MessageSquare size={24} className="text-sky-600" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-slate-800">Send Message</h2>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Have a project in mind? We&apos;d love to hear from you. Send us a message and we&apos;ll respond as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-700 text-sm font-medium">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your preferred name"
                        className="w-full p-4 bg-white/50 border border-white/60 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/70"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-700 text-sm font-medium">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-4 bg-white/50 border border-white/60 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/70"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-slate-700 text-sm font-medium">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full p-4 bg-white/50 border border-white/60 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/70 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="group relative overflow-hidden w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 border border-sky-400/30 backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/30 rounded-2xl text-white hover:scale-105 active:scale-95 px-8 py-4 text-lg font-semibold h-auto"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <div className="relative flex items-center justify-center gap-3">
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>Send Message</span>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-sky-600/50 to-cyan-600/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contacts 