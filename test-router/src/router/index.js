import { createRouter, createWebHistory } from 'vue-router';
import {ref} from 'vue';

import Home from '../pages/Home.vue'
import Login from '../pages/Login.vue'

const nameArray = ref([ "login", "about"])

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home,
            meta: {
                requiresAuth: true
            }
        },
        {
            path: '/login',
            name: 'login',
            component: Login,
            meta: {
                requiresAuth: false
            },
            beforeEnter() {
                localStorage.removeItem('token')
            }
        },
        {
            path: '/about',
            name: 'about',
            component: ()=> import('../pages/About.vue'),
            meta: {
                requiresAuth: false
            }
        },
    ]
})

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('token')

    if (!token && nameArray.value.includes(to.name) && to.meta.requiresAuth) {
        next({name: 'login'})
    }
    else if (token && nameArray.value.includes(to.name)) {
        next({name: from.name})
    }
    else {
        next()
    }
})

export default router;