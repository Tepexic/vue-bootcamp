<template>
  <div id="app">
    <h1>The Cup Store</h1>
      <product v-for="product in products"
        :product = "product"
        :key = product.id />
      <cart></cart>
  </div>
</template>

<script>
import Product from './components/Product.vue'
import Cart from './components/Cart.vue'

export default {
  name: 'App',

  components: {
    Product,
    Cart
  },

  data: function () {
    return {
      products: [
        { id: 120, name:'Colorful Cups', price:999, image:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/Vector_cup_of_coffee.svg/500px-Vector_cup_of_coffee.svg.png"},
        { id: 121, name:'Coffee & Home', price:1499, image:'https://cdn.pixabay.com/photo/2020/01/29/19/59/cup-4803488_960_720.jpg'},
        { id: 122, name:'Old Red Friend', price:1999, image:'https://cdn.pixabay.com/photo/2020/02/16/12/18/cup-4853387_960_720.png'},
      ]
    }
  },

}
</script>

<style>
body {
    padding: 15px 0;
    font-size: 14px;
    background: #eeffff;
    color: #888;
}
h1 {
    text-align: center;
    font-size: 24px;
    margin-bottom: 15px;
}
</style>
