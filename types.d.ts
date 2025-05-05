/// <reference types="astro/client" />
import { ThreeElements } from '@react-three/fiber'

declare global {
  namespace React {
    namespace JSX {
        interface IntrinsicElements extends ThreeElements {
        }
    }
  }
}

export {};