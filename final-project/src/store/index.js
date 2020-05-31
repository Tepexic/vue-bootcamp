import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Import modules
import transaction from './modules/transaction'
import modal from './modules/modal'

const store = new Vuex.Store({

    modules: {
        transaction,
        modal,
    },
    
});

export default store;