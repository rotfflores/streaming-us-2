const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');

const docs = path.join(__dirname, '../docs');
const pageNames = fs.readdirSync(path.join(__dirname, '../plantilla/paginas'));
const expectedHosts = ['https://rotfflores.github.io/streaming-us-2/', 'https://streaming-us-2.rotfstudio.com/'];
const orders = fs.readdirSync(docs, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name !== 'comun').map(d => d.name);
assert.ok(orders.includes('demo-regalo'), 'Falta el pedido de prueba');

function references(value) {
  if (typeof value === 'string') return /^(?:\.\.\/comun\/medios\/|assets\/)/.test(value) ? [value] : [];
  if (value && typeof value === 'object') return Object.values(value).flatMap(references);
  return [];
}

function fileFromLink(link, site) {
  const relative = link.pathname.slice(site.pathname.length);
  assert.ok(link.pathname.startsWith(site.pathname));
  const file = path.resolve(docs, decodeURIComponent(relative));
  assert.ok(file.startsWith(docs + path.sep), file);
  assert.ok(fs.statSync(file, { throwIfNoEntry: false })?.isFile(), file);
}

for (const slug of orders) {
  const dir = path.join(docs, slug);
  const config = fs.readFileSync(path.join(dir, 'config.js'), 'utf8');
  for (const base of expectedHosts) {
    const site = new URL(base);
    const order = new URL(slug + '/', site);
    const ctx = { window: {}, URL, location: { href: order.href } };
    vm.runInNewContext(config, ctx, { filename: slug + '/config.js', timeout: 1000 });
    const data = ctx.window.TDN;
    assert.ok(data.pareja?.nombreA && data.pareja?.nombreB);
    assert.ok(data.temporadas?.length);
    if (slug === 'demo-regalo') {
      assert.equal(data.sitio.url, order.href);
      assert.equal(data.acceso.demo, false);
      assert.equal(data.acceso.cualquierClave, true);
      assert.equal(data.acceso.password, '');
      assert.equal(data.notificacion.whatsapp, '');
      assert.equal(data.notificacion.email, '');
      assert.equal(data.notificacion.endpoint, '');
      assert.equal(data.temporadas.filter(t => t.tipo === 'pelicula').length, 12);
      assert.equal(data.temporadas.filter(t => t.tipo === 'serie').length, 3);
    }
    for (const ref of new Set(references(data))) fileFromLink(new URL(ref, order), site);
    for (const page of pageNames) {
      const html = fs.readFileSync(path.join(dir, page), 'utf8');
      assert.doesNotMatch(html, /METADATOS_DEL_PEDIDO|Netflix 2/);
      for (const { 1: ref } of html.matchAll(/(?:src|href)="(?![a-z]+:|#)([^"]+)"/gi)) {
        fileFromLink(new URL(ref, order), site);
      }
    }
  }
}

function tree(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(directory, entry.name);
    return entry.isDirectory() ? tree(file) : [file];
  });
}
const sizes = tree(docs).map(file => ({ file: path.relative(docs, file), bytes: fs.statSync(file).size }));
const total = sizes.reduce((sum, f) => sum + f.bytes, 0);
assert.ok(total < 1_000_000_000, 'docs supera el límite de 1 GB de GitHub Pages');
console.log(JSON.stringify({ pedidos: orders.length, archivos: sizes.length, bytes: total, mayores: sizes.sort((a,b) => b.bytes-a.bytes).slice(0,5) }, null, 2));
