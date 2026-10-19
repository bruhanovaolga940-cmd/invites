  const container = document.getElementById('heartsBg');
  const COUNT = 120;
  const frag = document.createDocumentFragment();

  for (let i = 0; i < COUNT; i++) {
    const el = document.createElement('span');

    el.textContent = '♥';
    el.style.left     = Math.random() * 100 + 'vw';
    el.style.top      = Math.random() * 100 + 'vh';
    el.style.fontSize = (8 + Math.random() * 22) + 'px';       // 8–30px
    el.style.opacity  = 0.10 + Math.random() * 0.35;           // 0.1–0.45
    el.style.setProperty('--rot', (Math.random() * 360) + 'deg');
    el.style.animationDuration   = (6 + Math.random() * 8) + 's';
    el.style.animationDelay      = '-' + (Math.random() * 10) + 's'; // старт в разнобой

    frag.appendChild(el);
  }
  container.appendChild(frag);