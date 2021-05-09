export default {
  namespaced: true,
  state: {
    produtos: [],
  },
  getters: {
    valorTotal(state) {
      return state.produtos.map(prod => prod.quantidade * prod.preco)
        .reduce((total, atual) => total + atual, 0)
    }
  },
  mutations: {
    adicionarProduto(state, payload) {
      state.produtos.push(payload)
    }
  },
  actions: {
    adicionarProduto({ commit }, payload) {
      setTimeout(() => commit('adicionarProduto', payload), 500)
    }
    // adicionarProduto: {
    //   root: true,
    //   handler({ commit }, payload) {
    //     setTimeout(() => {
    //       commit('adicionarProduto', payload)
    //     }, 500);
    //   }
    // }
  }
}
