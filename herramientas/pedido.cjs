const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const root = path.join(__dirname, '..');
const pages = path.join(root, 'plantilla', 'paginas');
const docs = path.join(root, 'docs');
const [slug, action, publicBase = 'https://rotfflores.github.io/streaming-us-2/'] = process.argv.slice(2);
const update = action === '--actualizar';

if (!slug || !/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(slug) || slug.length > 80 || slug === 'comun' || (action && !update)) {
  console.error('Uso: node herramientas/pedido.cjs nombre-del-pedido [--actualizar [URL_BASE_PUBLICA]]');
  process.exit(1);
}

const origin = new URL(publicBase);
if (origin.protocol !== 'https:' || origin.username || origin.password || origin.search || origin.hash) {
  throw new Error('La URL base pública debe ser HTTPS y terminar antes del nombre del pedido.');
}
if (!origin.pathname.endsWith('/')) origin.pathname += '/';

const folder = path.join(docs, slug);
const configFile = path.join(folder, 'config.js');
if (update && !fs.existsSync(configFile)) throw new Error(`No existe docs/${slug}/config.js.`);
if (!update && fs.existsSync(folder)) throw new Error('Ya existe este pedido. Usa --actualizar para regenerar sus páginas.');
const configSource = fs.readFileSync(update ? configFile : path.join(root, 'plantilla', 'config.js'), 'utf8');

const link = new URL(slug + '/', origin);
const sandbox = { window: {}, URL, location: { href: link.href } };
vm.runInNewContext(configSource, sandbox, { filename: configFile, timeout: 1000 });
const config = sandbox.window.TDN;
if (!config?.pareja?.nombreA || !config?.pareja?.nombreB || !config.temporadas?.length) {
  throw new Error('Completa los nombres y el catálogo en config.js.');
}

const attr = value => String(value).replace(/[&<>"']/g, ch => ({
  '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
})[ch]);
const names = `${config.pareja.nombreA} y ${config.pareja.nombreB}`;
const socialImage = fs.existsSync(path.join(folder, 'assets', 'og.jpg'))
  ? new URL('assets/og.jpg', link)
  : new URL('comun/medios/fotos/og.jpg', origin);
const socialTags = [
  '<meta property="og:type" content="website">',
  `<meta property="og:title" content="${attr(names)} | Temporadas de Nosotros">`,
  '<meta property="og:description" content="Una historia original, preparada para ti.">',
  `<meta property="og:url" content="${attr(link.href)}">`,
  `<meta property="og:image" content="${attr(socialImage.href)}">`,
  '<meta name="twitter:card" content="summary_large_image">'
].join('\n  ');

if (!update) {
  fs.mkdirSync(folder);
  for (const type of ['fotos', 'audio', 'video']) {
    const target = path.join(folder, 'assets', type);
    fs.mkdirSync(target, { recursive: true });
    fs.writeFileSync(path.join(target, '.gitkeep'), '');
  }
  fs.writeFileSync(configFile, configSource, 'utf8');
}
for (const file of fs.readdirSync(pages)) {
  const template = fs.readFileSync(path.join(pages, file), 'utf8');
  const html = template
    .replace(/(src|href)="(styles\.css|script\.js|arcade\.js|favicon\.svg)(?:\?[^"]*)?"/g, '$1="../comun/$2"')
    .replace(/(src="config\.js)\?[^"]+"/g, '$1"')
    .replace(/<!-- METADATOS_DEL_PEDIDO -->/, socialTags);
  fs.writeFileSync(path.join(folder, file), html, 'utf8');
}
console.log(`Pedido disponible en docs/${slug}/ · Configuración en docs/${slug}/config.js`);
