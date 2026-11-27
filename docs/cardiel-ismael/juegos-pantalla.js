/* Vista de juego a tamaño de pantalla y Fullscreen API al interactuar. */
(() => {
  const main = document.querySelector('body.game-immersive .game-detail');
  if (!main) return;
  const button = main.querySelector('#gameFull');
  const host = main.querySelector('.inter-body');
  const root = document.documentElement;
  let attempted = false;
  const active = () => document.fullscreenElement || document.webkitFullscreenElement;
  const request = () => {
    if (active()) return;
    const enter = root.requestFullscreen || root.webkitRequestFullscreen;
    if (!enter) return;
    try { Promise.resolve(enter.call(root)).catch(() => {}); } catch { /* La vista ocupa la pantalla aun sin esta API. */ }
  };
  const label = () => {
    const text = active() ? 'Salir de pantalla completa' : 'Pantalla completa';
    button.textContent = text;
    button.setAttribute('aria-label', text);
    button.setAttribute('aria-pressed', String(!!active()));
  };
  button.addEventListener('click', () => {
    attempted = true;
    if (!active()) return request();
    const exit = document.exitFullscreen || document.webkitExitFullscreen;
    try { Promise.resolve(exit?.call(document)).catch(() => {}); } catch { }
  });
  main.addEventListener('click', event => {
    if (attempted || !event.target.closest('.mem, [data-start]')) return;
    attempted = true;
    request();
  }, true);
  document.addEventListener('fullscreenchange', label);
  document.addEventListener('webkitfullscreenchange', label);
  label();
  // Keep all twelve memory cards and the move counter visible after resizing.
  const resize = () => {
    const board = host.querySelector('.memory');
    if (!board) return;
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    const columns = width > height * 1.5 ? 6 : width < 500 ? 3 : 4;
    const rows = 12 / columns, gap = 8;
    const card = Math.max(12, Math.min((width - gap * (columns - 1)) / columns, (height - 40 - gap * (rows - 1)) / rows * .75));
    board.style.gridTemplateColumns = `repeat(${columns}, 1fr)`;
    board.style.width = `${Math.floor(card * columns + gap * (columns - 1))}px`;
  };
  if (window.ResizeObserver) {
    const observer = new ResizeObserver(resize);
    observer.observe(host);
    window.addEventListener('pagehide', () => observer.disconnect(), { once: true });
  } else window.addEventListener('resize', resize);
  resize();
})();
