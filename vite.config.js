import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()]
};

export default defineConfig({
	esbuild: {
	  supported: {
		'top-level-await': true //browsers can handle top-level-await features
	  },
	}
  });
