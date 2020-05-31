import Vue from 'vue';
import VueRouter from 'vue-router';

// Import components
import CreateTransaction from './pages/transactions/create'
import TransactionsIndex from './pages/transactions/index'
Vue.use(VueRouter);

const router = new VueRouter({
    routes: [
        {path:'/transactions/create', component: CreateTransaction},
        {path:'/transactions/', component: TransactionsIndex},
    ]
});

export default router;