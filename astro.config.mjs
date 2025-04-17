// @ts-check
import { defineConfig } from 'astro/config'

import react from '@astrojs/react'
import swup from '@swup/astro'
import { fileURLToPath } from 'url'

// https://astro.build/config
export default defineConfig({
  integrations: [react(), swup()],
  vite: {
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
            @use "@/global_styles/variables" as *;
            @use "@/global_styles/mixins" as *;
          `
        }
      }
    }
  }
})
