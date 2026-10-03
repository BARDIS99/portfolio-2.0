import { useState } from 'react'

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="app">
      <nav className="nav">
        <div className="logo">
          <div className="logo-icon">IB</div>
          <span>IBRAHIM</span>
        </div>

        <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
          <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#work" onClick={() => setMenuOpen(false)}>Work</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
        </ul>

        <div className="nav-btns">
          <a href="https://github.com/BARDIS99" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
          <a href="#contact" className="btn btn-solid">Hire Me</a>
        </div>

        <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </nav>

      <section className="hero" id="home">
        <div className="hero-content">
          <h1>MUSIC<br />THAT<br />MOVES<br />YOU</h1>
          <p className="hero-sub">Full Stack Developer • CS Student • Builder.<br />I craft systems that ship and experiences that stick.</p>
          <div className="hero-btns">
            <a href="#work" className="btn-primary">View Work</a>
            <a href="#about" className="btn-link">Explore →</a>
          </div>
        </div>

        <div className="hero-visual">
          <div className="profile-wrap">
            <div className="crown">👑</div>
            <img src="/profile.jpg" alt="Ibrahim" className="profile-img" />
            <div className="tag">IBRAHIM • THE BUILDER</div>
          </div>
        </div>
      </section>

      <section className="section" id="about">
        <div className="about-grid">
          <div>
            <h2 className="section-title">About</h2>
            <p>I'm Ibrahim — Computer Science student from Taraba, Nigeria. Currently on SIWES at Sandlip Oasis. I learn by shipping real products.</p>
            <div className="skills">
              <span>React</span>
              <span>TypeScript</span>
              <span>Python</span>
              <span>Node.js</span>
              <span>Vercel</span>
            </div>
          </div>
          <div>
            <h2 className="section-title">Focus</h2>
            <p>Clean UIs, solid backends, and fast deploys. From idea to live URL.</p>
          </div>
        </div>
      </section>

      <section className="section" id="work">
        <h2 className="section-title">Selected Work</h2>
        <div className="projects">
          <a href="https://9jaclip-global.vercel.app/studio" target="_blank" rel="noreferrer" className="card">
            <div className="card-img">🎵</div>
            <div className="card-body">
              <h3>9jaClip</h3>
              <p>React · TypeScript · Supabase</p>
            </div>
          </a>
          <a href="https://oasis-clock-in.vercel.app" target="_blank" rel="noreferrer" className="card">
            <div className="card-img">⏱️</div>
            <div className="card-body">
              <h3>Oasis Clock-In</h3>
              <p>Attendance system</p>
            </div>
          </a>
          <a href="https://v0-student-education-website.vercel.app" target="_blank" rel="noreferrer" className="card">
            <div className="card-img">📚</div>
            <div className="card-body">
              <h3>EduDocs</h3>
              <p>Student learning platform</p>
            </div>
          </a>
          <a href="https://github.com/BARDIS99" target="_blank" rel="noreferrer" className="card">
            <div className="card-img">👑</div>
            <div className="card-body">
              <h3>More Projects</h3>
              <p>See all on GitHub</p>
            </div>
          </a>
        </div>
      </section>

      <section className="section contact" id="contact">
        <h2 className="section-title">Let's Build</h2>
        <p className="lead">Have a project? Reach out.</p>
        <div className="contact-links">
          <a href="mailto:bardisbas@gmail.com">bardisbas@gmail.com</a>
          <a href="https://github.com/BARDIS99" target="_blank" rel="noreferrer">github.com/BARDIS99</a>
        </div>
      </section>

      <footer>
        © {new Date().getFullYear()} Ibrahim · Built with React
      </footer>
    </div>
  )
}
