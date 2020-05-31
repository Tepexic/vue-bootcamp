<template>
  <div id="app">
  <!-- Set the title to a String, episode number to a Number and published to Boolean -->
  <props title="The Walking Living" :episodeNumber='1' :published='true'/>
  
  <!-- Using only defaults, show a title, episode number and published to false -->
  <props  />
  
  <!-- The published field should accept a Number or a Boolean -->
  <props title="That 80's show" :episodeNumber="100" :published="0" />
  
  <!-- Add new optional prop for visible, then hide the component, if false -->
  <props title="Dr. Casas" :episodeNumber="10" :published="1" :visible="true" />
  </div>
</template>

<script>
import Props from './components/Props.vue'

export default {
  name: 'App',
  components: {
    Props
  }
}
</script>

<style></style>
