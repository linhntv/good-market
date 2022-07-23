import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";



import '@/style/index.scss'
import './static/fontawesome-free-6.1.1-web/css/all.min.css'

// createApp(App).mount('#app')
const app  = createApp(App)
app.use(router)
app.mount('#app')

