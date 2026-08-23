/* =========================================================
   PORTFOLIO 2030 — SCRIPT
   ========================================================= */

const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* =========================================================
   FOOTER YEAR
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =========================================================
   LIVE SYSTEM CLOCK
   ========================================================= */
const sysTime = document.getElementById('sys-time');

function updateClock() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const mm = String(now.getMinutes()).padStart(2, '0');
  const ss = String(now.getSeconds()).padStart(2, '0');
  if (sysTime) sysTime.textContent = `${hh}:${mm}:${ss}`;
}
updateClock();
setInterval(updateClock, 1000);

/* =========================================================
   TYPED ROLE CYCLING
   ========================================================= */
const roles = [
  'Computer Science Student',
  'Full Stack Developer',
  'SIWES Intern @ Sandlip Oasis',
  'Networking Enthusiast',
  'Builder of Real Things',
];

const typedEl = document.getElementById('typed-role');
if (typedEl && !prefersReducedMotion) {
  let roleIndex = 0;
  let charIndex  = 0;
  let deleting   = false;
  let paused     = false;

  const TYPING_SPEED  = 65;
  const DELETE_SPEED  = 35;
  const PAUSE_AFTER   = 1800;
  const PAUSE_BEFORE  = 300;

  function type() {
    if (paused) return;
    const current = roles[roleIndex];

    if (deleting) {
      charIndex--;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === 0) {
        deleting   = false;
        roleIndex  = (roleIndex + 1) % roles.length;
        paused     = true;
        setTimeout(() => { paused = false; tick(); }, PAUSE_BEFORE);
        return;
      }
    } else {
      charIndex++;
      typedEl.textContent = current.slice(0, charIndex);
      if (charIndex === current.length) {
        paused = true;
        setTimeout(() => { deleting = true; paused = false; tick(); }, PAUSE_AFTER);
        return;
      }
    }
    tick();
  }

  function tick() {
    const delay = deleting ? DELETE_SPEED : TYPING_SPEED;
    setTimeout(type, delay);
  }

  tick();
} else if (typedEl) {
  typedEl.textContent = roles[0];
}

/* =========================================================
   MOBILE NAV
   ========================================================= */
const navToggle = document.getElementById('nav-toggle');
const navLinks  = document.getElementById('nav-links');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

/* =========================================================
   SCROLL REVEAL
   ========================================================= */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      // Stagger children in the same parent
      const siblings = [...entry.target.parentElement.querySelectorAll('.reveal:not(.is-visible)')];
      const idx = siblings.indexOf(entry.target);
      const delay = Math.min(idx * 80, 320);
      setTimeout(() => {
        entry.target.classList.add('is-visible');
      }, delay);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

revealEls.forEach(el => revealObserver.observe(el));

/* =========================================================
   SKILL BAR ACTIVATION
   Fires animation when skill cards enter viewport
   ========================================================= */
const skillCards = document.querySelectorAll('.skill-card');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      skillObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.3 });

skillCards.forEach(card => skillObserver.observe(card));

/* =========================================================
   FLOATING PARTICLES
   ========================================================= */
if (!prefersReducedMotion) {
  const container = document.getElementById('particles');
  const PARTICLE_COUNT = 40;

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const p = document.createElement('div');
    p.className = 'particle';

    // Random position
    p.style.left = `${Math.random() * 100}%`;
    p.style.top  = `${Math.random() * 100}%`;

    // Random colour: mostly cyan, some violet, rare gold
    const r = Math.random();
    if (r > 0.85)      p.style.background = 'var(--gold)';
    else if (r > 0.55) p.style.background = 'var(--violet)';
    else               p.style.background = 'var(--cyan)';

    // Random size
    const size = 1 + Math.random() * 2;
    p.style.width  = `${size}px`;
    p.style.height = `${size}px`;

    // Random animation timing
    p.style.setProperty('--dur',   `${6 + Math.random() * 12}s`);
    p.style.setProperty('--delay', `${Math.random() * 10}s`);

    container.appendChild(p);
  }
}

/* =========================================================
   HOLOGRAPHIC GRID CANVAS
   Layered animated grid + node network + data pulses
   ========================================================= */
const canvas = document.getElementById('holo-canvas');
const ctx    = canvas.getContext('2d');

let W, H, nodes, pulses, animFrame;

/* — Colour constants — */
const C_CYAN   = '0, 212, 255';
const C_VIOLET = '123, 47, 255';
const C_GOLD   = '255, 184, 0';

/* ---- Resize ---- */
function resize() {
  W = canvas.width  = window.innerWidth;
  H = canvas.height = window.innerHeight;
}

/* ---- Build node list ---- */
function buildNodes() {
  const count = Math.min(Math.round((W * H) / 22000), 60);
  nodes = Array.from({ length: count }, () => ({
    x:  Math.random() * W,
    y:  Math.random() * H,
    vx: (Math.random() - 0.5) * 0.2,
    vy: (Math.random() - 0.5) * 0.2,
    r:  1 + Math.random() * 1.5,
    gold: Math.random() < 0.08,
  }));
  pulses = [];
}

/* ---- Spawn a travelling data pulse along an edge ---- */
function spawnPulse(a, b) {
  pulses.push({ ax: a.x, ay: a.y, bx: b.x, by: b.y, t: 0, speed: 0.008 + Math.random() * 0.012 });
}

let pulseTimer = 0;

/* ---- Main draw loop ---- */
function draw(ts) {
  ctx.clearRect(0, 0, W, H);

  if (prefersReducedMotion) return; // static clear only

  /* ── Grid overlay ── */
  const gridSize = 80;
  ctx.strokeStyle = `rgba(${C_CYAN}, 0.04)`;
  ctx.lineWidth   = 0.5;

  for (let x = 0; x < W; x += gridSize) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke();
  }
  for (let y = 0; y < H; y += gridSize) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke();
  }

  /* ── Node connections ── */
  const LINK_DIST = 160;

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < LINK_DIST) {
        const alpha = (1 - dist / LINK_DIST) * 0.14;
        const col   = (a.gold || b.gold) ? C_GOLD : C_CYAN;
        ctx.strokeStyle = `rgba(${col}, ${alpha})`;
        ctx.lineWidth   = 0.8;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  /* ── Data pulses ── */
  pulseTimer++;
  if (pulseTimer % 90 === 0 && nodes.length > 1) {
    const i = Math.floor(Math.random() * nodes.length);
    const j = Math.floor(Math.random() * nodes.length);
    if (i !== j) {
      const dx = nodes[i].x - nodes[j].x, dy = nodes[i].y - nodes[j].y;
      if (Math.sqrt(dx * dx + dy * dy) < LINK_DIST) spawnPulse(nodes[i], nodes[j]);
    }
  }

  pulses = pulses.filter(p => p.t <= 1);
  pulses.forEach(p => {
    p.t += p.speed;
    const px = p.ax + (p.bx - p.ax) * p.t;
    const py = p.ay + (p.by - p.ay) * p.t;
    const grad = ctx.createRadialGradient(px, py, 0, px, py, 6);
    grad.addColorStop(0, `rgba(${C_CYAN}, 0.9)`);
    grad.addColorStop(1, `rgba(${C_CYAN}, 0)`);
    ctx.fillStyle = grad;
    ctx.beginPath();
    ctx.arc(px, py, 6, 0, Math.PI * 2);
    ctx.fill();
  });

  /* ── Nodes ── */
  nodes.forEach(n => {
    const col   = n.gold ? C_GOLD : C_CYAN;
    const alpha = n.gold ? 0.85    : 0.6;

    // Glow halo
    const halo = ctx.createRadialGradient(n.x, n.y, 0, n.x, n.y, n.r * 5);
    halo.addColorStop(0, `rgba(${col}, 0.25)`);
    halo.addColorStop(1, `rgba(${col}, 0)`);
    ctx.fillStyle = halo;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r * 5, 0, Math.PI * 2);
    ctx.fill();

    // Core dot
    ctx.fillStyle = `rgba(${col}, ${alpha})`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
    ctx.fill();

    // Move
    n.x += n.vx;
    n.y += n.vy;
    if (n.x < 0 || n.x > W) n.vx *= -1;
    if (n.y < 0 || n.y > H) n.vy *= -1;
  });

  /* ── Corner HUD brackets ── */
  const B = 40, BW = 2;
  ctx.strokeStyle = `rgba(${C_CYAN}, 0.18)`;
  ctx.lineWidth   = BW;

  // Top-left
  ctx.beginPath(); ctx.moveTo(0, B); ctx.lineTo(0, 0); ctx.lineTo(B, 0); ctx.stroke();
  // Top-right
  ctx.beginPath(); ctx.moveTo(W - B, 0); ctx.lineTo(W, 0); ctx.lineTo(W, B); ctx.stroke();
  // Bottom-left
  ctx.beginPath(); ctx.moveTo(0, H - B); ctx.lineTo(0, H); ctx.lineTo(B, H); ctx.stroke();
  // Bottom-right
  ctx.beginPath(); ctx.moveTo(W - B, H); ctx.lineTo(W, H); ctx.lineTo(W, H - B); ctx.stroke();

  animFrame = requestAnimationFrame(draw);
}

/* ---- Boot ---- */
resize();
buildNodes();

window.addEventListener('resize', () => {
  cancelAnimationFrame(animFrame);
  resize();
  buildNodes();
  animFrame = requestAnimationFrame(draw);
});

animFrame = requestAnimationFrame(draw);

/* =========================================================
   NAV SCROLL BEHAVIOUR
   Shrink nav on scroll
   ========================================================= */
const navEl = document.getElementById('nav');
let lastScrollY = 0;

window.addEventListener('scroll', () => {
  const y = window.scrollY;
  if (y > 60) {
    navEl.style.padding = '12px 28px';
  } else {
    navEl.style.padding = '20px 28px';
  }
  // Hide on scroll down, show on scroll up
  if (y > lastScrollY + 10 && y > 200) {
    navEl.style.transform = 'translateY(-110%)';
  } else if (y < lastScrollY - 5) {
    navEl.style.transform = 'translateY(0)';
  }
  lastScrollY = y;
}, { passive: true });

navEl.style.transition = 'padding 0.3s ease, transform 0.4s ease';

/* =========================================================
   CURSOR GLOW TRAIL (subtle — desktop only)
   ========================================================= */
if (!prefersReducedMotion && window.innerWidth > 768) {
  const trail = document.createElement('div');
  trail.style.cssText = `
    position: fixed;
    width: 300px;
    height: 300px;
    border-radius: 50%;
    pointer-events: none;
    z-index: 0;
    background: radial-gradient(circle, rgba(0,212,255,0.04) 0%, transparent 70%);
    transform: translate(-50%, -50%);
    transition: left 0.08s linear, top 0.08s linear;
    will-change: left, top;
  `;
  document.body.appendChild(trail);

  window.addEventListener('mousemove', e => {
    trail.style.left = `${e.clientX}px`;
    trail.style.top  = `${e.clientY}px`;
  }, { passive: true });
}

/* =========================================================
   CARD TILT — subtle 3D on project cards (desktop)
   ========================================================= */
if (!prefersReducedMotion && window.innerWidth > 768) {
  document.querySelectorAll('.pcard').forEach(card => {
    card.addEventListener('mousemove', e => {
      const rect  = card.getBoundingClientRect();
      const cx    = rect.left + rect.width  / 2;
      const cy    = rect.top  + rect.height / 2;
      const dx    = (e.clientX - cx) / (rect.width  / 2);
      const dy    = (e.clientY - cy) / (rect.height / 2);
      const rotX  = -dy * 4;
      const rotY  =  dx * 4;
      card.style.transform = `perspective(800px) rotateX(${rotX}deg) rotateY(${rotY}deg) translateY(-3px)`;
    });
    card.addEventListener('mouseleave', () => {
      card.style.transform = '';
    });
  });
}

/* =========================================================
   CONTACT CARD RIPPLE
   ========================================================= */
document.querySelectorAll('.contact__card').forEach(card => {
  card.addEventListener('click', function(e) {
    const rect   = card.getBoundingClientRect();
    const ripple = document.createElement('span');
    const size   = Math.max(rect.width, rect.height) * 2;
    ripple.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      border-radius: 50%;
      background: rgba(0,212,255,0.08);
      left: ${e.clientX - rect.left - size / 2}px;
      top:  ${e.clientY - rect.top  - size / 2}px;
      transform: scale(0);
      animation: ripple-out 0.6s ease forwards;
      pointer-events: none;
      z-index: 0;
    `;
    card.style.position = 'relative';
    card.style.overflow = 'hidden';
    card.appendChild(ripple);
    ripple.addEventListener('animationend', () => ripple.remove());
  });
});

/* Inject ripple keyframes once */
const rippleStyle = document.createElement('style');
rippleStyle.textContent = `
  @keyframes ripple-out {
    to { transform: scale(1); opacity: 0; }
  }
`;
document.head.appendChild(rippleStyle);

/* =========================================================
   SECTION NUMBER COUNTER ANIMATION
   Animate stat numbers when they enter view
   ========================================================= */
function animateCounter(el, target, duration = 1200) {
  const isSymbol = isNaN(parseInt(target));
  if (isSymbol) return; // skip ∞ etc.

  const numeric = parseInt(target.replace(/\D/g, ''));
  const suffix  = target.replace(/[0-9]/g, '');
  let start     = null;

  function step(ts) {
    if (!start) start = ts;
    const progress = Math.min((ts - start) / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out-cubic
    el.textContent = Math.round(eased * numeric) + suffix;
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

const statNums = document.querySelectorAll('.stat__num');
const counterObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const el     = entry.target;
      const target = el.textContent.trim();
      animateCounter(el, target);
      counterObserver.unobserve(el);
    }
  });
}, { threshold: 0.5 });

statNums.forEach(el => counterObserver.observe(el));
