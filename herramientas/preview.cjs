const { createServer } = require('node:http');
const { createReadStream, statSync } = require('node:fs');
const { resolve, extname, sep } = require('node:path');

const root = resolve(__dirname, '../docs');
const base = '/streaming-us-2';
const mime = {
  '.html': 'text/html; charset=utf-8', '.js': 'text/javascript; charset=utf-8',
  '.css': 'text/css; charset=utf-8', '.svg': 'image/svg+xml',
  '.webp': 'image/webp', '.jpg': 'image/jpeg', '.mp3': 'audio/mpeg', '.mp4': 'video/mp4'
};

createServer((req, res) => {
  let url, pathname;
  try {
    url = new URL(req.url, 'http://localhost');
    pathname = decodeURIComponent(url.pathname);
  } catch {
    return res.writeHead(400).end();
  }
  if (pathname === base || pathname.startsWith(base + '/')) pathname = pathname.slice(base.length) || '/';
  let file = resolve(root, '.' + pathname);
  if (file !== root && !file.startsWith(root + sep)) return res.writeHead(403).end();
  let info = statSync(file, { throwIfNoEntry: false });
  if (info?.isDirectory()) {
    if (!url.pathname.endsWith('/')) return res.writeHead(308, { Location: url.pathname + '/' + url.search }).end();
    file = resolve(file, 'index.html');
    info = statSync(file, { throwIfNoEntry: false });
  }
  if (!info?.isFile()) return res.writeHead(404).end();
  const headers = {
    'Content-Type': mime[extname(file)] || 'application/octet-stream',
    'Accept-Ranges': 'bytes', 'Cache-Control': 'no-cache'
  };
  const requested = /^bytes=(\d+)-(\d*)$/.exec(req.headers.range || '');
  const start = requested ? Number(requested[1]) : 0;
  const end = requested?.[2] ? Math.min(Number(requested[2]), info.size - 1) : info.size - 1;
  if (requested && (start >= info.size || end < start)) {
    return res.writeHead(416, { 'Content-Range': `bytes */${info.size}` }).end();
  }
  headers['Content-Length'] = requested ? end - start + 1 : info.size;
  if (requested) headers['Content-Range'] = `bytes ${start}-${end}/${info.size}`;
  res.writeHead(requested ? 206 : 200, headers);
  if (req.method === 'HEAD' || info.size === 0) return res.end();
  createReadStream(file, { start, end }).pipe(res);
}).listen(8802, '127.0.0.1', () => {
  console.log('Dominio raíz: http://127.0.0.1:8802/demo-regalo/');
  console.log('Subruta de GitHub Pages: http://127.0.0.1:8802/streaming-us-2/demo-regalo/');
});
