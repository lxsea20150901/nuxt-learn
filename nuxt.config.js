const pkg = require('./package')

module.exports = {
	mode: 'universal',

	/*
	 ** Headers of the page
	 */
	head: {
		title: pkg.name,
		meta: [
			{charset: 'utf-8'},
			{name: 'viewport', content: 'width=device-width, initial-scale=1'},
			{hid: 'description', name: 'description', content: pkg.description}
		],
		link: [{rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}]
	},

	/*
	 ** Customize the progress-bar color
	 */
	// loading: {color: '#fff'},
	loading: '@/components/loading.vue',

	/*
	 ** Global CSS
	 */
	css: [
		'iview/dist/styles/iview.css',
		'assets/css/app.css'
	],

	/*
	 ** Plugins to load before mounting the App
	 */
	plugins: [
		'@/plugins/iview',
		'@/plugins/axios',
	],

	/*
	 ** Nuxt.js modules
	 */
	modules: [
		// Doc: https://axios.nuxtjs.org/usage
		'@nuxtjs/axios',
		'@nuxtjs/proxy',
	],
	/*
	 ** Axios module configuration
	 */
	axios: {
		// See https://github.com/nuxt-community/axios-module#options
		proxy: true,
		prefix: '/api', // baseURL
		credentials: true,
	},

	proxy: {
		'/api/': {
			target: 'http://127.0.0.1:2001', // 代理地址
			changeOrigin: true,
			pathRewrite: {
				'^/api': ''
			},
		},
	},

	/*
	 ** Build configuration
	 */
	build: {
		/*
		 ** You can extend webpack config here
		 */
		extend(config, ctx) {
			// Run ESLint on save
			if (ctx.isDev && ctx.isClient) {
				// config.module.rules.push({
				// 	enforce: 'pre',
				// 	test: /\.(js|vue)$/,
				// 	loader: 'eslint-loader',
				// 	exclude: /(node_modules)/
				// })
			}
		}
	}
};
