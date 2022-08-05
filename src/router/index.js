import {createRouter,createWebHistory} from 'vue-router'

import HomePage from '@/veiws/HomeLink/HomePage.vue'
import LoginPage from '@/components/auth/LoginPage.vue'
import Register from '@/components/auth/Register.vue'
import RotationLuck from '@/veiws/HomeLink/RotationLuck'




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
    {
        path: '/RotationLuck',component:RotationLuck
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router


