import { useEffect } from 'react'
import { X, ExternalLink, CheckCircle2, Cpu } from 'lucide-react'
import GithubIcon from './GithubIcon'

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    document.body.style.overflow = 'hidden'
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  if (!project) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-stone-900/60 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-3xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-stone-100 bg-[#FAF9F6]">
          <div className="flex items-center gap-2 text-xs font-mono-tech text-stone-500">
            <span className="text-stone-900 font-semibold">{project.category}</span>
            <span aria-hidden="true">·</span>
            <span>{project.year}</span>
            <span aria-hidden="true">·</span>
            <span className="text-emerald-700 font-medium">{project.status}</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-900 rounded-full hover:bg-stone-200/60 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* High-Tech Spec Banner */}
          <div className="p-6 rounded-2xl border border-stone-200 bg-stone-50 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-mono-tech text-stone-500 font-semibold">
              <span>9JACLIP SYSTEM ARCHITECTURE</span>
            </div>
            <h3 className="font-serif-luxury text-3xl font-bold text-stone-900">
              {project.title}
            </h3>
            <p className="text-xs sm:text-sm text-stone-600">
              {project.tagline}
            </p>
          </div>

          {/* Context & Summary */}
          <div className="space-y-2">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-stone-400">
              Platform Overview
            </h4>
            <p className="text-sm text-stone-700 leading-relaxed">
              {project.summary}
            </p>
          </div>

          {/* Architectural Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono-tech uppercase tracking-wider text-stone-400">
              Key Engineering Solves
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {project.architecturalHighlights.map((highlight, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl bg-stone-50 border border-stone-200/80 flex items-start gap-2.5 text-xs text-stone-800"
                >
                  <CheckCircle2 className="w-4 h-4 text-stone-900 shrink-0 mt-0.5" />
                  <span>{highlight}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Stack & Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="flex items-center gap-1.5 text-xs font-mono-tech text-stone-900 font-semibold">
                <Cpu className="w-3.5 h-3.5" />
                <span>TECHNICAL STACK</span>
              </div>
              <div className="flex flex-wrap gap-1.5 text-xs text-stone-600 font-medium">
                {project.tags.map((tag, i) => (
                  <span key={i}>
                    {tag}{i < project.tags.length - 1 ? ' · ' : ''}
                  </span>
                ))}
              </div>
            </div>

            <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 space-y-2">
              <div className="text-xs font-mono-tech text-stone-900 font-semibold">
                PERFORMANCE METRICS
              </div>
              <div className="space-y-1 text-xs">
                {Object.entries(project.metrics).map(([key, val]) => (
                  <div key={key} className="flex justify-between text-stone-600">
                    <span className="capitalize">{key}:</span>
                    <span className="font-mono-tech font-bold text-stone-900">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="px-6 py-4 border-t border-stone-100 bg-[#FAF9F6] flex items-center justify-between gap-4">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer"
            className="text-xs font-medium text-stone-600 hover:text-stone-900 flex items-center gap-1.5"
          >
            <GithubIcon className="w-4 h-4" />
            <span>Repository Code</span>
          </a>

          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="px-4 py-2 text-xs font-medium text-stone-600 hover:text-stone-900 border border-stone-200 rounded-full hover:bg-stone-100"
            >
              Close
            </button>
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="px-5 py-2 text-xs font-semibold bg-stone-900 hover:bg-stone-800 text-white rounded-full flex items-center gap-1.5 shadow-sm"
            >
              <span>Launch Live System</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
