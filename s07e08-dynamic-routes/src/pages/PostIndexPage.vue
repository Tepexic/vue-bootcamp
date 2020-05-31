<template>
  <div>
    <div v-for="post in posts" :key="post.id">
      <router-link :to="'/posts/' + post.id">
          <div> <h1> {{ post.id }} </h1> {{ post.title }}</div>          
      </router-link>
      <router-link to="/">Home</router-link>
    </div>
  </div>
</template>

<script>
  export default {

    mounted () {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => this.posts = data)
    },

    data: function () {
      return {
        posts: []
      }
    }
  }
</script>