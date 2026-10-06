import { ArrowUp, Search } from 'lucide-react'

export default function Footer({ onOpenCommandPalette }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="py-14 border-t border-stone-200 bg-[#FAF9F6] relative z-10 text-xs font-mono-tech text-stone-500">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
        
        {/* Left: Copyright & Location */}
        <div className="flex items-center gap-2">
          <span className="font-serif-luxury font-bold text-base text-stone-900 tracking-wide">Ibrahim</span>
          <span aria-hidden="true">·</span>
          <span>© {new Date().getFullYear()}</span>
          <span aria-hidden="true">·</span>
          <span>Taraba, Nigeria (WAT)</span>
        </div>

        {/* Center: Clean links & Command Palette trigger */}
        <div className="flex items-center gap-6 text-stone-600 font-medium">
          <a href="#overview" className="hover:text-stone-900 transition-colors">Overview</a>
          <a href="#works" className="hover:text-stone-900 transition-colors">9jaClip</a>
          <a href="#architecture" className="hover:text-stone-900 transition-colors">Architecture</a>
          <a href="#contact" className="hover:text-stone-900 transition-colors">Contact</a>
          <button
            onClick={onOpenCommandPalette}
            className="hidden sm:flex items-center gap-1.5 px-3 py-1 rounded-full bg-white hover:bg-stone-100 border border-stone-200 text-stone-600 hover:text-stone-900 transition-colors cursor-pointer shadow-sm"
          >
            <Search className="w-3 h-3 text-stone-800" />
            <span className="text-[11px]">⌘K</span>
          </button>
        </div>

        {/* Right: Back to top action */}
        <button
          onClick={scrollToTop}
          className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-stone-200 bg-white hover:bg-stone-100 text-stone-800 transition-colors cursor-pointer shadow-sm"
        >
          <span>Top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>

      </div>
    </footer>
  )
}
