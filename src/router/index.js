
import { createRouter, createWebHistory } from 'vue-router'




import Error from '../components/VueRouter/Error'
import HomePage from '../components/chọtot/HomePage'
import Manage from '../components/chọtot/Manage'
import Chat from '../components/chọtot/Chat'






const routes = [
    {path: '/', component:HomePage},
    {path: '/Manage', component:Manage},
    {path: '/Chat', component:Chat},
    {path: '/:pathMatch(.*)*', component:Error}
]


const router = createRouter({
    history: createWebHistory(),
    routes
})


export default router
