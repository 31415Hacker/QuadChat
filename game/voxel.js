import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.166.1/build/three.module.js';

const BLOCKS = [
  { id: 'grass', label: 'Grass', color: 0x58a64b },
  { id: 'dirt', label: 'Dirt', color: 0x8b5a35 },
  { id: 'stone', label: 'Stone', color: 0x81878b },
  { id: 'wood', label: 'Wood', color: 0x9a6738 },
  { id: 'glass', label: 'Glass', color: 0x9de6f2, transparent: true },
  { id: 'piston', label: 'Piston', color: 0xb6a68a },
  { id: 'chip', label: 'Chip', color: 0x504b82 },
  { id: 'redstone', label: 'Redstone', color: 0x751b28 }
];
const BLOCK_BY_ID = Object.fromEntries(BLOCKS.map((block) => [block.id, block]));
const WORLD_SIZE = 24;
const WORLD_HEIGHT = 10;
const PLAYER_WIDTH = 0.6;
const PLAYER_HEIGHT = 1.8;
const PLAYER_EYE_HEIGHT = 1.6;
const world = new Map();
const blockGroups = new Map();
const pistonChannels = new Map();
const pistonPowered = new Map();
const redstoneWireGroup = new THREE.Group();
const blockGeometry = new THREE.BoxGeometry(1, 1, 1);
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x87ceeb);
scene.fog = new THREE.Fog(0x87ceeb, 18, 48);
const camera = new THREE.PerspectiveCamera(72, innerWidth / innerHeight, 0.05, 100);
camera.position.set(0, 6, 8);
const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setPixelRatio(Math.min(devicePixelRatio, 2));
renderer.setSize(innerWidth, innerHeight);
renderer.shadowMap.enabled = true;
document.body.appendChild(renderer.domElement);

scene.add(new THREE.HemisphereLight(0xd9f4ff, 0x526044, 2.2));
const sun = new THREE.DirectionalLight(0xfff1cf, 2.2);
sun.position.set(-12, 22, 10);
sun.castShadow = true;
scene.add(sun);
scene.add(redstoneWireGroup);

const materials = Object.fromEntries(BLOCKS.map((block) => [block.id, new THREE.MeshLambertMaterial({
  color: block.color,
  transparent: !!block.transparent,
  opacity: block.transparent ? 0.45 : 1
})]));
const pistonBodyMaterial = new THREE.MeshLambertMaterial({ color: 0x8d887b });
const pistonBandMaterial = new THREE.MeshLambertMaterial({ color: 0x4f514e });
const pistonFaceMaterial = new THREE.MeshLambertMaterial({ color: 0xb68a52 });
const pistonHeadMaterial = new THREE.MeshLambertMaterial({ color: 0x6f9b9a });
const redstoneOffMaterial = new THREE.MeshLambertMaterial({ color: 0x4a1119 });
const redstoneOnMaterial = new THREE.MeshLambertMaterial({ color: 0xff263d, emissive: 0x7c0817, emissiveIntensity: 1.5 });
const outline = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.02, 1.02, 1.02)),
  new THREE.LineBasicMaterial({ color: 0xffffff })
);
outline.visible = false;
scene.add(outline);

let selectedBlock = 0;
let chip = { pins: { 0: { value: 1 }, 1: { value: 0 }, 2: { value: 0 }, 3: { value: 0 } } };
let pistonCount = 0;
let yaw = 0;
let pitch = 0;
let locked = false;
const keys = new Set();
const velocity = new THREE.Vector3();
let grounded = false;
const raycaster = new THREE.Raycaster();
const center = new THREE.Vector2(0, 0);
const chipStatus = document.getElementById('chipStatus');
const inventory = Object.fromEntries(BLOCKS.map((block) => [block.id, 64]));

function key(x, y, z) { return `${x},${y},${z}`; }
function setBlock(x, y, z, type) { world.set(key(x, y, z), { x, y, z, type }); }
function getBlock(x, y, z) { return world.get(key(x, y, z)); }

function terrainHeight(x, z) {
  return 2 + Math.max(0, Math.round(Math.sin(x * 0.45) * 0.7 + Math.cos(z * 0.35) * 0.7));
}

function buildWorld() {
  for (let x = -WORLD_SIZE / 2; x < WORLD_SIZE / 2; x += 1) {
    for (let z = -WORLD_SIZE / 2; z < WORLD_SIZE / 2; z += 1) {
      const height = terrainHeight(x, z);
      for (let y = 0; y <= height; y += 1) {
        setBlock(x, y, z, y === height ? 'grass' : y === height - 1 ? 'dirt' : 'stone');
      }
      if ((Math.abs(x * 7 + z * 11) % 29) === 0 && height < 4) {
        for (let y = height + 1; y < height + 4; y += 1) setBlock(x, y, z, 'wood');
        for (let ox = -1; ox <= 1; ox += 1) for (let oz = -1; oz <= 1; oz += 1) {
          setBlock(x + ox, height + 4, z + oz, 'leaves');
        }
      }
    }
  }
  for (const block of world.values()) addBlockMesh(block);
}

function makeMesh(block) {
  const material = block.type === 'piston'
    ? pistonBodyMaterial
    : materials[block.type] || new THREE.MeshLambertMaterial({ color: 0x4d8f51 });
  const mesh = new THREE.Mesh(blockGeometry, material);
  mesh.position.set(block.x, block.y, block.z);
  mesh.castShadow = true;
  mesh.receiveShadow = true;
  mesh.userData.block = block;
  return mesh;
}

function addBlockMesh(block) {
  if (block.type === 'leaves' && !materials.leaves) {
    materials.leaves = new THREE.MeshLambertMaterial({ color: 0x3d8b48, transparent: true, opacity: 0.85 });
  }
  const group = new THREE.Group();
  const base = makeMesh(block);
  group.add(base);
  if (block.type === 'piston') {
    const channel = pistonCount++ % 4;
    pistonChannels.set(key(block.x, block.y, block.z), channel);
    pistonPowered.set(key(block.x, block.y, block.z), false);
    const band = new THREE.Mesh(new THREE.BoxGeometry(0.78, 0.78, 0.08), pistonBandMaterial);
    band.position.set(0, 0, 0.45);
    group.add(band);
    const rod = new THREE.Mesh(new THREE.BoxGeometry(0.24, 0.24, 0.62), pistonHeadMaterial);
    rod.position.set(0, 0, 0.58);
    group.add(rod);
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.82, 0.82, 0.12), pistonFaceMaterial);
    head.position.set(0, 0, 0.56);
    head.userData.block = block;
    head.userData.pistonHead = true;
    group.add(head);
    group.userData.pistonRod = rod;
    group.userData.pistonHead = head;
  }
  if (block.type === 'chip') {
    const chipTop = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.08, 0.72), new THREE.MeshLambertMaterial({ color: 0x332d5e }));
    chipTop.position.y = 0.5;
    group.add(chipTop);
    for (let i = -1; i <= 1; i += 1) {
      const pin = new THREE.Mesh(new THREE.BoxGeometry(0.08, 0.08, 0.2), pistonBandMaterial);
      pin.position.set(i * 0.22, 0.53, 0.42);
      group.add(pin);
    }
  }
  if (block.type === 'redstone') {
    const node = new THREE.Mesh(new THREE.CylinderGeometry(0.18, 0.18, 0.08, 8), redstoneOffMaterial.clone());
    node.position.y = 0.54;
    group.add(node);
    group.userData.redstoneNode = node;
  }
  group.position.set(0, 0, 0);
  blockGroups.set(key(block.x, block.y, block.z), group);
  scene.add(group);
}

function removeBlockMesh(blockKey) {
  const group = blockGroups.get(blockKey);
  if (!group) return;
  scene.remove(group);
  blockGroups.delete(blockKey);
  pistonChannels.delete(blockKey);
  pistonPowered.delete(blockKey);
}

function adjacentBlocks(block) {
  return [
    getBlock(block.x + 1, block.y, block.z),
    getBlock(block.x - 1, block.y, block.z),
    getBlock(block.x, block.y + 1, block.z),
    getBlock(block.x, block.y - 1, block.z),
    getBlock(block.x, block.y, block.z + 1),
    getBlock(block.x, block.y, block.z - 1)
  ].filter(Boolean);
}

function redstoneNetworkPowered(startBlock) {
  if (!startBlock) return false;
  const queue = adjacentBlocks(startBlock).filter((block) => block.type === 'redstone');
  const visited = new Set(queue.map((block) => key(block.x, block.y, block.z)));
  while (queue.length) {
    const current = queue.shift();
    if (adjacentBlocks(current).some((block) => block.type === 'chip' && chip.pins[0]?.value > 0)) return true;
    adjacentBlocks(current).filter((block) => block.type === 'redstone').forEach((block) => {
      const blockKey = key(block.x, block.y, block.z);
      if (!visited.has(blockKey)) {
        visited.add(blockKey);
        queue.push(block);
      }
    });
  }
  return false;
}

function addRedstoneWire(a, b, powered) {
  const start = new THREE.Vector3(a.x, a.y + 0.56, a.z);
  const end = new THREE.Vector3(b.x, b.y + 0.56, b.z);
  const midpoint = start.clone().lerp(end, 0.5);
  midpoint.y += 0.24;
  const curve = new THREE.CatmullRomCurve3([start, midpoint, end]);
  const geometry = new THREE.TubeGeometry(curve, 8, 0.055, 6, false);
  redstoneWireGroup.add(new THREE.Mesh(geometry, powered ? redstoneOnMaterial : redstoneOffMaterial));
}

function renderRedstoneWires() {
  redstoneWireGroup.clear();
  const directions = [[1, 0, 0], [0, 0, 1], [-1, 0, 0], [0, 0, -1]];
  for (const block of world.values()) {
    if (block.type !== 'redstone') continue;
    const powered = redstoneNetworkPowered(block);
    const group = blockGroups.get(key(block.x, block.y, block.z));
    if (group?.userData.redstoneNode) group.userData.redstoneNode.material = powered ? redstoneOnMaterial : redstoneOffMaterial;
    directions.forEach(([dx, dy, dz]) => {
      const other = getBlock(block.x + dx, block.y + dy, block.z + dz);
      if (!other || !['redstone', 'chip', 'piston'].includes(other.type)) return;
      const currentKey = key(block.x, block.y, block.z);
      const otherKey = key(other.x, other.y, other.z);
      if (other.type === 'redstone' && currentKey > otherKey) return;
      addRedstoneWire(block, other, powered);
    });
  }
}

function pushBlockForward(blockKey) {
  const piston = getBlock(...blockKey.split(',').map(Number));
  if (!piston) return;
  const blocksToPush = [];
  for (let distance = 1; distance <= 12; distance += 1) {
    const target = getBlock(piston.x, piston.y, piston.z + distance);
    if (!target) break;
    if (target.type === 'piston') return;
    blocksToPush.push(target);
  }
  if (!blocksToPush.length || getBlock(piston.x, piston.y, piston.z + blocksToPush.length + 1)) return;

  for (let i = blocksToPush.length - 1; i >= 0; i -= 1) {
    const target = blocksToPush[i];
    const targetKey = key(target.x, target.y, target.z);
    removeBlockMesh(targetKey);
    world.delete(targetKey);
    target.z += 1;
    setBlock(target.x, target.y, target.z, target.type);
    addBlockMesh(target);
  }
}

function refreshPistons() {
  for (const [blockKey, channel] of pistonChannels) {
    const group = blockGroups.get(blockKey);
    if (!group?.userData.pistonHead) continue;
    const powered = chip.pins[channel]?.value > 0 && redstoneNetworkPowered(getBlock(...blockKey.split(',').map(Number)));
    const wasPowered = pistonPowered.get(blockKey) === true;
    if (powered && !wasPowered) pushBlockForward(blockKey);
    pistonPowered.set(blockKey, powered);
    group.userData.pistonRod.position.z = powered ? 0.82 : 0.58;
    group.userData.pistonRod.scale.z = powered ? 1.8 : 1;
    group.userData.pistonHead.position.z = powered ? 1.08 : 0.56;
  }
  renderRedstoneWires();
  chipStatus.textContent = `Chip connected · D0 ${chip.pins[0]?.value ? 'HIGH' : 'LOW'} · D1 ${chip.pins[1]?.value ? 'HIGH' : 'LOW'} · D2 ${chip.pins[2]?.value ? 'HIGH' : 'LOW'} · D3 ${chip.pins[3]?.value ? 'HIGH' : 'LOW'}`;
}

function loadChip() {
  try {
    const saved = JSON.parse(localStorage.getItem('quadchat-chip') || 'null');
    if (new URLSearchParams(location.search).has('fromCircuit') && saved?.pins) chip = saved;
  } catch (_) { /* Keep the default LOW chip. */ }
  refreshPistons();
}

function createDefaultCircuit() {
  const chipBlock = { x: 0, y: 4, z: -2, type: 'chip' };
  const redstoneBlock = { x: 0, y: 4, z: -1, type: 'redstone' };
  const pistonBlock = { x: 0, y: 4, z: 0, type: 'piston' };
  setBlock(chipBlock.x, chipBlock.y, chipBlock.z, chipBlock.type);
  setBlock(redstoneBlock.x, redstoneBlock.y, redstoneBlock.z, redstoneBlock.type);
  setBlock(pistonBlock.x, pistonBlock.y, pistonBlock.z, pistonBlock.type);
  addBlockMesh(chipBlock);
  addBlockMesh(redstoneBlock);
  addBlockMesh(pistonBlock);
}

function getTarget() {
  raycaster.setFromCamera(center, camera);
  const hits = raycaster.intersectObjects([...blockGroups.values()], true);
  return hits[0] || null;
}

function mine() {
  const hit = getTarget();
  const block = hit?.object.userData.block;
  if (!block || block.y === 0) return;
  const blockKey = key(block.x, block.y, block.z);
  removeBlockMesh(blockKey);
  world.delete(blockKey);
  if (inventory[block.type] !== undefined) inventory[block.type] += 1;
  updateHotbar();
  refreshPistons();
}

function place() {
  const hit = getTarget();
  const block = hit?.object.userData.block;
  if (!block) return;
  const normal = hit.face.normal.clone();
  const x = block.x + Math.round(normal.x);
  const y = block.y + Math.round(normal.y);
  const z = block.z + Math.round(normal.z);
  if (y < 0 || y >= WORLD_HEIGHT || getBlock(x, y, z)) return;
  const type = BLOCKS[selectedBlock].id;
  if (inventory[type] <= 0) return;
  const newBlock = { x, y, z, type };
  setBlock(x, y, z, type);
  addBlockMesh(newBlock);
  inventory[type] -= 1;
  updateHotbar();
  refreshPistons();
}

function updateHotbar() {
  const hotbar = document.getElementById('hotbar');
  hotbar.innerHTML = BLOCKS.map((block, index) => `<div class="hotbar-slot${index === selectedBlock ? ' selected' : ''}"><div class="hotbar-swatch" style="background:#${block.color.toString(16).padStart(6, '0')}"></div>${index + 1}: ${block.label}<b>x${inventory[block.id]}</b></div>`).join('');
  document.getElementById('blockHint').textContent = `Selected: ${BLOCKS[selectedBlock].label} x${inventory[BLOCKS[selectedBlock].id]}`;
}

function playerCollidesAt(position) {
  const halfWidth = PLAYER_WIDTH / 2;
  const minX = position.x - halfWidth;
  const maxX = position.x + halfWidth;
  const minY = position.y - PLAYER_EYE_HEIGHT;
  const maxY = minY + PLAYER_HEIGHT;
  const minZ = position.z - halfWidth;
  const maxZ = position.z + halfWidth;

  for (let x = Math.floor(minX - 0.5); x <= Math.floor(maxX + 0.5); x += 1) {
    for (let y = Math.floor(minY - 0.5); y <= Math.floor(maxY + 0.5); y += 1) {
      for (let z = Math.floor(minZ - 0.5); z <= Math.floor(maxZ + 0.5); z += 1) {
        const block = getBlock(x, y, z);
        if (!block) continue;
        if (
          maxX > x - 0.5 && minX < x + 0.5 &&
          maxY > y - 0.5 && minY < y + 0.5 &&
          maxZ > z - 0.5 && minZ < z + 0.5
        ) return true;
      }
    }
  }
  return false;
}

function movePlayerAxis(axis, distance) {
  const steps = Math.max(1, Math.ceil(Math.abs(distance) / 0.08));
  const step = distance / steps;
  for (let i = 0; i < steps; i += 1) {
    const next = camera.position.clone();
    next[axis] += step;
    if (playerCollidesAt(next)) {
      if (axis === 'y') {
        if (step < 0) grounded = true;
        velocity.y = 0;
      }
      return;
    }
    camera.position.copy(next);
    if (axis === 'y') grounded = false;
  }
}

function movePlayer(delta) {
  const direction = new THREE.Vector3(
    (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0),
    0,
    (keys.has('KeyS') ? 1 : 0) - (keys.has('KeyW') ? 1 : 0)
  );
  if (direction.lengthSq()) {
    direction.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    movePlayerAxis('x', direction.x * delta * 7);
    movePlayerAxis('z', direction.z * delta * 7);
  }
  velocity.y -= delta * 20;
  movePlayerAxis('y', velocity.y * delta);
}

function animate() {
  requestAnimationFrame(animate);
  const delta = Math.min(clock.getDelta(), 0.05);
  movePlayer(delta);
  camera.rotation.set(pitch, yaw, 0, 'YXZ');
  const target = getTarget();
  if (target) {
    outline.visible = true;
    outline.position.copy(target.object.userData.block);
  } else outline.visible = false;
  renderer.render(scene, camera);
}

const clock = new THREE.Clock();
buildWorld();
createDefaultCircuit();
loadChip();
updateHotbar();
document.getElementById('reloadChipBtn').addEventListener('click', loadChip);
renderer.domElement.addEventListener('click', () => renderer.domElement.requestPointerLock());
renderer.domElement.addEventListener('contextmenu', (event) => event.preventDefault());
renderer.domElement.addEventListener('mousedown', (event) => {
  if (!locked) return;
  if (event.button === 0) mine();
  if (event.button === 2) place();
});
document.addEventListener('pointerlockchange', () => { locked = document.pointerLockElement === renderer.domElement; });
document.addEventListener('mousemove', (event) => {
  if (!locked) return;
  yaw -= event.movementX * 0.0022;
  pitch -= event.movementY * 0.0022;
  pitch = Math.max(-Math.PI / 2.1, Math.min(Math.PI / 2.1, pitch));
});
document.addEventListener('keydown', (event) => {
  keys.add(event.code);
  if (event.code.startsWith('Digit')) {
    const index = Number(event.code.slice(5)) - 1;
    if (index >= 0 && index < BLOCKS.length) {
      selectedBlock = index;
      updateHotbar();
    }
  }
  if (event.code === 'Space' && grounded) {
    velocity.y = 8;
    grounded = false;
  }
});
document.addEventListener('keyup', (event) => keys.delete(event.code));
window.addEventListener('resize', () => {
  camera.aspect = innerWidth / innerHeight;
  camera.updateProjectionMatrix();
  renderer.setSize(innerWidth, innerHeight);
});
animate();
