import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.filter('inverter', function (value) {
	return value.split('').reverse().join('')
})

Vue.mixin({
	data () {
		return {
			global: 'Mixin Global'
		}
	},
	created () {
		// eslint-disable-next-line no-console
		console.log('Created - Mixin Global')
	}
})

new Vue({
	render: h => h(App),
	created () {
		// eslint-disable-next-line no-console
		console.log('Created - Vue Instance')
	}
}).$mount('#app')
