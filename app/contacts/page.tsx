'use client'

import MapView from '@/components/map-view'
import { Button } from '@/components/ui/button'
import { Phone, Mail, MapPin, Send, MessageSquare, Building2 } from 'lucide-react'
import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "Service id"
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "Template id"
const EMAILJS_CONFIRMATION_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_CONFIRMATION_TEMPLATE_ID || "Confirmation template id"
const EMAILJS_PUBLIC_KEY  = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || "Public key"

const CC_RECIPIENTS = [
  'dean@bishman.nz',
  'regan@bishman.nz',
  'spencer@bishman.nz',
  'arjun@bishman.nz'
]

const Contacts = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!formRef.current) return

    setStatus('sending')

    const data = new FormData(formRef.current)
    const templateParams = {
      from_name:  data.get('from_name')  as string,
      from_email: data.get('from_email') as string,
      message:    data.get('message')    as string,
    }

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          ...templateParams,
          to_email:  'enquiries@bishman.nz',
          cc_emails: CC_RECIPIENTS.join(', '),
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_CONFIRMATION_TEMPLATE_ID,  // second template
        {
          ...templateParams,
          to_email: templateParams.from_email,
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )

      setStatus('success')
      formRef.current.reset()
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-sky-50 to-cyan-50 relative overflow-hidden rounded-[12px] my-16">
      {/* Background Effects */}
      <div className="absolute inset-0">
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
        <div className="absolute inset-0 bg-gradient-to-r from-sky-400/5 via-transparent to-cyan-400/5" />
      </div>

      <div className="absolute top-20 right-32 w-2 h-40 bg-gradient-to-b from-sky-400/30 to-transparent blur-sm animate-pulse hidden lg:block" />
      <div className="absolute bottom-20 left-32 w-2 h-32 bg-gradient-to-t from-cyan-400/20 to-transparent blur-sm animate-pulse hidden lg:block" />

      <div id="s" className="relative z-10 pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Map Section */}
          <div className="space-y-8">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-sky-200/50 transition-all duration-500" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>
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
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-cyan-200/50 transition-all duration-500" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 left-0 w-40 h-40 bg-gradient-to-br from-cyan-500/10 to-sky-500/5 rounded-full blur-3xl transform -translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tr from-sky-400/8 to-cyan-500/10 rounded-full blur-2xl transform translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>
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
                  <div className="group/item flex items-center gap-4 p-4 bg-white/40 rounded-2xl border border-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="p-3 bg-green-500/20 rounded-xl border border-green-400/30 group-hover/item:scale-110 transition-transform duration-300">
                      <Phone size={20} className="text-green-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Phone</p>
                      <p className="text-slate-800 font-semibold text-lg">09 270 3644</p>
                    </div>
                  </div>
                  <div className="group/item flex items-center gap-4 p-4 bg-white/40 rounded-2xl border border-white/40 backdrop-blur-xl hover:bg-white/60 transition-all duration-300 shadow-sm hover:shadow-md">
                    <div className="p-3 bg-purple-500/20 rounded-xl border border-purple-400/30 group-hover/item:scale-110 transition-transform duration-300">
                      <Mail size={20} className="text-purple-600" />
                    </div>
                    <div>
                      <p className="text-slate-600 text-sm mb-1">Email</p>
                      <p className="text-slate-800 font-semibold text-lg">accounts@bishman.nz</p>
                    </div>
                  </div>
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
              <div className="absolute inset-0 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/40 shadow-lg shadow-slate-200/50 group-hover:shadow-xl group-hover:shadow-sky-200/50 transition-all duration-500" />
              <div className="absolute inset-0 rounded-3xl overflow-hidden">
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-sky-500/10 to-cyan-500/5 rounded-full blur-3xl transform translate-x-20 -translate-y-20 group-hover:scale-150 transition-transform duration-700" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-cyan-400/8 to-sky-500/10 rounded-full blur-2xl transform -translate-x-16 translate-y-16 group-hover:scale-150 transition-transform duration-700" />
              </div>
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

                <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                  {/* Hidden CC field — referenced as {{cc_emails}} in your EmailJS template */}
                  <input type="hidden" name="cc_emails" value={CC_RECIPIENTS.join(', ')} />

                  {/* Name and Email Row */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label className="text-slate-700 text-sm font-medium">Name</label>
                      <input
                        type="text"
                        name="from_name"
                        required
                        placeholder="Enter your preferred name"
                        className="w-full p-4 bg-white/50 border border-white/60 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/70"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-slate-700 text-sm font-medium">Email</label>
                      <input
                        type="email"
                        name="from_email"
                        required
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
                      name="message"
                      required
                      placeholder="Tell us about your project or inquiry..."
                      className="w-full p-4 bg-white/50 border border-white/60 rounded-xl text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-sky-500/50 focus:border-sky-400/50 backdrop-blur-xl transition-all duration-300 hover:bg-white/70 resize-none"
                    />
                  </div>

                  {/* Status messages */}
                  {status === 'success' && (
                    <div className="p-4 bg-green-50/80 border border-green-200 rounded-xl text-green-700 text-sm font-medium">
                      Message sent! We&apos;ll be in touch soon.
                    </div>
                  )}
                  {status === 'error' && (
                    <div className="p-4 bg-red-50/80 border border-red-200 rounded-xl text-red-700 text-sm font-medium">
                      Something went wrong. Please try again or email us directly.
                    </div>
                  )}

                  {/* Submit Button */}
                  <Button
                    type="submit"
                    disabled={status === 'sending'}
                    className="group relative overflow-hidden w-full bg-gradient-to-r from-sky-600 to-cyan-600 hover:from-sky-500 hover:to-cyan-500 border border-sky-400/30 backdrop-blur-xl transition-all duration-500 hover:shadow-xl hover:shadow-sky-500/30 rounded-2xl text-white hover:scale-105 active:scale-95 px-8 py-4 text-lg font-semibold h-auto disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
                    <div className="relative flex items-center justify-center gap-3">
                      <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform duration-300" />
                      <span>{status === 'sending' ? 'Sending…' : 'Send Message'}</span>
                    </div>
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