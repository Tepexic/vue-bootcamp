<template>
  <div class="hero-box">
      <div class="hero-box-left">
        <large-text>Your trusted web developers, just a click away.</large-text>
        <p class="medium-text">Meet our team of web dev experts ready to take on your biggest challenges and turn them into opportunities to outshine your competition. Connect with us today to get started.</p>
      </div>
      <div class="hero-box-right">
        <input-form/>
      </div>
  </div>
</template>

<script>
import InputForm from '../components/InputForm'
import LargeText from '../components/LargeText'

export default {
  name: 'HomePage',

  components: {
    InputForm,
    LargeText
  }
}
</script>

<style scoped>

</style>