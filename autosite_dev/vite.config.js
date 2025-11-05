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
				papka: resolve(__dirname, './papka/index.html'),
				_404: resolve(__dirname, '404.html'),
				cars: resolve(__dirname, './cars/index.html'),
				cars_lada: resolve(__dirname, './cars/vaz-lada/index.html'),
				vykup: resolve(__dirname, './services/vykup/index.html'),
				tyres: resolve(__dirname, './tyres/index.html'),
				examle: resolve(__dirname, './cars/2106/651138/index.html'),
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
