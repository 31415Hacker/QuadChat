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

  const hw = COMPONENT_DEFS.battery.width / 2;
  const hh = COMPONENT_DEFS.battery.height / 2;

  // Rect around component (invisible, for dragging hit area)
  g.appendChild(svg('rect', { x: -hw, y: -hh, width: COMPONENT_DEFS.battery.width, height: COMPONENT_DEFS.battery.height, fill: 'transparent', stroke: 'none' }));

  // Battery body
  g.appendChild(svg('rect', { x: -8, y: -18, width: 16, height: 36, class: 'battery-body', rx: 2 }));
  g.appendChild(svg('line', { x1: 0, y1: -18, x2: 0, y2: -14, stroke: 'var(--text-secondary)', 'stroke-width': 2 }));
  g.appendChild(svg('line', { x1: 0, y1: 18, x2: 0, y2: 14, stroke: 'var(--text-secondary)', 'stroke-width': 2 }));

  // Big plate (-)
  g.appendChild(svg('line', { x1: -8, y1: 8, x2: 8, y2: 8, stroke: 'var(--text-primary)', 'stroke-width': 3 }));
  // Small plate (+)
  g.appendChild(svg('line', { x1: -5, y1: -8, x2: 5, y2: -8, stroke: 'var(--text-primary)', 'stroke-width': 2 }));

  // Label
  const lbl = svg('text', { class: 'battery-label', x: 0, y: hh + 12 });
  lbl.textContent = 'BAT';
  g.appendChild(lbl);

  // Terminals
  renderTerminals(g, comp, 'battery');
  return g;
}

function renderBulb(comp) {
  const g = svg('g', { class: 'component-group bulb-group', 'data-comp-id': comp.id });
  g.style.cursor = 'grab';

  const hw = COMPONENT_DEFS.bulb.width / 2;
  const hh = COMPONENT_DEFS.bulb.height / 2;

  g.appendChild(svg('rect', { x: -hw, y: -hh, width: COMPONENT_DEFS.bulb.width, height: COMPONENT_DEFS.bulb.height, fill: 'transparent', stroke: 'none' }));

  // Glass
  const glass = svg('circle', { class: 'bulb-glass', cx: 0, cy: -4, r: 14 });
  g.appendChild(glass);

  // Filament (X shape)
  const fil = svg('path', { class: 'bulb-filament', d: 'M-8,-8 L8,0 M-8,0 L8,-8' });
  g.appendChild(fil);

  // Base
  g.appendChild(svg('line', { x1: -6, y1: 10, x2: 6, y2: 10, stroke: 'var(--text-secondary)', 'stroke-width': 2 }));
  g.appendChild(svg('line', { x1: 0, y1: 10, x2: 0, y2: 18, stroke: 'var(--text-secondary)', 'stroke-width': 1.5 }));

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

  // Chip body
  const body = svg('rect', { class: 'chip-body', x: -hw + 8, y: -hh + 6, width: def.width - 16, height: def.height - 12 });
  g.appendChild(body);

  // Notch
  g.appendChild(svg('path', { d: `M-6,${-hh + 6} L6,${-hh + 6}`, stroke: 'var(--text-tertiary)', 'stroke-width': 1.5 }));

  // Label
  const lbl = svg('text', { class: 'chip-label', x: 0, y: 4 });
  lbl.textContent = 'CHIP';
  g.appendChild(lbl);

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

    // Label
    const lbl = svg('text', { class: `pin-text ${type === 'chip' && (t.role === 'vcc' || t.role === 'gnd' || t.role === 'pin') && state.chipPins[t.pinIndex]?.value > 0 ? 'high' : ''}`, x: t.dx, y: t.dy + (t.dy < 0 ? -8 : 16) });
    lbl.textContent = t.label;
    g.appendChild(lbl);
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

function renderWires() {
  wiresLayer.innerHTML = '';
  // Highlight existing wires
  const existing = new Set(state.wires.map(w => wireKey(w.from, w.to)));

  for (const wire of state.wires) {
    const from = getTerminalAbsolute(state.components[wire.from.compId], wire.from.pinIdx);
    const to = getTerminalAbsolute(state.components[wire.to.compId], wire.to.pinIdx);
    const line = svg('line', {
      class: 'wire',
      x1: from.x, y1: from.y, x2: to.x, y2: to.y,
      'data-wire-id': wire.id,
    });
    line.addEventListener('dblclick', () => deleteWire(wire.id));
    wiresLayer.appendChild(line);
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
    if (glass) glass.classList.toggle('on', on);
    if (fil) fil.classList.toggle('on', on);
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
    wirePreview.setAttribute('x1', from.x);
    wirePreview.setAttribute('y1', from.y);
    wirePreview.setAttribute('x2', mx);
    wirePreview.setAttribute('y2', my);
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
    return;
  }
  if (isBoardDragging && dragCompId && hasMoved) {
    updateStatus('Component moved');
  }
  isBoardDragging = false;
  dragCompId = null;
});

board.addEventListener('mouseleave', () => {
  if (state.rotating) state.rotating = false;
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
    state.wires.push({ id: wireId, from: { ...start }, to: { compId, pinIdx } });
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
  { id: `wire-${state.nextWireId++}`, from: { compId: batteryId, pinIdx: 0 }, to: { compId: chipId, pinIdx: 1 } },
  // Battery (-) to Chip GND (pin 2 = GND on chip)
  { id: `wire-${state.nextWireId++}`, from: { compId: batteryId, pinIdx: 1 }, to: { compId: chipId, pinIdx: 2 } },
  // Chip D0 (pin 0) to Bulb (+) (pin 0)
  { id: `wire-${state.nextWireId++}`, from: { compId: chipId, pinIdx: 0 }, to: { compId: bulbId, pinIdx: 0 } },
  // Bulb (-) (pin 1) to Chip GND (pin 2)
  { id: `wire-${state.nextWireId++}`, from: { compId: bulbId, pinIdx: 1 }, to: { compId: chipId, pinIdx: 2 } },
);

renderAll();
runSimulation();

// Run the code automatically
setTimeout(() => {
  log('Pre-wired circuit detected. Running sample code...', 'info');
  runCode();
}, 300);
