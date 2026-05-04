(function () {
  'use strict';

  var NAV_H = 48;

  var pages = [
    { id: 'index',                       label: 'Inicio',              href: 'index.html' },
    { id: 'democratizacion_datos',       label: 'Democratización',     href: 'democratizacion_datos.html' },
    { id: 'glosario_negocio',            label: 'Glosario',            href: 'glosario_negocio.html' },
    { id: 'comex_fbpengine_dictionary',  label: 'Diccionario COMEX',   href: 'comex_fbpengine_dictionary.html' },
  ];

  var raw = window.location.pathname.split('/').pop() || 'index.html';
  var current = raw.replace('.html', '') || 'index';

  var css = [
    '#do-nav{',
    '  position:fixed;top:0;left:0;right:0;z-index:9999;height:' + NAV_H + 'px;',
    '  display:flex;align-items:center;justify-content:space-between;gap:16px;',
    '  padding:0 24px;',
    '  background:rgba(247,251,255,0.96);',
    '  backdrop-filter:blur(16px);-webkit-backdrop-filter:blur(16px);',
    '  border-bottom:1px solid rgba(217,228,239,0.9);',
    '  font-family:Inter,ui-sans-serif,system-ui,-apple-system,sans-serif;',
    '}',
    '#do-nav-brand{',
    '  display:flex;align-items:center;gap:9px;text-decoration:none;flex-shrink:0;',
    '}',
    '#do-nav-mark{',
    '  width:28px;height:28px;border-radius:8px;display:grid;place-items:center;',
    '  background:linear-gradient(145deg,#3d82c4,#1b4d80);color:#fff;flex-shrink:0;',
    '}',
    '#do-nav-brand span{font-size:14px;font-weight:800;color:#17324d;letter-spacing:-.02em;}',
    '#do-nav-links{display:flex;align-items:center;gap:2px;overflow-x:auto;}',
    '#do-nav-links::-webkit-scrollbar{display:none;}',
    '.do-nav-link{',
    '  display:inline-flex;align-items:center;padding:6px 11px;border-radius:8px;',
    '  font-size:12.5px;font-weight:600;color:#6a7f92;text-decoration:none;white-space:nowrap;',
    '  transition:background .14s ease,color .14s ease;',
    '}',
    '.do-nav-link:hover{background:rgba(47,111,181,.08);color:#1b4d80;}',
    '.do-nav-link.active{background:#eef6ff;color:#1b4d80;font-weight:700;}',
    '.do-nav-sep{width:1px;height:16px;background:#d9e4ef;margin:0 4px;flex-shrink:0;}',
    'body{padding-top:' + NAV_H + 'px!important;}',
    '.sidebar{top:' + NAV_H + 'px!important;height:calc(100vh - ' + NAV_H + 'px)!important;}',
    '.topbar{top:' + NAV_H + 'px!important;}',
  ].join('');

  var linkItems = pages.map(function (p) {
    var active = (current === p.id) ? ' active' : '';
    return '<a class="do-nav-link' + active + '" href="' + p.href + '">' + p.label + '</a>';
  });

  var html = [
    '<nav id="do-nav">',
    '  <a id="do-nav-brand" href="index.html">',
    '    <div id="do-nav-mark">',
    '      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">',
    '        <ellipse cx="12" cy="5" rx="9" ry="3"/>',
    '        <path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/>',
    '        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/>',
    '      </svg>',
    '    </div>',
    '    <span>Data Office</span>',
    '  </a>',
    '  <div id="do-nav-links">',
    '    ' + linkItems.join('\n    '),
    '  </div>',
    '</nav>',
  ].join('\n');

  var style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  var wrapper = document.createElement('div');
  wrapper.innerHTML = html;
  document.body.insertBefore(wrapper.firstElementChild, document.body.firstChild);
})();
