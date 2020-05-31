<template>
<div class="bg-gray-200 w-full h-screen flex flex-col items-center p-4">
  <div>
    <input type="text" placeholder="Add an item" v-model="item" />
    <button @click.prevent="addItem">Add</button>
  </div>
  <list :items="items" v-on:remove-item="removeItem"></list>
</div>
</template>

<script>
import List from './components/List.vue'

export default {
  name: 'App',

  components: {
    List
  },

  data: function () {
      return {
        item: '',
        items: ['item1', 'item2']
        }
    },
    
  methods: {
    addItem: function () {
      this.items.push(this.item);
      // this.items.unshift(this.item);
      this.item = '';
    },
    removeItem: function (key) {
      this.items.splice(key,1);
    }
  }
}
</script>

<style>
input {
  padding: 5px 15px;
  border-radius: 15px;
}
button {
  text-transform: uppercase;
  font-size: 14px;
  margin-left: 5px;
  font-weight: bold;
}
ul {
  margin-top: 15px;
}
li {
  padding: 5px 15px;
  margin-bottom: 5px;
  background: white;
  border-radius: 15px;
  color: #555;
  display: flex;
  justify-content: space-between;
}
</style>
