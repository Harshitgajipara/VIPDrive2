import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
export default defineConfig({
  base: '/',
  plugins: [react()],
  // server: {
  //   host: '10.37.57.108',  // Allows access from local network
  //   port: 5173,       // Or any port you prefer
  // },
})