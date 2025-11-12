// import { createRouter, createWebHistory } from "vue-router";
// import Home from "../pages/Home.vue";
// import About from "../pages/About.vue";

// const routes = [
//     {path: '/', name:'Home', component: Home},
//     { path: '/about',name:'About', component:About}
// ]
// const router = createRouter({
//     history:createWebHistory(),
//     routes 
// })
// export default router
import { createRouter, createWebHistory } from 'vue-router'
import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Attempt from '../pages/Attempt.vue'
import Basket from '../components/Basket.vue'

const router = createRouter({
  history: createWebHistory('/sproba/'), // ← ось це додаємо
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/attempt', name: 'Attempt', component: Attempt },
     { path: '/basket', name: 'Basket', component:  Basket}
  ],
})

export default router
