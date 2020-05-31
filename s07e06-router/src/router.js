import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

import HomePage from './pages/HomePage'
import About from './pages/About'
import Services from './pages/Services'

const router = new VueRouter({
    routes: [
        {path:'/', component: HomePage},
        {path:'/about', component: About},
        {path:'/services', component: Services},
    ]
});

export default router