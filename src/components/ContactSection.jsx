import { useState } from 'react'
import { Mail, Copy, Check, Send, Sparkles, MapPin, ArrowUpRight } from 'lucide-react'
import GithubIcon from './GithubIcon'

export default function ContactSection() {
  const [copied, setCopied] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '9jaClip / Web Application',
    message: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const emailAddress = 'bardisbas@gmail.com'

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress)
    setCopied(true)
    setTimeout(() => setCopied(false), 2500)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) return

    setSubmitted(true)
    const subject = encodeURIComponent(`Project Inquiry: ${formData.projectType} from ${formData.name}`)
    const body = encodeURIComponent(`Sender: ${formData.name} (${formData.email})\nProject: ${formData.projectType}\n\n${formData.message}`)
    
    setTimeout(() => {
      window.location.href = `mailto:${emailAddress}?subject=${subject}&body=${body}`
    }, 400)
  }

  return (
    <section id="contact" className="py-24 relative z-10 border-t border-stone-200/80 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono-tech text-stone-500 font-semibold uppercase tracking-widest">
            Initiate Contact
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-900 leading-[1.05]">
            Ready to engineer <span className="italic font-normal text-stone-600">something bold?</span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Available for full-stack engineering roles, ambitious production builds, and creative collaboration.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Direct Channels */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-8 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-6">
              <div className="space-y-1">
                <div className="text-xs font-mono-tech text-stone-400 font-semibold uppercase">DIRECT DISPATCH</div>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  Engineering Inquiries
                </h3>
                <p className="text-xs text-stone-500">
                  Direct channels with response turnaround under 12 hours.
                </p>
              </div>

              {/* Email channel with one-click copy */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3 overflow-hidden">
                  <div className="p-2.5 rounded-xl bg-stone-900 text-white shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="overflow-hidden">
                    <div className="text-[10px] font-mono-tech text-stone-400 uppercase">Email Address</div>
                    <a
                      href={`mailto:${emailAddress}`}
                      className="text-xs sm:text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors truncate block"
                    >
                      {emailAddress}
                    </a>
                  </div>
                </div>

                <button
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200 flex items-center gap-1.5 transition-colors shrink-0 cursor-pointer shadow-sm"
                  title="Copy email address"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span className="text-emerald-700 text-[11px]">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span className="text-[11px]">Copy</span>
                    </>
                  )}
                </button>
              </div>

              {/* GitHub Channel */}
              <div className="p-4 rounded-2xl bg-stone-50 border border-stone-200/80 flex items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-stone-900 text-white shrink-0">
                    <GithubIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="text-[10px] font-mono-tech text-stone-400 uppercase">GitHub Profile</div>
                    <a
                      href="https://github.com/BARDIS99"
                      target="_blank"
                      rel="noreferrer"
                      className="text-xs sm:text-sm font-medium text-stone-900 hover:text-stone-600 transition-colors"
                    >
                      github.com/BARDIS99
                    </a>
                  </div>
                </div>

                <a
                  href="https://github.com/BARDIS99"
                  target="_blank"
                  rel="noreferrer"
                  className="px-3 py-1.5 rounded-full bg-white hover:bg-stone-100 text-stone-700 text-xs font-medium border border-stone-200 flex items-center gap-1 transition-colors shadow-sm"
                >
                  <span>Visit</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </div>

              {/* Location */}
              <div className="pt-2 border-t border-stone-100 flex items-center justify-between text-xs font-mono-tech text-stone-500">
                <div className="flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-stone-800" />
                  <span>Taraba State, Nigeria</span>
                </div>
                <span>WAT (UTC+1)</span>
              </div>
            </div>
          </div>

          {/* Right Column: Project Inquiry Form */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="p-8 sm:p-10 rounded-3xl bg-white border border-stone-200/90 shadow-sm space-y-5"
            >
              <div className="space-y-1">
                <div className="text-xs font-mono-tech text-stone-400 uppercase">PROJECT TRANSMISSION</div>
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  Send a direct message
                </h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech text-stone-600">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Alex"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs font-mono-tech focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono-tech text-stone-600">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs font-mono-tech focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono-tech text-stone-600">
                  Project Focus
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-800 text-xs font-mono-tech focus:border-stone-900 focus:bg-white focus:outline-none transition-colors"
                >
                  <option value="9jaClip / Web Application">9jaClip / Media Clipping Engine</option>
                  <option value="Full-Stack Application">Full-Stack Web Application</option>
                  <option value="Enterprise Workforce Tool">Enterprise / Internal Tooling</option>
                  <option value="Full-Time Engineering Role">Full-Time Engineering Role</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-mono-tech text-stone-600">
                  Project Scope & Details *
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Tell me about your idea, timeline, or engineering requirements..."
                  className="w-full px-4 py-3 rounded-xl bg-stone-50 border border-stone-200 text-stone-900 text-xs font-mono-tech focus:border-stone-900 focus:bg-white focus:outline-none transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3.5 px-6 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs font-mono-tech transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md shadow-stone-900/10 hover:shadow-lg hover:-translate-y-0.5"
              >
                {submitted ? (
                  <>
                    <Check className="w-4 h-4 text-white" />
                    <span>Opening Mail Client...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Transmit Message</span>
                  </>
                )}
              </button>
            </form>
          </div>

        </div>

      </div>
    </section>
  )
}
