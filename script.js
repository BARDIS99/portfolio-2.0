document.getElementById("year").textContent = new Date().getFullYear();

const c = document.getElementById("grid");
const ctx = c.getContext("2d");
function size() {
  c.width = innerWidth;
  c.height = innerHeight;
}
size();
addEventListener("resize", size);

const dots = Array.from({ length: 70 }, () => ({
  x: Math.random(),
  y: Math.random(),
  z: Math.random() * 0.6 + 0.2,
  v: Math.random() * 0.00035 + 0.00008,
}));

function draw(t) {
  ctx.clearRect(0, 0, c.width, c.height);
  ctx.strokeStyle = "rgba(61,240,255,0.08)";
  ctx.lineWidth = 1;
  const gap = 48;
  for (let x = 0; x < c.width; x += gap) {
    ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, c.height); ctx.stroke();
  }
  for (let y = 0; y < c.height; y += gap) {
    ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(c.width, y); ctx.stroke();
  }
  dots.forEach((d) => {
    d.y -= d.v;
    if (d.y < 0) d.y = 1;
    const x = d.x * c.width;
    const y = d.y * c.height;
    ctx.fillStyle = `rgba(61,240,255,${d.z * 0.55})`;
    ctx.beginPath();
    ctx.arc(x, y, d.z * 2.2, 0, Math.PI * 2);
    ctx.fill();
  });
  requestAnimationFrame(draw);
}
requestAnimationFrame(draw);
