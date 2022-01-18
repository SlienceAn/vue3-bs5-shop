import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../components/content/Home.vue'
import Shop from '../components/content/Shop.vue'
import Connect from '../components/content/Connect.vue'
import Blog from '../components/content/Blog.vue'
import About from '../components/content/About.vue'

const routes = [
    {
        path: '/',
        component: Home
    },
    {
        path: '/Shop',
        component: Shop
    },
    {
        path: '/Connect',
        component: Connect
    },
    {
        path: '/About',
        component: About
    },
    {
        path: '/Blog',
        component: Blog
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes
})