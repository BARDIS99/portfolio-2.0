import { TECHNICAL_PILLARS } from '../data/projectsData'
import { Terminal, Shield, Cpu, Zap } from 'lucide-react'

export default function ArchitectureSection() {
  const pillarIcons = [
    <Cpu className="w-5 h-5 text-stone-900" />,
    <Shield className="w-5 h-5 text-stone-900" />,
    <Zap className="w-5 h-5 text-stone-900" />,
    <Terminal className="w-5 h-5 text-stone-900" />
  ]

  return (
    <section id="architecture" className="py-24 relative z-10 border-t border-stone-200/80 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="text-xs font-mono-tech text-stone-500 font-semibold uppercase tracking-widest">
            Engineering Disciplines
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-900 leading-[1.05]">
            Built for throughput, <span className="italic font-normal text-stone-600">resilience & speed.</span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            Every product is designed with clear architectural boundaries, strict typed contracts, and zero unnecessary bundle weight.
          </p>
        </div>

        {/* 4-Pillar Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {TECHNICAL_PILLARS.map((pillar, index) => (
            <div
              key={pillar.index}
              className="p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200/90 hover:border-stone-400 hover:shadow-[0_16px_40px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-300 space-y-6 relative overflow-hidden group"
            >
              {/* Top Row: Editorial Index & Icon */}
              <div className="flex items-center justify-between">
                <span className="font-mono-tech text-xs text-stone-500 font-semibold tracking-wider">
                  {pillar.index}. DISCIPLINE
                </span>
                <div className="p-2.5 rounded-2xl bg-white border border-stone-200 shadow-sm group-hover:scale-105 transition-transform">
                  {pillarIcons[index]}
                </div>
              </div>

              {/* Title & Subtitle */}
              <div className="space-y-1">
                <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                  {pillar.title}
                </h3>
                <div className="text-xs font-mono-tech text-stone-500">
                  {pillar.subtitle}
                </div>
              </div>

              {/* Description */}
              <p className="text-sm text-stone-600 leading-relaxed font-normal">
                {pillar.description}
              </p>

              {/* Capabilities List */}
              <div className="pt-4 border-t border-stone-200/80 space-y-2">
                <div className="text-[11px] font-mono-tech uppercase tracking-wider text-stone-400">
                  Core Competencies
                </div>
                <div className="grid grid-cols-2 gap-2 text-xs text-stone-700 font-medium">
                  {pillar.capabilities.map((cap, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-stone-900" />
                      <span>{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Tech Stack Matrix Strip */}
        <div className="p-7 sm:p-8 rounded-3xl bg-[#FAF9F6] border border-stone-200 flex flex-col md:flex-row md:items-center justify-between gap-6 shadow-sm">
          <div className="space-y-1">
            <div className="text-xs font-mono-tech text-stone-500 font-semibold">VERIFIED PRODUCTION STACK</div>
            <div className="text-base font-serif-luxury font-bold text-stone-900">
              Modern Full-Stack Tooling
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs font-mono-tech text-stone-600">
            <span className="text-stone-900 font-medium">React 18</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">TypeScript</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">Supabase</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">Video APIs</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">Tailwind CSS</span>
            <span aria-hidden="true" className="text-stone-300">/</span>
            <span className="text-stone-900 font-medium">Vercel Edge</span>
          </div>
        </div>

      </div>
    </section>
  )
}
