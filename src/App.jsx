import { useState } from 'react'
import ParticleGridCanvas from './components/ParticleGridCanvas'
import MagicCursor from './components/MagicCursor'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import ProjectsSection from './components/ProjectsSection'
import TradingDeskSection from './components/TradingDeskSection'
import ArchitectureSection from './components/ArchitectureSection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'
import ProjectModal from './components/ProjectModal'
import CommandPalette from './components/CommandPalette'

export default function App() {
  const [selectedProject, setSelectedProject] = useState(null)
  const [commandPaletteOpen, setCommandPaletteOpen] = useState(false)

  return (
    <div className="min-h-screen bg-[#FAF9F6] text-stone-900 relative selection:bg-stone-900 selection:text-white">
      {/* 60fps Subtle background canvas */}
      <ParticleGridCanvas />

      {/* Magic Cursor */}
      <MagicCursor />

      {/* Floating Segmented Navigation */}
      <Navbar onOpenCommandPalette={setCommandPaletteOpen} />

      {/* Main Content Area */}
      <main className="relative z-10 pt-8 sm:pt-12">
        <Hero onOpenCommandPalette={() => setCommandPaletteOpen(true)} />
        <ProjectsSection onSelectProject={(project) => setSelectedProject(project)} />
        <TradingDeskSection />
        <ArchitectureSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer onOpenCommandPalette={() => setCommandPaletteOpen(true)} />

      {/* Detailed Project Specification Modal */}
      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}

      {/* Command Palette (⌘K) */}
      <CommandPalette
        isOpen={commandPaletteOpen}
        onClose={setCommandPaletteOpen}
      />
    </div>
  )
}
