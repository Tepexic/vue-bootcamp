export default {
  state: {
    modal: false,
    modalResolve: null,
  },

  getters: {
    getModal: function(state) {
      return state.modal;
    },
  },

  mutations: {
    hideModal: function (state) {
      state.modalResolve = null
      state.modal = false;
    },
    showModal: function (state, payload) {
      state.modalResolve = payload.resolve;
      state.modal = true;
    },
    resolveModal: function (state) {
      if (state.modalResolve) {
        state.modalResolve()
      }
    },
  },

  actions: {
    hideModal: (context) => {
      context.commit('hideModal')
    },
    showModal: (context) => {
      return new Promise((resolve) => {
        context.commit('showModal', { resolve })
      })
    },
    resolveModal: (context) => {
      context.commit('resolveModal')
      context.commit('hideModal')
    },
  }
}