import { defineConfig } from 'vite'
import { resolve } from 'path'
import { fileURLToPath, URL } from 'node:url'
import handlebars from 'vite-plugin-handlebars'
import liveReload from 'vite-plugin-live-reload'

export default defineConfig({
	plugins: [
		handlebars({
			compileOptions: {
				// Example config option: avoid auto-indenting partials
				preventIndent: true,
			},
			// context: {
			// 	title: 'Hello, world!', // {{title}}
			// },
			partialDirectory: resolve(__dirname, 'src/partials'),
			reloadOnPartialChange: true,
		}),
		liveReload(resolve(__dirname, 'src/partials/**/*'), { alwaysReload: true }),
	],
	base: '',
	build: {
		rollupOptions: {
			input: {
				main: resolve(__dirname, 'index.html'),
				privacyPolicy: resolve(__dirname, './privacy-policy/index.html'),
				_404: resolve(__dirname, '404.html'),
				cars: resolve(__dirname, './cars/index.html'),
				cars_lada: resolve(__dirname, './cars/vaz-lada/index.html'),
				vykup: resolve(__dirname, './services/vykup/index.html'),
				tyres: resolve(__dirname, './tyres/index.html'),
				example: resolve(__dirname, './cars/2106/651138/index.html'),
				podbor: resolve(__dirname, './services/autopodbor/index.html'),
				promo: resolve(__dirname, './promo/index.html'),
				p644223: resolve(__dirname, './promo/644223/index.html'),
				p644340: resolve(__dirname, './promo/644340/index.html'),
				p647169: resolve(__dirname, './promo/647169/index.html'),

				p651617: resolve(__dirname, './promo/651617/index.html'),
				p651618: resolve(__dirname, './promo/651618/index.html'),
				p651619: resolve(__dirname, './promo/651619/index.html'),
				p651620: resolve(__dirname, './promo/651620/index.html'),
				p651621: resolve(__dirname, './promo/651621/index.html'),
				p651622: resolve(__dirname, './promo/651622/index.html'),
				p651623: resolve(__dirname, './promo/651623/index.html'),
				p651624: resolve(__dirname, './promo/651624/index.html'),
				p651625: resolve(__dirname, './promo/651625/index.html'),
				p651626: resolve(__dirname, './promo/651626/index.html'),



				about: resolve(__dirname, './about-the-company/index.html')

			},
		},

		outDir: '../autosite', // Выходная папка
		sourcemap: true, // Генерация sourcemaps (путь js)
		chunkSizeWarningLimit: 1000, // Sets the warning limit to 1000 kB (1MB)
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
