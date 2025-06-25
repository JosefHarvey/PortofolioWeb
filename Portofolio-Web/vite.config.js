import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
// https://vite.dev/config/
export default defineConfig({
  plugins: [react()
    ,tailwindcss()
  ],
  theme: {
    extend:{
      colors: {
        'background':'var(--color-background',
        'red': 'var(--color-red)',
        'gray': 'var(--color-gray)',
        'locationExp': 'var(--color-locationExp)',
        'hrExp': 'var(--color-hrExp)',
        'discLi': 'var(--color-discLi)',
        'tagCred': 'var(--color-tagCred)',
        'dateCred': 'var(--color-dateCred)',
        'hrCred': 'var(--color-hrCred)',
        'gpaCred': 'var(--color-gpaCred)',
        'fromCred': 'var(--color-fromCred)',
      },
    }
  }
})
