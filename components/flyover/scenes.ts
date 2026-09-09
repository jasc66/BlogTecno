/**
 * Escenas del corredor de datos de TechInsight.
 *
 * Cada builder recibe `(materials, textures, { rng, performance, palette })` y
 * devuelve un THREE.Group. `rng` es la ÚNICA fuente de aleatoriedad permitida:
 * con Math.random() la página se vería distinta en cada recarga y ningún
 * screenshot coincidiría con la web en vivo.
 *
 * Vocabulario compartido (lenguaje "geometric/architectural", acorde al grid
 * técnico del blog): anillo de túnel, torre de datos, panel flotante, nodo.
 * La variedad viene de la disposición, nunca de inventar formas nuevas por escena.
 */
import * as THREE from 'three'
import { RoundedBoxGeometry } from 'three/examples/jsm/geometries/RoundedBoxGeometry.js'

type Rng = () => number

export interface BuildOptions {
  shapeLanguage: string
  performance: 'rich' | 'light'
  rng: Rng
  palette: { colors: string[]; accent: string }
}

type Builder = (
  materials: THREE.MeshStandardMaterial[],
  textures: Record<string, THREE.Texture | null>,
  options: BuildOptions,
) => THREE.Group

/** Índices con nombre sobre la paleta, para que los builders no usen números mágicos. */
const DEEP = 0 // #0a0a0a — casco del túnel
const SLATE = 1 // #111827 — estructura
const STEEL = 2 // #1f2937 — paneles
const MINT = 3 // #4ade80 — detalle vivo
const ACCENT = 4 // #16a34a — verde de marca

/**
 * Fresnel de borde: el truco más barato para que un prop se vea caro.
 * Se usa en UN solo prop — el núcleo de la escena pico (materials.md §4).
 */
function makeFresnelMaterial(accentHex: string, power = 2.4) {
  return new THREE.ShaderMaterial({
    uniforms: {
      uColor: { value: new THREE.Color(accentHex) },
      uPower: { value: power },
    },
    vertexShader: `
      varying vec3 vNormal; varying vec3 vView;
      void main(){
        vNormal = normalize(normalMatrix * normal);
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vView = normalize(-mv.xyz);
        gl_Position = projectionMatrix * mv;
      }`,
    fragmentShader: `
      uniform vec3 uColor; uniform float uPower;
      varying vec3 vNormal; varying vec3 vView;
      void main(){
        float rim = pow(1.0 - max(dot(vNormal, vView), 0.0), uPower);
        gl_FragColor = vec4(uColor * rim, rim);
      }`,
    transparent: true,
    blending: THREE.AdditiveBlending,
    depthWrite: false,
  })
}

/**
 * Segmento de túnel: el casco que da la sensación de vuelo hacia adelante.
 * En el arquetipo corredor la geometría del túnel hace el trabajo visual, así
 * que cada escena aporta el suyo y los props pueden ser pocos.
 */
function buildTunnelRing(materials: THREE.MeshStandardMaterial[], rng: Rng, ribs: number) {
  const g = new THREE.Group()

  // Casco exterior: cilindro abierto visto desde dentro.
  const shell = new THREE.Mesh(
    new THREE.CylinderGeometry(11, 11, 30, 12, 1, true),
    new THREE.MeshStandardMaterial({
      color: materials[SLATE].color,
      side: THREE.BackSide,
      roughness: 0.45,
      metalness: 0.35,
      envMapIntensity: 0.7,
    }),
  )
  shell.rotation.z = Math.PI / 2 // eje del túnel sobre X, que es por donde avanza el vuelo
  shell.receiveShadow = true
  g.add(shell)

  // Costillas: marcan la velocidad al pasar. Toros finos espaciados a lo largo del eje.
  const ribGeo = new THREE.TorusGeometry(10.4, 0.16, 6, 24)
  for (let i = 0; i < ribs; i++) {
    const rib = new THREE.Mesh(ribGeo, materials[STEEL])
    rib.position.x = -14 + (i / (ribs - 1)) * 28
    rib.rotation.y = Math.PI / 2
    rib.rotation.z = rng() * 0.4
    g.add(rib)
  }
  return g
}

/** Torre de datos: pila de bloques biselados que se estrecha al subir. */
function buildDataTower(
  floors: number,
  size: number,
  material: THREE.MeshStandardMaterial,
  rng: Rng,
) {
  const g = new THREE.Group()
  for (let i = 0; i < floors; i++) {
    const s = size * (1 - i * 0.06)
    // RoundedBoxGeometry en vez de BoxGeometry: una esquina de 90° perfecta es
    // justo lo que hace que el 3D procedural se lea como tutorial.
    const slab = new THREE.Mesh(
      new RoundedBoxGeometry(s, size * 0.34, s, 3, size * 0.03),
      material,
    )
    slab.position.y = i * size * 0.42
    slab.rotation.y = rng() * 0.5
    slab.castShadow = true
    slab.receiveShadow = true
    g.add(slab)
  }
  return g
}

/** Panel flotante: un "artículo" del blog como objeto físico en el túnel. */
function buildPanel(w: number, h: number, material: THREE.MeshStandardMaterial) {
  const panel = new THREE.Mesh(new RoundedBoxGeometry(w, h, 0.12, 3, 0.05), material)
  panel.castShadow = true
  return panel
}

/**
 * Silueta que NO es una primitiva de Three.js (visual-fidelity.md §3): un
 * hexágono extruido con bisel. Es el motivo de firma del build — el "nodo" que
 * se repite en varias escenas y hace que el mundo se lea como un solo lugar.
 */
function buildNode(radius: number, depth: number, material: THREE.MeshStandardMaterial) {
  const shape = new THREE.Shape()
  for (let i = 0; i < 6; i++) {
    const a = (i / 6) * Math.PI * 2
    const x = Math.cos(a) * radius
    const y = Math.sin(a) * radius
    if (i === 0) shape.moveTo(x, y)
    else shape.lineTo(x, y)
  }
  shape.closePath()
  const geo = new THREE.ExtrudeGeometry(shape, {
    depth,
    bevelEnabled: true,
    bevelThickness: radius * 0.08,
    bevelSize: radius * 0.08,
    bevelSegments: 3,
  })
  geo.center()
  const mesh = new THREE.Mesh(geo, material)
  mesh.castShadow = true
  return mesh
}

/** Enjambre de nodos pequeños vía InstancedMesh — nunca clonar mallas en bucle. */
function buildNodeSwarm(
  count: number,
  spread: number,
  material: THREE.MeshStandardMaterial,
  rng: Rng,
) {
  const mesh = new THREE.InstancedMesh(new THREE.IcosahedronGeometry(0.16, 0), material, count)
  const dummy = new THREE.Object3D()
  for (let i = 0; i < count; i++) {
    const angle = rng() * Math.PI * 2
    const r = 3 + rng() * spread
    dummy.position.set((rng() - 0.5) * 22, Math.sin(angle) * r, Math.cos(angle) * r)
    dummy.rotation.set(rng() * Math.PI, rng() * Math.PI, 0)
    dummy.scale.setScalar(0.6 + rng() * 0.9)
    dummy.updateMatrix()
    mesh.setMatrixAt(i, dummy.matrix)
  }
  mesh.instanceMatrix.needsUpdate = true
  return mesh
}

// ---------------------------------------------------------------------------
// Escena 1 — La señal: entrada al corredor, casi vacía a propósito.
// ---------------------------------------------------------------------------
export const buildSignal: Builder = (materials, _textures, { rng, performance }) => {
  const g = new THREE.Group()
  g.add(buildTunnelRing(materials, rng, 7))

  const node = buildNode(1.6, 0.5, materials[STEEL])
  node.position.set(0, 0, 0)
  node.rotation.y = Math.PI / 2
  g.add(node)

  if (performance === 'rich') {
    g.add(buildNodeSwarm(28, 4, materials[MINT], rng))
  }

  // Rotación lenta del nodo: el engine llama tick() cada frame y lo congela
  // bajo prefers-reduced-motion sin que tengamos que comprobarlo aquí.
  g.userData.tick = (elapsed: number) => {
    node.rotation.z = elapsed * 0.25
  }
  return g
}

// ---------------------------------------------------------------------------
// Escena 2 — Noticias: paneles flotando como titulares que pasan de largo.
// ---------------------------------------------------------------------------
export const buildNoticias: Builder = (materials, _textures, { rng }) => {
  const g = new THREE.Group()
  g.add(buildTunnelRing(materials, rng, 9))

  const panels: THREE.Mesh[] = []
  for (let i = 0; i < 7; i++) {
    const panel = buildPanel(3.4, 2.1, i % 3 === 0 ? materials[ACCENT] : materials[STEEL])
    const angle = (i / 7) * Math.PI * 2 + rng() * 0.3
    const r = 5.5 + rng() * 2
    panel.position.set(-11 + i * 3.4, Math.sin(angle) * r, Math.cos(angle) * r)
    panel.lookAt(panel.position.x, 0, 0) // cada panel encara el eje del túnel
    g.add(panel)
    panels.push(panel)
  }

  g.userData.tick = (elapsed: number) => {
    panels.forEach((panel, i) => {
      panel.rotation.z = Math.sin(elapsed * 0.4 + i) * 0.08
    })
  }
  return g
}

// ---------------------------------------------------------------------------
// Escena 3 — Investigación: la ciudad de datos. Escena más densa del recorrido.
// ---------------------------------------------------------------------------
export const buildInvestigacion: Builder = (materials, _textures, { rng, performance }) => {
  const g = new THREE.Group()
  g.add(buildTunnelRing(materials, rng, 11))

  // Torres colgando del suelo y del techo del túnel: lee como skyline en espejo.
  const towerCount = performance === 'rich' ? 9 : 6
  for (let i = 0; i < towerCount; i++) {
    const floors = 3 + Math.floor(rng() * 4)
    const tower = buildDataTower(floors, 1.5, materials[STEEL], rng)
    const flipped = i % 2 === 1
    tower.position.set(-11 + (i / (towerCount - 1)) * 22, flipped ? 7.5 : -7.5, (rng() - 0.5) * 6)
    if (flipped) tower.rotation.z = Math.PI
    g.add(tower)
  }

  if (performance === 'rich') {
    g.add(buildNodeSwarm(40, 5, materials[MINT], rng))
  }
  return g
}

// ---------------------------------------------------------------------------
// Escena 4 — El núcleo (escena PICO, regla del peak-end).
// Único prop emisivo del build + único fresnel: aquí es donde se mira.
// ---------------------------------------------------------------------------
export const buildNucleo: Builder = (materials, _textures, { rng, palette }) => {
  const g = new THREE.Group()
  g.add(buildTunnelRing(materials, rng, 9))

  // El núcleo: nodo hexagonal grande, emisivo por encima del umbral de bloom.
  const coreMat = new THREE.MeshStandardMaterial({
    color: new THREE.Color(palette.accent),
    emissive: new THREE.Color(palette.accent),
    emissiveIntensity: 1.3,
    roughness: 0.25,
    metalness: 0.4,
  })
  const core = buildNode(2.6, 1.2, coreMat)
  core.rotation.y = Math.PI / 2
  g.add(core)

  // Cáscara fresnel ligeramente escalada — el borde brillante del núcleo.
  const shell = new THREE.Mesh(core.geometry, makeFresnelMaterial(palette.accent))
  shell.scale.multiplyScalar(1.07)
  core.add(shell)

  // Anillos orbitando el núcleo: refuerzan el centro sin añadir ruido.
  const rings: THREE.Mesh[] = []
  for (let i = 0; i < 3; i++) {
    const ring = new THREE.Mesh(
      new THREE.TorusGeometry(4 + i * 1.3, 0.07, 6, 40),
      materials[MINT],
    )
    ring.rotation.set(rng() * Math.PI, rng() * Math.PI, 0)
    g.add(ring)
    rings.push(ring)
  }

  g.userData.tick = (elapsed: number) => {
    core.rotation.z = elapsed * 0.3
    rings.forEach((ring, i) => {
      ring.rotation.z = elapsed * (0.12 + i * 0.06) * (i % 2 ? -1 : 1)
    })
  }
  return g
}

// ---------------------------------------------------------------------------
// Escena 5 — La comunidad / salida: nodos convergiendo, CTA al foro.
// Última escena = la más pulida (peak-end): es lo que el visitante recuerda.
// ---------------------------------------------------------------------------
export const buildComunidad: Builder = (materials, _textures, { rng, performance }) => {
  const g = new THREE.Group()
  g.add(buildTunnelRing(materials, rng, 8))

  // Corona de nodos hexagonales: cada uno una voz del foro, todas mirando al centro.
  const nodes: THREE.Mesh[] = []
  const count = performance === 'rich' ? 10 : 7
  for (let i = 0; i < count; i++) {
    const angle = (i / count) * Math.PI * 2
    const node = buildNode(0.9, 0.3, i % 2 ? materials[ACCENT] : materials[STEEL])
    const r = 6
    node.position.set((rng() - 0.5) * 10, Math.sin(angle) * r, Math.cos(angle) * r)
    node.lookAt(node.position.x, 0, 0)
    g.add(node)
    nodes.push(node)
  }

  // Núcleo pequeño de salida: cierra el recorrido con el mismo motivo del pico.
  const exit = buildNode(1.8, 0.6, materials[MINT])
  exit.rotation.y = Math.PI / 2
  exit.position.x = 8
  g.add(exit)

  g.userData.tick = (elapsed: number) => {
    nodes.forEach((node, i) => {
      node.position.x += Math.sin(elapsed * 0.5 + i) * 0.004
    })
    exit.rotation.z = elapsed * 0.4
  }
  return g
}
