<template>
  <div id="app">
    <Card name="Jane Doe" company="Test Company"/>
    <Card name="John Doe" company="Test Company"/>
    <Card name="Pedro Páramo" company="El llano en llamas"/>
    <Card name="Ben Button" company="Clothing Company"/>
  </div>
</template>

<script>
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Card
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
