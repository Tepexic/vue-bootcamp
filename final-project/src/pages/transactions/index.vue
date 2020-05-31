<template>
  <div class="flex flex-col items-center">
    <h1> My Transactions </h1>

    <div v-for="(transaction, i) in getTransactions" class="transaction" :key="'t-'+i">
      <div class="flex">
        <div class="w-20">
          <plus-sign class="text-green-500" v-if="transaction.type === 'debit'"/>
          <minus-sign class="text-red-600" v-else/>
        </div>
        <div>{{ transaction.description.substring(0, 20) }}</div>
      </div>
      <div class="flex">
        <div class="mr-4">{{ formatMoney(transaction.amount) }}</div>
        <div>
          <button @click.prevent="removeTransaction(i)">✗</button>
        </div>
    </div>
  </div>
  </div>
</template>

<script>

import {mapGetters} from 'vuex';

// import components
import PlusSign from '../../components/ui/PlusSign'
import MinusSign from '../../components/ui/MinusSign'

export default {
  name: 'transaction-index',

  components: {
    PlusSign,
    MinusSign,
  },

  computed: {
    ...mapGetters([
      'getTransactions'
    ])
  },

  methods: {
    removeTransaction: function (index) {
      this.$store.dispatch('showModal')
        .then(() => {
          this.$store.dispatch('removeTransaction', index)
        })
    }
  }
}
</script>

<style>

</style>