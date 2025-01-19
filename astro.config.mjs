// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import AstroPWA from '@vite-pwa/astro'

export default defineConfig({
    site: 'https://csaaro.github.io',
    base: 'lineup',
  integrations: [react(),
    AstroPWA({
        mode: 'development',
        base: '/lineup/',
        scope: '/lineup/',
        includeAssets: ['favicon.svg'],
        registerType: 'autoUpdate',
        manifest: {
          name: 'Astro PWA',
          short_name: 'Astro PWA',
          theme_color: '#ffffff',
          icons: [
            {
              src: '/lineup/pwa-192x192.png',
              sizes: '192x192',
              type: 'image/png',
            },
            {
              src: '/lineup/pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
            },
            {
              src: 'pwa-512x512.png',
              sizes: '512x512',
              type: 'image/png',
              purpose: 'any maskable',
            },
          ],
        },
        workbox: {
          navigateFallback: '/',
          globPatterns: ['**/*.{css,js,html,svg,png,ico,txt}'],
        },
        devOptions: {
          enabled: true,
          navigateFallbackAllowlist: [/^\//],
        },
        experimental: {
          directoryAndTrailingSlashHandler: true,
        }
      }),
  ],
});