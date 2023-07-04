import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [
    svelte(),
  ],
  esbuild: {
    // Cette configuration permet d'utiliser top-level-await dans votre code Svelte
    jsxInject: "import { __await } from 'svelte/internal';",
  },
});