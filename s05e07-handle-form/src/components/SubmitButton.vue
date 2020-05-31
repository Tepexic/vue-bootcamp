<template>
  <div class="input-wrapper">
      <button v-on:click.prevent="$emit('submitted')">Contact Us</button>
  </div>
</template>

<script>
export default {
  name: 'submit-button',
}
</script>
