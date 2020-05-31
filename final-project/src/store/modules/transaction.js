export default {
      
  state: {
    transactions : [
      { type: 'debit', description: 'Vue Class', amount: 4500 }, // amount in cents
      { type: 'credit', description: 'Payroll', amount: 100000 },
    ],
  },

  getters: {
    getTransactions: function (state){
        return state.transactions;
    },
    
    getTotal: function(state) {
      let balance = 0;
      if(state.transactions.length > 0){
        state.transactions.forEach(t=> {
          if(t.type === 'debit'){
            balance += t.amount;
          } else {
            balance -= t.amount;
          }
        })
      }

      return balance
    },
  },

  mutations: {
    addTransaction: (state, transaction) => {
      //state.transactions.unshift(transaction) // We can't do this, it does not update the entire object - shallow copy
      state.transactions.unshift(JSON.parse(JSON.stringify(transaction)));
    },
    removeTransaction: (state, index) => {
      state.transactions.splice(index,1);
    },
  },

  actions: {
    addTransaction: (context, transaction) => {
      context.commit('addTransaction', transaction)
    },
    removeTransaction: (context, index) => {
      context.commit('removeTransaction', index)
    },
  }
}