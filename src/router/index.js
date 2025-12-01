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

import Home from '../pages/Home.vue'
import About from '../pages/About.vue'
import Attempt from '../pages/Attempt.vue'
import Basket from '../components/Basket.vue'
import Item from '../pages/Item.vue'
import Login from '../components/Login.vue'
import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory('/'), 
  routes: [
    { path: '/', name: 'Home', component: ()=> import ('../pages/Home.vue') },
    { path: '/about', name: 'About', component: ()=> import ('../pages/About.vue') },
    { path: '/attempt', name: 'Attempt', component: ()=> import ('../pages/Attempt.vue')},
    { path: '/basket', name: 'Basket', component: ()=> import ('../components/Basket.vue')  },
    { path: '/item', name: 'Item', component: ()=> import ('../pages/Item.vue')  },
     { path: '/fullcard/:id', name: 'FullcardDetail', component: ()=> import ('../pages/FullCard.vue')  },
     { path: '/login', name: 'Login', component: ()=> import ('../components/Login.vue')  },
     { path: '/Acount', name: 'Acount', component: ()=> import ('../components/Acount.vue')  }
  ],
})

export default router
