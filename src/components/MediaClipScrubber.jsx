import { useState, useEffect } from 'react'
import { Play, Pause, Scissors, Check, Film, Sparkles } from 'lucide-react'

export default function MediaClipScrubber() {
  const [isPlaying, setIsPlaying] = useState(false)
  const [progress, setProgress] = useState(38)
  const [inPoint, setInPoint] = useState(18)
  const [outPoint, setOutPoint] = useState(68)
  const [clipped, setClipped] = useState(false)

  // Smooth scrubber animation when playing
  useEffect(() => {
    if (!isPlaying) return
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= outPoint) return inPoint
        return prev + 1.2
      })
    }, 70)
    return () => clearInterval(interval)
  }, [isPlaying, inPoint, outPoint])

  const handleCreateClip = (e) => {
    e.preventDefault()
    e.stopPropagation()
    setClipped(true)
    setTimeout(() => setClipped(false), 3500)
  }

  // Calculate simulated seconds based on 120s total stream
  const inSeconds = Math.round((inPoint / 100) * 120)
  const outSeconds = Math.round((outPoint / 100) * 120)
  const duration = outSeconds - inSeconds

  const formatTime = (secs) => {
    const m = Math.floor(secs / 60)
    const s = secs % 60
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`
  }

  return (
    <div className="p-5 bg-white/95 rounded-2xl border border-stone-200/90 shadow-lg shadow-stone-900/5 space-y-4">
      
      {/* Top Header Row */}
      <div className="flex flex-wrap items-center justify-between gap-2 text-xs font-mono-tech">
        <div className="flex items-center gap-2 text-stone-800 font-semibold">
          <Film className="w-4 h-4 text-stone-900" />
          <span>9jaClip Frame-Accurate Timeline</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="text-[11px] text-stone-700 font-medium bg-stone-100 px-2.5 py-1 rounded-full border border-stone-200">
            Trim: {formatTime(inSeconds)} – {formatTime(outSeconds)} ({duration}s duration)
          </span>
          <span className="text-[10px] text-emerald-700 font-semibold px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200">
            60 FPS SYNC
          </span>
        </div>
      </div>

      {/* Main Scrubber Filmstrip with Audio Waveform */}
      <div className="space-y-2">
        <div className="relative h-11 bg-stone-900 rounded-xl overflow-hidden border border-stone-800 flex items-center px-1 select-none shadow-inner">
          
          {/* Filmstrip Division Marks */}
          <div className="absolute inset-0 flex items-center justify-between px-2 opacity-20 pointer-events-none">
            {Array.from({ length: 32 }).map((_, i) => (
              <div key={i} className="w-[1px] h-4 bg-white" />
            ))}
          </div>

          {/* Audio Waveform Background Bars */}
          <div className="absolute inset-0 flex items-end justify-between px-1.5 py-1 opacity-50 pointer-events-none">
            {Array.from({ length: 48 }).map((_, i) => {
              const h = Math.abs(Math.sin(i * 0.4)) * 75 + 15
              return (
                <div
                  key={i}
                  className={`w-1 rounded-full ${i >= inPoint * 0.48 && i <= outPoint * 0.48 ? 'bg-amber-400' : 'bg-stone-600'}`}
                  style={{ height: `${h}%` }}
                />
              )
            })}
          </div>

          {/* Selected Highlight Clip Range */}
          <div
            className="absolute top-0 bottom-0 bg-amber-400/25 border-x-2 border-amber-400 rounded-sm backdrop-blur-[1px]"
            style={{
              left: `${inPoint}%`,
              width: `${outPoint - inPoint}%`
            }}
          >
            <div className="w-full h-full flex items-center justify-center text-[10px] font-mono-tech text-amber-200 font-bold tracking-wider">
              HIGHLIGHT REGION
            </div>
          </div>

          {/* Moving Playhead */}
          <div
            className="absolute top-0 bottom-0 w-1 bg-white shadow-[0_0_12px_2px_rgba(255,255,255,0.9)] z-10 transition-all duration-75"
            style={{ left: `${progress}%` }}
          >
            <div className="w-3 h-3 bg-white rounded-full -ml-1 -mt-0.5 shadow-md border border-stone-800" />
          </div>
        </div>

        {/* In/Out Trim Adjuster Sliders */}
        <div className="flex items-center justify-between text-[11px] font-mono-tech text-stone-500 px-1">
          <div className="flex items-center gap-2">
            <span>In: {formatTime(inSeconds)}</span>
            <input
              type="range"
              min="0"
              max={outPoint - 5}
              value={inPoint}
              onChange={(e) => setInPoint(Number(e.target.value))}
              className="w-20 sm:w-28 accent-stone-900 h-1 bg-stone-200 rounded cursor-pointer"
            />
          </div>

          <div className="flex items-center gap-2">
            <input
              type="range"
              min={inPoint + 5}
              max="100"
              value={outPoint}
              onChange={(e) => setOutPoint(Number(e.target.value))}
              className="w-20 sm:w-28 accent-stone-900 h-1 bg-stone-200 rounded cursor-pointer"
            />
            <span>Out: {formatTime(outSeconds)}</span>
          </div>
        </div>
      </div>

      {/* Control Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
        <div className="flex items-center gap-3">
          <button
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIsPlaying(!isPlaying)
            }}
            className={`px-4 py-2 rounded-full text-xs font-mono-tech font-bold flex items-center gap-1.5 transition-all cursor-pointer ${
              isPlaying
                ? 'bg-stone-900 text-white shadow-md'
                : 'bg-stone-100 text-stone-800 hover:bg-stone-200'
            }`}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 fill-current" />}
            <span>{isPlaying ? 'Pause Scrub' : 'Play Preview'}</span>
          </button>

          <span className="text-xs font-mono-tech text-stone-600">
            {formatTime(Math.round((progress / 100) * 120))} / 02:00
          </span>
        </div>

        {/* Instant Clip Creation Button */}
        <button
          onClick={handleCreateClip}
          className="px-5 py-2 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-semibold text-xs font-mono-tech flex items-center gap-1.5 shadow-md hover:shadow-lg transition-all cursor-pointer hover:-translate-y-0.5"
        >
          {clipped ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-400" />
              <span>Clip Exported & Saved!</span>
            </>
          ) : (
            <>
              <Scissors className="w-3.5 h-3.5" />
              <span>Export Highlight Snippet</span>
            </>
          )}
        </button>
      </div>

      {/* Instant Notification Banner */}
      {clipped && (
        <div className="p-3 rounded-xl bg-emerald-50 border border-emerald-200 text-xs font-mono-tech text-emerald-800 flex items-center justify-between animate-in fade-in">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-600" />
            <span>Clip exported! Shareable link generated: <span className="underline font-bold">9jaclip.com/c/v81k</span></span>
          </div>
          <span className="text-[10px] text-emerald-700 font-bold uppercase tracking-wider bg-emerald-100 px-2 py-0.5 rounded">
            COPIED
          </span>
        </div>
      )}

    </div>
  )
}
