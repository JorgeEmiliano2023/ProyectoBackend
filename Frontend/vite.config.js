//vite.config.js: Configuración de Vite. Aquí puedes personalizar opciones de construcción y desarrollo.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})
