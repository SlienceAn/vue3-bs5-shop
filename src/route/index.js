import { createRouter, createWebHashHistory } from 'vue-router'

const Home = () => import('../components/content/Home.vue')
const Shop = () => import('../components/content/Shop.vue')
const Connect = () => import('../components/content/Connect.vue')
const Blog = () => import('../components/content/Blog.vue')
const About = () => import('../components/content/About.vue')
const Cart = () => import('../components/content/Cart.vue')
const Production = () => import('../components/content/Production.vue')
const Login = () => import('../components/content/Login.vue')

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
    },
    {

        path: '/Cart',
        component: Cart
    },
    {
        path: '/Production',
        component: Production
    },
    {
        path: '/Login',
        component: Login
    }
]

export default createRouter({
    history: createWebHashHistory(),
    routes,
    scrollBehavior() {
        return {
            top: 0
        }
    }
})