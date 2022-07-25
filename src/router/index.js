
import {createRouter,createWebHistory} from 'vue-router'

import HomePage from '@/veiws/HomePage.vue'
import LoginPage from '@/components/auth/LoginPage.vue'



const routes = [
    {
        path: '/',component:HomePage
    },
    {
        path: '/LoginPage',component:LoginPage
    },
    
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router

