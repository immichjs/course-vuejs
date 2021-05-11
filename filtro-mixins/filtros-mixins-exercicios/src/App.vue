<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | cpf | inverter }}</p>
		<input type="text" :value="cpf | cpf | inverter">
		<hr>
		<Frutas/>
		<hr>
	</div>
</template>

<script>
import mixinFruta from './mixins/frutasMixin'
import userMixin from './mixins/userMixin'
import Frutas from '@/components/Frutas'

export default {
	data () {
		return {
			cpf: '90817454098',
		}
	},
	created () {
    // eslint-disable-next-line no-console
    console.log('Created - App.vue')
  },
	mixins: [mixinFruta, userMixin],
	filters: {
		cpf (value) {
			const arr = value.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')

			return arr.join('')
		}
	},
	methods: {
    add () {
      this.frutas.push(this.fruta)
      this.fruta = ''
    }
  },
	components: {
		Frutas
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
