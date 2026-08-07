import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.166.1/build/three.module.js';

const BLOCKS = [
  { id: 'grass', label: 'Grass', color: 0x58a64b },
  { id: 'dirt', label: 'Dirt', color: 0x8b5a35 },
  { id: 'stone', label: 'Stone', color: 0x81878b },
  { id: 'wood', label: 'Wood', color: 0x9a6738 },
  { id: 'glass', label: 'Glass', color: 0x9de6f2, transparent: true },
  { id: 'piston', label: 'Piston', color: 0xb6a68a }
];
const BLOCK_BY_ID = Object.fromEntries(BLOCKS.map((block) => [block.id, block]));
const WORLD_SIZE = 24;
const WORLD_HEIGHT = 10;
const world = new Map();
const blockGroups = new Map();
const pistonChannels = new Map();
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

const materials = Object.fromEntries(BLOCKS.map((block) => [block.id, new THREE.MeshLambertMaterial({
  color: block.color,
  transparent: !!block.transparent,
  opacity: block.transparent ? 0.45 : 1
})]));
const pistonHeadMaterial = new THREE.MeshLambertMaterial({ color: 0x6f9b9a });
const outline = new THREE.LineSegments(
  new THREE.EdgesGeometry(new THREE.BoxGeometry(1.02, 1.02, 1.02)),
  new THREE.LineBasicMaterial({ color: 0xffffff })
);
outline.visible = false;
scene.add(outline);

let selectedBlock = 0;
let chip = { pins: { 0: { value: 0 }, 1: { value: 0 }, 2: { value: 0 }, 3: { value: 0 } } };
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
  const material = materials[block.type] || new THREE.MeshLambertMaterial({ color: 0x4d8f51 });
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
    const head = new THREE.Mesh(new THREE.BoxGeometry(0.72, 0.72, 0.28), pistonHeadMaterial);
    head.position.set(0, 0, 0.5);
    head.userData.block = block;
    head.userData.pistonHead = true;
    group.add(head);
    group.userData.pistonHead = head;
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
}

function refreshPistons() {
  for (const [blockKey, channel] of pistonChannels) {
    const group = blockGroups.get(blockKey);
    if (!group?.userData.pistonHead) continue;
    const powered = chip.pins[channel]?.value > 0;
    group.userData.pistonHead.position.z = powered ? 1.05 : 0.5;
  }
  chipStatus.textContent = `Chip connected · D0 ${chip.pins[0]?.value ? 'HIGH' : 'LOW'} · D1 ${chip.pins[1]?.value ? 'HIGH' : 'LOW'} · D2 ${chip.pins[2]?.value ? 'HIGH' : 'LOW'} · D3 ${chip.pins[3]?.value ? 'HIGH' : 'LOW'}`;
}

function loadChip() {
  try {
    const saved = JSON.parse(localStorage.getItem('quadchat-chip') || 'null');
    if (saved?.pins) chip = saved;
  } catch (_) { /* Keep the default LOW chip. */ }
  refreshPistons();
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
  const newBlock = { x, y, z, type };
  setBlock(x, y, z, type);
  addBlockMesh(newBlock);
  refreshPistons();
}

function updateHotbar() {
  const hotbar = document.getElementById('hotbar');
  hotbar.innerHTML = BLOCKS.map((block, index) => `<div class="hotbar-slot${index === selectedBlock ? ' selected' : ''}"><div class="hotbar-swatch" style="background:#${block.color.toString(16).padStart(6, '0')}"></div>${index + 1}: ${block.label}</div>`).join('');
  document.getElementById('blockHint').textContent = `Selected: ${BLOCKS[selectedBlock].label}`;
}

function movePlayer(delta) {
  const direction = new THREE.Vector3(
    (keys.has('KeyD') ? 1 : 0) - (keys.has('KeyA') ? 1 : 0),
    0,
    (keys.has('KeyS') ? 1 : 0) - (keys.has('KeyW') ? 1 : 0)
  );
  if (direction.lengthSq()) {
    direction.normalize().applyAxisAngle(new THREE.Vector3(0, 1, 0), yaw);
    camera.position.addScaledVector(direction, delta * 7);
  }
  velocity.y -= delta * 20;
  camera.position.y += velocity.y * delta;
  if (camera.position.y < 4.2) {
    camera.position.y = 4.2;
    velocity.y = 0;
    grounded = true;
  }
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
