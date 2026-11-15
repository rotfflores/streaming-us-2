/* Juegos de acción independientes del reproductor de episodios. */
window.TDNArcade = (() => {
  const W = 720, H = 400;
  const bestKey = (type) => `tdn_record_${type}_dificil`;
  const readBest = (type) => { try { return Number(localStorage.getItem(bestKey(type))) || 0; } catch { return 0; } };
  const saveBest = (type, score) => { try { localStorage.setItem(bestKey(type), String(score)); } catch { /* modo privado */ } };
  const random = (a, b) => a + Math.random() * (b - a);

  function heart(ctx, x, y, size, color) {
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.moveTo(x, y + size * .45);
    ctx.bezierCurveTo(x - size * 1.15, y - size * .18, x - size * .7, y - size * .8, x, y - size * .28);
    ctx.bezierCurveTo(x + size * .7, y - size * .8, x + size * 1.15, y - size * .18, x, y + size * .45);
    ctx.fill();
  }

  function background(ctx, time) {
    const sky = ctx.createLinearGradient(0, 0, 0, H);
    sky.addColorStop(0, "#111023"); sky.addColorStop(.58, "#38243d"); sky.addColorStop(1, "#8e4250");
    ctx.fillStyle = sky; ctx.fillRect(0, 0, W, H);
    ctx.fillStyle = "rgba(255,239,204,.6)";
    for (let i = 0; i < 28; i++) {
      const x = (i * 139 + 17) % W, y = (i * 73 + 29) % 210;
      ctx.globalAlpha = .4 + .35 * Math.sin(time * 2 + i);
      ctx.fillRect(x, y, 2, 2);
    }
    ctx.globalAlpha = 1;
    ctx.fillStyle = "#1a1726";
    for (let i = 0; i < 15; i++) {
      const h = 34 + (i * 37) % 90, x = i * 52;
      ctx.fillRect(x, H - h, 48, h);
      ctx.fillStyle = "#f1c88a";
      for (let yy = H - h + 12; yy < H - 10; yy += 17) for (let xx = x + 9; xx < x + 42; xx += 15) if ((xx + yy + i) % 3) ctx.fillRect(xx, yy, 4, 6);
      ctx.fillStyle = "#1a1726";
    }
  }

  function mount(type, body, photoPaths = []) {
    const isFlappy = type === "flappy";
    const title = isFlappy ? "Vuelo de corazones" : "Atrapa el Instante";
    body.innerHTML = `<div class="arcade-hud"><span>Puntos <strong data-score>0</strong></span><span>${isFlappy ? "Tuberías" : "Vidas"} <strong data-extra>${isFlappy ? "0" : "2"}</strong></span><span>Récord <strong data-best>${readBest(type)}</strong></span></div>
      <div class="arcade-stage"><canvas width="${W}" height="${H}" aria-label="${title}"></canvas><div class="arcade-overlay" data-overlay><strong>${title}</strong><p>${isFlappy ? "Obstáculos más rápidos y huecos estrechos. Toca la pantalla o pulsa Espacio para volar." : "Recoge las fotos y esquiva las tormentas. Solo tienes dos vidas."}</p><button class="btn btn-red" type="button" data-start>Empezar</button></div></div>
      <p class="arcade-tip">${isFlappy ? "Control: toque, clic o Espacio" : "Control: arrastra el dedo o usa ← →"} · Tu récord se guarda en este navegador.</p>`;
    const canvas = body.querySelector("canvas"), ctx = canvas.getContext("2d");
    const scoreEl = body.querySelector("[data-score]"), extraEl = body.querySelector("[data-extra]"), bestEl = body.querySelector("[data-best]");
    const overlay = body.querySelector("[data-overlay]"), startBtn = body.querySelector("[data-start]");
    const photos = photoPaths.map((src) => { const img = new Image(); img.src = src; return img; });
    const state = { active: false, score: 0, lives: 2, time: 0, last: 0, raf: 0, player: { x: 155, y: H / 2, vy: 0 }, items: [], timer: 0, passed: 0, keys: new Set() };

    const record = () => {
      const best = readBest(type);
      if (state.score > best) { saveBest(type, state.score); bestEl.textContent = state.score; return true; }
      return false;
    };
    const finish = () => {
      if (!state.active) return;
      state.active = false;
      const newRecord = record();
      overlay.hidden = false;
      overlay.querySelector("strong").textContent = newRecord ? "¡Nuevo récord!" : "Fin de la partida";
      overlay.querySelector("p").textContent = `${state.score} puntos. ${isFlappy ? "¡Vuelve a volar!" : "Cada recuerdo cuenta."}`;
      startBtn.textContent = "Volver a jugar";
    };
    const start = () => {
      state.active = true; state.score = 0; state.lives = 2; state.time = 0; state.last = 0;
      state.player = { x: isFlappy ? 155 : W / 2, y: isFlappy ? H / 2 : H - 55, vy: 0 };
      state.items = []; state.timer = 0; state.passed = 0;
      scoreEl.textContent = "0"; extraEl.textContent = isFlappy ? "0" : "2";
      overlay.hidden = true;
      if (!state.raf) state.raf = requestAnimationFrame(frame);
    };
    const flap = () => { if (state.active && isFlappy) state.player.vy = -320; };
    const pointerX = (e) => (e.clientX - canvas.getBoundingClientRect().left) * W / canvas.getBoundingClientRect().width;
    canvas.addEventListener("pointerdown", (e) => { e.preventDefault(); if (isFlappy) flap(); else if (state.active) state.player.x = Math.max(32, Math.min(W - 32, pointerX(e))); });
    canvas.addEventListener("pointermove", (e) => { if (!isFlappy && state.active && e.buttons) state.player.x = Math.max(32, Math.min(W - 32, pointerX(e))); });
    const keydown = (e) => {
      if (!body.isConnected || !state.active) return;
      if (["Space", "ArrowUp", "ArrowLeft", "ArrowRight"].includes(e.code) && !/INPUT|TEXTAREA/.test(document.activeElement?.tagName || "")) e.preventDefault();
      if (isFlappy && (e.code === "Space" || e.code === "ArrowUp") && !e.repeat) flap();
      state.keys.add(e.code);
    };
    const keyup = (e) => state.keys.delete(e.code);
    addEventListener("keydown", keydown); addEventListener("keyup", keyup);
    startBtn.addEventListener("click", start);

    function updateFlappy(dt) {
      const p = state.player;
      p.vy += 880 * dt; p.y += p.vy * dt;
      state.timer -= dt;
      if (state.timer <= 0) {
        state.items.push({ x: W + 30, gapY: random(120, H - 120), gapHalf: Math.max(50, 60 - state.score * .5), scored: false });
        state.timer = Math.max(.72, 1.1 - state.score * .02);
      }
      const speed = Math.min(370, 255 + state.score * 9);
      state.items.forEach((o) => {
        o.x -= speed * dt;
        if (!o.scored && o.x + 76 < p.x) { o.scored = true; state.score++; state.passed++; scoreEl.textContent = state.score; extraEl.textContent = state.passed; }
        if (p.x + 19 > o.x && p.x - 19 < o.x + 76 && (p.y - 18 < o.gapY - o.gapHalf || p.y + 18 > o.gapY + o.gapHalf)) finish();
      });
      state.items = state.items.filter((o) => o.x > -90);
      if (p.y < 18 || p.y > H - 18) finish();
    }

    function updateCatch(dt) {
      const p = state.player;
      if (state.keys.has("ArrowLeft")) p.x -= 430 * dt;
      if (state.keys.has("ArrowRight")) p.x += 430 * dt;
      p.x = Math.max(32, Math.min(W - 32, p.x));
      state.timer -= dt;
      if (state.timer <= 0) {
        const danger = Math.random() < Math.min(.55, .4 + state.score / 700);
        state.items.push({ x: random(38, W - 38), y: -36, bad: danger, image: Math.floor(Math.random() * photos.length), hit: false });
        state.timer = Math.max(.24, .48 - state.score / 900);
      }
      const speed = Math.min(480, 230 + state.score * 4);
      state.items.forEach((o) => {
        o.y += speed * dt;
        if (!o.hit && Math.abs(o.x - p.x) < (o.bad ? 43 : 29) && Math.abs(o.y - p.y) < 29) {
          o.hit = true;
          if (o.bad) { state.lives--; extraEl.textContent = state.lives; if (!state.lives) finish(); }
          else { state.score += 10; scoreEl.textContent = state.score; }
        }
      });
      state.items = state.items.filter((o) => !o.hit && o.y < H + 45);
    }

    function drawFlappy() {
      const p = state.player;
      state.items.forEach((o) => {
        const top = o.gapY - o.gapHalf, bottom = o.gapY + o.gapHalf;
        ctx.fillStyle = "#b20718"; ctx.fillRect(o.x, 0, 76, top); ctx.fillRect(o.x, bottom, 76, H - bottom);
        ctx.fillStyle = "#ef3340"; ctx.fillRect(o.x - 5, top - 12, 86, 12); ctx.fillRect(o.x - 5, bottom, 86, 12);
        ctx.fillStyle = "rgba(255,255,255,.16)"; ctx.fillRect(o.x + 12, 0, 7, top - 12); ctx.fillRect(o.x + 12, bottom + 12, 7, H - bottom);
      });
      heart(ctx, p.x, p.y, 26, "#ff344a");
      ctx.fillStyle = "#fff"; ctx.beginPath(); ctx.arc(p.x - 7, p.y - 8, 2, 0, 7); ctx.arc(p.x + 7, p.y - 8, 2, 0, 7); ctx.fill();
    }

    function drawCatch() {
      state.items.forEach((o) => {
        if (o.bad) {
          ctx.fillStyle = "#585a70"; ctx.beginPath(); ctx.arc(o.x, o.y, 23, 0, 7); ctx.fill();
          ctx.fillStyle = "#ffd280"; ctx.font = "25px sans-serif"; ctx.textAlign = "center"; ctx.fillText("⚡", o.x, o.y + 9);
        } else {
          ctx.fillStyle = "#fff"; ctx.fillRect(o.x - 24, o.y - 25, 48, 54);
          const img = photos[o.image];
          if (img?.complete && img.naturalWidth) ctx.drawImage(img, o.x - 21, o.y - 22, 42, 40);
          else { ctx.fillStyle = "#ec8a9a"; ctx.fillRect(o.x - 21, o.y - 22, 42, 40); heart(ctx, o.x, o.y, 12, "#e50914"); }
        }
      });
      const p = state.player;
      ctx.fillStyle = "#e50914"; ctx.beginPath(); ctx.roundRect(p.x - 30, p.y - 14, 60, 28, 10); ctx.fill();
      ctx.fillStyle = "#fff"; ctx.font = "26px sans-serif"; ctx.textAlign = "center"; ctx.fillText("♥", p.x, p.y + 10);
    }

    function frame(now) {
      if (!body.isConnected) { removeEventListener("keydown", keydown); removeEventListener("keyup", keyup); state.raf = 0; return; }
      if (!state.active) { state.raf = 0; return; }
      if (!state.last) state.last = now;
      const dt = document.hidden ? 0 : Math.min(.04, (now - state.last) / 1000);
      state.last = now; state.time += dt;
      if (isFlappy) updateFlappy(dt); else updateCatch(dt);
      background(ctx, state.time);
      if (isFlappy) drawFlappy(); else drawCatch();
      state.raf = state.active ? requestAnimationFrame(frame) : 0;
    }
    background(ctx, 0);
    if (isFlappy) drawFlappy(); else drawCatch();
  }

  return { mount, readBest };
})();
