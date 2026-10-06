import { useState, useEffect } from 'react'
import { Play, Pause, Volume2 } from 'lucide-react'

export default function AudioWaveformPreview() {
  const [isPlaying, setIsPlaying] = useState(false)
  const barCount = 18

  return (
    <div className="p-3 bg-black/40 rounded-lg border border-white/[0.08] backdrop-blur-sm flex items-center justify-between gap-4">
      <div className="flex items-center gap-2.5">
        <button
          onClick={(e) => {
            e.preventDefault()
            e.stopPropagation()
            setIsPlaying(!isPlaying)
          }}
          className={`w-8 h-8 rounded-full flex items-center justify-center transition-all ${
            isPlaying ? 'bg-sky-400 text-black' : 'bg-white/10 text-white hover:bg-white/20'
          }`}
          aria-label={isPlaying ? 'Pause Audio Preview' : 'Play Audio Preview'}
        >
          {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
        </button>

        <div>
          <div className="text-xs font-medium text-slate-200">
            9jaClip Studio Node Preview
          </div>
          <div className="text-[10px] font-mono-tech text-slate-400">
            {isPlaying ? 'Streaming 320kbps Studio Master' : 'Click to simulate studio audio pipeline'}
          </div>
        </div>
      </div>

      {/* Dynamic Waveform Bars */}
      <div className="flex items-end gap-1 h-6">
        {Array.from({ length: barCount }).map((_, i) => {
          const height = isPlaying
            ? `${Math.max(15, Math.floor(Math.sin(i * 0.7 + Date.now() / 150) * 40 + 55))}%`
            : `${((i % 4) + 1) * 20}%`

          return (
            <div
              key={i}
              className={`w-1 rounded-full transition-all duration-150 ${
                isPlaying ? 'bg-sky-400' : 'bg-slate-600'
              }`}
              style={{ height: height }}
            />
          )
        })}
      </div>
    </div>
  )
}
