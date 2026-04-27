import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig(async () => {
  const plugins = [vue(), vueJsx(), tailwindcss()]

  // Some Node runtimes expose a partial localStorage implementation that
  // breaks vite-plugin-vue-devtools during config loading.
  const hasWorkingLocalStorage = typeof globalThis.localStorage?.getItem === 'function'

  if (hasWorkingLocalStorage) {
    const { default: vueDevTools } = await import('vite-plugin-vue-devtools')
    plugins.splice(2, 0, vueDevTools())
  } else {
    console.warn(
      '[vite] Skipping vite-plugin-vue-devtools because localStorage.getItem is unavailable in this Node runtime.'
    )
  }

  return {
    plugins,
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url)),
      },
    },
  }
})
