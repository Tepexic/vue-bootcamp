<template>
  <div id="app">
    <navigation/>
    <total-bar/>
    <modal/>
    <router-view/>
  </div>
</template>

<script>
// Import router, vuex and mixins
import router from './router';
import store from './store'
import money from './mixins/money'
// Import components
import Navigation from './components/Navigation'
import TotalBar from './components/TotalBar'
import Modal from './components/Modal'

export default {
  name: 'App',

  router,

  store,

  mixins: [
    money
  ],

  components: {
    Navigation,
    TotalBar,
    Modal,
  }
}
</script>

<style>
@import './../public/styles.css';
</style>
