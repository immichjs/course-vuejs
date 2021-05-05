import Vue from 'vue'
import Vuex from 'vuex'

// Import de módulos
import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

// Modularização com ES6
import * as getters from './getters'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    nome: 'Michel',
    sobrenome: 'França'
  },
  getters: {
    ...getters
  },
  modules: { carrinho, parametros }
})
