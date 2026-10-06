import { useState, useRef, useEffect } from 'react'
import { Terminal as TerminalIcon, X, CornerDownLeft, Sparkles } from 'lucide-react'

export default function InteractiveTerminal({ isOpen, onClose }) {
  const [history, setHistory] = useState([
    { text: 'SYSTEM INITIALIZED // Welcome to Ibrahim\'s Interactive Shell.', type: 'system' },
    { text: 'Type "help" to view available diagnostic commands or tap a shortcut below.', type: 'info' }
  ])
  const [inputVal, setInputVal] = useState('')
  const [commandHistory, setCommandHistory] = useState([])
  const [historyIndex, setHistoryIndex] = useState(-1)
  const bottomRef = useRef(null)
  const inputRef = useRef(null)

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100)
    }
  }, [isOpen])

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [history])

  const executeCommand = (cmdText) => {
    const trimmed = cmdText.trim().toLowerCase()
    if (!trimmed) return

    setCommandHistory(prev => [...prev, cmdText])
    setHistoryIndex(-1)

    const newHistory = [...history, { text: `ibrahim@shell:~$ ${cmdText}`, type: 'prompt' }]

    switch (trimmed) {
      case 'help':
        newHistory.push({
          text: `AVAILABLE COMMANDS:
  whoami    - Developer overview & background
  skills    - Core competencies & tech architecture
  projects  - Deployed platforms & live links
  siwes     - Internship at Sandlip Oasis details
  contact   - Direct communication channels
  clear     - Wipe shell scrollback
  date      - Query system local timestamp`,
          type: 'output'
        })
        break

      case 'whoami':
        newHistory.push({
          text: `IDENTITY: Ibrahim
ROLE: Full-Stack Software Engineer & CS Student
LOCATION: Taraba State, Nigeria (WAT)
AFFILIATION: SIWES Engineering Intern @ Sandlip Oasis
MISSION: Building bulletproof frontend engines & distributed web systems.`,
          type: 'output'
        })
        break

      case 'skills':
        newHistory.push({
          text: `TECHNICAL MATRIX:
  [Frontend]    React 18+, TypeScript, Next.js, Web Audio API, Canvas 2D
  [Backend]     Node.js, Express, Python, REST APIs, GraphQL
  [Data]        Supabase, PostgreSQL, SQLite, In-Memory Caching
  [DevOps]      Git, Vercel Edge, Linux Shell, CI/CD pipelines
  [Design]      Tailwind CSS, Responsive HUD systems, WCAG Accessibility`,
          type: 'output'
        })
        break

      case 'projects':
        newHistory.push({
          text: `FLAGSHIP PRODUCTION PLATFORM:
  ★ 9jaClip — Media & Video Clipping Website
    Type: High-Speed Video Clipping, Stream Trimmer & Highlight Sharing Platform
    Stack: React 18, TypeScript, Supabase, Video API, Tailwind CSS, Vercel CDN
    URL: https://9jaclip-global.vercel.app/studio
    Status: Live Production Deployment`,
          type: 'output'
        })
        break

      case 'siwes':
        newHistory.push({
          text: `SIWES PLACEMENT // Sandlip Oasis:
  Developing core internal operational platforms including the Oasis Clock-In attendance tool.
  Focused on streamlining employee shift tracking, secure authentication, and administrative reporting.`,
          type: 'output'
        })
        break

      case 'contact':
        newHistory.push({
          text: `CHANNELS:
  Email:  bardisbas@gmail.com
  GitHub: https://github.com/BARDIS99
  Location: Taraba, Nigeria`,
          type: 'output'
        })
        break

      case 'date':
        newHistory.push({
          text: `TIMESTAMP: ${new Date().toUTCString()} (Local WAT / UTC+1)`,
          type: 'output'
        })
        break

      case 'clear':
        setHistory([])
        setInputVal('')
        return

      default:
        newHistory.push({
          text: `Command not recognized: "${trimmed}". Type "help" for a list of valid commands.`,
          type: 'error'
        })
    }

    setHistory(newHistory)
    setInputVal('')
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      executeCommand(inputVal)
    } else if (e.key === 'ArrowUp') {
      if (commandHistory.length > 0) {
        const nextIdx = historyIndex === -1 ? commandHistory.length - 1 : Math.max(0, historyIndex - 1)
        setHistoryIndex(nextIdx)
        setInputVal(commandHistory[nextIdx])
      }
    } else if (e.key === 'ArrowDown') {
      if (historyIndex !== -1) {
        const nextIdx = historyIndex + 1
        if (nextIdx >= commandHistory.length) {
          setHistoryIndex(-1)
          setInputVal('')
        } else {
          setHistoryIndex(nextIdx)
          setInputVal(commandHistory[nextIdx])
        }
      }
    }
  }

  if (!isOpen) return null

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md animate-in fade-in"
      onClick={onClose}
    >
      <div
        className="w-full max-w-2xl bg-[#090b10] border border-white/15 rounded-xl shadow-2xl overflow-hidden flex flex-col h-[520px]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Terminal Title Bar */}
        <div className="flex items-center justify-between px-4 py-3 bg-[#0d1017] border-b border-white/10">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80 inline-block" />
            <span className="ml-2 font-mono-tech text-xs text-slate-300 flex items-center gap-1.5">
              <TerminalIcon className="w-3.5 h-3.5 text-sky-400" />
              <span>ibrahim-core-shell v2.4</span>
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors"
            aria-label="Close terminal"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Scrollable Output */}
        <div className="flex-1 p-4 font-mono-tech text-xs overflow-y-auto space-y-2 text-slate-300 leading-relaxed">
          {history.map((item, idx) => (
            <div
              key={idx}
              className={`whitespace-pre-wrap ${
                item.type === 'system'
                  ? 'text-sky-400 font-semibold'
                  : item.type === 'info'
                  ? 'text-slate-400'
                  : item.type === 'prompt'
                  ? 'text-white font-medium'
                  : item.type === 'error'
                  ? 'text-rose-400'
                  : 'text-slate-200'
              }`}
            >
              {item.text}
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Quick Command Chips */}
        <div className="px-4 py-2 bg-[#0c0e15] border-t border-white/[0.06] flex items-center gap-1.5 overflow-x-auto text-[11px] font-mono-tech">
          <span className="text-slate-500 shrink-0">QUICK:</span>
          {['whoami', 'skills', 'projects', 'siwes', 'contact', 'clear'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => executeCommand(cmd)}
              className="px-2 py-0.5 rounded bg-white/[0.04] hover:bg-sky-400/20 text-slate-300 hover:text-sky-300 border border-white/10 transition-colors shrink-0 cursor-pointer"
            >
              {cmd}
            </button>
          ))}
        </div>

        {/* Command Input Row */}
        <div className="p-3 bg-[#08090d] border-t border-white/10 flex items-center gap-2">
          <span className="font-mono-tech text-xs text-sky-400 select-none">
            ibrahim@shell:~$
          </span>
          <input
            ref={inputRef}
            type="text"
            value={inputVal}
            onChange={(e) => setInputVal(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type command (e.g. whoami, skills)..."
            className="flex-1 bg-transparent text-white font-mono-tech text-xs outline-none border-none placeholder-slate-600 focus:ring-0"
          />
          <button
            onClick={() => executeCommand(inputVal)}
            className="p-1.5 text-slate-400 hover:text-white rounded hover:bg-white/10 transition-colors"
            aria-label="Send Command"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  )
}
