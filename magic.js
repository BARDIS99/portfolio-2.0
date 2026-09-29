(function(){
  const reduce=window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const coarse=window.matchMedia('(pointer: coarse)').matches;
  if(reduce||coarse) return;
  const dot=document.createElement('div');dot.className='magic-cursor';
  const ring=document.createElement('div');ring.className='magic-cursor__ring';
  const light=document.createElement('div');light.className='magic-spotlight';
  document.body.append(dot,ring,light);
  let x=innerWidth/2,y=80,rx=x,ry=y;
  document.addEventListener('mousemove',e=>{x=e.clientX;y=e.clientY;dot.style.left=x+'px';dot.style.top=y+'px';document.documentElement.style.setProperty('--mx',x+'px');document.documentElement.style.setProperty('--my',y+'px');});
  (function follow(){rx+=(x-rx)*0.16;ry+=(y-ry)*0.16;ring.style.left=rx+'px';ring.style.top=ry+'px';requestAnimationFrame(follow);})();
  document.addEventListener('mousedown',()=>{dot.classList.add('is-click');for(let i=0;i<10;i++){const s=document.createElement('div');s.className='spark';const a=Math.random()*Math.PI*2;const d=24+Math.random()*48;s.style.left=x+'px';s.style.top=y+'px';s.style.setProperty('--sx',Math.cos(a)*d+'px');s.style.setProperty('--sy',Math.sin(a)*d+'px');document.body.appendChild(s);setTimeout(()=>s.remove(),700);}});
  document.addEventListener('mouseup',()=>dot.classList.remove('is-click'));
  document.querySelectorAll('a,button,.pcard').forEach(el=>{el.addEventListener('mouseenter',()=>{ring.style.width='56px';ring.style.height='56px';ring.style.borderColor='rgba(16,185,129,.8)';});el.addEventListener('mouseleave',()=>{ring.style.width='36px';ring.style.height='36px';ring.style.borderColor='rgba(252,211,77,.55)';});});
})();
