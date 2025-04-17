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

declare global {
  interface Window {
    lenis: import('@studio-freight/lenis').Lenis;
    __onLenisReady?: ((lenis: any) => void)[];
  }
}

export {};