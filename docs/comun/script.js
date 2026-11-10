/* =====================================================================
   TEMPORADAS DE NOSOTROS — LÓGICA
   Vanilla JS, sin dependencias. Lee todo el contenido de config.js.
   Cada página declara <body data-page="..."> y aquí se arranca su módulo.
   Secciones:
   1. Utilidades · 2. Datos y progreso · 3. Acceso (gate) · 4. Sonido
   5. Transiciones y toast · 6. Medios / tarjetas · 7. Navbar
   8. Filas, hover-pop y modal · 9. Páginas · 10. Reproductor
   11. Minijuegos · 12. Arranque
   ===================================================================== */
(function () {
  "use strict";

  /* ================= 1. UTILIDADES ================= */
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s ?? "").replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const h = (html) => { const t = document.createElement("template"); t.innerHTML = html.trim(); return t.content.firstElementChild; };
  const rutaPedido = new URL("./", location.href).pathname;
  const store = (area) => ({
    get(k, d) { try { const v = area().getItem(rutaPedido + k); return v == null ? d : JSON.parse(v); } catch { return d; } },
    set(k, v) { try { area().setItem(rutaPedido + k, JSON.stringify(v)); } catch { /* modo privado */ } },
    del(k) { try { area().removeItem(rutaPedido + k); } catch { } }
  });
  const ls = store(() => localStorage);
  const ss = store(() => sessionStorage);
  // Normaliza respuestas: minúsculas, sin acentos, sin signos ni espacios
  const norm = (s) => String(s ?? "").toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]/g, "");
  const digits = (s) => String(s ?? "").replace(/\D/g, "");
  const shuffle = (a) => { a = [...a]; for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
  const fmt = (s) => { s = Math.max(0, Math.round(s)); return `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`; };
  const param = (k) => new URLSearchParams(location.search).get(k);
  const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
  const isImg = (v) => /\.(png|jpe?g|webp|gif|avif|svg)(\?.*)?$/i.test(v) || /^(data:|https?:)/.test(v);
  const isVideo = (v) => /\.(mp4|webm|mov)(\?.*)?$/i.test(v);
  const initial = (name) => (String(name).match(/\p{L}/u) || ["?"])[0].toUpperCase();
  // setPointerCapture puede fallar en algunos navegadores; no debe romper el gesto
  const capture = (el, e) => { try { el.setPointerCapture(e.pointerId); } catch { } };
  const finePointer = () => matchMedia("(hover: hover) and (pointer: fine)").matches;

  /* Iconos SVG (trazos propios, estilo Netflix) */
  const I = {
    play: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 3.5v17a.5.5 0 0 0 .76.43l14-8.5a.5.5 0 0 0 0-.86l-14-8.5A.5.5 0 0 0 6 3.5z"/></svg>',
    pause: '<svg viewBox="0 0 24 24" fill="currentColor"><rect x="5" y="3" width="4.5" height="18" rx=".5"/><rect x="14.5" y="3" width="4.5" height="18" rx=".5"/></svg>',
    plus: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4v16M4 12h16"/></svg>',
    check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 12.5l5 5L19.5 7"/></svg>',
    info: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="9.5"/><path d="M12 10.5V17M12 7v1.2"/></svg>',
    like: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round"><path d="M7 21H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3zM7 11l4-8c1.7 0 2.8 1.4 2.5 3L13 9h5.6a2 2 0 0 1 2 2.4l-1.4 7.6a2.5 2.5 0 0 1-2.4 2H7"/></svg>',
    down: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 9l6 6 6-6"/></svg>',
    left: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M15 4l-8 8 8 8"/></svg>',
    right: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M9 4l8 8-8 8"/></svg>',
    search: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="10.5" cy="10.5" r="7"/><path d="M15.5 15.5L21 21"/></svg>',
    bell: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 17V11a6 6 0 0 1 12 0v6l2 2H4zM10 21h4"/></svg>',
    lock: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="11" width="14" height="10" rx="1.5"/><path d="M8 11V7.5a4 4 0 0 1 8 0V11"/></svg>',
    back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 12H5M11 5l-7 7 7 7"/></svg>',
    back10: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4 9.4"/><path d="M4 4.5v5h5"/><text x="12" y="15.5" font-size="7" font-family="Arial" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">10</text></svg>',
    fwd10: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3L20 9.4"/><path d="M20 4.5v5h-5"/><text x="12" y="15.5" font-size="7" font-family="Arial" font-weight="700" fill="currentColor" stroke="none" text-anchor="middle">10</text></svg>',
    vol: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16.5 8.5a5 5 0 0 1 0 7M19 6a8.5 8.5 0 0 1 0 12"/></svg>',
    mute: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 9h4l5-4v14l-5-4H4z" fill="currentColor"/><path d="M16 9.5l5 5M21 9.5l-5 5"/></svg>',
    subs: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"><rect x="2.5" y="5" width="19" height="14" rx="1.5"/><path d="M6 14h5M13 14h5M6 10.5h8M16 10.5h2"/></svg>',
    full: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9V3h6M15 3h6v6M21 15v6h-6M9 21H3v-6"/></svg>',
    unfull: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 3v6H3M21 9h-6V3M15 21v-6h6M3 15h6v6"/></svg>',
    next: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 4v16l11-8zM17 4h3v16h-3z"/></svg>',
    caret: '<svg viewBox="0 0 10 6" fill="currentColor"><path d="M0 0h10L5 6z"/></svg>',
    burger: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 6h18M3 12h18M3 18h18"/></svg>',
    close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 5l14 14M19 5L5 19"/></svg>',
    replay: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4.5 12a7.5 7.5 0 1 0 2.2-5.3L4 9.4"/><path d="M4 4.5v5h5"/></svg>'
  };

  /* ================= 2. DATOS Y PROGRESO ================= */
  const C = window.TDN;
  if (!C) { document.body.innerHTML = "<p style='padding:2rem'>Falta config.js</p>"; return; }
  const P = C.pareja, F = C.fotos;
  const SEASONS = C.temporadas;
  const EPS = [];
  SEASONS.forEach((s) => s.episodios.forEach((e, i) =>
    EPS.push(Object.assign(e, { t: s.num, e: i + 1, id: `${s.num}-${i + 1}`, season: s, idx: EPS.length }))));

  const epById = (id) => EPS.find((x) => x.id === id);
  const seasonByNum = (n) => SEASONS.find((s) => String(s.num) === String(n));
  // Películas (1 episodio) y series (varios episodios cortos)
  const isMovie = (s) => s.tipo === "pelicula";
  const kindName = (s) => (isMovie(s) ? "Película" : "Serie");
  const epCode = (ep) => (isMovie(ep.season) ? "Película" : `E${ep.e}`);
  const epLabel = (ep) => (isMovie(ep.season) ? "Película" : `${ep.season.titulo} · Episodio ${ep.e}`);
  const epFull = (ep) => (isMovie(ep.season) ? ep.titulo : `${ep.season.titulo} · E${ep.e} «${ep.titulo}»`);
  const countLabel = (s) => (isMovie(s) ? epMin(s.episodios[0]) : `${s.episodios.length} episodios`);
  const epImg = (ep) => {
    const scene = (ep.escenas || []).find((x) => x.img);
    return ep.imagen || scene?.poster || scene?.img || ep.season.imagen || "";
  };
  const epUrl = (ep) => `episodio.html?t=${ep.t}&e=${ep.e}`;
  const epMin = (ep) => `${Math.max(1, Math.round((ep.duracion || 75) / 60))} min`;

  const KEY = "tdn_v1";
  const S = Object.assign({ done: {}, watch: {}, inter: {}, list: [], liked: {}, final: null, draft: [], sent: false, notifSeen: "" }, ls.get(KEY, {}));
  const save = () => ls.set(KEY, S);

  const isDone = (id) => !!S.done[id];
  const unlocked = () => true; // Todo el contenido está disponible desde el inicio
  const nextEp = () => EPS.find((e) => !isDone(e.id)) || null;
  const allDone = () => EPS.every((e) => isDone(e.id));
  const seasonUnlocked = (s) => unlocked(s.episodios[0]);
  const seasonHasNew = (s) => s.episodios.some((e) => unlocked(e) && !isDone(e.id));
  const seasonNext = (s) => s.episodios.find((e) => unlocked(e) && !isDone(e.id)) || s.episodios[0];
  const doneCount = () => EPS.filter((e) => isDone(e.id)).length;

  function toggleList(key, label) {
    const i = S.list.indexOf(key);
    if (i >= 0) { S.list.splice(i, 1); toast(`Quitado de Mi lista`); }
    else { S.list.push(key); toast(`Añadido a Mi lista: ${label}`); }
    save();
    return i < 0;
  }

  const PROFILES = {
    b: { name: P.nombreB, img: F.perfilB, color: "linear-gradient(135deg,#e50914,#6d0610)" },
    pareja: { name: "Tú y yo", img: F.perfilPareja, color: "linear-gradient(135deg,#2c7bd6,#123a6b)", mark: "♥" }
  };
  const profile = () => PROFILES[ss.get("tdn_who")] || PROFILES.b;
  const avatarHtml = (p, cls = "avatar") =>
    `<span class="${cls}" style="background:${p.color}">${p.img ? `<img src="${esc(p.img)}" alt="">` : esc(p.mark || initial(p.name))}</span>`;

  /* ================= 3. ACCESO ================= */
  const estrenoTime = () => (C.acceso.estreno ? new Date(C.acceso.estreno).getTime() : 0);
  const estrenoOk = () => !estrenoTime() || Date.now() >= estrenoTime();
  const cualquierClave = C.acceso.cualquierClave === true;
  const authToken = cualquierClave ? "cualquier-clave-v1" : norm(C.acceso.password);
  const authOk = () => (!cualquierClave && !C.acceso.password) || ls.get("tdn_auth") === authToken;

  // Devuelve false si redirige. Orden: estreno → intro → contraseña → perfil
  function gate(page) {
    if (page === "splash") return true;
    const goTo = (u) => { location.replace(u); return false; };
    const here = (location.pathname.split("/").pop() || "index.html") + location.search + location.hash;
    if (!estrenoOk()) return goTo("splash.html");
    if (!ss.get("tdn_intro")) { if (page !== "home" || location.search || location.hash) ss.set("tdn_return", here); return goTo("splash.html"); }
    if (!authOk()) return page === "password" ? true : goTo("password.html");
    if (page === "password") return goTo("profiles.html");
    if (page !== "profiles" && !ss.get("tdn_who")) { if (page !== "home" || location.search || location.hash) ss.set("tdn_return", here); return goTo("profiles.html"); }
    return true;
  }

  /* ================= 4. SONIDO ================= */
  // Audio del logo configurable por cliente; el resto de efectos sigue siendo sintetizado.
  const Sound = {
    get muted() { return ls.get("tdn_mute", false); },
    set muted(v) { ls.set("tdn_mute", !!v); if (this.introAudio) this.introAudio.muted = !!v; },
    ctx() { const AC = window.AudioContext || window.webkitAudioContext; return AC ? new AC() : null; },
    tadum() {
      this.introAudio?.pause();
      if (!C.media.intro) return;
      const audio = new Audio(C.media.intro);
      audio.preload = "auto";
      audio.muted = this.muted;
      this.introAudio = audio;
      audio.play().catch(() => {});
    },
    chime() { // pequeño "correcto"
      if (this.muted) return;
      const ctx = this.ctx(); if (!ctx) return;
      const t = ctx.currentTime;
      [659.25, 987.77].forEach((f, i) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(0.0001, t + i * 0.09); g.gain.linearRampToValueAtTime(0.18, t + i * 0.09 + 0.01); g.gain.exponentialRampToValueAtTime(0.001, t + i * 0.09 + 0.6);
        o.connect(g).connect(ctx.destination); o.start(t + i * 0.09); o.stop(t + i * 0.09 + 0.7);
      });
      setTimeout(() => ctx.close(), 1200);
    }
  };

  /* ================= 5. TRANSICIONES Y TOAST ================= */
  function go(url) {
    document.body.classList.add("is-leaving");
    setTimeout(() => (location.href = url), 260);
  }
  // Efecto "card to fullscreen": la miniatura crece hasta cubrir la pantalla
  function expandTo(el, url) {
    hidePop();
    const src = el.querySelector(".thumb, .ep-thumb") || el;
    const r = src.getBoundingClientRect();
    const wrap = document.createElement("div");
    wrap.className = "expand-clone";
    const clone = src.cloneNode(true);
    clone.style.cssText = "position:absolute;inset:0;width:100%;height:100%;aspect-ratio:auto;border-radius:0;transform:none";
    $$(".lock, .tag-new, .ep-play", clone).forEach((n) => n.remove());
    wrap.append(clone);
    wrap.style.cssText = `top:${r.top}px;left:${r.left}px;width:${r.width}px;height:${r.height}px`;
    document.body.append(wrap);
    wrap.offsetWidth; // fuerza reflow
    Object.assign(wrap.style, { top: "0px", left: "0px", width: "100vw", height: "100vh", borderRadius: "0" });
    wrap.classList.add("go");
    setTimeout(() => (location.href = url), 560);
  }

  let toastTimer;
  function toast(msg) {
    let t = $(".toast");
    if (!t) { t = h('<div class="toast" role="status" aria-live="polite"></div>'); document.body.append(t); }
    t.textContent = msg;
    requestAnimationFrame(() => t.classList.add("show"));
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
  }

  function showLoader(ms, then) {
    let l = $(".loader");
    if (!l) { l = h('<div class="loader"><div style="position:relative;display:flex;align-items:center;justify-content:center"><div class="spinner"></div><span class="logo-mono" style="position:absolute;font-size:1.6rem">T</span></div></div>'); document.body.append(l); }
    requestAnimationFrame(() => l.classList.add("show"));
    if (then) setTimeout(then, ms);
  }

  /* ================= 6. MEDIOS, LOGO Y TARJETAS ================= */
  const HUES = [352, 330, 280, 222, 8, 262, 300, 200, 18, 340];
  const hue = (seed) => { let x = 0; for (const c of String(seed)) x = (x * 31 + c.charCodeAt(0)) >>> 0; return HUES[x % HUES.length]; };

  // Devuelve <img>/<video> o una portada generada si no hay foto
  function media(src, label, seed, poster = "") {
    if (src && isVideo(src)) return `<video class="media-img" src="${esc(src)}" ${poster ? `poster="${esc(poster)}"` : ""} muted playsinline loop autoplay preload="metadata"></video>`;
    if (src) return `<img class="media-img" src="${esc(src)}" alt="${esc(label)}" loading="lazy" decoding="async">`;
    const a = hue(seed ?? label);
    return `<div class="ph" style="--h1:${a};--h2:${(a + 35) % 360}"><span class="ph-label">${esc(label)}</span></div>`;
  }

  // Logo con curvatura tipo "Netflix": letras exteriores más altas
  function renderLogo(el) {
    const chars = [...(el.dataset.logo || "TEMPORADAS DE NOSOTROS")];
    const c = (chars.length - 1) / 2;
    el.innerHTML = chars.map((ch, i) => {
      if (ch === " ") return '<span class="sp"></span>';
      const d = (i - c) / c, s = 1 + 0.24 * d * d;
      return `<span style="transform:scaleY(${s.toFixed(3)})">${esc(ch)}</span>`;
    }).join("");
    el.setAttribute("aria-label", el.dataset.logo || "Temporadas de Nosotros");
  }
  const renderLogos = (root = document) => $$("[data-logo]", root).forEach(renderLogo);

  const lockHtml = (txt) => `<div class="lock">${I.lock}<span>${esc(txt)}</span></div>`;

  function epCard(ep, o = {}) {
    const lock = !unlocked(ep), done = isDone(ep.id), w = S.watch[ep.id] || 0, img = epImg(ep);
    const isNew = !lock && !done;
    return `<div class="card" tabindex="0" role="button" data-kind="ep" data-id="${ep.id}" aria-label="${esc(epFull(ep))}">
      <div class="thumb ${img ? "" : "has-ph"} ${isNew ? "has-new" : ""}">${media(img, ep.titulo, ep.id)}
        <span class="badge-letter">T</span>
        <div class="thumb-title"><small>${esc(epCode(ep))}</small>${esc(ep.titulo)}</div>
        ${isNew ? `<span class="tag-new">${isMovie(ep.season) ? "Nueva película" : "Nuevo episodio"}</span>` : ""}
        ${lock ? lockHtml("Completa el episodio anterior") : ""}
      </div>
      ${o.progress ? `<div class="card-progress"><i style="width:${Math.max(4, w * 100)}%"></i></div>` : ""}
      ${o.caption ? `<div class="card-cap">${esc(ep.season.titulo)}</div>` : ""}
    </div>`;
  }
  function seasonCard(s) {
    const lock = !seasonUnlocked(s), img = s.imagen;
    const isNew = !lock && seasonHasNew(s);
    return `<div class="card" tabindex="0" role="button" data-kind="season" data-id="${s.num}" aria-label="${kindName(s)}: ${esc(s.titulo)}">
      <div class="thumb ${img ? "" : "has-ph"} ${isNew ? "has-new" : ""}">${media(img, s.titulo, "s" + s.num)}
        <span class="badge-letter">T</span>
        ${s.top10 ? '<span class="badge-top10">TOP<b>10</b></span>' : ""}
        <div class="thumb-title"><small>${kindName(s)}</small>${esc(s.titulo)}</div>
        ${isNew ? `<span class="tag-new">${isMovie(s) ? "Nueva película" : "Nuevos episodios"}</span>` : ""}
        ${lock ? lockHtml("Completa la temporada anterior") : ""}
      </div></div>`;
  }
  function finalCard() {
    const lock = false;
    return `<div class="card" tabindex="0" role="button" data-kind="final" data-id="final" aria-label="${esc(C.final.titulo)}">
      <div class="thumb ${C.final.imagen ? "" : "has-ph"} ${!lock ? "has-new" : ""}">${media(C.final.imagen, "Final", "final")}
        <span class="badge-letter">T</span><span class="badge-top10">TOP<b>1</b></span>
        <div class="thumb-title"><small>El final</small>${esc(C.final.titulo)}</div>
        ${!lock ? '<span class="tag-new">Disponible ahora</span>' : ""}
        ${lock ? lockHtml("Se desbloquea al terminar todo") : ""}
      </div></div>`;
  }
  function extraCard(x, i) {
    return `<div class="card" tabindex="0" role="button" data-kind="extra" data-id="${i}" aria-label="${esc(x.titulo)}">
      <div class="thumb ${x.img ? "" : "has-ph"}">${media(x.img, x.titulo, "x" + i)}
        <span class="badge-letter">T</span>
        <div class="thumb-title"><small>Detrás de cámaras</small>${esc(x.titulo)}</div>
      </div></div>`;
  }
  function topCard(s, rank) {
    const lock = !seasonUnlocked(s);
    return `<div class="card top" tabindex="0" role="button" data-kind="season" data-id="${s.num}" aria-label="Top ${rank}: ${esc(s.titulo)}">
      <span class="top-num" aria-hidden="true">${rank}</span>
      <div class="thumb ${s.imagen ? "" : "has-ph"}">${media(s.imagen, s.titulo, "s" + s.num)}
        <span class="badge-letter">T</span>
        <div class="thumb-title"><small>${kindName(s)}</small>${esc(s.titulo)}</div>
        ${lock ? lockHtml("Bloqueado") : ""}
      </div></div>`;
  }

  /* ================= 7. NAVBAR ================= */
  function notifications() {
    const items = [];
    const n = nextEp();
    if (n) items.push({ t: `Sigue viendo: ${n.titulo}`, s: epLabel(n), img: epImg(n), seed: n.id, url: epUrl(n) });
    SEASONS.filter((s) => !s.episodios.some((e) => isDone(e.id)) && s !== n?.season).slice(0, 4)
      .forEach((s) => items.push({ t: `${kindName(s)} disponible: ${s.titulo}`, s: String(s.anio), img: s.imagen, seed: "s" + s.num, url: `temporada.html?t=${s.num}` }));
    items.push({ t: `Ya disponible: ${C.final.titulo}`, s: "Solo para ti", img: C.final.imagen, seed: "final", url: "final.html" });
    items.push({ t: "Estreno: Temporadas de Nosotros", s: C.sitio.estrenoTexto || `12 películas y 3 series originales para ${P.nombreB}`, img: F.hero, seed: "hero", url: "index.html" });
    return items;
  }

  function renderNav(active) {
    const links = [["home", "Inicio", "index.html"], ["movies", "Películas", "index.html?ver=peliculas"], ["series", "Series", "index.html?ver=series"], ["games", "Juegos", "juegos.html"], ["list", "Mi lista", "index.html#mi-lista"], ["new", "Novedades", "index.html#novedades"]];
    const pr = profile(), notes = notifications();
    const sig = notes.map((n) => n.t).join("|");
    const unread = S.notifSeen === sig ? 0 : notes.length;
    const nav = h(`<header class="nav" id="nav">
      <button class="nav-burger" aria-label="Abrir menú">${I.burger}</button>
      <a href="index.html" class="logo-mono" aria-label="Inicio">T</a>
      <a href="index.html" class="logo full" data-logo="TEMPORADAS DE NOSOTROS"></a>
      <ul class="nav-links">${links.map(([k, l, u]) => `<li><a href="${u}" class="${k === active ? "active" : ""}">${l}</a></li>`).join("")}</ul>
      <div class="nav-right">
        <form class="search-box" role="search"><button type="button" class="nav-ico s-btn" aria-label="Buscar">${I.search}</button><input type="search" placeholder="Títulos, momentos…" aria-label="Buscar"></form>
        <div class="bell"><button class="nav-ico" aria-label="Notificaciones">${I.bell}${unread ? `<span class="dot">${unread}</span>` : ""}</button>
          <div class="dropdown">${notes.map((n) => `<a class="notif" href="${n.url}"><span class="nthumb">${media(n.img, "", n.seed)}</span><span><b>${esc(n.t)}</b><small>${esc(n.s)}</small></span></a>`).join("")}</div></div>
        <div class="profile-menu"><button class="pm-btn" aria-label="Menú de perfil">${avatarHtml(pr)}</button><span class="caret hide-sm">${I.caret}</span>
          <div class="dropdown">
            <a href="index.html">${avatarHtml(pr)} Perfil de ${esc(pr.name)}</a>
            <a href="profiles.html" data-switch>${avatarHtml(pr === PROFILES.b ? PROFILES.pareja : PROFILES.b)} ${esc(pr === PROFILES.b ? PROFILES.pareja.name : PROFILES.b.name)}</a>
            <hr><a href="profiles.html" data-switch>Cambiar de perfil</a>
            <a href="splash.html">Ver la intro otra vez</a>
            <button type="button" data-reset>Reiniciar progreso</button>
          </div></div>
      </div></header>`);
    const drawer = h(`<nav class="drawer" aria-label="Menú">
      <div class="drawer-head">${avatarHtml(pr)}<div><b>${esc(pr.name)}</b><br><a href="profiles.html" data-switch style="padding:0;color:var(--netflix-gray);font-size:.85rem">Cambiar perfil</a></div></div>
      ${links.map(([k, l, u]) => `<a href="${u}" class="${k === active ? "active" : ""}">${l}</a>`).join("")}
      <a href="final.html">${esc(C.final.titulo)}</a>
      <button type="button" data-reset>Reiniciar progreso</button></nav>`);
    const back = h('<div class="drawer-backdrop"></div>');
    document.body.prepend(back); document.body.prepend(drawer); document.body.prepend(nav);
    renderLogos(nav);

    const onScroll = () => nav.classList.toggle("scrolled", scrollY > 10);
    addEventListener("scroll", onScroll, { passive: true }); onScroll();

    const toggleDrawer = (open) => { drawer.classList.toggle("open", open); back.classList.toggle("open", open); };
    $(".nav-burger", nav).onclick = () => toggleDrawer(true);
    back.onclick = () => toggleDrawer(false);
    $$("a", drawer).forEach((a) => a.addEventListener("click", () => toggleDrawer(false)));

    // Búsqueda
    const sb = $(".search-box", nav), input = $("input", sb);
    $(".s-btn", sb).onclick = () => { sb.classList.toggle("open"); if (sb.classList.contains("open")) input.focus(); };
    input.addEventListener("blur", () => { if (!input.value) sb.classList.remove("open"); });
    sb.addEventListener("submit", (e) => { e.preventDefault(); if (active !== "home") go(`index.html?q=${encodeURIComponent(input.value)}`); });
    if (active === "home") input.addEventListener("input", () => runSearch(input.value));

    // Campana y perfil: hover en desktop, toque en móvil
    const bell = $(".bell", nav), pm = $(".profile-menu", nav);
    $("button", bell).onclick = () => { bell.classList.toggle("open"); pm.classList.remove("open"); S.notifSeen = sig; save(); $(".dot", bell)?.remove(); };
    bell.addEventListener("mouseenter", () => { S.notifSeen = sig; save(); $(".dot", bell)?.remove(); });
    $(".pm-btn", pm).onclick = () => { pm.classList.toggle("open"); bell.classList.remove("open"); };
    document.addEventListener("click", (e) => { if (!nav.contains(e.target)) { bell.classList.remove("open"); pm.classList.remove("open"); } });
    $$("[data-switch]", document).forEach((a) => a.addEventListener("click", () => ss.del("tdn_who")));
    $$("[data-reset]", document).forEach((b) => b.addEventListener("click", () => {
      if (confirm("¿Reiniciar todo el progreso de la serie? Se borrarán episodios vistos y respuestas.")) {
        ls.del(KEY); location.href = "index.html";
      }
    }));
    return nav;
  }

  function footer() {
    return `<footer class="footer">
      <ul><li>Preguntas frecuentes del amor</li><li>Centro de ayuda (abrazos)</li><li>Términos de nosotros</li><li>Privacidad: solo dos</li>
      <li>Preferencias de besos</li><li>Información corporativa: ${esc(P.ciudad)}</li><li>Contáctanos: al oído</li><li>Avisos legales</li></ul>
      <p>© ${P.anioInicio}–${new Date().getFullYear()} ${esc(P.nombreA)} & ${esc(P.nombreB)} · Temporadas de Nosotros</p></footer>`;
  }

  /* ================= 8. FILAS, HOVER-POP Y MODAL ================= */
  function row(id, title, cards) {
    return `<section class="row" id="${id}"><div class="row-head"><h2 class="row-title">${title}</h2><div class="row-pages"></div></div>
      <div class="slider-wrap"><button class="row-arrow prev hidden" aria-label="Anterior">${I.left}</button>
      <div class="slider">${cards}</div><button class="row-arrow next" aria-label="Siguiente">${I.right}</button></div></section>`;
  }

  function initSliders(root = document) {
    $$(".slider-wrap", root).forEach((w) => {
      const sl = $(".slider", w), prev = $(".prev", w), next = $(".next", w), pages = $(".row-pages", w.parentElement);
      const update = () => {
        if (!sl.clientWidth) return; // Fila oculta o sin ancho todavía
        const max = sl.scrollWidth - sl.clientWidth;
        prev.classList.toggle("hidden", sl.scrollLeft < 8);
        next.classList.toggle("hidden", sl.scrollLeft > max - 8);
        const n = Math.max(1, Math.ceil(sl.scrollWidth / sl.clientWidth)), cur = Math.round(sl.scrollLeft / sl.clientWidth);
        pages.innerHTML = n > 1 ? Array.from({ length: n }, (_, i) => `<i class="${i === cur ? "on" : ""}"></i>`).join("") : "";
      };
      prev.onclick = () => sl.scrollBy({ left: -sl.clientWidth * 0.92 });
      next.onclick = () => sl.scrollBy({ left: sl.clientWidth * 0.92 });
      sl.addEventListener("scroll", () => { hidePop(); requestAnimationFrame(update); }, { passive: true });
      addEventListener("resize", update);
      update();
    });
  }

  // Qué hace cada tarjeta al hacer clic
  function cardAction(card) {
    const { kind, id } = card.dataset;
    if (kind === "ep") {
      const ep = epById(id);
      if (!unlocked(ep)) return toast("🔒 Completa el episodio anterior para desbloquearlo");
      return expandTo(card, epUrl(ep));
    }
    if (kind === "season") {
      const s = seasonByNum(id);
      if (!seasonUnlocked(s)) return toast(`🔒 La Temporada ${s.num} se desbloquea al terminar la anterior`);
      return expandTo(card, `temporada.html?t=${s.num}`);
    }
    if (kind === "final") return expandTo(card, "final.html");
    if (kind === "extra") return openModal(C.extras[+id], "x" + id);
  }

  function bindCards(root = document) {
    root.addEventListener("click", (e) => {
      const card = e.target.closest(".card");
      if (card && !e.target.closest(".pop")) cardAction(card);
    });
    root.addEventListener("keydown", (e) => {
      const card = e.target.closest?.(".card");
      if (card && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); cardAction(card); }
    });
    // Hover-pop solo con mouse
    let timer, over;
    root.addEventListener("mouseover", (e) => {
      if (!finePointer()) return;
      const card = e.target.closest(".slider .card");
      if (!card || card === over) return;
      over = card; clearTimeout(timer);
      timer = setTimeout(() => showPop(card), 480);
    });
    root.addEventListener("mouseout", (e) => {
      const card = e.target.closest(".slider .card");
      if (card && !card.contains(e.relatedTarget)) { over = null; clearTimeout(timer); }
    });
  }

  let popEl = null;
  function hidePop() {
    if (!popEl) return;
    const p = popEl; popEl = null;
    p.classList.remove("show");
    setTimeout(() => p.remove(), 250);
  }
  addEventListener("scroll", hidePop, { passive: true });

  function showPop(card) {
    hidePop();
    const th = $(".thumb", card), r = th.getBoundingClientRect();
    if (r.width === 0) return;
    const { kind, id } = card.dataset;
    let meta, sub = "", key, label, playable = true, w = 0;
    if (kind === "ep") {
      const ep = epById(id); key = "e:" + id; label = ep.titulo; playable = unlocked(ep); w = S.watch[id] || 0;
      meta = `<span>${epMin(ep)}</span>`; sub = `${esc(epFull(ep))} · ${esc(ep.descripcion)}`;
    } else if (kind === "season") {
      const s = seasonByNum(id); key = "s:" + id; label = s.titulo; playable = seasonUnlocked(s);
      meta = `<span>${kindName(s)}</span><span>${countLabel(s)}</span>`; sub = esc(s.sinopsis);
    } else if (kind === "final") {
      key = "final"; label = C.final.titulo; playable = true; meta = "<span>Final</span>"; sub = esc(C.final.sinopsis);
    } else {
      const x = C.extras[+id]; key = "x:" + id; label = x.titulo; meta = "<span>Extra</span>"; sub = esc(x.texto);
    }
    const inL = S.list.includes(key);
    const W = Math.max(r.width * 1.3, 290), Hm = W * 9 / 16;
    const gut = innerWidth * 0.04;
    let left = r.left + r.width / 2 - W / 2;
    left = clamp(left, gut * 0.5, innerWidth - gut * 0.5 - W);
    const top = r.top + scrollY - (Hm - r.height) / 2;
    const thumbClone = th.cloneNode(true);
    $$(".lock", thumbClone).forEach((n) => n.remove());
    thumbClone.style.cssText = "aspect-ratio:16/9;border-radius:0";

    const pop = h(`<div class="pop" style="left:${left + scrollX}px;top:${top}px;width:${W}px"></div>`);
    pop.style.transformOrigin = `${((r.left + r.width / 2 - left) / W) * 100}% ${(r.top + scrollY + r.height / 2 - top)}px`;
    pop.append(thumbClone);
    pop.append(h(`<div class="pop-info">
      <div class="pop-btns">
        <button class="icon-btn solid" data-a="play" aria-label="Reproducir">${playable ? I.play : I.lock}</button>
        <button class="icon-btn" data-a="list" aria-label="Mi lista">${inL ? I.check : I.plus}</button>
        <button class="icon-btn ${S.liked[key] ? "on" : ""}" data-a="like" aria-label="Me gusta">${I.like}</button>
        <span class="grow"></span>
        <button class="icon-btn" data-a="more" aria-label="Más información">${I.down}</button>
      </div>
      <div class="meta"><span class="match">${C.sitio.coincidencia}% para ti</span><span class="age-box">${esc(C.sitio.clasificacion)}</span>${meta}<span class="hd">HD</span><span class="hd">5.1</span></div>
      <div class="pop-tags">${C.sitio.generos.map((g) => `<span>${esc(g)}</span>`).join("")}</div>
      ${w ? `<div class="pop-progress"><i style="width:${w * 100}%"></i></div>` : ""}
      <div class="pop-sub">${sub}</div></div>`));
    document.body.append(pop);
    popEl = pop;
    requestAnimationFrame(() => pop.classList.add("show"));
    pop.addEventListener("mouseleave", hidePop);
    pop.addEventListener("click", (e) => {
      const a = e.target.closest("[data-a]")?.dataset.a;
      if (!a) return cardAction(card);
      e.stopPropagation();
      if (a === "play") {
        if (kind === "season" && playable) return expandTo(card, epUrl(seasonNext(seasonByNum(id))));
        return cardAction(card);
      }
      if (a === "list") { const on = toggleList(key, label); e.target.closest("button").innerHTML = on ? I.check : I.plus; refreshList(); }
      if (a === "like") { S.liked[key] = !S.liked[key]; save(); e.target.closest("button").classList.toggle("on", S.liked[key]); toast(S.liked[key] ? "¡Calificado! Obvio que te encanta 💘" : "Calificación quitada"); }
      if (a === "more") {
        if (kind === "ep") return go(`temporada.html?t=${epById(id).t}#ep-${id}`);
        return cardAction(card);
      }
    });
  }

  function openModal(x, seed) {
    const bd = h(`<div class="modal-backdrop" role="dialog" aria-modal="true" aria-label="${esc(x.titulo)}"><div class="modal">
      <button class="icon-btn modal-close" aria-label="Cerrar">${I.close}</button>
      <div class="modal-media">${media(x.img, x.titulo, seed)}</div>
      <div class="modal-body"><div class="meta" style="margin-bottom:.8rem"><span class="match">${C.sitio.coincidencia}% para ti</span><span class="hd">HD</span><span>Detrás de cámaras</span></div>
      <h2>${esc(x.titulo)}</h2><p>${esc(x.texto)}</p></div></div></div>`);
    document.body.append(bd);
    document.body.style.overflow = "hidden";
    requestAnimationFrame(() => bd.classList.add("show"));
    const close = () => { bd.classList.remove("show"); document.body.style.overflow = ""; setTimeout(() => bd.remove(), 250); removeEventListener("keydown", onKey); };
    const onKey = (e) => e.key === "Escape" && close();
    addEventListener("keydown", onKey);
    bd.addEventListener("click", (e) => { if (e.target === bd || e.target.closest(".modal-close")) close(); });
    $(".modal-close", bd).focus();
  }

  let refreshList = () => {};

  /* ================= 9. PÁGINAS ================= */

  /* ---------- SPLASH (intro TA-DUM + fecha de estreno) ---------- */
  function pageSplash() {
    const root = $("#app");
    const muteBtn = () => `<button class="icon-btn splash-mute" aria-label="Sonido">${Sound.muted ? I.mute : I.vol}</button>`;
    const ribbons = Array.from({ length: 34 }, (_, i) => {
      const hue = [355, 8, 28, 47, 205, 265, 326][i % 7];
      const spread = (i - 16.5) * 4.5;
      const delay = (1.35 + (i % 9) * 0.055).toFixed(2);
      return `<i style="--h:${hue};--near:${(spread * .2).toFixed(1)}vw;--spread:${spread.toFixed(1)}vw;--far:${(spread * 1.35).toFixed(1)}vw;--delay:${delay}s;--w:${10 + i % 4 * 5}px"></i>`;
    }).join("");

    if (!estrenoOk()) {
      root.innerHTML = `<div class="splash"><div class="splash-start">
        <div class="logo" data-logo="TEMPORADAS DE NOSOTROS"></div>
        <p style="letter-spacing:.3em;font-size:.8rem">ESTRENO EXCLUSIVO</p>
        <div class="countdown" id="cd"></div>
        <p>Disponible el ${new Date(estrenoTime()).toLocaleString("es", { dateStyle: "long", timeStyle: "short" })}</p></div></div>`;
      renderLogos(root);
      const tick = () => {
        const d = Math.max(0, estrenoTime() - Date.now());
        if (d <= 0) return location.reload();
        const u = [[86400000, "días"], [3600000, "horas"], [60000, "min"], [1000, "seg"]];
        let rest = d;
        $("#cd").innerHTML = u.map(([ms, l]) => { const v = Math.floor(rest / ms); rest -= v * ms; return `<div><b>${String(v).padStart(2, "0")}</b><small>${l}</small></div>`; }).join("");
      };
      tick(); setInterval(tick, 1000);
      return;
    }

    root.innerHTML = `<div class="splash" id="splash">${muteBtn()}
      <div class="splash-start" id="start">
        <div class="logo" data-logo="TEMPORADAS DE NOSOTROS"></div>
        <p>Películas y series originales para <b style="color:#fff">${esc(P.nombreB)}</b></p>
        <button class="btn btn-red" id="go">${I.play} Comenzar</button>
        <p style="font-size:.8rem">Mejor con sonido 🔊</p>
      </div>
      <div class="tadum" id="tadum"><div class="tadum-ribbons">${ribbons}</div><div class="tadum-letter">T</div>
        <div class="logo tadum-final" data-logo="TEMPORADAS DE NOSOTROS"></div></div></div>`;
    renderLogos(root);
    $(".splash-mute").onclick = (e) => { e.stopPropagation(); Sound.muted = !Sound.muted; e.currentTarget.innerHTML = Sound.muted ? I.mute : I.vol; };
    let started = false;
    const start = () => {
      if (started) return; started = true;
      $("#start").style.opacity = 0;
      Sound.tadum();
      setTimeout(() => { $("#start").remove(); $("#tadum").classList.add("run"); }, 220);
      ss.set("tdn_intro", 1);
      setTimeout(() => (location.href = authOk() ? "profiles.html" : "password.html"), 5000);
    };
    $("#go").onclick = start;
    $("#splash").addEventListener("click", (e) => { if (!e.target.closest(".splash-mute")) start(); });
    addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && start());
  }

  /* ---------- PASSWORD ---------- */
  function pagePassword() {
    $("#app").innerHTML = `<div class="auth-page"><div class="auth-bg">${media(F.hero, "", "hero")}</div>
      <header class="auth-head"><div class="logo" data-logo="TEMPORADAS DE NOSOTROS"></div></header>
      <form class="auth-box" novalidate>
        <h1>Contenido exclusivo</h1>
        <p>${cualquierClave ? "Escribe cualquier carácter para continuar." : "Esta serie solo está disponible para una persona en el mundo. Introduce la contraseña para continuar."}</p>
        <div class="field" id="f"><input type="password" id="pw" placeholder=" " autocomplete="off" autocapitalize="off" spellcheck="false"><label for="pw">Contraseña</label></div>
        <div class="field-err">${cualquierClave ? "Escribe al menos un carácter para entrar." : "Contraseña incorrecta. Inténtalo de nuevo."}</div>
        <button class="btn btn-red" type="submit">Entrar</button>
        <div class="auth-foot">¿No la recuerdas? <button type="button" id="hint">Ver pista</button><p id="hintText" hidden style="color:#b3b3b3"></p></div>
      </form></div>`;
    renderLogos();
    const f = $("#f"), pw = $("#pw");
    pw.focus();
    $(".auth-box").addEventListener("submit", (e) => {
      e.preventDefault();
      const accepted = cualquierClave
        ? pw.value.length > 0
        : norm(pw.value) === authToken || (C.acceso.demo && pw.value.trim());
      if (accepted) {
        ls.set("tdn_auth", authToken);
        showLoader(900, () => (location.href = "profiles.html"));
      } else { f.classList.add("err"); $(".auth-box").classList.add("shake"); setTimeout(() => $(".auth-box").classList.remove("shake"), 500); }
    });
    pw.addEventListener("input", () => f.classList.remove("err"));
    $("#hint").onclick = () => { const p = $("#hintText"); p.hidden = false; p.textContent = "Pista: " + C.acceso.pistaPassword; };
  }

  /* ---------- PERFILES ---------- */
  function pageProfiles() {
    $("#app").innerHTML = `<div class="profiles" id="profiles">
      <a class="top-logo" href="#"><span class="logo" data-logo="TEMPORADAS DE NOSOTROS"></span></a>
      <h1>¿Quién está viendo?</h1>
      <div class="profile-list">${Object.entries(PROFILES).map(([k, p]) => `
        <button class="profile" data-p="${k}"><div class="pic" style="background:${p.color}">${p.img ? `<img class="media-img" src="${esc(p.img)}" alt="">` : `<span class="initial">${esc(p.mark || initial(p.name))}</span>`}</div>
        <span class="name">${esc(p.name)}</span></button>`).join("")}</div>
      <button class="btn btn-outline" id="manage">Administrar perfiles</button></div>`;
    renderLogos();
    $("#manage").onclick = () => toast("Solo hay dos perfiles en esta casa ❤️");
    $$(".profile").forEach((b) => b.addEventListener("click", () => {
      ss.set("tdn_who", b.dataset.p);
      b.classList.add("chosen"); $("#profiles").classList.add("leaving");
      setTimeout(() => showLoader(1100, () => {
        const back = ss.get("tdn_return"); ss.del("tdn_return");
        location.href = back || "index.html";
      }), 450);
    }));
  }

  /* ---------- HOME ---------- */
  function pageHome() {
    // ?ver=peliculas o ?ver=series: la página muestra solo ese tipo de título
    const ver = param("ver");
    const only = ver === "peliculas" ? isMovie : ver === "series" ? (x) => !isMovie(x) : null;
    renderNav(ver === "peliculas" ? "movies" : ver === "series" ? "series" : "home");
    const pool = only ? EPS.filter((e) => only(e.season)) : EPS;
    const nx = pool.find((e) => !isDone(e.id)) || null, feat = (nx || pool[0]).season, pr = profile();
    const playTarget = only ? epUrl(feat.episodios.find((e) => !isDone(e.id)) || feat.episodios[0]) : nx ? epUrl(nx) : epUrl(EPS[0]);
    const resume = nx && S.watch[nx.id] > 0;
    const heroImg = only ? feat.imagen : F.hero || feat.imagen;
    if (only) document.title = `${ver === "peliculas" ? "Películas" : "Series"} | Temporadas de Nosotros`;

    const app = $("#app");
    app.innerHTML = `
      <section class="hero home-hero" aria-label="Destacado">
        <div class="hero-bg">${heroImg ? media(heroImg, "", "hero") : media("", "Nosotros", "hero")}</div>
        <div class="hero-content">
          <div class="hero-kicker"><span class="logo-mono">T</span>${only ? kindName(feat) : "Original"}</div>
          <h1 class="hero-title">${esc(only ? feat.titulo : "Temporadas de Nosotros")}</h1>
          <div class="hero-tags"><span class="tag-red">${esc(C.sitio.heroTag)}</span><span class="top10-mini">TOP<b>10</b></span><span>${esc(C.sitio.heroTop)}</span></div>
          <p class="hero-synopsis">${esc(only ? feat.sinopsis : C.sitio.sinopsis)}</p>
          <div class="hero-btns">
            <button class="btn btn-play" id="hPlay">${I.play} ${resume ? "Reanudar" : "Reproducir"}</button>
            <button class="btn btn-gray" id="hList">${S.list.includes("serie") ? I.check : I.plus} Mi lista</button>
            <button class="btn btn-gray" id="hInfo">${I.info} Más información</button>
          </div>
        </div>
        <div class="hero-side"><button class="icon-btn" id="hMute" aria-label="Sonido">${Sound.muted ? I.mute : I.vol}</button>
          <span class="age">${esc(C.sitio.clasificacion)}</span></div>
      </section>
      <main class="rows" id="rows"></main>
      <section class="search-results" id="results"></section>
      ${footer()}`;

    const rowsEl = $("#rows");
    const continuing = pool.filter((e) => S.watch[e.id] > 0 && !isDone(e.id));
    if (!continuing.length && nx) continuing.push(nx);
    const later = SEASONS.filter((s) => s.num >= Math.ceil(SEASONS.length / 2));
    const tops = [...SEASONS].sort((a, b) => (b.top10 ? 1 : 0) - (a.top10 ? 1 : 0)).slice(0, 10);

    const movies = SEASONS.filter(isMovie), series = SEASONS.filter((x) => !isMovie(x));
    const cont = continuing.length ? row("continuar", `Continuar viendo como ${esc(pr.name)}`, continuing.map((e) => epCard(e, { progress: true })).join("")) : "";
    if (ver === "peliculas") rowsEl.innerHTML = cont +
      row("peliculas", "Películas de nosotros", movies.map(seasonCard).join("")) +
      row("top10", "Top 10 películas en tu corazón", movies.filter((x) => x.top10).concat(movies.filter((x) => !x.top10)).slice(0, 10).map((x, i) => topCard(x, i + 1)).join("")) +
      row("porque", "Para volver a ver", [...movies].reverse().map(seasonCard).join(""));
    else if (ver === "series") rowsEl.innerHTML = cont +
      row("series", "Series de nosotros", series.map(seasonCard).join("")) +
      row("novedades", "Episodios de nuestras series", EPS.filter((e) => !isMovie(e.season)).map((e) => epCard(e)).join("")) +
      row("top10", "Top series en tu corazón", series.map((x, i) => topCard(x, i + 1)).join(""));
    else rowsEl.innerHTML =
      (continuing.length ? row("continuar", `Continuar viendo como ${esc(pr.name)}`, continuing.map((e) => epCard(e, { progress: true })).join("")) : "") +
      `<a class="games-promo" href="juegos.html"><span class="games-promo-mark">🎮</span><span><b>Juegos de nuestra historia</b><small>Trivias, recuerdos y sorpresas · Juega cuando quieras</small></span><span class="games-promo-arrow">${I.right}</span></a>` +
      row("peliculas", "Películas de nosotros", SEASONS.filter(isMovie).map(seasonCard).join("")) +
      row("series", "Series de nosotros", SEASONS.filter((x) => !isMovie(x)).map(seasonCard).join("") + finalCard()) +
      row("top10", "Top 10 en tu corazón hoy", tops.map((s, i) => topCard(s, i + 1)).join("")) +
      row("novedades", "Episodios de nuestras series", EPS.filter((e) => !isMovie(e.season)).map((e) => epCard(e)).join("")) +
      row("detras", "Detrás de cámaras", C.extras.map(extraCard).join("")) +
      row("porque", `Porque viste '${esc(C.sitio.filaRecomendada)}'`, later.map(seasonCard).join("") + finalCard()) +
      `<div id="mi-lista-slot"></div>`;

    refreshList = () => {
      const slot = $("#mi-lista-slot");
      if (!slot) return;
      const cards = S.list.map((k) => {
        if (k === "serie") return "";
        if (k === "final") return finalCard();
        const [t, id] = k.split(":");
        if (t === "e" && epById(id)) return epCard(epById(id));
        if (t === "s" && seasonByNum(id)) return seasonCard(seasonByNum(id));
        if (t === "x" && C.extras[+id]) return extraCard(C.extras[+id], +id);
        return "";
      }).join("");
      slot.innerHTML = cards ? row("mi-lista", "Mi lista", cards)
        : `<section class="row" id="mi-lista"><div class="row-head"><h2 class="row-title">Mi lista</h2></div><p class="empty-row">Pasa el cursor sobre un título y pulsa <b>+</b> para guardarlo aquí.</p></section>`;
      initSliders(slot);
    };
    refreshList();
    initSliders(rowsEl);
    bindCards(app);

    $("#hPlay").onclick = (e) => expandTo($(".hero"), playTarget);
    $("#hInfo").onclick = () => expandTo($(".hero"), `temporada.html?t=${feat.num}`);
    $("#hList").onclick = (e) => { const on = only ? toggleList("s:" + feat.num, feat.titulo) : toggleList("serie", "Temporadas de Nosotros"); e.currentTarget.innerHTML = `${on ? I.check : I.plus} Mi lista`; };
    $("#hMute").onclick = (e) => { Sound.muted = !Sound.muted; e.currentTarget.innerHTML = Sound.muted ? I.mute : I.vol; toast(Sound.muted ? "Sonido desactivado" : "Sonido activado"); };

    const q = param("q");
    if (q) { const sb = $(".search-box"); sb.classList.add("open"); $("input", sb).value = q; runSearch(q); }
    if (location.hash) setTimeout(() => $(location.hash)?.scrollIntoView({ behavior: "smooth" }), 300);
  }

  function runSearch(q) {
    const res = $("#results"); if (!res) return;
    const n = norm(q);
    document.body.classList.toggle("searching", !!n);
    res.classList.toggle("show", !!n);
    if (!n) return;
    const hit = (...txt) => txt.some((t) => norm(t).includes(n));
    const ver = param("ver");
    const matchesView = (s) => ver === "peliculas" ? isMovie(s) : ver === "series" ? !isMovie(s) : true;
    const eps = EPS.filter((e) => matchesView(e.season) && !isMovie(e.season) && hit(e.titulo, e.descripcion, e.season.titulo));
    const ss_ = SEASONS.filter((s) => matchesView(s) && hit(s.titulo, s.sinopsis));
    const cards = ss_.map(seasonCard).join("") + eps.map((e) => epCard(e, { caption: true })).join("");
    res.innerHTML = cards
      ? `<p style="color:var(--netflix-gray)">Resultados para «${esc(q)}»</p><div class="search-grid">${cards}</div>`
      : `<p style="color:var(--netflix-gray);text-align:center;margin-top:4rem">Tu búsqueda de «${esc(q)}» no tuvo coincidencias.<br>Sugerencias: prueba con "${esc(P.ciudad)}" o "cita".</p>`;
  }

  /* ---------- DETALLE DE TEMPORADA ---------- */
  function pageSeason() {
    const s = seasonByNum(param("t")) || SEASONS[0];
    document.title = `${s.titulo} | Temporadas de Nosotros`;
    renderNav("series");
    const lock = !seasonUnlocked(s), nx = seasonNext(s);
    const inL = S.list.includes("s:" + s.num);
    const app = $("#app");
    app.innerHTML = `
      <section class="hero season-hero">
        <div class="hero-bg">${media(s.imagen, s.titulo, "s" + s.num)}</div>
        <div class="hero-content">
          <div class="hero-kicker"><span class="logo-mono">T</span>${kindName(s)}</div>
          <h1 class="hero-title">${esc(s.titulo)}</h1>
          <div class="meta season-meta"><span class="match">${C.sitio.coincidencia}% para ti</span><span>${s.anio}</span><span class="age-box">${esc(s.clasificacion || C.sitio.clasificacion)}</span><span>${countLabel(s)}</span><span class="hd">HD</span><span class="hd">5.1</span></div>
          ${s.top10 ? `<div class="hero-tags"><span class="top10-mini">TOP<b>10</b></span><span>Top 10 en momentos inolvidables</span></div>` : ""}
          <p class="hero-synopsis">${esc(s.sinopsis)}</p>
          <p class="season-song">♫ Banda sonora: <strong>${esc(s.cancion || s.titulo)}</strong></p>
          <div class="hero-btns">
            <button class="btn btn-play" id="sPlay" ${lock ? "disabled" : ""}>${lock ? I.lock : I.play} ${lock ? "Bloqueada" : S.watch[nx.id] ? "Reanudar" : isDone(nx.id) ? "Volver a ver" : "Reproducir"}</button>
            <button class="btn btn-gray" id="sList">${inL ? I.check : I.plus} Mi lista</button>
          </div>
          ${!isMovie(s) ? `<p style="color:var(--netflix-gray);margin:.8rem 0 0;font-size:.9rem">E${nx.e} «${esc(nx.titulo)}»</p>` : ""}
        </div>
      </section>
      <div class="season-wrap">${isMovie(s) ? `
        <div class="ep-head"><h2>Acerca de «${esc(s.titulo)}»</h2></div>
        <div class="movie-about">
          ${(s.creditos || []).map(([r, w]) => `<p><span>${esc(r)}:</span> ${esc(w)}</p>`).join("")}
          <p><span>Géneros:</span> ${C.sitio.generos.map(esc).join(", ")}</p>
          <p><span>Banda sonora:</span> ${esc(s.cancion || "")}</p>
          <p><span>Clasificación:</span> <span class="age-box">${esc(s.clasificacion || C.sitio.clasificacion)}</span> ${esc(C.sitio.clasificacionTexto)}</p>
        </div>` : `
        <div class="ep-head"><h2>Episodios</h2><span class="season-select" style="pointer-events:none">Temporada 1</span></div>
        <div class="ep-list">${s.episodios.map((ep) => {
          const l = !unlocked(ep), d = isDone(ep.id), w = S.watch[ep.id] || 0, img = epImg(ep);
          return `<div class="ep ${l ? "locked" : ""} ${ep === nx && !l ? "current" : ""}" id="ep-${ep.id}" data-id="${ep.id}" tabindex="0" role="button" aria-label="Episodio ${ep.e}: ${esc(ep.titulo)}">
            <div class="ep-num">${ep.e}</div>
            <div class="ep-thumb">${media(img, ep.titulo, ep.id)}<div class="ep-play"><span>${l ? I.lock : I.play}</span></div>
              ${w || d ? `<div class="ep-progress"><i style="width:${d ? 100 : w * 100}%"></i></div>` : ""}</div>
            <div class="ep-info"><div class="ep-top"><span>${ep.e}. ${esc(ep.titulo)}</span><span class="dur">${epMin(ep)}</span></div>
              <p class="ep-desc">${esc(ep.descripcion)}</p>
              <div class="ep-flags">${l ? '<span class="done">🔒 Bloqueado</span>' : d ? '<span class="done">✓ Visto</span>' : '<span class="new">Nuevo episodio</span>'}<span class="hd">HD</span></div></div>
            <p class="ep-desc mobile">${esc(ep.descripcion)}</p>
          </div>`;
        }).join("")}</div>`}
      </div>
      <main class="rows" style="margin-top:0">${row("mas", "Más títulos", SEASONS.filter((x) => x !== s).map(seasonCard).join("") + finalCard())}</main>
      ${footer()}`;
    initSliders(app); bindCards($("main.rows"));

    if (!lock) $("#sPlay").onclick = () => expandTo($(`#ep-${nx.id}`) || $(".hero"), epUrl(nx));
    $("#sList").onclick = (e) => { const on = toggleList("s:" + s.num, s.titulo); e.currentTarget.innerHTML = `${on ? I.check : I.plus} Mi lista`; };
    if ($("#sel")) $("#sel").onchange = (e) => {
      const v = e.target.value;
      if (v === "final") return go("final.html");
      go(`temporada.html?t=${v}`);
    };
    const open = (el) => {
      const ep = epById(el.dataset.id);
      if (!unlocked(ep)) return toast("🔒 Completa el episodio anterior para desbloquearlo");
      expandTo(el, epUrl(ep));
    };
    $$(".ep").forEach((el) => {
      el.addEventListener("click", () => open(el));
      el.addEventListener("keydown", (e) => (e.key === "Enter" || e.key === " ") && (e.preventDefault(), open(el)));
    });
    if (location.hash) setTimeout(() => $(location.hash)?.scrollIntoView({ behavior: "smooth", block: "center" }), 400);
  }

  /* ================= 10. REPRODUCTOR ================= */
  function pagePlayer() {
    document.body.classList.add("player-page");
    const ep = epById(`${param("t")}-${param("e")}`);
    if (!ep) return location.replace("index.html");
    if (!unlocked(ep)) { ss.set("tdn_toast", "🔒 Ese episodio aún está bloqueado"); return location.replace(`temporada.html?t=${ep.t}`); }
    document.title = `${epFull(ep)} | Temporadas de Nosotros`;

    const D = ep.duracion || 75, INTRO = 6;
    let t = !isDone(ep.id) && S.watch[ep.id] ? S.watch[ep.id] * D : 0;
    if (t > D - 3) t = 0;
    const scenes = ep.escenas?.length ? ep.escenas : [{ texto: ep.descripcion }];
    const per = (D - INTRO) / scenes.length;
    const nxt = EPS[ep.idx + 1];

    const sceneHtml = (sc, i) => {
      const textOnly = !("img" in sc) && !sc.video;
      return `<div class="scene ${textOnly ? "text-only" : ""}" data-i="${i}">
        <div class="media-wrap">${sc.video ? `<video src="${esc(sc.video)}" playsinline preload="metadata"></video>` : media(sc.img, ep.season.titulo, ep.id + i, sc.poster)}</div>
        ${textOnly ? `<div class="scene-card"><p>${esc(sc.texto)}</p></div>` : ""}</div>`;
    };
    $("#app").innerHTML = `<div class="player controls-on" id="player">
      <div class="stage" id="stage">${scenes.map(sceneHtml).join("")}</div>
      <div class="subtitle" id="sub" aria-live="polite"></div>
      <div class="intro-card ${t >= INTRO ? "hide" : ""}" id="intro"><div class="logo" data-logo="TEMPORADAS DE NOSOTROS"></div>
        <div class="ep-label">${isMovie(ep.season) ? "Una película original" : `Serie original · ${esc(ep.season.titulo)} · Episodio ${ep.e}`}</div><h1>${esc(ep.titulo)}</h1></div>
      <div class="big-play" id="bigPlay"><span></span></div>
      <button class="skip-intro hidden" id="skip">Saltar intro</button>
      <div class="p-top"><button class="back" id="back" aria-label="Volver">${I.back}</button><span class="p-title">${esc(epFull(ep))}</span></div>
      <div class="p-bottom">
        <div class="p-bar-row"><div class="p-bar" id="bar" role="slider" aria-label="Progreso" aria-valuemin="0" aria-valuemax="${D}" tabindex="0">
          <div class="p-track"><div class="p-buffer" id="buf"></div><div class="p-fill" id="fill"></div>
          <div class="p-knob" id="knob"></div></div></div>
          <span class="p-time" id="time"></span></div>
        <div class="p-ctrls">
          <button class="p-btn" data-a="play" aria-label="Reproducir/Pausar">${I.play}</button>
          <button class="p-btn hide-xs" data-a="back10" aria-label="Retroceder 10 s">${I.back10}</button>
          <button class="p-btn hide-xs" data-a="fwd10" aria-label="Adelantar 10 s">${I.fwd10}</button>
          <div class="vol"><button class="p-btn" data-a="mute" aria-label="Volumen"></button>
            <div class="vol-slider"><input type="range" min="0" max="1" step="0.05" id="volR" aria-label="Volumen"></div></div>
          <div class="p-name"><b>${esc(ep.cancion || ep.season.cancion || "Temporadas de Nosotros")}</b> &nbsp;${esc(epFull(ep))}</div>
          <button class="p-btn" data-a="next" aria-label="Siguiente título">${I.next}</button>
          <button class="p-btn" data-a="subs" aria-label="Subtítulos">${I.subs}</button>
          <button class="p-btn" data-a="full" aria-label="Pantalla completa">${I.full}</button>
        </div></div></div>`;
    renderLogos();

    const player = $("#player"), sceneEls = $$(".scene"), sub = $("#sub"), intro = $("#intro"), skip = $("#skip");
    const fill = $("#fill"), knob = $("#knob"), buf = $("#buf"), timeEl = $("#time"), bar = $("#bar");
    const playBtn = $('[data-a="play"]'), muteBtn = $('[data-a="mute"]'), volR = $("#volR");
    let playing = false, last = 0, cur = -1, curBeat = -1, ended = false, savedAt = 0, introSound = false;

    // --- Audio (música opcional) ---
    let vol = ls.get("tdn_vol", 0.8);
    const musicSrc = ep.musica || ep.season.musica || C.media.musica;
    const music = musicSrc ? new Audio(musicSrc) : null;
    if (music) { music.loop = true; music.preload = "auto"; }
    const applyVol = () => {
      const v = Sound.muted ? 0 : vol;
      if (music) music.volume = v;
      $$("video", player).forEach((vd) => { vd.volume = v; vd.muted = vd.classList.contains("media-img") || v === 0; });
      muteBtn.innerHTML = v === 0 ? I.mute : I.vol;
      volR.value = vol;
    };
    applyVol();
    volR.addEventListener("input", () => { vol = +volR.value; ls.set("tdn_vol", vol); if (vol > 0) Sound.muted = false; applyVol(); });

    const subsOn = () => ls.get("tdn_subs", true);
    player.classList.toggle("no-subs", !subsOn());
    $('[data-a="subs"]').classList.toggle("off", !subsOn());

    function play() {
      if (ended) return;
      playing = true; playBtn.innerHTML = I.pause;
      if (t < INTRO && !introSound) { introSound = true; Sound.tadum(); }
      if (t >= INTRO) music?.play().catch(() => {});
      const v = $(".scene.on video"); v?.play().catch(() => {});
      flash(I.play); poke();
    }
    function pause(showFlash = true) {
      playing = false; playBtn.innerHTML = I.play;
      music?.pause();
      $(".scene.on video")?.pause();
      if (showFlash) flash(I.pause);
      player.classList.add("controls-on");
      saveWatch(true);
    }
    const toggle = () => (playing ? pause() : play());
    function flash(icon) { const b = $("#bigPlay"); $("span", b).innerHTML = icon; b.classList.remove("flash"); b.offsetWidth; b.classList.add("flash"); }

    function seek(to) {
      if (ended) return;
      t = clamp(to, 0, D - 0.2);
      render(true);
    }
    function saveWatch(force) {
      if (isDone(ep.id) || ended) return;
      if (force || performance.now() - savedAt > 2000) { S.watch[ep.id] = +(t / D).toFixed(3); save(); savedAt = performance.now(); }
    }

    function render(force) {
      const pct = (t / D) * 100;
      fill.style.width = pct + "%"; knob.style.left = pct + "%";
      buf.style.width = Math.min(100, pct + 12) + "%";
      timeEl.textContent = "-" + fmt(D - t);
      bar.setAttribute("aria-valuenow", Math.round(t));
      intro.classList.toggle("hide", t >= INTRO);
      skip.classList.toggle("hidden", t >= INTRO - 0.4 || t < 0.8);
      const i = t < INTRO ? 0 : Math.min(scenes.length - 1, Math.floor((t - INTRO) / per));
      const sc = scenes[i];
      const lines = Array.isArray(sc.texto) ? sc.texto : [sc.texto || ""];
      const elapsed = clamp(t - INTRO - i * per, 0, per - .001);
      const beat = t < INTRO ? -1 : Math.min(lines.length - 1, Math.floor(elapsed / per * lines.length));
      if (i !== cur || beat !== curBeat || force) {
        if (i !== cur) {
          sceneEls.forEach((el, k) => {
            const on = k === i; el.classList.toggle("on", on);
            const v = $("video", el); if (v) { if (on && playing) { v.currentTime = 0; v.play().catch(() => {}); } else v.pause(); }
          });
          cur = i;
        }
        sub.textContent = ("img" in sc || sc.video) && beat >= 0 ? lines[beat] : "";
        sub.classList.remove("beat-in"); sub.offsetWidth; sub.classList.add("beat-in");
        curBeat = beat;
      }
      if (playing && t >= INTRO && music?.paused) { Sound.introAudio?.pause(); music.play().catch(() => {}); }
      if (playing) saveWatch();
    }

    function frame(ts) {
      const dt = last ? Math.min(0.25, (ts - last) / 1000) : 0; last = ts;
      if (playing) {
        t += dt;
        if (t >= D) { t = D; finish(); }
        render();
      }
      requestAnimationFrame(frame);
    }

    // --- Controles auto-ocultables ---
    let idle;
    function poke() {
      player.classList.add("controls-on"); player.classList.remove("idle");
      clearTimeout(idle);
      idle = setTimeout(() => { if (playing) { player.classList.remove("controls-on"); player.classList.add("idle"); } }, 3000);
    }
    player.addEventListener("mousemove", poke);
    // Tocar la imagen: con mouse pausa/reanuda; en táctil, primero muestra controles
    player.addEventListener("pointerup", (e) => {
      if (ended || e.target.closest(".p-top, .p-bottom, .skip-intro, .endscreen, .title-credits")) return;
      if (e.pointerType === "mouse") return toggle();
      if (!player.classList.contains("controls-on")) poke(); else toggle();
    });
    $("#sub").style.pointerEvents = "none";

    // --- Barra de progreso (clic y arrastre) ---
    const fromEvent = (e) => { const r = bar.getBoundingClientRect(); return ((e.clientX - r.left) / r.width) * D; };
    bar.addEventListener("pointerdown", (e) => {
      capture(bar, e); seek(fromEvent(e));
      const mv = (ev) => seek(fromEvent(ev));
      const up = () => { bar.removeEventListener("pointermove", mv); bar.removeEventListener("pointerup", up); saveWatch(true); };
      bar.addEventListener("pointermove", mv); bar.addEventListener("pointerup", up);
    });

    // --- Botones ---
    const fsEl = document.documentElement;
    const isFs = () => document.fullscreenElement || document.webkitFullscreenElement;
    const actions = {
      play: toggle,
      back10: () => seek(t - 10),
      fwd10: () => seek(t + 10),
      mute: () => { Sound.muted = !Sound.muted; if (!Sound.muted && vol === 0) vol = 0.8; applyVol(); },
      next: () => { saveWatch(true); go(nxt ? epUrl(nxt) : "final.html"); },
      subs: () => { const on = !subsOn(); ls.set("tdn_subs", on); player.classList.toggle("no-subs", !on); $('[data-a="subs"]').classList.toggle("off", !on); toast(on ? "Subtítulos: Español" : "Subtítulos desactivados"); },
      full: () => {
        if (isFs()) (document.exitFullscreen || document.webkitExitFullscreen).call(document);
        else if (fsEl.requestFullscreen || fsEl.webkitRequestFullscreen) (fsEl.requestFullscreen || fsEl.webkitRequestFullscreen).call(fsEl);
        else toast("Tu navegador no permite pantalla completa aquí");
      }
    };
    $$(".p-btn[data-a]").forEach((b) => b.addEventListener("click", (e) => { e.stopPropagation(); actions[b.dataset.a](); poke(); }));
    document.addEventListener("fullscreenchange", () => ($('[data-a="full"]').innerHTML = isFs() ? I.unfull : I.full));
    skip.onclick = () => { seek(INTRO); play(); };
    $("#back").onclick = () => { saveWatch(true); go(`temporada.html?t=${ep.t}`); };
    addEventListener("keydown", (e) => {
      if (ended || e.target.closest("input, textarea")) return;
      const k = e.key.toLowerCase();
      if (k === " " || k === "k") { e.preventDefault(); toggle(); }
      else if (k === "arrowright") actions.fwd10();
      else if (k === "arrowleft") actions.back10();
      else if (k === "f") actions.full();
      else if (k === "m") actions.mute();
      else if (k === "escape" && !isFs()) $("#back").click();
      poke();
    });
    addEventListener("pagehide", () => saveWatch(true));

    // --- Final del episodio ---
    function finish() {
      if (ended) return;
      ended = true; playing = false; playBtn.innerHTML = I.play;
      S.done[ep.id] = true; delete S.watch[ep.id]; save();
      const seasonEnd = ep.e === ep.season.episodios.length;
      if (seasonEnd) { music?.play().catch(() => {}); rollCredits(() => { fadeMusic(); endScreen(); }); }
      else { fadeMusic(); endScreen(); }
    }
    function fadeMusic() {
      if (!music) return;
      const fade = setInterval(() => { music.volume = Math.max(0, music.volume - 0.05); if (music.volume <= 0.01) { music.pause(); clearInterval(fade); } }, 80);
    }

    // Créditos de cada película o serie
    function rollCredits(then) {
      const s = ep.season;
      const list = [...(s.creditos || []), ["Banda sonora", s.cancion || C.sitio.generos.join(" · ")], ["", `© ${s.anio} ${P.nombreA} & ${P.nombreB}`]];
      const el = h(`<div class="title-credits"><div class="credits"><div class="credits-roll">
          <div class="logo" data-logo="TEMPORADAS DE NOSOTROS"></div>
          <div class="credit solo" style="margin:0 auto 2.4rem;font-style:normal;color:#fff;font-size:1.5rem">${esc(s.titulo)}</div>
          ${list.map(([r, w]) => r ? `<div class="credit"><div class="role">${esc(r)}</div><div class="who">${esc(w)}</div></div>` : `<div class="credit solo">${esc(w)}</div>`).join("")}
        </div></div><button class="credits-back end-back" type="button" aria-label="Volver al inicio">${I.back}</button>
        <div class="credits-ui"><button class="btn btn-gray" type="button">Saltar créditos</button></div></div>`);
      player.append(el); renderLogos(el);
      requestAnimationFrame(() => el.classList.add("show"));
      const roll = $(".credits-roll", el), H = roll.offsetHeight + innerHeight * 0.75;
      let y = 0, lastTs = 0, closed = false;
      const close = () => { if (closed) return; closed = true; el.classList.remove("show"); setTimeout(() => el.remove(), 500); then(); };
      const step = (ts) => {
        if (closed) return;
        const dt = lastTs ? (ts - lastTs) / 1000 : 0; lastTs = ts;
        y += 70 * dt; roll.style.transform = `translateY(${-y}px)`;
        if (y < H) requestAnimationFrame(step); else close();
      };
      requestAnimationFrame(step);
      $(".credits-ui button", el).onclick = (e) => { e.stopPropagation(); close(); };
      $(".end-back", el).onclick = (e) => { e.stopPropagation(); closed = true; music?.pause(); go("index.html"); };
    }

    function endScreen() {
      const seasonEnd = ep.e === ep.season.episodios.length;
      const target = nxt ? epUrl(nxt) : "final.html";
      const es = h(`<div class="endscreen"><button class="credits-back end-back" type="button" aria-label="Volver al inicio">${I.back}</button><div class="end-grid">
        <div class="end-left">
          <div class="inter-kicker" style="margin:0">${isMovie(ep.season) ? "Película terminada" : "Episodio completado"}</div>
          <h2>${esc(epFull(ep))}</h2>
          ${seasonEnd && !isMovie(ep.season) ? `<p style="color:var(--netflix-gray);margin:0 0 1rem">🎉 Terminaste la serie <b style="color:#fff">${esc(ep.season.titulo)}</b></p>` : ""}
          ${ep.recompensa ? `<div class="reward"><span class="gift">🎁</span><div><small>Recompensa desbloqueada</small>${esc(ep.recompensa)}</div></div>` : ""}
          <div class="end-links">
            <button class="btn btn-gray" id="again">${I.replay} Volver a ver</button>
            ${ep.interaccion ? `<a class="btn btn-gray" href="juegos.html?j=${ep.id}">🎮 Jugar reto</a>` : ""}
            <a class="btn btn-gray" href="temporada.html?t=${ep.t}">Ver ficha</a>
            <a class="btn btn-gray" href="index.html">Explorar más títulos</a>
          </div></div>
        <div class="next-card">
          <div class="thumb ${nxt && epImg(nxt) ? "" : "has-ph"}">${nxt ? media(epImg(nxt), nxt.titulo, nxt.id) : media(C.final.imagen, "Final", "final")}
            <div class="thumb-title"><small>${nxt ? esc(epCode(nxt)) : "El final"}</small>${esc(nxt ? nxt.titulo : C.final.titulo)}</div></div>
          <div class="nc-body"><small>${nxt ? (nxt.t !== ep.t ? `A continuación · ${kindName(nxt.season)}` : "Siguiente episodio") : "Llegaste al final… casi"}</small>
            <h3>${esc(nxt ? nxt.titulo : C.final.titulo)}</h3>
            <p>${esc(nxt ? nxt.descripcion : C.final.sinopsis)}</p>
            <button class="btn btn-play btn-count" id="nextBtn"><span class="fill"></span><span>${I.play}</span><span id="nextTxt">${nxt ? "Ver siguiente" : "Ver el final"} en 10</span></button>
          </div></div></div></div>`);
      player.append(es);
      // Solo pasa solo al siguiente episodio dentro de una serie; al terminar un título no se reproduce nada más
      const autoNext = !seasonEnd && nxt;
      requestAnimationFrame(() => { es.classList.add("show"); if (autoNext) $("#nextBtn").classList.add("run"); });
      let n = 10;
      const label = nxt ? "Ver siguiente" : "Ver el final";
      if (!autoNext) $("#nextTxt").textContent = label;
      const iv = autoNext ? setInterval(() => { n--; $("#nextTxt").textContent = n > 0 ? `${label} en ${n}` : label; if (n <= 0) { clearInterval(iv); go(target); } }, 1000) : 0;
      $(".end-back", es).onclick = () => { clearInterval(iv); go("index.html"); };
      $("#nextBtn").onclick = () => { clearInterval(iv); go(target); };
      $("#again").onclick = () => { clearInterval(iv); es.remove(); ended = false; t = 0; cur = -1; curBeat = -1; render(true); play(); };
    }

    render(true);
    requestAnimationFrame(frame);
    setTimeout(play, 350);
  }

  /* ---------- TEMPORADA FINAL ---------- */
  function pageFinal() {
    renderNav("home");
    const app = $("#app");
    if (false) {
      const n = nextEp(), d = doneCount();
      app.innerHTML = `<div class="locked-screen">${I.lock.replace("<svg", '<svg class="big-lock"')}
        <h1 style="margin:0">La Temporada Final está bloqueada</h1>
        <p style="color:var(--netflix-gray);margin:0">Has visto ${d} de ${EPS.length} episodios.</p>
        <div class="meter"><i style="width:${(d / EPS.length) * 100}%"></i></div>
        <div class="actions" style="justify-content:center">${n ? `<a class="btn btn-play" href="${epUrl(n)}">${I.play} Continuar: T${n.t}:E${n.e}</a>` : ""}<a class="btn btn-gray" href="index.html">Inicio</a></div></div>`;
      return;
    }
    const fin = C.final, saved = S.final?.respuestas || S.draft || [];
    app.innerHTML = `
      <section class="hero season-hero">
        <div class="hero-bg">${media(fin.imagen, "Final", "final")}</div>
        <div class="hero-content">
          <div class="hero-kicker"><span class="logo-mono">T</span>Serie</div>
          <div class="hero-tags"><span class="tag-red">EL FINAL</span></div>
          <h1 class="hero-title">${esc(fin.titulo)}</h1>
          <div class="meta season-meta"><span class="match">100% para ti</span><span>${new Date().getFullYear()}</span><span class="age-box">TP</span><span>1 episodio</span><span class="hd">HD</span></div>
          <p class="hero-synopsis">${esc(fin.sinopsis)}</p>
          <div class="hero-btns"><button class="btn btn-play" id="fStart">${I.play} Comenzar</button></div>
        </div></section>
      <div class="final-wrap">
        <h2 class="section-title" id="preguntas">Episodio único: tu turno</h2>
        <p style="color:var(--netflix-gray);margin-top:-.4rem">Esta vez el guion lo escribes tú, ${esc(P.nombreB)}. Responde con el corazón: ${esc(P.nombreA)} leerá cada palabra.</p>
        <form id="qForm" novalidate>${fin.preguntas.map((q, i) => `
          <div class="q-card"><span class="qn">${i + 1}</span><label for="q${i}">${esc(q)}</label>
          <textarea id="q${i}" maxlength="1200" placeholder="Escribe aquí…">${esc(saved[i] || "")}</textarea></div>`).join("")}
          <div class="feedback" id="qFb"></div>
          <div class="actions"><button class="btn btn-red" type="submit">Generar mi final</button></div>
        </form>
        <div class="reveal-block" id="cartaBlock">
          <h2 class="section-title">📜 Tu carta</h2><div class="letter" id="carta"></div>
        </div>
        <div class="reveal-block" id="videoBlock">
          <h2 class="section-title"><span class="tag-red">DESBLOQUEADO</span> Escena oculta</h2>
          <div class="video-box" id="videoBox"></div>
          ${C.media.audioRemitente ? `<p style="color:var(--netflix-gray);margin-top:1rem">Y un mensaje de voz de ${esc(P.nombreA)}:</p><audio controls preload="none" src="${esc(C.media.audioRemitente)}"></audio>` : ""}
          <div class="actions">
            <button class="btn btn-red" id="send">Enviar mi respuesta a ${esc(P.nombreA)}</button>
            <a class="btn btn-play" href="credits.html">${I.play} Ver créditos</a>
          </div>
          <p style="color:var(--netflix-gray);font-size:.85rem">Al enviar se abrirá WhatsApp o tu correo con tus respuestas listas.</p>
        </div>
      </div>${footer()}`;

    $("#fStart").onclick = () => $("#preguntas").scrollIntoView({ behavior: "smooth" });
    const areas = $$("#qForm textarea");
    areas.forEach((a) => a.addEventListener("input", () => { S.draft = areas.map((x) => x.value); save(); }));

    const reveal = (r, animate) => {
      const text = fin.carta(r);
      $("#cartaBlock").classList.add("show");
      const el = $("#carta");
      if (animate) { // efecto máquina de escribir rápido
        let i = 0; el.textContent = "";
        const step = () => { i += 4; el.textContent = text.slice(0, i); if (i < text.length) requestAnimationFrame(step); else showVideo(); };
        step();
        $("#cartaBlock").scrollIntoView({ behavior: "smooth" });
      } else { el.textContent = text; showVideo(); }
    };
    const showVideo = () => {
      const v = C.media.videoFinal, box = $("#videoBox");
      const yt = v && v.match(/(?:youtu\.be\/|v=|embed\/|shorts\/)([\w-]{11})/);
      box.innerHTML = yt ? `<iframe src="https://www.youtube-nocookie.com/embed/${yt[1]}" title="Video" allow="autoplay; encrypted-media; picture-in-picture" allowfullscreen></iframe>`
        : v ? `<video src="${esc(v)}" controls playsinline preload="metadata"></video>`
        : `<div class="pending">[PENDIENTE] Aquí va el video oculto de ${esc(P.nombreA)}.<br>Configúralo en config.js → media.videoFinal</div>`;
      $("#videoBlock").classList.add("show");
    };
    if (S.final) reveal(S.final.respuestas, false);

    $("#qForm").addEventListener("submit", (e) => {
      e.preventDefault();
      const r = areas.map((a) => a.value.trim());
      const empty = r.findIndex((x) => x.length < 2);
      if (empty >= 0) { $("#qFb").className = "feedback bad"; $("#qFb").textContent = `Te falta responder la pregunta ${empty + 1}.`; areas[empty].focus(); return; }
      $("#qFb").textContent = "";
      S.final = { respuestas: r, fecha: new Date().toISOString() }; save();
      Sound.chime();
      reveal(r, true);
    });
    $("#send").onclick = () => notify(S.final.respuestas);
    if (S.sent) $("#send").textContent = "Respuesta enviada ✓ (enviar otra vez)";
  }

  // Notifica a quien regala: endpoint (POST JSON) + WhatsApp o correo
  function notify(r) {
    const N = C.notificacion;
    const txt = `🎬 TEMPORADAS DE NOSOTROS\n${P.nombreB} terminó la serie y respondió la Temporada Final:\n\n` +
      C.final.preguntas.map((q, i) => `${i + 1}. ${q}\n→ ${r[i]}`).join("\n\n");
    if (N.endpoint) {
      fetch(N.endpoint, { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ _subject: `${P.nombreB} terminó Temporadas de Nosotros`, serie: "Temporadas de Nosotros", nombre: P.nombreB, respuestas: txt }) })
        .catch(() => {});
    }
    if (N.whatsapp) window.open(`https://wa.me/${digits(N.whatsapp)}?text=${encodeURIComponent(txt)}`, "_blank");
    else if (N.email) location.href = `mailto:${N.email}?subject=${encodeURIComponent("Temporadas de Nosotros: mi respuesta")}&body=${encodeURIComponent(txt)}`;
    else if (!N.endpoint) return toast("[PENDIENTE] Configura WhatsApp o correo en config.js");
    S.sent = true; save();
    $("#send").textContent = "Respuesta enviada ✓ (enviar otra vez)";
    toast(`¡Enviado! ${P.nombreA} recibirá tu respuesta 💌`);
  }

  /* ---------- CRÉDITOS + POST-CRÉDITOS ---------- */
  function pageCredits() {
    document.body.classList.add("credits-page");
    const pc = C.postCreditos;
    $("#app").innerHTML = `<div class="credits"><div class="credits-roll" id="roll">
        <div class="logo" data-logo="TEMPORADAS DE NOSOTROS"></div>
        ${C.creditos.map(([r, w]) => r ? `<div class="credit"><div class="role">${esc(r)}</div><div class="who">${esc(w)}</div></div>` : `<div class="credit solo">${esc(w)}</div>`).join("")}
      </div></div>
      <button class="credits-back" id="back" aria-label="Volver">${I.back}</button>
      <div class="credits-ui"><button class="btn btn-gray" id="fast">Saltar créditos</button></div>
      <div class="post" id="post">
        <div class="post-bg">${media(pc.imagen, "", "post")}</div>
        <div class="post-content">
          <div class="post-label">${esc(pc.etiqueta)}</div>
          <p class="post-text" id="ptext"></p>
          <div class="stamp" id="stamp">RENOVADA</div>
          <h2>${esc(pc.anuncio)}</h2>
          <p class="sub">${esc(pc.subtitulo)}</p>
          <div class="surprise">
            <button class="btn btn-red" id="sBtn">🎁 Ver sorpresa</button>
            <p class="surprise-text" id="sTxt">${esc(pc.sorpresa)}</p>
            <div class="actions" style="justify-content:center"><a class="btn btn-gray" href="index.html">Volver al inicio</a></div>
          </div></div></div>`;
    renderLogos();
    // Nuestra canción acompaña los créditos
    const songSrc = C.media.temporadas?.[3];
    if (songSrc && !Sound.muted) { const song = new Audio(songSrc); song.loop = true; song.volume = 0.7; song.play().catch(() => {}); }
    const roll = $("#roll"), H = roll.offsetHeight + innerHeight;
    let y = 0, speed = 48, last = 0, done = false;
    const step = (ts) => {
      const dt = last ? (ts - last) / 1000 : 0; last = ts;
      y += speed * dt; roll.style.transform = `translateY(${-y}px)`;
      if (y < H) requestAnimationFrame(step); else if (!done) { done = true; setTimeout(post, 2500); }
    };
    requestAnimationFrame(step);
    $("#fast").onclick = (e) => { speed = 900; e.currentTarget.remove(); };
    $("#back").onclick = () => go("index.html");

    function post() {
      $(".credits-ui")?.remove();
      const p = $("#post"); p.classList.add("show");
      const txt = pc.texto; let i = 0;
      setTimeout(function type() {
        $("#ptext").textContent = txt.slice(0, ++i);
        if (i < txt.length) setTimeout(type, 55);
        else setTimeout(() => { $("#stamp").classList.add("in"); Sound.tadum(); setTimeout(() => p.classList.add("stage2"), 1300); }, 700);
      }, 1400);
      $("#sBtn").onclick = (e) => { e.currentTarget.remove(); $("#sTxt").style.display = "block"; Sound.chime(); };
    }
  }

  /* ================= 11. MINIJUEGOS ================= */
  const WRONG = ["Mmm… no fue así. Intenta otra vez.", "Casi. Inténtalo de nuevo.", "Esa no era 😅", "Error de guion. Otra toma.", "Corten. Repetimos la escena."];

  const INTER_META = {
    quiz: (d) => [d.pregunta, "Elige una opción"],
    memory: (d) => [d.titulo || "Encuentra las parejas", "Voltea las tarjetas y encuentra las parejas"],
    puzzle: (d) => [d.titulo || "Arma el recuerdo", "Toca dos piezas para intercambiarlas"],
    sopa: (d) => [d.titulo || "Sopa de letras", "Desliza sobre las letras (o toca la primera y la última)"],
    rascar: (d) => [d.titulo || "Rasca para revelar", "Desliza el dedo o el mouse sobre la tarjeta"],
    codigo: (d) => [d.pregunta, "Introduce el código secreto"],
    ordenar: (d) => [d.titulo || "Ordena la historia", "Arrastra los momentos al orden correcto"],
    adivinanza: () => ["Adivinanza", "Descubre la respuesta"],
    completar: (d) => ["Completa la frase", d.opciones ? "Elige una opción" : "Escribe la respuesta"]
  };

  // Respuesta escrita (código, adivinanza, completar sin opciones)
  function textAnswer(body, d, api, done, prefix = "", modo = "texto") {
    const fecha = modo === "fecha";
    body.innerHTML = `${prefix}<form class="text-answer" autocomplete="off">
      <input ${fecha ? 'inputmode="numeric" class="code" maxlength="10"' : ""} placeholder="${esc(d.placeholder || "Tu respuesta")}" autocapitalize="off" spellcheck="false" aria-label="Respuesta">
      <button class="btn btn-red" type="submit">OK</button></form>
      <button class="hint-btn" type="button" hidden>¿Necesitas una pista?</button>`;
    const input = $("input", body), form = $("form", body), hint = $(".hint-btn", body);
    const clean = fecha ? digits : norm;
    const answers = (d.respuestas || []).map(clean).filter(Boolean);
    let fails = 0;
    setTimeout(() => input.focus(), 400);
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const v = clean(input.value);
      if (!v) return;
      // Tolerante: acepta si contiene la respuesta o es una versión larga de ella
      const ok = C.acceso.demo || answers.some((a) => v === a || (!fecha && a.length >= 4 && (v.includes(a) || (a.includes(v) && v.length >= Math.max(4, a.length * 0.6)))));
      if (ok) { input.disabled = true; api.ok("¡Correcto!"); setTimeout(done, 700); return; }
      fails++;
      form.classList.remove("shake"); form.offsetWidth; form.classList.add("shake");
      api.bad();
      if (fails >= 2 && d.pista) hint.hidden = false;
      if (fails >= 5) { api.info(`Te ayudo: la respuesta es «${d.respuestas[0]}»`); input.value = d.respuestas[0]; }
    });
    hint.onclick = () => api.info("Pista: " + d.pista);
  }

  const GAMES = {
    /* --- Quiz de 3 opciones (estilo decisión Bandersnatch) --- */
    quiz(body, d, api, done) {
      const all = d.correcta === "todas";
      const opts = d.opciones.map((txt, i) => ({ txt, ok: all || C.acceso.demo || i === d.correcta }));
      const list = all ? opts : shuffle(opts);
      body.innerHTML = `<div class="choices" style="--n:${list.length}">${list.map((o, i) => `<button class="choice" data-i="${i}">${esc(o.txt)}</button>`).join("")}</div>`;
      $$(".choice", body).forEach((b) => b.addEventListener("click", () => {
        const o = list[+b.dataset.i];
        if (o.ok) { b.classList.add("right"); $$(".choice", body).forEach((x) => (x.disabled = true)); api.ok("¡Correcto!"); setTimeout(done, 900); }
        else { b.classList.add("wrong", "shake"); api.bad(); }
      }));
    },

    /* --- Completar frase: con opciones (botones) o escrita --- */
    completar(body, d, api, done) {
      const parts = esc(d.frase).split("___");
      const fr = `<p class="frase">${parts[0]}<span class="blank" id="blank">&nbsp;</span>${parts[1] || ""}</p>`;
      if (!d.opciones) return textAnswer(body, d, api, done, fr);
      const list = shuffle(d.opciones.map((txt, i) => ({ txt, ok: C.acceso.demo || i === d.correcta })));
      body.innerHTML = fr + `<div class="choices" style="--n:${list.length}">${list.map((o, i) => `<button class="choice" data-i="${i}">${esc(o.txt)}</button>`).join("")}</div>`;
      $$(".choice", body).forEach((b) => b.addEventListener("click", () => {
        const o = list[+b.dataset.i];
        $("#blank").textContent = o.txt;
        if (o.ok) { b.classList.add("right"); $$(".choice", body).forEach((x) => (x.disabled = true)); api.ok("¡Exacto!"); setTimeout(done, 900); }
        else { b.classList.add("wrong", "shake"); api.bad(); setTimeout(() => ($("#blank").innerHTML = "&nbsp;"), 700); }
      }));
    },

    /* --- Código secreto (fecha DDMMAAAA o apodo) --- */
    codigo(body, d, api, done) { textAnswer(body, d, api, done, "", d.modo === "fecha" ? "fecha" : "texto"); },

    /* --- Adivinanza --- */
    adivinanza(body, d, api, done) { textAnswer(body, d, api, done, `<p class="riddle">“${esc(d.texto)}”</p>`); },

    /* --- Memory: 6 pares --- */
    memory(body, d, api, done) {
      const vals = d.pares.slice(0, 6);
      const deck = shuffle([...vals, ...vals].map((v) => ({ v, k: vals.indexOf(v) })));
      body.innerHTML = `<div class="memory">${deck.map((c, i) => `<button class="mem" data-i="${i}" aria-label="Carta ${i + 1}">
        <div class="mem-in"><div class="mem-face mem-back"><span class="logo-mono">T</span></div>
        <div class="mem-face mem-front">${isImg(c.v) ? `<img src="${esc(c.v)}" alt="">` : esc(c.v)}</div></div></button>`).join("")}</div>
        <div class="moves">Movimientos: <span id="mv">0</span></div>`;
      let open = [], lock = false, matched = 0, moves = 0;
      $$(".mem", body).forEach((el) => el.addEventListener("click", () => {
        if (lock || el.classList.contains("flip") || el.classList.contains("ok")) return;
        el.classList.add("flip"); open.push(el);
        if (open.length < 2) return;
        $("#mv").textContent = ++moves;
        const [a, b] = open; open = [];
        if (deck[a.dataset.i].k === deck[b.dataset.i].k) {
          a.classList.add("ok"); b.classList.add("ok"); matched++;
          if (matched === vals.length) { api.ok(`¡Completado en ${moves} movimientos!`); setTimeout(done, 1000); }
        } else { lock = true; setTimeout(() => { a.classList.remove("flip"); b.classList.remove("flip"); lock = false; }, 850); }
      }));
    },

    /* --- Puzzle de 9 piezas (tocar dos para intercambiar) --- */
    puzzle(body, d, api, done) {
      const src = d.imagen || generatedImage();
      let arr; do { arr = shuffle([0, 1, 2, 3, 4, 5, 6, 7, 8]); } while (arr.every((v, i) => v === i));
      body.innerHTML = `<div class="puzzle-ref" style="background-image:url('${src}')" title="Referencia"></div><div class="puzzle" id="pz"></div>`;
      const pz = $("#pz", body);
      let sel = null;
      const draw = () => {
        pz.innerHTML = arr.map((p, i) => `<button class="pz ${sel === i ? "sel" : ""}" data-i="${i}" aria-label="Pieza ${i + 1}"
          style="background-image:url('${src}');background-position:${(p % 3) * 50}% ${Math.floor(p / 3) * 50}%"></button>`).join("");
      };
      draw();
      pz.addEventListener("click", (e) => {
        const b = e.target.closest(".pz"); if (!b || pz.classList.contains("solved")) return;
        const i = +b.dataset.i;
        if (sel === null) { sel = i; return draw(); }
        [arr[sel], arr[i]] = [arr[i], arr[sel]]; sel = null; draw();
        if (arr.every((v, k) => v === k)) { pz.classList.add("solved"); api.ok("¡Recuerdo completo!"); setTimeout(done, 1100); }
      });
    },

    /* --- Sopa de letras (5–8 palabras) --- */
    sopa(body, d, api, done) {
      const N = 12;
      const words = d.palabras.map((w) => norm(w).toUpperCase().replace(/[^A-Z]/g, "").slice(0, N)).filter((w) => w.length > 1).slice(0, 8)
        .sort((a, b) => b.length - a.length);
      const grid = Array.from({ length: N }, () => Array(N).fill(""));
      const dirs = [[0, 1], [1, 0], [1, 1], [-1, 1]];
      const placed = [];
      words.forEach((w) => {
        for (let tries = 0; tries < 400; tries++) {
          const [dr, dc] = dirs[Math.floor(Math.random() * dirs.length)];
          const r0 = Math.floor(Math.random() * N), c0 = Math.floor(Math.random() * N);
          const cells = [...w].map((_, k) => [r0 + dr * k, c0 + dc * k]);
          if (cells.every(([r, c], k) => r >= 0 && r < N && c >= 0 && c < N && (!grid[r][c] || grid[r][c] === w[k]))) {
            cells.forEach(([r, c], k) => (grid[r][c] = w[k])); placed.push(w); return;
          }
        }
      });
      const AB = "ABCDEFGHIJKLMNOPRSTUVZ";
      grid.forEach((r) => r.forEach((v, c) => { if (!v) r[c] = AB[Math.floor(Math.random() * AB.length)]; }));
      body.innerHTML = `<div class="sopa-wrap"><div class="sopa" id="sopa" style="--n:${N}">${grid.map((r, ri) => r.map((v, ci) => `<span data-r="${ri}" data-c="${ci}">${v}</span>`).join("")).join("")}</div>
        <div class="word-list">${placed.map((w) => `<span data-w="${w}">${w}</span>`).join("")}</div></div>`;
      const sopa = $("#sopa", body);
      const cellAt = (x, y) => { const el = document.elementFromPoint(x, y); return el && el.parentElement === sopa ? el : null; };
      const line = (a, b) => {
        const r0 = +a.dataset.r, c0 = +a.dataset.c, r1 = +b.dataset.r, c1 = +b.dataset.c;
        const dr = Math.sign(r1 - r0), dc = Math.sign(c1 - c0), len = Math.max(Math.abs(r1 - r0), Math.abs(c1 - c0));
        if (!(r0 === r1 || c0 === c1 || Math.abs(r1 - r0) === Math.abs(c1 - c0))) return [a];
        return Array.from({ length: len + 1 }, (_, k) => sopa.children[(r0 + dr * k) * N + (c0 + dc * k)]);
      };
      let start = null, anchor = null, sel = [];
      const hl = (cells) => { $$(".hl", sopa).forEach((x) => x.classList.remove("hl")); cells.forEach((x) => x.classList.add("hl")); sel = cells; };
      const check = () => {
        const s = sel.map((x) => x.textContent).join(""), rev = [...s].reverse().join("");
        const w = placed.find((p) => (p === s || p === rev) && !$(`[data-w="${p}"]`, body).classList.contains("found"));
        const selectedCells = sel.slice();
        hl([]);
        if (w) {
          selectedCells.forEach((x) => x.classList.add("found"));
          $(`[data-w="${w}"]`, body).classList.add("found");
          const left = placed.filter((p) => !$(`[data-w="${p}"]`, body).classList.contains("found")).length;
          if (!left) { api.ok("¡Todas encontradas!"); setTimeout(done, 1000); } else api.ok(`¡${w}! Te faltan ${left}.`);
        } else if (s.length > 1) api.bad("Esa no es una de las palabras.");
      };
      sopa.addEventListener("pointerdown", (e) => {
        const c = cellAt(e.clientX, e.clientY); if (!c) return;
        e.preventDefault(); capture(sopa, e);
        if (anchor) { hl(line(anchor, c)); anchor = null; start = null; check(); return; }
        start = c; hl([c]);
      });
      sopa.addEventListener("pointermove", (e) => { if (!start) return; const c = cellAt(e.clientX, e.clientY); if (c) hl(line(start, c)); });
      sopa.addEventListener("pointerup", (e) => {
        if (!start) return;
        const c = cellAt(e.clientX, e.clientY);
        if (c === start) { anchor = start; start = null; api.info("Ahora toca la última letra de la palabra"); return; }
        start = null; check();
      });
    },

    /* --- Rascar para revelar (canvas) --- */
    rascar(body, d, api, done) {
      body.innerHTML = `<div class="scratch"><div class="scratch-under">${d.imagen ? `<img src="${esc(d.imagen)}" alt="">` : ""}<p>${esc(d.revelar)}</p></div><canvas></canvas></div>`;
      const cv = $("canvas", body), box = $(".scratch", body);
      requestAnimationFrame(() => {
        const dpr = Math.min(2, devicePixelRatio || 1), r = box.getBoundingClientRect();
        cv.width = r.width * dpr; cv.height = r.height * dpr;
        const x = cv.getContext("2d");
        const g = x.createLinearGradient(0, 0, cv.width, cv.height);
        g.addColorStop(0, "#8d8d8d"); g.addColorStop(.45, "#d9d9d9"); g.addColorStop(.55, "#bdbdbd"); g.addColorStop(1, "#7a7a7a");
        x.fillStyle = g; x.fillRect(0, 0, cv.width, cv.height);
        x.fillStyle = "rgba(0,0,0,.08)";
        for (let i = 0; i < 1400; i++) x.fillRect(Math.random() * cv.width, Math.random() * cv.height, 2 * dpr, 2 * dpr);
        x.fillStyle = "#E50914"; x.font = `${46 * dpr}px "Bebas Neue", Arial Narrow, sans-serif`; x.textAlign = "center"; x.textBaseline = "middle";
        x.fillText("T", cv.width / 2, cv.height / 2 - 22 * dpr);
        x.fillStyle = "#333"; x.font = `700 ${15 * dpr}px Arial, sans-serif`;
        x.fillText("RASCA AQUÍ", cv.width / 2, cv.height / 2 + 22 * dpr);
        x.globalCompositeOperation = "destination-out"; x.lineCap = "round"; x.lineJoin = "round"; x.lineWidth = 46 * dpr;
        let down = false, lx = 0, ly = 0, n = 0, finished = false;
        const pos = (e) => { const b = cv.getBoundingClientRect(); return [(e.clientX - b.left) * dpr, (e.clientY - b.top) * dpr]; };
        const ratio = () => {
          const data = x.getImageData(0, 0, cv.width, cv.height).data; let clear = 0, tot = 0;
          for (let i = 3; i < data.length; i += 4 * 24) { tot++; if (data[i] < 40) clear++; }
          return clear / tot;
        };
        cv.addEventListener("pointerdown", (e) => { down = true; capture(cv, e); [lx, ly] = pos(e); x.beginPath(); x.arc(lx, ly, 23 * dpr, 0, 7); x.fill(); });
        cv.addEventListener("pointermove", (e) => {
          if (!down || finished) return;
          const [px, py] = pos(e); x.beginPath(); x.moveTo(lx, ly); x.lineTo(px, py); x.stroke(); lx = px; ly = py;
          if (++n % 8 === 0 && ratio() > 0.5) { finished = true; cv.style.opacity = 0; api.ok("¡Revelado!"); setTimeout(done, 1800); }
        });
        cv.addEventListener("pointerup", () => (down = false));
      });
    },

    /* --- Arrastrar y soltar: ordenar eventos --- */
    ordenar(body, d, api, done) {
      const items = d.eventos.map((txt, i) => ({ txt, i }));
      let list; do { list = shuffle(items); } while (list.every((o, k) => o.i === k));
      body.innerHTML = `<ul class="sortable" id="sort">${list.map((o) => `<li tabindex="0" data-i="${o.i}"><span class="idx"></span><span style="flex:1">${esc(o.txt)}</span><span class="grip" aria-hidden="true">⋮⋮</span></li>`).join("")}</ul>
        <div class="actions" style="justify-content:center"><button class="btn btn-red" id="chk">Comprobar orden</button></div>`;
      const ul = $("#sort", body);
      const renum = () => $$("li", ul).forEach((li, k) => { $(".idx", li).textContent = k + 1; li.classList.remove("good", "badpos"); });
      renum();
      // Arrastre con pointer events (funciona en móvil y desktop)
      ul.addEventListener("pointerdown", (e) => {
        const li = e.target.closest("li"); if (!li) return;
        e.preventDefault(); capture(li, e); li.classList.add("dragging");
        let startY = e.clientY;
        const mv = (ev) => {
          let dy = ev.clientY - startY;
          const prev = li.previousElementSibling, next = li.nextElementSibling;
          if (next && dy > next.offsetHeight / 2) { next.after(li); startY += next.offsetHeight + 7; dy = ev.clientY - startY; renum(); }
          else if (prev && dy < -prev.offsetHeight / 2) { prev.before(li); startY -= prev.offsetHeight + 7; dy = ev.clientY - startY; renum(); }
          li.style.transform = `translateY(${dy}px)`;
        };
        const up = () => { li.classList.remove("dragging"); li.style.transform = ""; li.removeEventListener("pointermove", mv); li.removeEventListener("pointerup", up); li.removeEventListener("pointercancel", up); };
        li.addEventListener("pointermove", mv); li.addEventListener("pointerup", up); li.addEventListener("pointercancel", up);
      });
      // Teclado: flechas mueven el elemento enfocado
      ul.addEventListener("keydown", (e) => {
        const li = e.target.closest("li"); if (!li) return;
        if (e.key === "ArrowUp" && li.previousElementSibling) { e.preventDefault(); li.previousElementSibling.before(li); li.focus(); renum(); }
        if (e.key === "ArrowDown" && li.nextElementSibling) { e.preventDefault(); li.nextElementSibling.after(li); li.focus(); renum(); }
      });
      $("#chk", body).onclick = () => {
        const lis = $$("li", ul); let good = 0;
        lis.forEach((li, k) => { const ok = +li.dataset.i === k; li.classList.toggle("good", ok); li.classList.toggle("badpos", !ok); good += ok; });
        if (good === lis.length || C.acceso.demo) { api.ok("¡Orden perfecto!"); $("#chk", body).disabled = true; setTimeout(done, 1000); }
        else api.bad(`${good} de ${lis.length} en su lugar. Mueve los rojos.`);
      };
    }
  };

  /* ---------- JUEGOS INDEPENDIENTES ---------- */
  function pageGames() {
    renderNav("games");
    const games = EPS.filter((ep) => ep.interaccion && GAMES[ep.interaccion.tipo]);
    const arcadeId = param("arcade");
    const arcades = [
      { id: "flappy", name: "Vuelo de corazones", type: "Acción", desc: "Vuela entre huecos estrechos a toda velocidad.", img: F.t1 },
      { id: "sopa", name: "Sopa de nuestra historia", type: "Palabras", desc: "Encuentra lugares y recuerdos escondidos.", img: F.t2 },
      { id: "racha", name: "Atrapa el Instante", type: "Récord infinito", desc: "Atrapa fotos rápidas y esquiva tormentas con solo dos vidas.", img: F.t5 },
      { id: "memory", name: "Memorama de fotos", type: "Memoria", desc: "Encuentra las parejas con fotos del proyecto.", img: F.t3 },
      { id: "puzzle", name: "Rompecabezas de recuerdos", type: "Puzzle", desc: "Elige una imagen y arma sus nueve piezas.", img: F.puzzle }
    ].filter((x) => !Array.isArray(C.arcades) || C.arcades.includes(x.id)); // config.js puede limitar los juegos según el paquete
    const arcade = arcades.find((x) => x.id === arcadeId);
    const selected = games.find((ep) => ep.id === param("j"));
    const done = games.filter((ep) => S.inter[ep.id]).length;
    document.title = `${arcade ? arcade.name + " | " : selected ? selected.titulo + " | " : ""}Juegos | Temporadas de Nosotros`;
    const names = { quiz: "Trivia", memory: "Memoria", puzzle: "Rompecabezas", sopa: "Sopa de letras", rascar: "Rasca y descubre", codigo: "Código secreto", ordenar: "Ordena la historia", adivinanza: "Adivinanza", completar: "Completa la frase" };

    if (arcade) {
      const photoChoices = [F.puzzle, F.t1, F.t3, F.t5, F.t7].filter(Boolean);
      const photoPairs = [F.t0, F.t1, F.t2, F.t3, F.t4, F.t5].filter(Boolean);
      const isAction = arcade.id === "flappy" || arcade.id === "racha";
      $("#app").innerHTML = `<main class="games-page game-detail">
        <a class="games-back" href="juegos.html">${I.left} Todos los juegos</a>
        <div class="game-context"><span class="inter-kicker">Juegos de nosotros · ${esc(arcade.type)}</span><h1>${esc(arcade.name)}</h1><p>${esc(arcade.desc)}</p></div>
        <section class="game-panel ${isAction ? "arcade-panel" : ""}" aria-label="${esc(arcade.name)}">
          ${arcade.id === "puzzle" ? `<div class="photo-picker" aria-label="Elige una foto">${photoChoices.map((src, i) => `<button type="button" data-photo="${i}" class="${i === 0 ? "selected" : ""}" aria-label="Foto ${i + 1}" aria-pressed="${i === 0}"><img src="${esc(src)}" alt="Foto ${i + 1}"></button>`).join("")}</div>` : ""}
          <div class="inter-body"></div><div class="feedback" role="status" aria-live="polite"></div>
        </section></main>${footer()}`;
      const panel = $(".game-panel"), body = $(".inter-body", panel), fb = $(".feedback", panel);
      const api = {
        ok: (m) => { fb.className = "feedback ok"; fb.textContent = m; },
        bad: (m) => { fb.className = "feedback bad"; fb.textContent = m; },
        info: (m) => { fb.className = "feedback"; fb.textContent = m; }
      };
      const complete = () => {
        S.inter[`arcade:${arcade.id}`] = true; save(); Sound.chime();
        panel.innerHTML = `<div class="inter-done"><div class="check">${I.check}</div><h2 class="inter-title">¡Juego completado!</h2>
          <div class="game-actions"><a class="btn btn-play" href="juegos.html?arcade=${arcade.id}">Volver a jugar</a><a class="btn btn-gray" href="juegos.html">Todos los juegos</a></div></div>`;
      };
      if (isAction) {
        window.TDNArcade?.mount(arcade.id, body, [F.t0, F.t1, F.t2, F.t3, F.t4, F.t5, F.t6, F.t7].filter(Boolean));
      } else if (arcade.id === "memory") {
        GAMES.memory(body, { pares: photoPairs }, api, complete);
      } else if (arcade.id === "sopa") {
        GAMES.sopa(body, { palabras: [P.nombreA, P.nombreB, P.ciudad, ...P.viajes.map((v) => v.split(" ").at(-1)), "RECUERDOS", "AMOR"] }, api, complete);
      } else {
        const playPhoto = (i) => {
          $$(".photo-picker button", panel).forEach((button, k) => { button.classList.toggle("selected", k === i); button.setAttribute("aria-pressed", k === i); });
          fb.textContent = "";
          GAMES.puzzle(body, { imagen: photoChoices[i] }, api, complete);
        };
        $$(".photo-picker button", panel).forEach((button) => button.addEventListener("click", () => playPhoto(+button.dataset.photo)));
        playPhoto(0);
      }
      return;
    }

    if (!selected) {
      $("#app").innerHTML = `<main class="games-page">
        <header class="games-header"><span class="inter-kicker">Una serie para jugar</span><h1>Juegos de nosotros</h1>
          <p>Juega cuando quieras, sin interrumpir las películas ni las series.</p></header>
        <h2 class="games-section-title">Para jugar ahora</h2>
        <div class="games-grid arcade-grid">${arcades.map((item) => `<a class="game-card" href="juegos.html?arcade=${item.id}">
          <span class="game-card-art">${media(item.img, item.name, item.id)}<span class="game-card-badge">${esc(item.type)}</span></span>
          <span class="game-card-copy"><small>${esc(item.desc)}</small><strong>${esc(item.name)}</strong><span>Jugar ahora ${I.right}</span></span></a>`).join("")}</div>
        ${games.length ? `<h2 class="games-section-title">Retos de la historia <small>${done} de ${games.length} completados</small></h2>` : ""}
        <div class="games-grid">${games.map((ep) => {
          const raw = epImg(ep), img = isVideo(raw) ? ep.season.imagen : raw;
          const played = !!S.inter[ep.id];
          return `<a class="game-card ${played ? "completed" : ""}" href="juegos.html?j=${ep.id}">
            <span class="game-card-art">${media(img, ep.titulo, ep.id)}<span class="game-card-badge">${played ? "✓ Completado" : esc(names[ep.interaccion.tipo] || "Juego")}</span></span>
            <span class="game-card-copy"><small>${esc(epLabel(ep))}${isMovie(ep.season) ? ` · ${esc(ep.season.titulo)}` : ""}</small><strong>${esc(ep.titulo)}</strong><span>${played ? "Volver a jugar" : "Jugar ahora"} ${I.right}</span></span></a>`;
        }).join("")}</div></main>${footer()}`;
      return;
    }

    const game = selected.interaccion;
    const [title, subtitle] = INTER_META[game.tipo]?.(game) || [selected.titulo, "Resuelve el reto"];
    $("#app").innerHTML = `<main class="games-page game-detail">
      <a class="games-back" href="juegos.html">${I.left} Todos los juegos</a>
      <div class="game-context"><span class="inter-kicker">${esc(kindName(selected.season))} · ${esc(selected.season.titulo)}</span><h1>${esc(selected.titulo)}</h1></div>
      <section class="game-panel" aria-label="Juego de ${esc(selected.titulo)}">
        <span class="game-type">${esc(names[game.tipo] || "Juego")}</span>
        <h2 class="inter-title">${esc(title)}</h2><p class="inter-sub">${esc(subtitle)}</p>
        <div class="inter-body"></div><div class="feedback" role="status" aria-live="polite"></div>
      </section></main>${footer()}`;
    const panel = $(".game-panel"), fb = $(".feedback", panel);
    const api = {
      ok: (m) => { fb.className = "feedback ok"; fb.textContent = m; },
      bad: (m) => { fb.className = "feedback bad"; fb.textContent = m || WRONG[Math.floor(Math.random() * WRONG.length)]; },
      info: (m) => { fb.className = "feedback"; fb.textContent = m; }
    };
    const complete = () => {
      if (!document.body.contains(panel)) return;
      S.inter[selected.id] = true; save(); Sound.chime();
      panel.innerHTML = `<div class="inter-done"><div class="check">${I.check}</div>
        <h2 class="inter-title">${esc(game.ok || "¡Juego completado!")}</h2>
        <div class="game-actions"><a class="btn btn-play" href="juegos.html">Ver más juegos</a>
          <a class="btn btn-gray" href="${unlocked(selected) ? epUrl(selected) : `temporada.html?t=${selected.t}`}">${isMovie(selected.season) ? "Ver película" : "Ver episodio"}</a></div></div>`;
    };
    GAMES[game.tipo]($(".inter-body", panel), game, api, complete);
  }

  // Imagen generada para el puzzle cuando no hay foto
  function generatedImage() {
    const s = 600, cv = document.createElement("canvas"); cv.width = cv.height = s;
    const x = cv.getContext("2d");
    const g = x.createLinearGradient(0, 0, s, s); g.addColorStop(0, "#5b0710"); g.addColorStop(.5, "#b20710"); g.addColorStop(1, "#1c0b2e");
    x.fillStyle = g; x.fillRect(0, 0, s, s);
    for (let i = 0; i < 14; i++) { x.strokeStyle = `rgba(255,255,255,${0.04 + (i % 3) * 0.03})`; x.lineWidth = 18; x.beginPath(); x.moveTo(-s + i * 90, 0); x.lineTo(i * 90, s); x.stroke(); }
    const heart = (cx, cy, r, c) => { x.fillStyle = c; x.beginPath(); x.moveTo(cx, cy + r * .9); x.bezierCurveTo(cx - r * 1.6, cy - r * .2, cx - r * .7, cy - r * 1.3, cx, cy - r * .45); x.bezierCurveTo(cx + r * .7, cy - r * 1.3, cx + r * 1.6, cy - r * .2, cx, cy + r * .9); x.fill(); };
    heart(300, 300, 150, "rgba(255,255,255,.14)");
    heart(95, 90, 34, "#fff"); heart(510, 500, 46, "rgba(255,255,255,.8)"); heart(500, 110, 22, "rgba(255,255,255,.6)");
    x.fillStyle = "#fff"; x.textAlign = "center"; x.textBaseline = "middle";
    x.font = '170px "Bebas Neue", Arial Narrow, sans-serif'; x.fillText("T", 300, 250);
    x.font = 'bold 40px Arial, sans-serif'; x.fillText(`${P.nombreB.slice(0, 14)}`, 300, 390);
    x.font = '30px Arial, sans-serif'; x.fillText(`& ${P.nombreA.slice(0, 16)}`, 300, 440);
    x.font = 'bold 26px Arial, sans-serif'; x.fillStyle = "#E50914"; x.fillRect(220, 490, 160, 44); x.fillStyle = "#fff"; x.fillText(String(P.anioInicio), 300, 513);
    return cv.toDataURL("image/jpeg", 0.85);
  }

  /* ================= 12. ARRANQUE ================= */
  const page = document.body.dataset.page;
  if (!gate(page)) return;

  // Aviso en consola de datos pendientes (útil antes de publicar)
  try {
    const pend = (JSON.stringify(C, (k, v) => (typeof v === "function" ? undefined : v)).match(/\[[A-ZÁÉÍÓÚÑ_ 0-9—-]+[^\]]*\]/g) || []);
    if (pend.length) console.info(`%cTemporadas de Nosotros: ${new Set(pend).size} datos [PENDIENTE]`, "color:#E50914;font-weight:bold", [...new Set(pend)]);
  } catch { }

  const pages = { splash: pageSplash, password: pagePassword, profiles: pageProfiles, home: pageHome, season: pageSeason, player: pagePlayer, games: pageGames, final: pageFinal, credits: pageCredits };
  (pages[page] || pageHome)();
  renderLogos();

  const pendingToast = ss.get("tdn_toast");
  if (pendingToast) { ss.del("tdn_toast"); setTimeout(() => toast(pendingToast), 600); }
})();
