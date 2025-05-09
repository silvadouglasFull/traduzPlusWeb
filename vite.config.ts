import react from '@vitejs/plugin-react';
import { AliasOptions, defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
//@ts-ignore
import path from "path";

//@ts-ignore
const root = path.resolve(__dirname, "src");

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": root,
      "@components": `${root}/components`,
      "@styles": `${root}/styles`,
    } as AliasOptions,
  },
})
// end file