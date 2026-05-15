import './assets/main.css'

if (typeof document !== 'undefined') {
  document.documentElement.classList.remove('dark')
  localStorage.setItem('theme', 'light')
}

import { createApp } from 'vue'
import App from './App.vue'
import router from '../router'

const app = createApp(App)

app.use(router)
app.mount('#app')