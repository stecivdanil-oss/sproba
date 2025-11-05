import { createRouter, createWebHistory } from "vue-router";
import About from "../../components/About.vue";
const routes = [
    {
        path: '/about', component:About,name:'About'
    }
]
const router = createRouter({
    history:createWebHistory(),
    routes 
})
export default router