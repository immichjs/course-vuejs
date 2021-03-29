import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

// Forma global de registrar componentes com Vue-CLI (Não recomendado)
import Counters from './components/Counters'
Vue.component('App-counters', Counters)

new Vue({
  render: h => h(App),
}).$mount('#app')
