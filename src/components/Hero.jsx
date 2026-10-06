import { ArrowRight, Play, Sparkles } from 'lucide-react'
import InteractiveStage from './InteractiveStage'

export default function Hero() {
  const scrollToTrimmer = () => {
    document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="overview" className="relative pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1100px] h-[550px] ambient-glow-warm pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Top Right Decorative Stamp (Like in reference UI) */}
        <div className="hidden lg:flex absolute right-4 top-2 flex-col items-center pointer-events-none opacity-80">
          <div className="w-20 h-20 rounded-full border border-stone-300/80 flex items-center justify-center relative">
            <span className="text-[9px] uppercase tracking-widest font-mono-tech text-stone-500 text-center leading-tight">
              ARCHITECT<br />★<br />BUILDER
            </span>
          </div>
        </div>

        {/* Big Editorial Headline matching the reference image */}
        <div className="space-y-5 max-w-4xl mx-auto">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-stone-200 shadow-sm text-xs font-mono-tech text-stone-700">
            <span className="w-2 h-2 rounded-full bg-stone-900" />
            <span>Full-Stack Developer · Market Trader · Builder</span>
          </div>

          <h1 className="font-serif-luxury text-5xl sm:text-7xl lg:text-8xl tracking-tight text-stone-900 leading-[1.02]">
            <span>Crafting systems </span>
            <br />
            <span className="italic font-normal text-stone-600">
              that ship & endure.
            </span>
          </h1>

          <p className="text-base sm:text-lg text-stone-600 max-w-2xl mx-auto leading-relaxed font-normal">
            I'm <span className="text-stone-900 font-semibold">Ibrahim</span>. Systems engineer, builder behind <span className="text-stone-900 font-semibold">9jaClip</span>, and financial market trader. Engineering high-speed web platforms while analyzing global liquidity and managing risk with mathematical discipline.
          </p>

          {/* Two Pill Action Buttons */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#works"
              className="px-7 py-3 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-sm transition-all flex items-center gap-2 shadow-lg shadow-stone-900/10 hover:shadow-xl hover:-translate-y-0.5"
            >
              <span>Explore 9jaClip</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTrimmer}
              className="px-6 py-3 rounded-full bg-white hover:bg-stone-50 text-stone-900 font-medium text-sm border border-stone-200/90 transition-all flex items-center gap-2 shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              <div className="w-5 h-5 rounded-full bg-stone-100 flex items-center justify-center">
                <Play className="w-3 h-3 text-stone-900 fill-stone-900 ml-0.5" />
              </div>
              <span>Try Live Trimmer</span>
            </button>
          </div>

        </div>

        {/* 3D Center Stage with Ibrahim's Portrait & Orbiting Moving Cards */}
        <div className="mt-6 sm:mt-10">
          <InteractiveStage />
        </div>

      </div>
    </section>
  )
}
