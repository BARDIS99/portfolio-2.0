import { useState, useEffect } from 'react'
import { Search, X, Mail, Copy, Check, ArrowRight, Layers, Scissors, TrendingUp } from 'lucide-react'
import GithubIcon from './GithubIcon'

export default function CommandPalette({ isOpen, onClose }) {
  const [query, setQuery] = useState('')
  const [copied, setCopied] = useState(false)

  // Listen for Cmd+K / Ctrl+K and Escape
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault()
        onClose ? onClose(!isOpen) : null
      }
      if (e.key === 'Escape' && isOpen) {
        onClose(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [isOpen, onClose])

  if (!isOpen) return null

  const copyEmail = () => {
    navigator.clipboard.writeText('bardisbas@gmail.com')
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
      onClose(false)
    }, 1500)
  }

  const actions = [
    {
      id: '9jaclip',
      title: 'Launch 9jaClip Website',
      subtitle: 'Open the live media clipping platform in a new tab',
      icon: <Scissors className="w-4 h-4 text-purple-600" />,
      run: () => {
        window.open('https://9jaclip-global.vercel.app/studio', '_blank')
        onClose(false)
      }
    },
    {
      id: 'works',
      title: 'View 9jaClip Architecture',
      subtitle: 'Scroll to the interactive timeline trimmer showcase',
      icon: <Layers className="w-4 h-4 text-stone-900" />,
      run: () => {
        document.getElementById('works')?.scrollIntoView({ behavior: 'smooth' })
        onClose(false)
      }
    },
    {
      id: 'trading',
      title: 'Trader Desk & Market Risk',
      subtitle: 'Jump to systematic order flow & risk architecture',
      icon: <TrendingUp className="w-4 h-4 text-emerald-600" />,
      run: () => {
        document.getElementById('trading')?.scrollIntoView({ behavior: 'smooth' })
        onClose(false)
      }
    },
    {
      id: 'email',
      title: 'Copy Email Address',
      subtitle: 'bardisbas@gmail.com',
      icon: copied ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4 text-stone-700" />,
      run: copyEmail
    },
    {
      id: 'github',
      title: 'Visit GitHub Profile',
      subtitle: 'github.com/BARDIS99',
      icon: <GithubIcon className="w-4 h-4 text-stone-900" />,
      run: () => {
        window.open('https://github.com/BARDIS99', '_blank')
        onClose(false)
      }
    },
    {
      id: 'architecture',
      title: 'System Capabilities & Disciplines',
      subtitle: 'Jump to engineering architecture section',
      icon: <ArrowRight className="w-4 h-4 text-stone-500" />,
      run: () => {
        document.getElementById('architecture')?.scrollIntoView({ behavior: 'smooth' })
        onClose(false)
      }
    },
    {
      id: 'contact',
      title: 'Transmit Direct Message',
      subtitle: 'Jump to contact inquiry form',
      icon: <Mail className="w-4 h-4 text-stone-700" />,
      run: () => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
        onClose(false)
      }
    }
  ]

  const filtered = actions.filter(
    (a) =>
      a.title.toLowerCase().includes(query.toLowerCase()) ||
      a.subtitle.toLowerCase().includes(query.toLowerCase())
  )

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-24 px-4 bg-stone-900/50 backdrop-blur-sm animate-in fade-in duration-150"
      onClick={() => onClose(false)}
    >
      <div
        className="w-full max-w-xl bg-white border border-stone-200 rounded-3xl shadow-2xl overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-5 py-4 border-b border-stone-100 bg-stone-50/50">
          <Search className="w-4 h-4 text-stone-600 shrink-0" />
          <input
            autoFocus
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or jump to section..."
            className="flex-1 bg-transparent text-sm text-stone-900 placeholder-stone-400 outline-none font-medium"
          />
          <button
            onClick={() => onClose(false)}
            className="p-1 rounded-full text-stone-400 hover:text-stone-900 hover:bg-stone-200"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Results List */}
        <div className="p-2.5 max-h-80 overflow-y-auto space-y-1">
          {filtered.length === 0 ? (
            <div className="p-6 text-center text-xs font-mono-tech text-stone-400">
              No matching commands found.
            </div>
          ) : (
            filtered.map((action) => (
              <button
                key={action.id}
                onClick={action.run}
                className="w-full p-3 rounded-2xl flex items-center justify-between text-left hover:bg-stone-50 transition-colors group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded-xl bg-stone-100 border border-stone-200/80 group-hover:scale-105 transition-transform">
                    {action.icon}
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-stone-900">
                      {action.title}
                    </div>
                    <div className="text-[11px] text-stone-500">
                      {action.subtitle}
                    </div>
                  </div>
                </div>

                <span className="text-[10px] font-mono-tech text-stone-400 group-hover:text-stone-700">
                  Select ↵
                </span>
              </button>
            ))
          )}
        </div>

        {/* Footer Hint */}
        <div className="px-5 py-3 bg-[#FAF9F6] border-t border-stone-100 flex items-center justify-between text-[11px] font-mono-tech text-stone-400">
          <span>Navigate with click or tap</span>
          <span className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 rounded bg-stone-200 text-stone-700 text-[10px]">ESC</kbd> to close
          </span>
        </div>
      </div>
    </div>
  )
}
