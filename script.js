/* =========================================================
   Footer year
   ========================================================= */
document.getElementById('year').textContent = new Date().getFullYear();

/* =========================================================
   Mobile nav toggle
   ========================================================= */
const navToggle = document.getElementById('nav-toggle');
const navLinks = document.getElementById('nav-links');

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
   Scroll reveal
   ========================================================= */
const revealEls = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

revealEls.forEach(el => revealObserver.observe(el));

/* =========================================================
   Network node background
   Signature element — nodes connect like packets routing
   across a network, echoing the SIWES networking work.
   ========================================================= */
const canvas = document.getElementById('net-canvas');
const ctx = canvas.getContext('2d');
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let nodes = [];
let width, height;

function resize() {
  width = canvas.width = window.innerWidth;
  height = canvas.height = window.innerHeight;
}

function makeNodes() {
  const count = Math.round((width * height) / 28000);
  nodes = Array.from({ length: count }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    vx: (Math.random() - 0.5) * 0.25,
    vy: (Math.random() - 0.5) * 0.25,
  }));
}

const LINK_DIST = 150;
const EMERALD = '34, 179, 127';
const GOLD = '228, 193, 88';

function draw() {
  ctx.clearRect(0, 0, width, height);

  // connections
  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i], b = nodes[j];
      const dx = a.x - b.x, dy = a.y - b.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < LINK_DIST) {
        const alpha = (1 - dist / LINK_DIST) * 0.18;
        ctx.strokeStyle = `rgba(${EMERALD}, ${alpha})`;
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  // nodes
  nodes.forEach((n, i) => {
    const isGold = i % 17 === 0;
    ctx.fillStyle = isGold ? `rgba(${GOLD}, 0.7)` : `rgba(${EMERALD}, 0.55)`;
    ctx.beginPath();
    ctx.arc(n.x, n.y, isGold ? 2 : 1.5, 0, Math.PI * 2);
    ctx.fill();

    n.x += n.vx;
    n.y += n.vy;

    if (n.x < 0 || n.x > width) n.vx *= -1;
    if (n.y < 0 || n.y > height) n.vy *= -1;
  });

  requestAnimationFrame(draw);
}

resize();
makeNodes();
window.addEventListener('resize', () => {
  resize();
  makeNodes();
});

if (!prefersReducedMotion) {
  requestAnimationFrame(draw);
} else {
  draw();
}
