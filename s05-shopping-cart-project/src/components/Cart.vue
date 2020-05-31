<template>
<div>
  <div>
    <ul>
      <li v-for="product in products" class="price-row" :key="product.id">
        <div>{{ product.name }}</div>
        <div class="quantity-row">
          <div class="price-quantity">Qty: {{ product.qty }}</div>
          <div>{{ formatMoney(product.price * product.qty) }}</div>
        </div>
      </li>
    </ul>
  </div>
  
  <div class="price-row">
    <div class="price-label">Sub-total</div>
    <div class="price-wrapper">{{ formatMoney(subtotal) }}</div>
  </div>
  <div class="price-row">
    <div class="price-label">Shipping</div>
    <div class="price-wrapper">{{ formatMoney(shipping) }}</div>
  </div>
  <div class="price-row">
    <div class="price-label">Total</div>
    <div class="price-wrapper">{{ formatMoney(total) }}</div>
  </div>
  <button class="checkout-button">CHECKOUT</button>
</div>
</template>

<script>
  import EventBus from '../bus';

  export default {

    data: function () {
      // Listen for event emission from product
      EventBus.$on('add-product', product => {
        this.addProduct( product )
      });

      return {
        products : [],
      }
    },

    computed: {
      subtotal: function () {
        let subtotal = 0;
        this.products.forEach(p => subtotal += (p.price * p.qty));
        return subtotal
      },
      shipping: function () {
        let totalProducts = 0;
        this.products.forEach(p => totalProducts += p.qty);
        // 3.99 USD per piece , free shipping on $50+ purchases
        if(this.subtotal > 10000) {
          return 0
        } else {
          return totalProducts * 399 
        }
      },
      total: function () {
        return this.subtotal + this.shipping
      },
    },

    methods: {
      addProduct: function(product) {
        let pi = this.products.findIndex( p => p.id===product.id )
        if (pi >= 0) {
          this.products[pi].qty += 1
        } else {
          this.products.push({
            ...product,
            qty: 1,
            })
        }
      },
      formatMoney: function (cents) {
        return '$' + cents / 100;
      },
    }
  }
</script>

<style scoped>
.quantity-row {
  display: flex;
}
.price-quantity {
  margin-right: 15px;
}
.checkout-button {
  width: 100%;
  text-align: center;
  padding: 10px 0;
  background: #000;
  color: #eee;
}
.price-row {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #eee;
  margin: 10px;
  padding-bottom: 10px;
}
</style>