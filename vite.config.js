import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  // Served from the apex domain root (https://saivighnesh.dev/), not the
  // /portfolio/ project-page subpath, so the base must be '/'.
  base: '/',
  plugins: [react()],
});
