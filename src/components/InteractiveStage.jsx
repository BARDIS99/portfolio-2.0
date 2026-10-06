import { useState, useRef, useEffect } from 'react'
import { Sparkles, Activity, Layers, Zap, Video, Shield, Scissors, TrendingUp } from 'lucide-react'

export default function InteractiveStage({ onSelectProject }) {
  const stageRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })
  const [isHovered, setIsHovered] = useState(false)
  const [activeCard, setActiveCard] = useState(null)

  // 3D Parallax Mouse Tracking
  const handleMouseMove = (e) => {
    if (!stageRef.current) return
    const rect = stageRef.current.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    setMousePos({ x, y })
  }

  const handleMouseEnter = () => setIsHovered(true)
  const handleMouseLeave = () => {
    setIsHovered(false)
    setMousePos({ x: 0, y: 0 })
  }

  // Cards orbiting Ibrahim's portrait: Dev + Trader Synergy
  const orbitCards = [
    {
      id: 'clip',
      title: '9jaClip Engine',
      desc: 'Viral media clipping',
      icon: <Scissors className="w-4 h-4 text-purple-600" />,
      bg: 'bg-purple-500/10 border-purple-500/20 text-purple-700',
      xOffset: -165,
      yOffset: 30,
      zOffset: 40,
      rot: -8
    },
    {
      id: 'trader',
      title: 'Market Trading',
      desc: 'Order flow & risk control',
      icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
      bg: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-700',
      xOffset: -75,
      yOffset: -65,
      zOffset: 60,
      rot: -4
    },
    {
      id: 'arch',
      title: 'Full-Stack Web',
      desc: 'React 18 & TypeScript',
      icon: <Layers className="w-4 h-4 text-amber-600" />,
      bg: 'bg-amber-500/10 border-amber-500/20 text-amber-700',
      xOffset: 80,
      yOffset: -55,
      zOffset: 50,
      rot: 4
    },
    {
      id: 'stream',
      title: 'Cloud Edge',
      desc: 'Supabase & Vercel',
      icon: <Activity className="w-4 h-4 text-sky-600" />,
      bg: 'bg-sky-500/10 border-sky-500/20 text-sky-700',
      xOffset: 165,
      yOffset: 35,
      zOffset: 45,
      rot: 8
    }
  ]

  // Dynamic parallax transforms
  const rotateX = mousePos.y * -18
  const rotateY = mousePos.x * 22

  return (
    <div
      ref={stageRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full max-w-5xl mx-auto py-10 sm:py-16 select-none perspective-stage"
    >
      {/* Background connected filament bezier curves (SVG) */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none stroke-stone-300/70"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M 120 180 C 260 220, 360 260, 480 320"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
        <path
          d="M 900 240 C 760 260, 640 280, 520 320"
          strokeWidth="1.2"
          strokeDasharray="4 4"
        />
      </svg>

      {/* Left Callout Card */}
      <div
        className="hidden md:flex absolute left-2 lg:left-6 top-16 z-20 w-64 p-5 rounded-2xl editorial-card transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -18}px, ${mousePos.y * -14}px, 20px)`
        }}
      >
        <div className="space-y-3">
          <div className="w-9 h-9 rounded-xl bg-stone-100 border border-stone-200/80 flex items-center justify-center text-stone-800">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900 leading-snug">
              Turn ideas into progress.
            </h4>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">
              Frame-accurate video trimming, real-time waveform sync & instant clip distribution.
            </p>
          </div>
        </div>
      </div>

      {/* Right Callout Card */}
      <div
        className="hidden md:flex absolute right-2 lg:right-6 top-28 z-20 w-64 p-5 rounded-2xl editorial-card transition-all duration-300"
        style={{
          transform: `translate3d(${mousePos.x * -14}px, ${mousePos.y * -18}px, 20px)`
        }}
      >
        <div className="space-y-3">
          <div className="flex items-center -space-x-2 overflow-hidden">
            <span className="w-7 h-7 rounded-full bg-stone-900 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              9C
            </span>
            <span className="w-7 h-7 rounded-full bg-amber-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              TS
            </span>
            <span className="w-7 h-7 rounded-full bg-emerald-500 text-white text-[10px] font-bold flex items-center justify-center border-2 border-white">
              SB
            </span>
            <span className="w-7 h-7 rounded-full bg-stone-100 text-stone-600 text-[10px] font-medium flex items-center justify-center border-2 border-white">
              +
            </span>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-stone-900 leading-snug">
              9jaClip, anytime, anywhere.
            </h4>
            <p className="text-xs text-stone-500 mt-1 leading-relaxed">
              Engineered for seamless playback & 60fps scrubbing across all screen sizes.
            </p>
          </div>
        </div>
      </div>

      {/* Center 3D Stage with Ibrahim's Portrait & Curved Floating Cards */}
      <div className="flex flex-col items-center justify-center relative z-10 py-6">
        
        {/* The 3D Rotating & Tilting Stage Container */}
        <div
          className="relative flex items-center justify-center transition-transform duration-200 ease-out"
          style={{
            transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
          }}
        >
          {/* Subtle Stage Shadow Floor */}
          <div className="absolute -bottom-10 w-72 h-16 bg-stone-400/20 blur-2xl rounded-full pointer-events-none" />

          {/* Ibrahim's Portrait (Circular Centerpiece from uploaded photo) */}
          <div className="relative w-56 h-56 sm:w-72 sm:h-72 md:w-80 md:h-80 rounded-full p-2.5 bg-gradient-to-b from-white via-stone-100 to-stone-200 border border-stone-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.08)] overflow-hidden group">
            
            <div className="w-full h-full rounded-full overflow-hidden relative bg-stone-950">
              <img
                src="/phoenix_avatar.jpg"
                alt="Ibrahim"
                className="w-full h-full object-cover object-center scale-102 group-hover:scale-108 transition-transform duration-700 ease-out"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  e.currentTarget.src = '/profile.jpg'
                }}
              />

              {/* Cinematic Vignette */}
              <div className="absolute inset-0 bg-gradient-to-t from-stone-950/40 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Glowing Accent Ring */}
            <div className="absolute inset-0 rounded-full border border-white/60 pointer-events-none" />
          </div>

          {/* Curved Orbiting Frosted Cards (Floating around Ibrahim) */}
          {orbitCards.map((card) => {
            const isCardActive = activeCard === card.id
            const cardX = card.xOffset + mousePos.x * 35
            const cardY = card.yOffset + mousePos.y * 30
            const cardZ = card.zOffset + (isHovered ? 15 : 0)

            return (
              <div
                key={card.id}
                onMouseEnter={() => setActiveCard(card.id)}
                onMouseLeave={() => setActiveCard(null)}
                className={`absolute z-30 px-3.5 py-2.5 rounded-2xl bg-white/90 backdrop-blur-xl border border-stone-200/80 shadow-[0_12px_30px_rgba(0,0,0,0.08)] cursor-pointer transition-all duration-300 flex items-center gap-3 ${
                  isCardActive ? 'scale-110 shadow-xl border-stone-400' : 'hover:scale-105'
                }`}
                style={{
                  transform: `translate3d(${cardX}px, ${cardY}px, ${cardZ}px) rotate(${card.rot}deg)`
                }}
              >
                <div className={`p-2 rounded-xl ${card.bg}`}>
                  {card.icon}
                </div>
                <div>
                  <div className="text-xs font-bold text-stone-900 leading-tight">
                    {card.title}
                  </div>
                  <div className="text-[10px] text-stone-500 font-medium">
                    {card.desc}
                  </div>
                </div>
              </div>
            )
          })}

        </div>

      </div>

      {/* Bottom Proof Metrics Strip (as shown in reference image) */}
      <div className="mt-8 pt-4 flex flex-col sm:flex-row items-center justify-between gap-6 px-4 sm:px-12 text-xs text-stone-500 font-medium">
        
        {/* Left: Trusted proof */}
        <div className="flex items-center gap-3">
          <div className="flex items-center -space-x-1.5">
            <span className="w-6 h-6 rounded-full bg-stone-800 text-white text-[9px] font-bold flex items-center justify-center border border-white">
              9C
            </span>
            <span className="w-6 h-6 rounded-full bg-amber-500 text-white text-[9px] font-bold flex items-center justify-center border border-white">
              TS
            </span>
            <span className="w-6 h-6 rounded-full bg-purple-500 text-white text-[9px] font-bold flex items-center justify-center border border-white">
              RC
            </span>
          </div>
          <span className="text-stone-700">
            Shipped & verified in production · <strong className="text-stone-900">9jaClip Platform</strong>
          </span>
        </div>

        {/* Right: Less chaos. More clarity. */}
        <div className="flex items-center gap-2 text-stone-600">
          <Sparkles className="w-3.5 h-3.5 text-stone-800" />
          <span>Zero chaos. Pure performance.</span>
        </div>

      </div>

    </div>
  )
}
