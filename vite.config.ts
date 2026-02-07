/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import {dependencies , devDependencies }from './package.json'

// import path from 'node:path'
// import { fileURLToPath } from 'node:url'
// import { storybookTest } from '@storybook/addon-vitest/vitest-plugin'
// import { playwright } from '@vitest/browser-playwright'
// const dirname =
//   typeof __dirname !== 'undefined' ? __dirname : path.dirname(fileURLToPath(import.meta.url))

export default defineConfig({
  plugins: [react()],





  
build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui-kit-binaryBears',
      fileName: 'index',
      formats: ['es']
    },
    rollupOptions: {
      external: ['react/jsx-runtime', ...Object.keys(dependencies), ...Object.keys(devDependencies)],
    },
    target: 'esnext',
    sourcemap: true,
  },













  // test: {
  //   projects: [
  //     {
  //       extends: true,
  //       plugins: [
  //         storybookTest({
  //           configDir: path.join(dirname, '.storybook'),
  //         }),
  //       ],
  //       test: {
  //         name: 'storybook',
  //         browser: {
  //           enabled: true,
  //           headless: true,
  //           provider: playwright({}),
  //           instances: [
  //             {
  //               browser: 'chromium',
  //             },
  //           ],
  //         },
  //         setupFiles: ['.storybook/vitest.setup.ts'],
  //       },
  //     },
  //   ],
  // },
})
