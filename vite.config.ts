import react from '@vitejs/plugin-react';
import { AliasOptions, defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import tsconfigPaths from 'vite-tsconfig-paths';
//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), VitePWA({
    registerType: 'autoUpdate',
    workbox: {
      globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
    },
    manifest: {
      name: 'Great WAll',
      short_name: 'Great WAll',
      description: 'Great WAll Soluções Linguisticas',
      theme_color: '#ffffff',
      icons: [
        {
          src: 'pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png'
        },
        {
          src: 'pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png'
        }
      ]
    }
  })],
  resolve: {
    alias: {
      "@": root,
      "@components": `${root}/components`,
      "@constants/*": `${root}/constants/*`,
      "@assets/*": `${root}/assets/*`,
      "@components/*": `${root}/components/*`,
      "@features/*": `${root}/features/*`,
      "@hooks/*": `${root}/hooks/*`,
      "@layouts/*": `${root}/layouts/*`,
      "@pages/*": `${root}/pages/*`,
      "@pagesHome/*": `${root}/pages/home/*`,
      "@routes/*": `${root}/routes/*`,
      "@services/*": `${root}/services/*`,
      "@store/*": `${root}/store/*`,
      "@types/*": `${root}/types/*`,
      "@utils/*": `${root}/utils/*`,
      "@styles/*": `${root}/styles/*`,
      "@navbarPublic/*": `${root}/components/NavbarPublic/*`,
      "@router/*": `${root}/router/*`,
      "@flavor/*": `${root}/flavor/*`
    } as AliasOptions,
  },
})
// end file