<template>
  <div class="input-wrapper">
    <label :for="unique">{{ label }}</label>
    <input type="text" :id="unique" />
  </div>
</template>

<script>
export default {
  props: {
    label: String,
    unique: String,
  }
}
</script>