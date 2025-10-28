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
        vykup: resolve(__dirname, './services/vykup/index.html'),
        tyres: resolve(__dirname, './tyres/index.html'),
			},
		},

		outDir: '../autosite', // Выходная папка
		sourcemap: false, // Генерация sourcemaps (путь js)
	},
	resolve: {
		alias: {
			'@': fileURLToPath(new URL('./src', import.meta.url)),
		},
	},
})
