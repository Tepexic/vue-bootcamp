<template>
  <form method="post" action="#">
    <input-field label="First Name" unique="first_name"/>
    <input-field label="Last Name" unique="last_name"/>
    <input-field label="Email" unique="email"/>
    <div class="input-wrapper">
      <button>Contact Us</button>
    </div>
  </form>
</template>

<script>
import InputField from './InputField'

export default {
  name: 'Form',

  components: {
    InputField
  }
}
</script>

<style scoped>

</style>