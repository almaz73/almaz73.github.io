import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

// @ts-expect-error
import App from './App.vue'
const pinia = createPinia()
const app = createApp(App)

app.use(pinia)
app.mount('#app')
