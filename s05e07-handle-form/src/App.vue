<template>
<div id="app">
  <!-- Vue App Here -->
  <form method="post" action="#" v-if="!form.submitted">
      <input-field
        label="First Name"
        unique="first_name"
        v-on:updated="form.first_name=$event"/>
      <div> Current: {{ form.first_name }}  </div>
      <input-field
        label="Last Name"
        unique="last_name"
        v-on:updated="form.last_name=$event"/>
      <div> Current: {{ form.last_name }}  </div>
      <input-field
        label="Email"
        unique="email"
        v-on:updated="form.email=$event"/>
      <div> Current: {{ form.email }}  </div>
      <submit-button @submitted="form.submitted=true"/>
  </form>
  <div v-else>
    Thank you for contacting us. We'll get back to you!
  </div>
</div>
</template>

<script>
import InputField from './components/InputField'
import SubmitButton from './components/SubmitButton'

export default {
  name: 'App',

  components: {
    InputField,
    SubmitButton
  },

  data: function () {
    return {
      form: {
        first_name: '',
        last_name: '',
        email: '',
        submitted: false,
      }
    }
  }
}
</script>

<style>
body {
    background: #fff;
    color: #777;
    padding: 25px;
}
.logo {
    color: #3d3d3d;
    display: flex;
}
.nav-wrapper {
    background: #ffffff;
    display: flex;
    justify-content: space-between;
    padding: 15px 25px;
}
.link-item {
    color: #555ae4;
    font-weight: bold;
    font-size: 14px;
    padding: 5px 10px;
    border-radius: 5px;
    margin-left: 5px;
    position: relative;
}
.link-item:active,
.link-item:hover,
.link-active {
    background: #555ae4;
    color: #fff;
}
.sublinks {
    position: absolute;
    top: 40px;
    right: 10px;
    align-items: flex-end;
    display: flex;
    flex-direction: column;
    background: #3d3d3d;
    padding: 10px;
    border-radius: 5px;
}
.sublinks > a {
    color: #eee;
    width: 100px;
}
.hero-box {
    background: #f3f3ff;
    display: flex;
}
.hero-box-left {
    width: 400px;
    margin: 25px;
}
.hero-box-right {
    width: 100%;
    margin: 25px; 
}
.large-text {
    font-size: 30px;
}
.medium-text {
    margin-top: 10px;
}
.input-wrapper {
    display: flex;
    flex-direction: column;
    margin-bottom: 5px;
}
.input-wrapper > label {
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 5px;
}
.input-wrapper > input {
    background: transparent;
    border: 1px solid #555ae4;
    border-radius: 5px;
    padding: 5px;
}
.input-wrapper > button {
    margin-top: 10px;
    background: #555ae4;
    color: #fff;
    border-radius: 5px;
    padding: 10px;
}
</style>
