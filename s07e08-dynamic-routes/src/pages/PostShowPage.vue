<template>
  <div>
    <template v-if="post">
      <div> <h1> {{ post.id }} </h1> {{ post.title }}</div>
      <br>    
      <div> {{ post.body }}</div>
    </template>
    <router-link to="/posts">Back</router-link>
  </div>
</template>

<script>
  module.exports = {
    mounted() {
      console.log('mou0nted')
      fetch('https://jsonplaceholder.typicode.com/posts/' + this.$route.params.id)
        .then(response => response.json())
        .then(json => this.post = json);
    },
    data: function () {
      return {
        post: null
      }
    }
  }
</script>