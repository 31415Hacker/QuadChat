const COMPONENT_DEFS = {
  battery: {
    width: 40, height: 50,
    terminals: [
      { dx: 0, dy: -25, label: '+', role: 'battery_plus' },
      { dx: 0, dy: 25, label: '\u2212', role: 'battery_minus' },
    ],
  },
  bulb: {
    width: 40, height: 44,
    terminals: [
      { dx: 0, dy: -22, label: '+', role: 'bulb_plus' },
      { dx: 0, dy: 22, label: '\u2212', role: 'bulb_minus' },
    ],
  },
  chip: {
    width: 56, height: 70,
    terminals: [
      { dx: -28, dy: -22, label: 'D0', role: 'pin', pinIndex: 0 },
      { dx: -28, dy: 0, label: 'VCC', role: 'vcc' },
      { dx: -28, dy: 22, label: 'GND', role: 'gnd' },
      { dx: 28, dy: -22, label: 'D1', role: 'pin', pinIndex: 1 },
      { dx: 28, dy: 0, label: 'D2', role: 'pin', pinIndex: 2 },
      { dx: 28, dy: 22, label: 'D3', role: 'pin', pinIndex: 3 },
    ],
  },
};

const SVG_NS = 'http://www.w3.org/2000/svg';
const PIN_NAMES = ['D0', 'D1', 'D2', 'D3'];

// --- State ---
const state = {
  components: {},
  wires: [],
  nextCompId: 1,
  nextWireId: 1,
  dragCompId: null,
  dragOffsetX: 0,
  dragOffsetY: 0,
  wireStart: null,
  selectedCompId: null,
  rotating: false,
  rotateStartAngle: 0,
  chipPins: { 0: { mode: 'INPUT', value: 0 }, 1: { mode: 'INPUT', value: 0 }, 2: { mode: 'INPUT', value: 0 }, 3: { mode: 'INPUT', value: 0 } },
  chipPowered: false,
  running: false,
  abortController: null,
  simResult: null,
};

const board = document.getElementById('board');
const wiresLayer = document.getElementById('wiresLayer');
const componentsLayer = document.getElementById('componentsLayer');
const wirePreview = document.getElementById('wirePreview');
const codeEditor = document.getElementById('codeEditor');
const consoleOut = document.getElementById('console');
const statusMsg = document.getElementById('statusMsg');
const wireModeCheck = document.getElementById('wireMode');
const runBtn = document.getElementById('runBtn');
const stopBtn = document.getElementById('stopBtn');
const clearBtn = document.getElementById('clearBtn');

// --- Helpers ---
function svg(tag, attrs = {}) {
  const el = document.createElementNS(SVG_NS, tag);
  for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
  return el;
}

function log(msg, type = 'log') {
  const d = document.createElement('div');
  d.className = type;
  d.textContent = msg;
  consoleOut.appendChild(d);
  consoleOut.scrollTop = consoleOut.scrollHeight;
}

function clearConsole() {
  consoleOut.innerHTML = '';
}

function updateStatus(msg) {
  statusMsg.textContent = msg;
}

function getTerminalAbsolute(comp, pinIdx) {
  const def = COMPONENT_DEFS[comp.type];
  const t = def.terminals[pinIdx];
  const rad = (comp.rotation || 0) * Math.PI / 180;
  const rx = t.dx * Math.cos(rad) - t.dy * Math.sin(rad);
  const ry = t.dx * Math.sin(rad) + t.dy * Math.cos(rad);
  return { x: comp.x + rx, y: comp.y + ry };
}

function wireKey(a, b) {
  const key = (a.compId < b.compId || (a.compId === b.compId && a.pinIdx < b.pinIdx))
    ? `${a.compId}:${a.pinIdx}-${b.compId}:${b.pinIdx}`
    : `${b.compId}:${b.pinIdx}-${a.compId}:${a.pinIdx}`;
  return key;
}

// --- Rendering ---
function renderBattery(comp) {
  const g = svg('g', { class: 'component-group', 'data-comp-id': comp.id });
  g.style.cursor = 'grab';

  const def = COMPONENT_DEFS.battery;
  const hw = def.width / 2;
  const hh = def.height / 2;

  g.appendChild(svg('rect', { x: -hw, y: -hh, width: def.width, height: def.height, fill: 'transparent', stroke: 'none' }));

  // Battery body
  g.appendChild(svg('rect', { x: -12, y: -20, width: 24, height: 40, rx: 4, fill: 'url(#battFill)', stroke: '#1a5c35', 'stroke-width': 1.5 }));

  // Top cap (+ terminal)
  g.appendChild(svg('rect', { x: -4, y: -24, width: 8, height: 5, rx: 1.5, fill: '#555', stroke: '#444', 'stroke-width': 1 }));

  // Bottom cap (- terminal, flat)
  g.appendChild(svg('rect', { x: -5, y: 20, width: 10, height: 4, rx: 1, fill: '#555', stroke: '#444', 'stroke-width': 1 }));

  // + sign
  const plus = svg('text', { x: 0, y: -10, 'text-anchor': 'middle', fill: '#fff', 'font-size': '10px', 'font-weight': 'bold', 'font-family': 'monospace' });
  plus.textContent = '+';
  g.appendChild(plus);

  // - sign  
  const minus = svg('text', { x: 0, y: 16, 'text-anchor': 'middle', fill: '#fff', 'font-size': '10px', 'font-weight': 'bold', 'font-family': 'monospace' });
  minus.textContent = '\u2212';
  g.appendChild(minus);

  // Voltage label
  const lbl = svg('text', { x: 0, y: hh + 10, 'text-anchor': 'middle', fill: 'var(--text-tertiary)', 'font-size': '7px', 'font-family': 'monospace', 'font-weight': 'bold' });
  lbl.textContent = '5V';
  g.appendChild(lbl);

  renderTerminals(g, comp, 'battery');
  return g;
}

function renderBulb(comp) {
  const g = svg('g', { class: 'component-group bulb-group', 'data-comp-id': comp.id });
  g.style.cursor = 'grab';

  const def = COMPONENT_DEFS.bulb;
  const hw = def.width / 2;
  const hh = def.height / 2;

  g.appendChild(svg('rect', { x: -hw, y: -hh, width: def.width, height: def.height, fill: 'transparent', stroke: 'none' }));

  // Glow ring (behind bulb, visible when on)
  const glowRing = svg('circle', { cx: 0, cy: -6, r: 22, fill: 'url(#bulbGlow)', class: 'bulb-glow-ring', opacity: 0 });
  g.appendChild(glowRing);

  // Glass dome
  const glass = svg('circle', { cx: 0, cy: -6, r: 15, fill: 'url(#bulbGlass)', stroke: 'var(--text-secondary)', 'stroke-width': 1.2, class: 'bulb-glass' });
  g.appendChild(glass);

  // Filament (zigzag)
  const fil = svg('path', { d: 'M-6,-10 L-3,-4 L0,-10 L3,-4 L6,-10', class: 'bulb-filament', 'stroke-width': 1.5, 'stroke-linecap': 'round', 'stroke-linejoin': 'round' });
  g.appendChild(fil);

  // Filament support wires
  g.appendChild(svg('line', { x1: -6, y1: -10, x2: -6, y2: -1, stroke: 'var(--text-tertiary)', 'stroke-width': 1 }));
  g.appendChild(svg('line', { x1: 6, y1: -10, x2: 6, y2: -1, stroke: 'var(--text-tertiary)', 'stroke-width': 1 }));

  // Screw base
  g.appendChild(svg('rect', { x: -7, y: 7, width: 14, height: 4, rx: 1, fill: '#666', stroke: '#555', 'stroke-width': 1 }));
  g.appendChild(svg('rect', { x: -6, y: 11, width: 12, height: 3, rx: 1, fill: '#777', stroke: '#555', 'stroke-width': 0.5 }));
  g.appendChild(svg('rect', { x: -5, y: 14, width: 10, height: 3, rx: 1, fill: '#666', stroke: '#555', 'stroke-width': 1 }));
  g.appendChild(svg('line', { x1: 0, y1: 17, x2: 0, y2: 20, stroke: 'var(--text-secondary)', 'stroke-width': 1.5 }));

  // Bottom terminal connector
  g.appendChild(svg('circle', { cx: 0, cy: 21, r: 2, fill: '#888' }));

  renderTerminals(g, comp, 'bulb');
  return g;
}

function renderChip(comp) {
  const g = svg('g', { class: 'component-group', 'data-comp-id': comp.id });
  g.style.cursor = 'grab';

  const def = COMPONENT_DEFS.chip;
  const hw = def.width / 2;
  const hh = def.height / 2;

  g.appendChild(svg('rect', { x: -hw, y: -hh, width: def.width, height: def.height, fill: 'transparent', stroke: 'none' }));

  // Draw pins (behind body)
  const pinH = 8, pinW = 5, pinGap = 22;
  for (let side = -1; side <= 1; side += 2) {
    for (let i = -1; i <= 1; i++) {
      const px = side * (hw - 3);
      const py = i * pinGap;
      g.appendChild(svg('rect', { x: side === -1 ? px - pinW : px, y: py - pinH / 2, width: pinW, height: pinH, rx: 1, fill: 'url(#pinFill)', stroke: '#666', 'stroke-width': 0.5 }));
    }
  }

  // Chip body
  g.appendChild(svg('rect', { x: -hw + 7, y: -hh + 5, width: def.width - 14, height: def.height - 10, rx: 3, fill: 'url(#chipFill)', stroke: '#444', 'stroke-width': 1.5 }));

  // Inner highlight
  g.appendChild(svg('rect', { x: -hw + 9, y: -hh + 7, width: def.width - 18, height: def.height - 14, rx: 2, fill: 'none', stroke: 'rgba(255,255,255,0.05)', 'stroke-width': 1 }));

  // Notch (circle)
  g.appendChild(svg('circle', { cx: 0, cy: -hh + 9, r: 3, fill: '#555' }));

  // Label
  const lbl = svg('text', { x: 0, y: 3, 'text-anchor': 'middle', fill: '#8af', 'font-size': '9px', 'font-family': 'monospace', 'font-weight': 'bold' });
  lbl.textContent = 'CHIP';
  g.appendChild(lbl);

  // Sub-label
  const sub = svg('text', { x: 0, y: 13, 'text-anchor': 'middle', fill: '#666', 'font-size': '6px', 'font-family': 'monospace' });
  sub.textContent = 'ATmega';
  g.appendChild(sub);

  // Pin labels
  const labelData = [
    { dx: -hw - 10, dy: -22, text: 'D0' },
    { dx: -hw - 10, dy: 0, text: 'VCC' },
    { dx: -hw - 10, dy: 22, text: 'GND' },
    { dx: hw + 10, dy: -22, text: 'D1' },
    { dx: hw + 10, dy: 0, text: 'D2' },
    { dx: hw + 10, dy: 22, text: 'D3' },
  ];
  labelData.forEach(({ dx, dy, text }) => {
    const l = svg('text', { x: dx, y: dy + 3, 'text-anchor': dx < 0 ? 'end' : 'start', fill: 'var(--text-tertiary)', 'font-size': '7px', 'font-family': 'monospace' });
    l.textContent = text;
    g.appendChild(l);
  });

  renderTerminals(g, comp, 'chip');
  return g;
}

function renderTerminals(g, comp, type) {
  const def = COMPONENT_DEFS[type];
  def.terminals.forEach((t, i) => {
    const circ = svg('circle', {
      class: 'terminal',
      cx: t.dx, cy: t.dy, r: 5,
      'data-comp-id': comp.id,
      'data-pin-idx': i,
    });
    g.appendChild(circ);
  });
}

function addSelectionVisual(g, comp) {
  const def = COMPONENT_DEFS[comp.type];
  const hw = def.width / 2 + 8;
  const hh = def.height / 2 + 8;

  g.appendChild(svg('rect', {
    x: -hw, y: -hh,
    width: def.width + 16, height: def.height + 16,
    fill: 'none', stroke: 'var(--accent-blue)',
    'stroke-width': 1.5, 'stroke-dasharray': '4,3', rx: 4,
    class: 'selection-box',
  }));

  const handleY = -hh - 20;
  g.appendChild(svg('line', {
    x1: 0, y1: -hh,
    x2: 0, y2: handleY,
    stroke: 'var(--accent-blue)', 'stroke-width': 1.5,
    class: 'rotation-handle-line',
  }));
  g.appendChild(svg('circle', {
    cx: 0, cy: handleY, r: 5,
    fill: '#fff', stroke: 'var(--accent-blue)', 'stroke-width': 2,
    class: 'rotation-handle',
    'data-comp-id': comp.id,
  }));
}

function renderAll() {
  componentsLayer.innerHTML = '';

  for (const comp of Object.values(state.components)) {
    let g;
    switch (comp.type) {
      case 'battery': g = renderBattery(comp); break;
      case 'bulb': g = renderBulb(comp); break;
      case 'chip': g = renderChip(comp); break;
    }
    if (g) {
      const angle = comp.rotation || 0;
      g.setAttribute('transform', `translate(${comp.x}, ${comp.y}) rotate(${angle})`);
      if (state.selectedCompId === comp.id) addSelectionVisual(g, comp);
      componentsLayer.appendChild(g);
    }
  }

  renderWires();
  updateTerminalStyles();
  updatePinUI();
}

// --- Pathfinding ---

const GRID_SIZE = 10;
const OBSTACLE_MARGIN = 8;

// --- Wire crossing detection ---

function getWireSegments(pts) {
  const segs = [];
  for (let i = 0; i < pts.length - 1; i++) {
    const a = pts[i], b = pts[i + 1];
    if (Math.abs(a.x - b.x) < 0.5 && Math.abs(a.y - b.y) < 0.5) continue;
    segs.push({
      x1: a.x, y1: a.y, x2: b.x, y2: b.y,
      horiz: Math.abs(a.y - b.y) < 0.5,
      minX: Math.min(a.x, b.x), maxX: Math.max(a.x, b.x),
      minY: Math.min(a.y, b.y), maxY: Math.max(a.y, b.y),
    });
  }
  return segs;
}

function segsIntersect(a, b) {
  if (a.horiz === b.horiz) return null;
  const h = a.horiz ? a : b;
  const v = a.horiz ? b : a;
  if (h.minX <= v.x1 && h.maxX >= v.x1 && v.minY <= h.y1 && v.maxY >= h.y1) {
    return { x: v.x1, y: h.y1 };
  }
  return null;
}

function findWireCrossings() {
  const crossings = [];
  const active = state.wires.filter(w => w.storedPath);
  for (let i = 0; i < active.length; i++) {
    for (let j = i + 1; j < active.length; j++) {
      const segsI = getWireSegments(active[i].storedPath);
      const segsJ = getWireSegments(active[j].storedPath);
      for (const si of segsI) {
        for (const sj of segsJ) {
          const pt = segsIntersect(si, sj);
          if (pt) crossings.push({ x: pt.x, y: pt.y, id1: active[i].id, id2: active[j].id });
        }
      }
    }
  }
  return crossings;
}

function isBridgeMarked(cross, wire) {
  const marks = wire._bridges || {};
  const key = `${Math.round(cross.x)},${Math.round(cross.y)}`;
  return marks[key] === true;
}

function toggleBridge(wire, key) {
  if (!wire._bridges) wire._bridges = {};
  wire._bridges[key] = !wire._bridges[key];
}


function getObstacles(skipWireId) {
  const obs = [];
  for (const id in state.components) {
    const comp = state.components[id];
    const def = COMPONENT_DEFS[comp.type];
    const hw = def.width / 2;
    const hh = def.height / 2;
    obs.push({ x: comp.x - hw - OBSTACLE_MARGIN, y: comp.y - hh - OBSTACLE_MARGIN, w: def.width + OBSTACLE_MARGIN * 2, h: def.height + OBSTACLE_MARGIN * 2 });
  }
  // Existing wire paths as soft obstacles (skip first/last segments near terminals)
  const WR = 25;
  for (const w of state.wires) {
    if (!w.storedPath || w.id === skipWireId) continue;
    const pts = w.storedPath;
    for (let i = 0; i < pts.length - 1; i++) {
      if (i === 0 || i === pts.length - 2) continue;
      const a = pts[i], b = pts[i + 1];
      const pad = WR;
      if (Math.abs(a.x - b.x) < 0.5) {
        const minY = Math.min(a.y, b.y) - pad;
        const maxY = Math.max(a.y, b.y) + pad;
        obs.push({ x: a.x - pad, y: minY, w: pad * 2, h: maxY - minY });
      } else {
        const minX = Math.min(a.x, b.x) - pad;
        const maxX = Math.max(a.x, b.x) + pad;
        obs.push({ x: minX, y: a.y - pad, w: maxX - minX, h: pad * 2 });
      }
    }
  }
  return obs;
}

function segOverlapsRect(x1, y1, x2, y2, rx, ry, rw, rh) {
  const minX = Math.min(x1, x2), maxX = Math.max(x1, x2);
  const minY = Math.min(y1, y2), maxY = Math.max(y1, y2);
  const rRight = rx + rw, rBot = ry + rh;
  if (maxX < rx || minX > rRight || maxY < ry || minY > rBot) return false;
  if (x1 === x2) return true;
  if (y1 === y2) return true;
  return !(minX >= rx && maxX <= rRight && minY >= ry && maxY <= rBot);
}

const TURN_PENALTY = 8;

function aStarPath(sx, sy, ex, ey, obstacles, GS) {
  const margin = 35 + Math.max(Math.abs(ex - sx), Math.abs(ey - sy));
  const minGX = Math.min(sx, ex) - margin;
  const maxGX = Math.max(sx, ex) + margin;
  const minGY = Math.min(sy, ey) - margin;
  const maxGY = Math.max(sy, ey) + margin;

  function blocked(gx, gy) {
    if (gx < minGX || gx > maxGX || gy < minGY || gy > maxGY) return true;
    if (gx === sx && gy === sy) return false;
    if (gx === ex && gy === ey) return false;
    const px = gx * GS;
    const py = gy * GS;
    for (const o of obstacles) {
      if (px > o.x && px < o.x + o.w && py > o.y && py < o.y + o.h) return true;
    }
    return false;
  }

  const start = { gx: sx, gy: sy, g: 0, f: Math.abs(sx - ex) + Math.abs(sy - ey), c: null, dir: 's' };
  let open = [start];
  const om = new Map([[`${sx},${sy},s`, start]]);
  const cl = new Set();

  while (open.length) {
    let bi = 0;
    for (let i = 1; i < open.length; i++) if (open[i].f < open[bi].f) bi = i;
    const cur = open.splice(bi, 1)[0];
    const curKey = `${cur.gx},${cur.gy},${cur.dir}`;
    om.delete(curKey);
    if (cur.gx === ex && cur.gy === ey) {
      const p = [];
      let n = cur;
      while (n) { p.unshift({ x: n.gx * GS, y: n.gy * GS }); n = n.c; }
      return p;
    }
    cl.add(curKey);
    const dd = [[0,-1],[0,1],[-1,0],[1,0]];
    for (const [dx, dy] of dd) {
      const ngx = cur.gx + dx, ngy = cur.gy + dy;
      const nkey = `${ngx},${ngy},${dx ? 'h' : 'v'}`;
      if (cl.has(nkey)) continue;
      if (blocked(ngx, ngy)) continue;
      const newDir = dx ? 'h' : 'v';
      const turnCost = (cur.dir !== 's' && cur.dir !== newDir) ? TURN_PENALTY : 0;
      const ng = cur.g + 1 + turnCost;
      const nf = ng + Math.abs(ngx - ex) + Math.abs(ngy - ey);
      const exst = om.get(nkey);
      if (exst) { if (ng < exst.g) { exst.g = ng; exst.f = nf; exst.c = cur; } }
      else { const no = { gx: ngx, gy: ngy, g: ng, f: nf, c: cur, dir: newDir }; open.push(no); om.set(nkey, no); }
    }
  }
  return null;
}

function simplifyWaypoints(pts) {
  if (pts.length <= 2) return pts;
  const r = [pts[0]];
  for (let i = 1; i < pts.length - 1; i++) {
    const p = pts[i - 1], c = pts[i], n = pts[i + 1];
    if ((c.x - p.x === 0 && n.x - c.x === 0) || (c.y - p.y === 0 && n.y - c.y === 0)) continue;
    r.push(c);
  }
  r.push(pts[pts.length - 1]);
  return r;
}

function roundCorners(pts, r) {
  if (pts.length < 2) return '';
  const wps = simplifyWaypoints(pts);
  if (wps.length < 2) return `M ${pts[0].x} ${pts[0].y}`;

  let d = `M ${wps[0].x} ${wps[0].y}`;
  for (let i = 1; i < wps.length - 1; i++) {
    const p0 = wps[i - 1], p1 = wps[i], p2 = wps[i + 1];
    const dx0 = Math.sign(p1.x - p0.x) || 0, dy0 = Math.sign(p1.y - p0.y) || 0;
    const dx1 = Math.sign(p2.x - p1.x) || 0, dy1 = Math.sign(p2.y - p1.y) || 0;
    const di = Math.abs(p1.x - p0.x) + Math.abs(p1.y - p0.y);
    const dOut = Math.abs(p2.x - p1.x) + Math.abs(p2.y - p1.y);
    const cr = Math.min(r, di / 2, dOut / 2);

    const preX = p1.x - cr * dx0, preY = p1.y - cr * dy0;
    const postX = p1.x + cr * dx1, postY = p1.y + cr * dy1;
    const sweep = dx0 !== 0
      ? (dx0 === dy1 ? 1 : 0)
      : (dy0 !== dx1 ? 1 : 0);
    d += ` L ${preX} ${preY} A ${cr} ${cr} 0 0 ${sweep} ${postX} ${postY}`;
  }
  d += ` L ${wps[wps.length-1].x} ${wps[wps.length-1].y}`;
  return d;
}

function computeRoutePoints(x1, y1, x2, y2, skipWireId) {
  const GS = GRID_SIZE;
  const sx = Math.round(x1 / GS), sy = Math.round(y1 / GS);
  const ex = Math.round(x2 / GS), ey = Math.round(y2 / GS);

  if (Math.abs(sx - ex) <= 1 && Math.abs(sy - ey) <= 1) {
    const dx = x2 - x1, dy = y2 - y1;
    const adx = Math.abs(dx), ady = Math.abs(dy);
    if (adx < 1 || ady < 1) return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
    if (adx >= ady) return [{ x: x1, y: y1 }, { x: x2, y: y1 }, { x: x2, y: y2 }];
    return [{ x: x1, y: y1 }, { x: x1, y: y2 }, { x: x2, y: y2 }];
  }

  const obstacles = getObstacles(skipWireId);

  const simple = [
    { x: x2, y: y1 },
    { x: x1, y: y2 },
  ];
  for (const c of simple) {
    const clear = !obstacles.some(o =>
      segOverlapsRect(x1, y1, c.x, c.y, o.x, o.y, o.w, o.h) ||
      segOverlapsRect(c.x, c.y, x2, y2, o.x, o.y, o.w, o.h)
    );
    if (clear) return [{ x: x1, y: y1 }, c, { x: x2, y: y2 }];
  }

  const gp = aStarPath(sx, sy, ex, ey, obstacles, GS);
  if (gp) return [{ x: x1, y: y1 }, ...gp, { x: x2, y: y2 }];

  const dx = x2 - x1, dy = y2 - y1;
  const adx = Math.abs(dx), ady = Math.abs(dy);
  if (adx < 1 || ady < 1) return [{ x: x1, y: y1 }, { x: x2, y: y2 }];
  if (adx >= ady) return [{ x: x1, y: y1 }, { x: x2, y: y1 }, { x: x2, y: y2 }];
  return [{ x: x1, y: y1 }, { x: x1, y: y2 }, { x: x2, y: y2 }];
}

function routeWirePoints(wire) {
  const fromComp = state.components[wire.from.compId];
  const toComp = state.components[wire.to.compId];
  const from = getTerminalAbsolute(fromComp, wire.from.pinIdx);
  const to = getTerminalAbsolute(toComp, wire.to.pinIdx);

  const wps = wire.waypoints || [];
  if (wps.length === 0) {
    return computeRoutePoints(from.x, from.y, to.x, to.y, wire.id);
  }

  const allPts = computeRoutePoints(from.x, from.y, wps[0].x, wps[0].y, wire.id);
  for (let i = 0; i < wps.length - 1; i++) {
    const seg = computeRoutePoints(wps[i].x, wps[i].y, wps[i+1].x, wps[i+1].y, wire.id);
    for (let j = 1; j < seg.length; j++) allPts.push(seg[j]);
  }
  const finalSeg = computeRoutePoints(wps[wps.length-1].x, wps[wps.length-1].y, to.x, to.y, wire.id);
  for (let j = 1; j < finalSeg.length; j++) allPts.push(finalSeg[j]);
  return allPts;
}

function routeOrthogonal(x1, y1, x2, y2, r) {
  return roundCorners(computeRoutePoints(x1, y1, x2, y2), r);
}

function routeWire(wire, r) {
  return roundCorners(routeWirePoints(wire), r);
}

function buildOrthoPath(x1, y1, x2, y2, r) {
  const dx = x2 - x1;
  const dy = y2 - y1;
  const adx = Math.abs(dx);
  const ady = Math.abs(dy);
  if (adx < 1 || ady < 1) {
    return `M ${x1} ${y1} L ${x2} ${y2}`;
  }
  r = Math.min(r, Math.min(adx, ady) / 2);
  const hDir = dx > 0 ? 1 : -1;
  const vDir = dy > 0 ? 1 : -1;
  if (adx >= ady) {
    const sweep = hDir === vDir ? 1 : 0;
    return `M ${x1} ${y1} L ${x2 - r * hDir} ${y1} A ${r} ${r} 0 0 ${sweep} ${x2} ${y1 + r * vDir} L ${x2} ${y2}`;
  } else {
    const sweep = vDir !== hDir ? 1 : 0;
    return `M ${x1} ${y1} L ${x1} ${y2 - r * vDir} A ${r} ${r} 0 0 ${sweep} ${x1 + r * hDir} ${y2} L ${x2} ${y2}`;
  }
}

function renderWires() {
  wiresLayer.innerHTML = '';
  for (const wire of state.wires) {
    if (wire._dirty || !wire.storedPath) {
      wire.storedPath = routeWirePoints(wire);
      wire._dirty = false;
    }

    const fromComp = state.components[wire.from.compId];
    const toComp = state.components[wire.to.compId];
    const from = getTerminalAbsolute(fromComp, wire.from.pinIdx);
    const to = getTerminalAbsolute(toComp, wire.to.pinIdx);
    wire.storedPath[0] = { x: from.x, y: from.y };
    wire.storedPath[wire.storedPath.length - 1] = { x: to.x, y: to.y };

    const pathStr = roundCorners(wire.storedPath, 14);
    const path = svg('path', { class: 'wire', d: pathStr, 'data-wire-id': wire.id });
    path.addEventListener('dblclick', () => deleteWire(wire.id));
    path.addEventListener('click', (e) => {
      e.stopPropagation();
      const rect = board.getBoundingClientRect();
      const mx = e.clientX - rect.left;
      const my = e.clientY - rect.top;
      const w = state.wires.find(x => x.id === wire.id);
      if (!w) return;
      if (!w.waypoints) w.waypoints = [];
      w.waypoints.push({ x: mx, y: my });
      w._dirty = true;
      renderAll();
      runSimulation();
    });
    wiresLayer.appendChild(path);

    // Waypoint handles
    const wps = wire.waypoints || [];
    for (let i = 0; i < wps.length; i++) {
      const h = svg('circle', { class: 'waypoint-handle', cx: wps[i].x, cy: wps[i].y, r: 5, 'data-wire-id': wire.id, 'data-wp-idx': i });
      h.addEventListener('dblclick', (e) => {
        e.stopPropagation();
        const w = state.wires.find(x => x.id === wire.id);
        if (!w || !w.waypoints) return;
        w.waypoints.splice(parseInt(h.dataset.wpIdx), 1);
        w._dirty = true;
        renderAll();
        runSimulation();
      });
      wiresLayer.appendChild(h);
    }
  }
}

function updateTerminalStyles() {
  // Mark connected terminals
  const connected = new Set();
  for (const w of state.wires) {
    connected.add(`${w.from.compId}:${w.from.pinIdx}`);
    connected.add(`${w.to.compId}:${w.to.pinIdx}`);
  }

  document.querySelectorAll('.terminal').forEach(el => {
    const key = `${el.dataset.compId}:${el.dataset.pinIdx}`;
    el.classList.toggle('connected', connected.has(key));
    el.classList.toggle('wire-start', state.wireStart !== null &&
      state.wireStart.compId === el.dataset.compId &&
      state.wireStart.pinIdx === parseInt(el.dataset.pinIdx));
  });
}

function updatePinUI() {
  for (let i = 0; i < 4; i++) {
    const el = document.getElementById(`pin${i}`);
    const pin = state.chipPins[i];
    const val = pin.value > 0 ? 'HIGH' : 'LOW';
    el.textContent = val;
    el.className = 'pin-val' + (pin.value > 0 ? ' high' : '');
  }
}

function updateBulbStates() {
  if (!state.simResult) return;
  const groups = state.simResult;

  document.querySelectorAll('.component-group.bulb-group').forEach(g => {
    const compId = g.dataset.compId;
    const comp = state.components[compId];
    if (!comp) return;

    const p1 = getTerminalAbsolute(comp, 0);
    const p2 = getTerminalAbsolute(comp, 1);

    const g1 = findGroup(groups, p1.x, p1.y);
    const g2 = findGroup(groups, p2.x, p2.y);

    const v1 = g1 !== null ? groups[g1].voltage : null;
    const v2 = g2 !== null ? groups[g2].voltage : null;

    // Both terminals must have a defined voltage AND differ — floating/floating or floating/0V won't light
    const on = v1 !== null && v2 !== null && Math.abs(v1 - v2) > 0.5;

    const glass = g.querySelector('.bulb-glass');
    const fil = g.querySelector('.bulb-filament');
    const glowRing = g.querySelector('.bulb-glow-ring');
    if (glass) glass.classList.toggle('on', on);
    if (fil) fil.classList.toggle('on', on);
    if (glowRing) glowRing.classList.toggle('on', on);
  });
}

function findGroup(groups, x, y) {
  for (const [key, g] of Object.entries(groups)) {
    // Check if any terminal in this group is at (x, y)
    for (const t of g.terminals) {
      if (Math.abs(t.x - x) < 0.1 && Math.abs(t.y - y) < 0.1) return key;
    }
  }
  return null;
}

// --- Union-Find for circuit simulation ---
class UnionFind {
  constructor(n) {
    this.parent = Array.from({ length: n }, (_, i) => i);
    this.rank = new Array(n).fill(0);
  }
  find(x) {
    if (this.parent[x] !== x) this.parent[x] = this.find(this.parent[x]);
    return this.parent[x];
  }
  union(x, y) {
    let px = this.find(x), py = this.find(y);
    if (px === py) return;
    if (this.rank[px] < this.rank[py]) [px, py] = [py, px];
    this.parent[py] = px;
    if (this.rank[px] === this.rank[py]) this.rank[px]++;
  }
}

function simulate() {
  const comps = Object.values(state.components);
  if (comps.length === 0) return null;

  // Collect all terminals
  const allTerminals = [];
  const terminalMap = {}; // "compId:pinIdx" -> index in allTerminals
  for (const comp of comps) {
    const def = COMPONENT_DEFS[comp.type];
    def.terminals.forEach((t, i) => {
      const idx = allTerminals.length;
      allTerminals.push({ compId: comp.id, pinIdx: i, ...getTerminalAbsolute(comp, i), role: t.role, pinIndex: t.pinIndex });
      terminalMap[`${comp.id}:${i}`] = idx;
    });
  }

  const uf = new UnionFind(allTerminals.length);

  // Union terminals connected by wires
  for (const w of state.wires) {
    const a = terminalMap[`${w.from.compId}:${w.from.pinIdx}`];
    const b = terminalMap[`${w.to.compId}:${w.to.pinIdx}`];
    if (a !== undefined && b !== undefined) uf.union(a, b);
  }

  // Group by root — start with null (floating) voltage
  const groups = {};
  for (let i = 0; i < allTerminals.length; i++) {
    const root = uf.find(i);
    if (!groups[root]) groups[root] = { terminals: [], voltage: null, sources: [] };
    groups[root].terminals.push(allTerminals[i]);
  }

  // Determine voltage of each group from sources
  for (const group of Object.values(groups)) {
    for (const t of group.terminals) {
      if (t.role === 'battery_plus') {
        group.voltage = 5;
        group.sources.push('battery');
      } else if (t.role === 'battery_minus') {
        group.voltage = 0;
        group.sources.push('battery');
      }
    }
  }

  // Check if chip is powered (VCC at 5V, GND at 0V from battery)
  state.chipPowered = false;
  let chipVccRoot = null, chipGndRoot = null;
  for (const comp of comps) {
    if (comp.type !== 'chip') continue;
    const def = COMPONENT_DEFS.chip;
    for (let i = 0; i < def.terminals.length; i++) {
      const t = def.terminals[i];
      if (t.role === 'vcc') chipVccRoot = uf.find(terminalMap[`${comp.id}:${i}`]);
      if (t.role === 'gnd') chipGndRoot = uf.find(terminalMap[`${comp.id}:${i}`]);
    }
  }
  if (chipVccRoot !== null && chipGndRoot !== null) {
    const vccGroup = groups[chipVccRoot];
    const gndGroup = groups[chipGndRoot];
    if (vccGroup && gndGroup) {
      state.chipPowered = vccGroup.voltage === 5 && gndGroup.voltage === 0;
    }
  }

  // Apply chip pin voltages (only when chip is powered and pin is set to OUTPUT)
  for (const group of Object.values(groups)) {
    for (const t of group.terminals) {
      if (t.role === 'pin' && state.chipPowered) {
        const pin = state.chipPins[t.pinIndex];
        if (pin && pin.mode === 'OUTPUT' && pin.value > 0) {
          group.voltage = 5;
          group.sources.push('chip');
        } else if (pin && pin.mode === 'OUTPUT' && pin.value === 0) {
          if (group.voltage === null) {
            group.voltage = 0;
            group.sources.push('chip');
          }
        }
      }
    }
  }

  // Ground check: log warnings about floating terminals
  const batteryPresent = Object.values(comps).some(c => c.type === 'battery');
  if (batteryPresent) {
    const gndGroups = new Set();
    for (const group of Object.values(groups)) {
      for (const t of group.terminals) {
        if (t.role === 'battery_minus') gndGroups.add(Object.keys(groups).find(k => groups[k] === group));
      }
    }
    for (const comp of comps) {
      if (comp.type === 'battery') continue;
      // Check bulb or chip: are both terminals connected to something?
      if (comp.type === 'bulb') {
        const def = COMPONENT_DEFS.bulb;
        for (let i = 0; i < def.terminals.length; i++) {
          const idx = terminalMap[`${comp.id}:${i}`];
          const root = uf.find(idx);
          const group = groups[root];
          // Terminal is floating if its group has only this one terminal and it's not connected to a source
          if (group.terminals.length === 1 && group.voltage === null) {
            const name = getCompName(comp);
            if (i === 0) log(`${name} + not connected to anything`, 'error');
            else log(`${name} - not connected to anything`, 'error');
          }
        }
      } else if (comp.type === 'chip') {
        const def = COMPONENT_DEFS.chip;
        for (let i = 0; i < def.terminals.length; i++) {
          const t = def.terminals[i];
          const name = getCompName(comp);
          if ((t.role === 'vcc' || t.role === 'gnd') && state.chipPowered === false) {
            const idx = terminalMap[`${comp.id}:${i}`];
            const root = uf.find(idx);
            const group = groups[root];
            if (group && group.voltage === null) {
              log(`${name} ${t.label} not connected — chip has no power`, 'error');
            }
          }
        }
      }
    }
  }

  return groups;
}

function getCompName(comp) {
  return comp.type.charAt(0).toUpperCase() + comp.type.slice(1);
}

// --- Component CRUD ---
function addComponent(type, x, y) {
  const id = `comp-${state.nextCompId++}`;
  state.components[id] = { id, type, x, y, rotation: 0 };
  renderAll();
  updateStatus(`Placed ${type}`);
  runSimulation();
  return id;
}

function moveComponent(id, x, y) {
  const comp = state.components[id];
  if (!comp) return;
  comp.x = x;
  comp.y = y;
  renderAll();
  runSimulation();
}

function deleteWire(wireId) {
  state.wires = state.wires.filter(w => w.id !== wireId);
  if (state.wireStart) state.wireStart = null;
  wirePreview.setAttribute('display', 'none');
  renderAll();
  updateStatus('Wire removed');
  runSimulation();
}

function clearBoard() {
  state.components = {};
  state.wires = [];
  state.nextCompId = 1;
  state.nextWireId = 1;
  state.wireStart = null;
  wirePreview.setAttribute('display', 'none');
  renderAll();
  runSimulation();
  updateStatus('Board cleared');
  stopCode();
  clearConsole();
}

// --- Simulation runner ---
let simTimeout = null;

function runSimulation() {
  if (simTimeout) clearTimeout(simTimeout);
  simTimeout = setTimeout(() => {
    state.simResult = simulate();
    updateBulbStates();
    simTimeout = null;
  }, 50);
}

// --- Drag & Drop from palette ---
document.querySelectorAll('.palette-item').forEach(item => {
  item.addEventListener('dragstart', e => {
    e.dataTransfer.setData('text/plain', item.dataset.type);
    e.dataTransfer.effectAllowed = 'copy';
    // Create ghost
    const ghost = document.createElement('div');
    ghost.className = 'drag-ghost';
    ghost.textContent = item.querySelector('.palette-icon').textContent;
    document.body.appendChild(ghost);
    e.dataTransfer.setDragImage(ghost, 20, 20);
    setTimeout(() => ghost.remove(), 0);
  });
});

board.addEventListener('dragover', e => {
  e.preventDefault();
  e.dataTransfer.dropEffect = 'copy';
  board.closest('.board-container')?.classList.add('drag-over');

  // Show preview at mouse position
  const rect = board.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;
  // Could show a ghost here
});

board.addEventListener('dragleave', e => {
  board.closest('.board-container')?.classList.remove('drag-over');
});

board.addEventListener('drop', e => {
  e.preventDefault();
  board.closest('.board-container')?.classList.remove('drag-over');

  const type = e.dataTransfer.getData('text/plain');
  if (!type || !COMPONENT_DEFS[type]) return;

  const rect = board.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  addComponent(type, x, y);
});

// --- Board interaction (wire mode, drag, select, rotate) ---
let isBoardDragging = false;
let dragCompId = null;
let dragStartX = 0, dragStartY = 0;
let compStartX = 0, compStartY = 0;
let hasMoved = false;
let wpDragging = null; // { wireId, wpIdx, startX, startY, origX, origY }

board.addEventListener('mousedown', e => {
  const rect = board.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  // Rotation handle click
  const handle = e.target.closest('.rotation-handle');
  if (handle) {
    const compId = handle.dataset.compId;
    const comp = state.components[compId];
    if (!comp) return;
    state.rotating = true;
    state.selectedCompId = compId;
    state.rotateStartAngle = Math.atan2(my - comp.y, mx - comp.x) * 180 / Math.PI;
    renderAll();
    return;
  }

  // Waypoint handle drag
  const wpHandle = e.target.closest('.waypoint-handle');
  if (wpHandle) {
    const wireId = wpHandle.dataset.wireId;
    const wpIdx = parseInt(wpHandle.dataset.wpIdx);
    const w = state.wires.find(x => x.id === wireId);
    if (!w || !w.waypoints || !w.waypoints[wpIdx]) return;
    wpDragging = { wireId, wpIdx, startX: e.clientX, startY: e.clientY, origX: w.waypoints[wpIdx].x, origY: w.waypoints[wpIdx].y };
    return;
  }

  // Terminal click (wire mode)
  const terminal = e.target.closest('.terminal');
  if (terminal && wireModeCheck.checked) {
    const compId = terminal.dataset.compId;
    const pinIdx = parseInt(terminal.dataset.pinIdx);
    handleWireClick(compId, pinIdx);
    return;
  }

  // Component click (select + prepare to drag)
  const compGroup = e.target.closest('.component-group');
  if (compGroup && !wireModeCheck.checked) {
    const compId = compGroup.dataset.compId;
    const comp = state.components[compId];
    if (!comp) return;
    state.selectedCompId = compId;
    renderAll();
    isBoardDragging = true;
    dragCompId = compId;
    dragStartX = e.clientX;
    dragStartY = e.clientY;
    compStartX = comp.x;
    compStartY = comp.y;
    hasMoved = false;
    return;
  }

  // Click on empty board — deselect
  state.selectedCompId = null;
  renderAll();

  if (wireModeCheck.checked && state.wireStart) {
    state.wireStart = null;
    wirePreview.setAttribute('display', 'none');
    updateTerminalStyles();
    updateStatus('Wire cancelled');
  }
});

board.addEventListener('mousemove', e => {
  const rect = board.getBoundingClientRect();
  const mx = e.clientX - rect.left;
  const my = e.clientY - rect.top;

  // Waypoint drag
  if (wpDragging) {
    const w = state.wires.find(x => x.id === wpDragging.wireId);
    if (w && w.waypoints) {
      w.waypoints[wpDragging.wpIdx] = { x: wpDragging.origX + (e.clientX - wpDragging.startX), y: wpDragging.origY + (e.clientY - wpDragging.startY) };
      w._dirty = true;
      renderAll();
      runSimulation();
    }
    return;
  }

  // Rotation
  if (state.rotating && state.selectedCompId) {
    const comp = state.components[state.selectedCompId];
    if (!comp) return;
    const currentAngle = Math.atan2(my - comp.y, mx - comp.x) * 180 / Math.PI;
    const delta = currentAngle - state.rotateStartAngle;
    comp.rotation = ((comp.rotation || 0) + delta) % 360;
    state.rotateStartAngle = currentAngle;
    renderAll();
    runSimulation();
    return;
  }

  // Wire preview
  if (state.wireStart && wireModeCheck.checked) {
    const from = getTerminalAbsolute(state.components[state.wireStart.compId], state.wireStart.pinIdx);
    const pathStr = routeOrthogonal(from.x, from.y, mx, my, 14);
    wirePreview.setAttribute('d', pathStr);
    wirePreview.setAttribute('display', '');
    return;
  }

  // Drag component
  if (isBoardDragging && dragCompId) {
    const dx = e.clientX - dragStartX;
    const dy = e.clientY - dragStartY;
    if (Math.abs(dx) > 3 || Math.abs(dy) > 3) hasMoved = true;
    if (hasMoved) {
      moveComponent(dragCompId, compStartX + dx, compStartY + dy);
    }
  }
});

board.addEventListener('mouseup', () => {
  if (state.rotating) {
    state.rotating = false;
    for (const wire of state.wires) {
      if (wire.from.compId === state.selectedCompId || wire.to.compId === state.selectedCompId) {
        wire._dirty = true;
      }
    }
    renderAll();
    runSimulation();
    return;
  }
  if (wpDragging) {
    wpDragging = null;
    return;
  }
  if (isBoardDragging && dragCompId && hasMoved) {
    updateStatus('Component moved');
    for (const wire of state.wires) {
      if (wire.from.compId === dragCompId || wire.to.compId === dragCompId) {
        wire._dirty = true;
      }
    }
    renderAll();
    runSimulation();
  }
  isBoardDragging = false;
  dragCompId = null;
});

board.addEventListener('mouseleave', () => {
  if (state.rotating) state.rotating = false;
  wpDragging = null;
  isBoardDragging = false;
  dragCompId = null;
});

// --- Wire mode ---
function handleWireClick(compId, pinIdx) {
  const comp = state.components[compId];
  if (!comp) return;

  if (!state.wireStart) {
    // Start wire
    state.wireStart = { compId, pinIdx };
    updateStatus(`Wire from ${comp.type} pin ${COMPONENT_DEFS[comp.type].terminals[pinIdx].label} — click another terminal`);
    updateTerminalStyles();
  } else {
    // Complete wire
    const start = state.wireStart;
    if (start.compId === compId && start.pinIdx === pinIdx) {
      // Same terminal, cancel
      state.wireStart = null;
      wirePreview.setAttribute('display', 'none');
      updateStatus('Wire cancelled');
      updateTerminalStyles();
      return;
    }

    const wireId = `wire-${state.nextWireId++}`;
    state.wires.push({ id: wireId, from: { ...start }, to: { compId, pinIdx }, waypoints: [], _dirty: true, _dirty: true });
    state.wireStart = null;
    wirePreview.setAttribute('display', 'none');
    renderAll();
    runSimulation();
    updateStatus('Wire connected');
  }
}

// --- Code execution ---
async function runCode() {
  if (state.running) return;

  // Reset pins
  for (let i = 0; i < 4; i++) {
    state.chipPins[i] = { mode: 'INPUT', value: 0 };
  }
  state.chipPowered = false;
  updatePinUI();

  const code = codeEditor.value.trim();
  if (!code) {
    log('No code to run', 'error');
    return;
  }

  clearConsole();
  state.running = true;
  state.abortController = new AbortController();
  runBtn.textContent = '⏳ Running...';
  runBtn.disabled = true;
  updateStatus('Running code...');

  // Log the code
  log('--- Running code ---', 'info');

  try {
    // Build the async function
    const fn = new AsyncFunction('pinMode', 'digitalWrite', 'digitalRead', 'delay', 'print', 'signal', 'OUTPUT', 'INPUT', 'HIGH', 'LOW', code);

    // Wait briefly then run simulation loop
    let simInterval = setInterval(() => {
      if (state.running) {
        runSimulation();
      }
    }, 100);

    const print = (msg) => log(String(msg), 'log');

    await fn(
      // pinMode
      (pin, mode) => {
        if (pin < 0 || pin > 3) { log(`Invalid pin ${pin}`, 'error'); return; }
        state.chipPins[pin].mode = mode;
        log(`pinMode(${pin}, ${mode})`, 'log');
      },
      // digitalWrite
      (pin, value) => {
        if (pin < 0 || pin > 3) { log(`Invalid pin ${pin}`, 'error'); return; }
        const v = value ? 1 : 0;
        state.chipPins[pin].value = v;
        log(`digitalWrite(${pin}, ${v ? 'HIGH' : 'LOW'})`, v ? 'success' : 'log');
        updatePinUI();
        runSimulation();
      },
      // digitalRead
      (pin) => {
        if (pin < 0 || pin > 3) { log(`Invalid pin ${pin}`, 'error'); return 0; }
        const val = state.chipPins[pin].value;
        log(`digitalRead(${pin}) → ${val ? 'HIGH' : 'LOW'}`, 'log');
        return val;
      },
      // delay
      (ms) => new Promise((resolve, reject) => {
        if (!state.running) { reject(new Error('Stopped')); return; }
        setTimeout(() => {
          if (!state.running) reject(new Error('Stopped'));
          else resolve();
        }, ms);
      }),
      // print
      print,
      // signal (abort signal)
      state.abortController.signal,
      // Constants
      'OUTPUT', 'INPUT', 1, 0
    );

    clearInterval(simInterval);
    if (state.running) {
      log('--- Code finished ---', 'success');
      updateStatus('Code finished');
    }
  } catch (err) {
    if (err.message === 'Stopped') {
      log('Code stopped', 'info');
      updateStatus('Code stopped');
    } else {
      log(`Error: ${err.message}`, 'error');
      updateStatus('Code error');
    }
  } finally {
    state.running = false;
    runBtn.textContent = '▶ Run';
    runBtn.disabled = false;
    runSimulation();
  }
}

function stopCode() {
  if (state.running) {
    state.running = false;
    if (state.abortController) {
      state.abortController.abort();
    }
    runBtn.textContent = '▶ Run';
    runBtn.disabled = false;
    log('Code stopped', 'info');
    updateStatus('Code stopped');
    runSimulation();
  }
}

// AsyncFunction constructor
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;

// --- Event listeners ---
runBtn.addEventListener('click', runCode);
stopBtn.addEventListener('click', stopCode);
clearBtn.addEventListener('click', clearBoard);

wireModeCheck.addEventListener('change', () => {
  if (!wireModeCheck.checked) {
    state.wireStart = null;
    wirePreview.setAttribute('display', 'none');
    updateTerminalStyles();
    updateStatus('Wire mode off');
  } else {
    updateStatus('Click a terminal to start a wire');
  }
});

// --- Initial state ---
log('Welcome to Circuit Game!', 'success');
log('Drag components from the left, toggle Wire mode to connect them.', 'log');

// Place initial components for demo
addComponent('battery', 140, 200);
addComponent('chip', 420, 200);
addComponent('bulb', 700, 200);

// Pre-wire a working circuit: battery -> chip -> bulb
const batteryId = 'comp-1';
const chipId = 'comp-2';
const bulbId = 'comp-3';

state.wires.push(
  // Battery (+) to Chip VCC (pin 0 = VCC on chip)
  { id: `wire-${state.nextWireId++}`, from: { compId: batteryId, pinIdx: 0 }, to: { compId: chipId, pinIdx: 1 }, waypoints: [], _dirty: true },
  // Battery (-) to Chip GND (pin 2 = GND on chip)
  { id: `wire-${state.nextWireId++}`, from: { compId: batteryId, pinIdx: 1 }, to: { compId: chipId, pinIdx: 2 }, waypoints: [], _dirty: true },
  // Chip D0 (pin 0) to Bulb (+) (pin 0)
  { id: `wire-${state.nextWireId++}`, from: { compId: chipId, pinIdx: 0 }, to: { compId: bulbId, pinIdx: 0 }, waypoints: [], _dirty: true },
  // Bulb (-) (pin 1) to Chip GND (pin 2)
  { id: `wire-${state.nextWireId++}`, from: { compId: bulbId, pinIdx: 1 }, to: { compId: chipId, pinIdx: 2 }, waypoints: [], _dirty: true },
);

renderAll();
runSimulation();

// Run the code automatically
setTimeout(() => {
  log('Pre-wired circuit detected. Running sample code...', 'info');
  runCode();
}, 300);
