import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte(),
  ],
  build: {
    rollupOptions: {
      input: './app.html', // Chemin d'accès au fichier d'entrée Svelte
    },
  },
  esbuild: {
    // Cette configuration permet d'utiliser top-level-await dans votre code Svelte
    jsxInject: "import { __await } from 'svelte/internal';",
  },
});