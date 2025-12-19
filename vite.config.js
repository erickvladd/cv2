import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cv2/',   // <-- aquí pon el nombre de tu repo
  plugins: [vue()],
})

