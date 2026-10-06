import { PROJECTS_DATA, UPCOMING_PROJECTS } from '../data/projectsData'
import MediaClipScrubber from './MediaClipScrubber'
import { ExternalLink, Layers, Scissors, Film, CheckCircle2, Zap, ArrowUpRight, Clock } from 'lucide-react'

export default function ProjectsSection({ onSelectProject }) {
  const project = PROJECTS_DATA[0] // 9jaClip Media Clipping Website

  return (
    <section id="works" className="py-24 relative z-10 border-t border-stone-200/80 bg-[#FAF9F6]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 text-xs font-mono-tech uppercase tracking-widest text-stone-600 font-semibold">
            <Scissors className="w-3.5 h-3.5 text-stone-900" />
            <span>Flagship Production Platform</span>
          </div>
          <h2 className="font-serif-luxury text-4xl sm:text-5xl lg:text-6xl tracking-tight text-stone-900 leading-[1.05]">
            9jaClip — <span className="italic font-normal text-stone-600">Clipping Website</span>
          </h2>
          <p className="text-base text-stone-600 leading-relaxed font-normal">
            A fast, high-retention clipping platform built for content creators, streamers, and viewers to capture, cut, timestamp, and distribute viral video highlights and moments.
          </p>
        </div>

        {/* Flagship Large Bento Showcase Card (Light Luxury Editorial) */}
        <div className="rounded-3xl border border-stone-200 bg-white/80 backdrop-blur-xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.04)] relative">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
            
            {/* Left 7 Cols: Interactive Live Scrubber & Feature Overview */}
            <div className="lg:col-span-7 flex flex-col justify-between bg-stone-50/50 border-b lg:border-b-0 lg:border-r border-stone-200 p-6 sm:p-8 space-y-6">
              
              {/* Header Box */}
              <div className="p-6 rounded-2xl bg-white border border-stone-200/90 shadow-sm space-y-3">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-stone-100 text-stone-800 font-mono-tech text-xs font-semibold flex items-center gap-1.5">
                    <Film className="w-3.5 h-3.5" />
                    <span>Viral Video Trimmer</span>
                  </span>
                  <span className="text-xs font-mono-tech text-stone-500">
                    9jaclip-global.vercel.app
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                    Video & Stream Highlights Engine
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed font-normal">
                    Turn full livestreams, podcasts, and video broadcasts into sharp viral snippets with frame-accurate precision.
                  </p>
                </div>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 pt-1 text-xs font-mono-tech text-stone-500">
                  <span className="text-stone-800 font-medium">React 18</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-800 font-medium">TypeScript</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-800 font-medium">Supabase Cloud Video</span>
                  <span aria-hidden="true">·</span>
                  <span className="text-stone-800 font-medium">Vercel CDN</span>
                </div>
              </div>

              {/* Interactive Video Timeline Scrubber */}
              <div className="space-y-2">
                <div className="text-xs font-mono-tech text-stone-600 font-semibold uppercase tracking-wider flex items-center gap-1.5">
                  <Zap className="w-3.5 h-3.5 text-stone-900" />
                  <span>Interactive Trimming Engine</span>
                </div>
                <MediaClipScrubber />
              </div>

            </div>

            {/* Right 5 Cols: Architecture Solves & Specs */}
            <div className="lg:col-span-5 p-6 sm:p-8 flex flex-col justify-between space-y-6 bg-white">
              
              <div className="space-y-5">
                <div className="space-y-1.5">
                  <div className="text-xs font-mono-tech text-stone-500 font-semibold uppercase tracking-wider">
                    SYSTEM HIGHLIGHTS
                  </div>
                  <h3 className="font-serif-luxury text-2xl font-bold text-stone-900">
                    Engineered for Instant Clips
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    Designed to eliminate upload drop-offs and complex editing friction. Fast clip extraction directly inside the browser.
                  </p>
                </div>

                {/* Highlights List */}
                <div className="space-y-2.5">
                  {project.architecturalHighlights.map((highlight, idx) => (
                    <div
                      key={idx}
                      className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2.5 text-xs text-stone-800"
                    >
                      <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Benchmark Metrics Strip */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <div className="text-[10px] font-mono-tech text-stone-500 uppercase">Export Speed</div>
                    <div className="text-base font-bold font-mono-tech text-stone-900">&lt; 1.2s export</div>
                  </div>
                  <div className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80">
                    <div className="text-[10px] font-mono-tech text-stone-500 uppercase">Scrubber Precision</div>
                    <div className="text-base font-bold font-mono-tech text-stone-900">60 FPS frames</div>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-4 border-t border-stone-100 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="flex-1 py-3 px-5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-all flex items-center justify-center gap-2 shadow-md hover:shadow-lg hover:-translate-y-0.5"
                >
                  <span>Launch 9jaClip Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>

                <button
                  onClick={() => onSelectProject(project)}
                  className="py-3 px-5 rounded-full bg-stone-100 hover:bg-stone-200 text-stone-800 text-xs font-medium transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Inspect Specs</span>
                </button>
              </div>

            </div>

          </div>

        </div>

        {/* Upcoming Deployments Queue (Staged for new pushes) */}
        <div className="pt-4 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 border-b border-stone-200/80 pb-4">
            <div>
              <div className="text-xs font-mono-tech text-stone-500 font-semibold uppercase tracking-widest flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-stone-700" />
                <span>DEPLOYMENT PIPELINE</span>
              </div>
              <h3 className="font-serif-luxury text-3xl font-bold text-stone-900 mt-1">
                Staged for Next Release
              </h3>
            </div>
            <p className="text-xs font-mono-tech text-stone-500">
              New systems currently in engineering & testing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {UPCOMING_PROJECTS.map((item) => (
              <div
                key={item.id}
                className="p-7 rounded-3xl bg-white border border-stone-200 shadow-sm space-y-4 hover:border-stone-400 transition-colors"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono-tech px-3 py-1 rounded-full bg-stone-100 text-stone-800 font-medium">
                    {item.category}
                  </span>
                  <span className="text-[11px] font-mono-tech text-amber-700 font-semibold bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200">
                    {item.status}
                  </span>
                </div>

                <div className="space-y-1">
                  <h4 className="font-serif-luxury text-2xl font-bold text-stone-900">
                    {item.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-stone-600 leading-relaxed">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-2 flex flex-wrap gap-2 text-xs font-mono-tech text-stone-500">
                  {item.tags.map((t, idx) => (
                    <span key={idx}>
                      {t}{idx < item.tags.length - 1 ? ' · ' : ''}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
