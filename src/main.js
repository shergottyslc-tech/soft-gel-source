import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router

const app = createApp(App)

app.use(router) // Inject the router into the app
app.mount('#app')