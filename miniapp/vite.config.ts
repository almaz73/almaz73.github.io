import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import obfuscator from 'vite-plugin-javascript-obfuscator';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueDevTools(),
    obfuscator({
      // Опции для JavaScript Obfuscator
      options: {
        compact: true, // Удаляет лишние пробелы и переносы строк
        controlFlowFlattening: true, // Усложняет структуру кода
        controlFlowFlatteningThreshold: 0.75, // Вероятность применения усложнения
        // deadCodeInjection: true, // Внедряет "мёртвый" код
        deadCodeInjectionThreshold: 0.4, // Вероятность внедрения мёртвого кода
        debugProtection: true, // Защита от отладки
        disableConsoleOutput: true, // Отключает console.log
        identifierNamesGenerator: 'hexadecimal', // Генерация имен переменных в шестнадцатеричном формате
        rotateStringArray: true, // Перемешивает массив строк
        stringArray: true, // Шифрует строки
        stringArrayThreshold: 0.75, // Вероятность шифрования строк
      },
    }),
  ],
  // build: {
  //   minify: false, // Отключаем минификацию Vite, чтобы избежать конфликтов
  // },
  base: '',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
