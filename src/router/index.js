
import {createRouter,createWebHistory} from 'vue-router'

import HomePage from '@/veiws/HomePage.vue'
import LoginPage from '@/components/auth/LoginPage.vue'
import Register from '@/components/auth/Register.vue'



const routes = [
    {
        path: '/',component:HomePage
    },
    {
        path: '/LoginPage',component:LoginPage
    },
    {
        path: '/Register',component:Register
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

