import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/about',
        name: 'About',

        component: () =>
            import ('../views/About.vue')
    },
    {
        path: '/detale/:id',
        name: 'Detale',

        component: () =>
            import ('../views/DetaleProduct.vue')
    },
    {
        path: '/basket',
        name: 'Basket',

        component: () =>
            import ('../views/Basket.vue')
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router