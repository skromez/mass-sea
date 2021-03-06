import preprocess from 'svelte-preprocess';
/** @type {import('@sveltejs/kit').Config} */
// import adapter from '@sveltejs/adapter-static';
import adapter from '@sveltejs/adapter-netlify'

const config = {
	kit: {
		// hydrate the <div id="svelte"> element in src/app.html
		//target: '#svelte',

        // preprocess: preprocess(),

        adapter: adapter(),
		// adapter: adapter({
		// 	// default options are shown
		// 	pages: 'build',
		// 	assets: 'build',
		// 	fallback: null,
		// }),
	},

	preprocess: [
		preprocess({
			postcss: true,
		}),
	],
};

export default config;
