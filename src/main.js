import { createApp } from 'vue'
import App from './App.vue'
import './app.css'
import Vue from 'vue'
import VueRouter from 'vue-router'
import TestPage from '@/TestPage.vue'
import {createRouter, createWebHistory} from 'vue-router'
import About from '@/views/About.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', name: 'TestPage', component: TestPage},
        {path: '/about', name: 'About', component: About}
    ]
})

createApp(App)
.use(router)
.mount('#app')
