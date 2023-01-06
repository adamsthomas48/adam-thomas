import { createApp } from 'vue'
import App from './App.vue'
import './app.css'
import {createRouter, createWebHistory} from 'vue-router'

import About from '@/views/About.vue'
import Home from '@/views/Home.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'Home', component: Home},
        {path: '/about', name: 'About', component: About}
    ]
})

createApp(App)
.use(router)
.mount('#app')
