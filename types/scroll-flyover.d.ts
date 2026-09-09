/**
 * Tipos para el paquete `scroll-flyover`, que se publica como ESM sin
 * declaraciones propias. Describe únicamente la superficie pública que usa
 * este proyecto: `mountScrollFlyover(container, config)` y el handle que
 * devuelve.
 */
declare module 'scroll-flyover' {
  import type * as THREE from 'three'

  export interface FlyoverBuildOptions {
    shapeLanguage: string
    performance: 'rich' | 'light'
    /** Fuente de aleatoriedad sembrada: la ÚNICA permitida en un builder. */
    rng: () => number
    palette: FlyoverPalette
  }

  export type FlyoverSceneBuilder = (
    materials: THREE.MeshStandardMaterial[],
    textures: Record<string, THREE.Texture | null>,
    options: FlyoverBuildOptions,
  ) => THREE.Group

  export interface FlyoverPalette {
    colors: string[]
    accent: string
  }

  export interface FlyoverScene {
    id?: string
    build: FlyoverSceneBuilder
    eyebrow?: string
    title?: string
    body?: string
    tags?: string[]
    cta?: string
  }

  export interface FlyoverConfig {
    palette: FlyoverPalette
    shapeLanguage?: 'lowpoly' | 'geometric' | 'toy'
    cameraFeel?: 'swoop' | 'glide'
    performance?: 'rich' | 'light'
    scenes: FlyoverScene[]
    photos?: Record<string, string> | null
    dwellWeight?: number
    /** Semilla del build: hace el mundo reproducible entre recargas. */
    seed?: number
    /** Arquetipo de cámara: devuelve un ancla por escena. */
    layout?: ((count: number) => THREE.Vector3[]) | null
    /** Strings propios del motor (aria-labels del rail); inglés por defecto. */
    labels?: {
      goToScene?: (index: number, total: number) => string
    }
  }

  export interface FlyoverHandle {
    /** Libera renderer, geometrías y listeners. Llamar al desmontar. */
    dispose(): void
  }

  export function mountScrollFlyover(
    container: HTMLElement,
    config: FlyoverConfig,
  ): FlyoverHandle

  export function makeRng(seed?: number): () => number
}
