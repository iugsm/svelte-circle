import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: [
			{
				find: '$component',
				replacement: '/src/component'
			}
		]
	}
};

export default config;
