import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home'

const routes = [
    {
        path: '/',
        name: "Home",
        component: Home ,
    },
    {
        path:'/todos',
        name:"todos",
        component: () => import('./views/Todos.vue')
    }
]

const router = createRouter ({
        history: createWebHistory(),
        routes
})


export default router
