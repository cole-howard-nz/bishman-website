import MapView from '@/components/map-view'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Send, MessageSquare, Building2 } from 'lucide-react'
import React from 'react'

const Contacts = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-950 to-slate-800 relative overflow-hidden rounded-[12px] my-16">
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
        
        {/* Gradient overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-transparent to-cyan-600/5" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-slate-900/40" />
      </div>

      {/* Floating elements */}
      <div className="absolute top-20 right-32 w-2 h-40 bg-gradient-to-b from-blue-400/30 to-transparent blur-sm animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-32 w-2 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm animate-pulse hidden lg:block" />

      <div className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">
        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Section */}
          <div className="space-y-8">
            <div className="relative group">
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/5 rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl group-hover:shadow-blue-500/20 transition-all duration-500" />
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-1 h-20 bg-gradient-to-b from-blue-400 to-cyan-400 opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-20 h-1 bg-gradient-to-r from-blue-400 to-cyan-400 opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="mb-6">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-blue-500/20 rounded-xl border border-blue-400/30">
                      <MapPin size={24} className="text-blue-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Find Us</h2>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden border border-white/20 shadow-lg">
                  <MapView />
                </div>
              </div>
            </div>

            {/* Office Information */}
            <div className="relative group">
              {/* Background card */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/5 rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl group-hover:shadow-cyan-500/20 transition-all duration-500" />
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-1 h-16 bg-gradient-to-b from-cyan-400 to-blue-400 opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-cyan-500/20 rounded-xl border border-cyan-400/30">
                      <Building2 size={24} className="text-cyan-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Office Details</h2>
                  </div>
                </div>

                <div className="space-y-6">
                  {/* Phone */}
                  <div className="group/item flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 bg-green-500/20 rounded-xl border border-green-400/30 group-hover/item:scale-110 transition-transform duration-300">
                      <Phone size={20} className="text-green-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm mb-1">Phone</p>
                      <p className="text-white font-semibold text-lg">09 270 3644</p>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="group/item flex items-center gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30 group-hover/item:scale-110 transition-transform duration-300">
                      <Mail size={20} className="text-purple-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm mb-1">Email</p>
                      <p className="text-white font-semibold text-lg">accounts@bishman.nz</p>
                    </div>
                  </div>

                  {/* Address */}
                  <div className="group/item flex items-start gap-4 p-4 bg-white/5 rounded-2xl border border-white/10 backdrop-blur-xl hover:bg-white/10 transition-all duration-300">
                    <div className="p-3 bg-orange-500/20 rounded-xl border border-orange-400/30 group-hover/item:scale-110 transition-transform duration-300 mt-1">
                      <MapPin size={20} className="text-orange-400" />
                    </div>
                    <div>
                      <p className="text-slate-300 text-sm mb-1">Address</p>
                      <p className="text-white font-semibold text-lg leading-relaxed">
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
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-blue-500/5 to-cyan-500/5 rounded-3xl border border-white/20 backdrop-blur-2xl shadow-2xl group-hover:shadow-purple-500/20 transition-all duration-500" />
              
              {/* Decorative elements */}
              <div className="absolute top-6 right-6 w-1 h-24 bg-gradient-to-b from-purple-400 to-pink-400 opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-300" />
              <div className="absolute bottom-6 left-6 w-24 h-1 bg-gradient-to-r from-purple-400 to-pink-400 opacity-30 rounded-full group-hover:opacity-50 transition-opacity duration-300" />
              
              <div className="relative p-8">
                <div className="mb-8">
                  <div className="inline-flex items-center gap-3 mb-4">
                    <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30">
                      <MessageSquare size={24} className="text-purple-400" />
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-white">Send Message</h2>
                  </div>
                  <p className="text-slate-300 leading-relaxed">
                    Have a project in mind? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                  </p>
                </div>

                <form className="space-y-6">
                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-300 text-sm font-medium">Name</label>
                      <input
                        type="text"
                        placeholder="Enter your preferred name"
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-300 text-sm font-medium">Email</label>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/15"
                      />
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="text-slate-300 text-sm font-medium">Message</label>
                    <textarea
                      rows={6}
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full p-4 bg-white/10 border border-white/20 rounded-xl text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 focus:border-blue-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/15 resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <Button 
                    type="submit" 
                    className="group relative overflow-hidden w-full bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-500 hover:to-cyan-500 border border-blue-400/30 backdrop-blur-xl transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/30 rounded-2xl text-white hover:scale-105 active:scale-95 px-8 py-4 text-lg font-semibold h-auto"
                  >
                    {/* Shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    
                    <div className="relative flex items-center justify-center gap-3">
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>Send Message</span>
                    </div>

                    {/* Glow effect */}
                    <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-600/50 to-cyan-600/50 blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
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