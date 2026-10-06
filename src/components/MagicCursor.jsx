import { useEffect, useRef, useState } from 'react'

export default function MagicCursor() {
  const dotRef = useRef(null)
  const ringRef = useRef(null)
  const [enabled, setEnabled] = useState(false)

  useEffect(() => {
    const isCoarse = window.matchMedia('(pointer: coarse)').matches
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (isCoarse || prefersReducedMotion) return

    setEnabled(true)

    let mouseX = window.innerWidth / 2
    let mouseY = window.innerHeight / 2
    let ringX = mouseX
    let ringY = mouseY
    let animationFrameId

    const handleMouseMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY

      if (dotRef.current) {
        dotRef.current.style.left = `${mouseX}px`
        dotRef.current.style.top = `${mouseY}px`
      }
    }

    const follow = () => {
      ringX += (mouseX - ringX) * 0.18
      ringY += (mouseY - ringY) * 0.18

      if (ringRef.current) {
        ringRef.current.style.left = `${ringX}px`
        ringRef.current.style.top = `${ringY}px`
      }

      animationFrameId = requestAnimationFrame(follow)
    }

    const handleMouseDown = (e) => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(0.75)'
      }

      // Sparkle burst on click
      for (let i = 0; i < 6; i++) {
        const spark = document.createElement('div')
        spark.className = 'magic-spark-light'
        const angle = Math.random() * Math.PI * 2
        const distance = 20 + Math.random() * 35
        spark.style.left = `${e.clientX}px`
        spark.style.top = `${e.clientY}px`
        spark.style.setProperty('--dx', `${Math.cos(angle) * distance}px`)
        spark.style.setProperty('--dy', `${Math.sin(angle) * distance}px`)
        document.body.appendChild(spark)
        setTimeout(() => spark.remove(), 550)
      }
    }

    const handleMouseUp = () => {
      if (ringRef.current) {
        ringRef.current.style.transform = 'translate(-50%, -50%) scale(1)'
      }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mousedown', handleMouseDown)
    window.addEventListener('mouseup', handleMouseUp)
    animationFrameId = requestAnimationFrame(follow)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mousedown', handleMouseDown)
      window.removeEventListener('mouseup', handleMouseUp)
      cancelAnimationFrame(animationFrameId)
    }
  }, [])

  if (!enabled) return null

  return (
    <>
      {/* Tiny sharp center dot */}
      <div
        ref={dotRef}
        className="fixed w-2 h-2 rounded-full bg-stone-900 pointer-events-none z-[9999] -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />

      {/* Smooth trailing glow ring */}
      <div
        ref={ringRef}
        className="fixed w-9 h-9 rounded-full border border-stone-800/30 shadow-[0_0_15px_rgba(0,0,0,0.06)] pointer-events-none z-[9998] -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
        aria-hidden="true"
      />
    </>
  )
}
