import { createRouter, createWebHistory } from "vue-router";
import Login from "../pages/login.vue"

const router = createRouter({
    history:createWebHistory(),
    routes: [
        {
            path:'/',
            name:'login',
            component: Login
        },
        {
            path:'/main',
            name: 'main',
            component: ()=> import('../pages/main.vue')
        }
    ]
})

export default router