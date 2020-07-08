<template>
  <nav class="md:flex md:justify-between md:items-center bg-blue-900">
    <div class="flex items-center justify-between p-2">
      <svg  class="h-8 fill-current text-white px-2" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 48 26"><path d="M5.2 23.3c-2.1-.2-4-1-5.2-1.9l1.4-2.5c1.1.7 2.7 1.3 4.2 1.5l.9-6.6c-2.2-1.5-4.7-3.1-4.7-5.9C1.8 5 4 3 7.9 2.7L8.2.2H11l-.3 2.6c1.8.1 3.3.6 4.3 1.2l-1.1 2.6c-.8-.3-2.1-.7-3.5-.9l-.8 6.1c2.8 1.8 4.6 3.3 4.6 6.1 0 2.9-2.4 4.9-6.1 5.4l-.3 2.6H4.9l.3-2.6zM7 10.2l.6-4.5c-1.1.2-2 .7-2.3 1.3-.2 1.4.5 2.3 1.7 3.2zm2.1 5.2l-.6 4.7c1.1-.3 2-.8 2.2-1.6.2-1.4-.5-2.2-1.6-3.1zM25.3 9.2v.4c0 2.6-2.4 8.4-7 13.7l-.7.1-2.1-13.2c0-.3-.1-.7-.1-1h1L18 19.8l.3 2h.1c3-3.9 5.7-8.5 6-12.7h.9zM33.9 23.4l.1-3.5c-1.5 1.8-3.9 3.9-6.1 3.9-2.4 0-2.6-2-2.2-4.7L27 9.2l1-.1-1.2 9.6c-.3 2.4-.5 4.1 1.3 4.1s4.2-2.2 6-4.2l1.3-9.4h1.1l-1.1 8.4c-.2 1.1-.2 2-.5 5.7l-1 .1zM44.4 8.8C46.5 8.8 48 10 48 12c0 4.5-6.2 5-9.4 5 0 .4-.1.8-.1 1.3 0 2.6 1 4.5 3 4.5 1.5 0 3.3-.9 4.7-2.1l.5.7c-1.7 1.5-3.5 2.3-5.3 2.3-2.6 0-4-2.3-4-5.4 0-5.4 3.1-9.5 7-9.5zm-5.7 7.3c2.9 0 8.2-.5 8.2-4.1 0-1.6-1.2-2.3-2.6-2.3-1.2 0-2.3.5-3.1 1.2-1.3 1.2-2.2 3.1-2.5 5.2z"/></svg>
      <button class="md:hidden bg-blue-800 rounded p-2" @click="toggleMenu">
        <svg class="fill-current h-5 w-5 text-white" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
      </button>
    </div>
    <div @click="toggleMenu">
      <ul class="block text-center md:flex md:flex-row" :class="[ menu ? 'hidden' : ''  ]">
        <li class="pt-3 md:pr-5">
          <router-link class="px-3 py-1 rounded-full" to="/transactions"> Transactions </router-link>
        </li>
        <li class="pt-3 md:pr-5">
          <router-link class="px-2 py-1 rounded-full" to="/cards">Cards </router-link>
        </li>
        <li class="py-3 md:pr-5">
          <router-link class="px-4 py-1 rounded-full" to="/transactions/create"> + Transaction </router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navigation',

  data() {
    return {
      menu: false
    }
  },

  methods: {
    toggleMenu: function () {
      return this.menu = !this.menu
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>    
nav a {
  color: #42b983;
}
nav a:hover {
  color: aliceblue;
}
nav a.router-link-exact-active {
  color: white;
  cursor: pointer;
  background-color: #2c5282;
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>
