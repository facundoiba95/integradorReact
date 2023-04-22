import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { createProxyMiddleware } from 'http-proxy-middleware'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://api.unidadeditorial.es/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/footballapi": {
        target: "https://api.football-data.org/v4/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/footballapi/, ""),
      },
      "/leagueArgentina": {
        target: "https://api-football-v1.p.rapidapi.com/v3/",
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/leagueArgentina/, ""),
      }
    },
    middleware: [
      createProxyMiddleware('/api', {
        target: 'https://api.unidadeditorial.es/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/api/, ""),
      }),
      createProxyMiddleware('/footballapi', {
        target: 'https://api.football-data.org/v4/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/footballapi/, ""),
        
      }),
      createProxyMiddleware('/leagueArgentina', {
        target: 'https://api-football-v1.p.rapidapi.com/v3/',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/leagueArgentina/, ""),
      }),
    ],
  }
})


