<template>
<div class="flex flex-col items-center" @keyup.enter="addTransaction">
  <h1> Add Transaction </h1>

  <div class="toggle-switch">
    <input type="radio" id="debit" name="transaction_type" value="debit" v-model="form.type" checked>
    <label for="debit"> Debit </label>

    <input type="radio" id="credit" name="transaction_type" value="credit" v-model="form.type">
    <label for="credit"> Credit </label>
  </div>

  <template v-if="errors">
    <ul>
      <li v-for="(error, index) in errors" :key="'e'+index"> - {{ error }} </li>
    </ul>
  </template>

  <div class="input-field">
    <label for="description"> Description </label>
    <input type="text" id="description" 
      name="transaction_description" placeholder="Describe this transaction"
      v-model="form.description" required>
  </div>

  <div class="input-field">
    <label for="amount"> Amount </label>
    <div>
      <span class="currency">$</span>
      <input type="number" id="amount" name="transaction_amount"
        placeholder="0.00"  min="0"  v-model="form.amount" required>
    </div>
  </div>

  <div>
    <button @click.prevent="addTransaction"> Add </button>
  </div>

</div>
</template>
  
<script>
export default {
  data: function () {
    return {
      form: {
        type: 'debit',
        description: '',
        amount: 0
      },
      errors : [],
    }
  },

  methods: {
    addTransaction: function () {
       if( !this.validForm() ) {
         return;
       }
      this.form.amount *= 100 //to cents
      this.$store.dispatch('addTransaction', this.form);
      this.$router.push({path:'/transactions'})
    },

    validForm: function () {
      this.errors = [];
      if(! this.form.description){
        this.errors.push( 'Description is required' )
      }
      if(! this.form.amount){
        this.errors.push('Amount is required')
      }
      return (this.errors.length) ? false : true;
    },

  }
}
</script>

<style>

</style>