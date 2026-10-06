import { useState, useEffect } from 'react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/85 backdrop-blur-md border-b border-stone-200/80 shadow-sm'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        
        {/* Brand wordmark (like Mindly logo in reference image) */}
        <a
          href="#overview"
          className="font-display text-lg font-bold tracking-tight text-stone-900 hover:text-stone-700 transition-colors flex items-center gap-1.5"
        >
          <span>Ibrahim</span>
          <span className="w-1.5 h-1.5 rounded-full bg-stone-900 inline-block mb-1" />
        </a>

        {/* Centered Segmented Floating Pill (Exact match to reference UI) */}
        <nav className="hidden md:flex items-center gap-1 p-1 rounded-full bg-white/80 backdrop-blur-md border border-stone-200/80 shadow-sm text-xs font-medium text-stone-600">
          <a
            href="#overview"
            className="px-4 py-1.5 rounded-full hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Overview
          </a>
          <a
            href="#works"
            className="px-4 py-1.5 rounded-full hover:text-stone-900 hover:bg-stone-100 transition-colors font-semibold text-stone-900"
          >
            9jaClip
          </a>
          <a
            href="#trading"
            className="px-4 py-1.5 rounded-full hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Trading
          </a>
          <a
            href="#architecture"
            className="px-4 py-1.5 rounded-full hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Architecture
          </a>
          <a
            href="#contact"
            className="px-4 py-1.5 rounded-full hover:text-stone-900 hover:bg-stone-100 transition-colors"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA Button (Matches "Get the app ↗" in reference image) */}
        <div className="hidden sm:flex items-center gap-3">
          <a
            href="https://github.com/BARDIS99"
            target="_blank"
            rel="noreferrer"
            className="text-xs font-mono-tech text-stone-500 hover:text-stone-900 transition-colors px-3 py-1.5 rounded-full hover:bg-stone-100"
          >
            GitHub
          </a>
          <a
            href="#contact"
            className="px-5 py-2.5 rounded-full bg-stone-900 hover:bg-stone-800 text-white font-medium text-xs transition-all flex items-center gap-1.5 shadow-md shadow-stone-900/10 hover:shadow-lg hover:-translate-y-0.5"
          >
            <span>Get in touch</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-stone-700 hover:text-stone-900 rounded-full border border-stone-200 bg-white"
          aria-label={mobileMenuOpen ? 'Close Navigation' : 'Open Navigation'}
        >
          {mobileMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#FAF9F6] border-b border-stone-200 px-6 py-6 space-y-4">
          <nav className="flex flex-col space-y-3 text-sm font-medium text-stone-700">
            <a
              href="#overview"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Overview
            </a>
            <a
              href="#works"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 font-semibold text-stone-900"
            >
              9jaClip Clipping Website
            </a>
            <a
              href="#trading"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Market Trading & Risk
            </a>
            <a
              href="#architecture"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Architecture
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="py-1 hover:text-stone-900"
            >
              Contact
            </a>
          </nav>
          <div className="pt-3 border-t border-stone-200 flex flex-col gap-2.5">
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-center py-2.5 rounded-full bg-stone-900 text-white text-xs font-semibold"
            >
              Get in touch ↗
            </a>
          </div>
        </div>
      )}
    </header>
  )
}
