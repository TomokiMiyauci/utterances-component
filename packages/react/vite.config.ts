import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import { resolve } from 'path'
import { peerDependencies } from './package.json'
import windicss from 'vite-plugin-windicss'

const external = Object.keys(peerDependencies)

export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, 'lib'),
      '@shared': resolve(__dirname, '..', '@shared')
    }
  },
  plugins: [reactRefresh(), windicss()],
  build: {
    cssCodeSplit: false,
    lib: {
      entry: resolve(__dirname, 'lib/index.ts'),
      formats: ['cjs', 'es'],
      fileName: 'index'
    },
    rollupOptions: {
      external,
      output: {
        format: 'cjs'
      }
    }
  }
})
