<template>
	<v-app>
		<Header />
		<v-content>
			<v-container>
				<transition name="slide" mode="out-in">
					<router-view></router-view>
				</transition>
			</v-container>
		</v-content>
	</v-app>
</template>

<script>
import Header from './components/Header.vue'

import { mapActions } from 'vuex'

export default {
	components: {
		Header
	},
	methods: {
		...mapActions(['loadData']),
		loadDataLocal () {
			this.loadData()
		} 
	},
	created () {
		this.$store.dispatch('initStocks')
		this.loadDataLocal()
	}
}
</script>

<style>
@keyframes slide-in {
	from { transform: translateY(-30px); opacity: 0; }
	to { transform: translateY(0); opacity: 1; }
}

@keyframes slide-out {
	from { transform: translateY(0); opacity: 1; }
	to { transform: translateY(-30); opacity: 0; }
}

.slide-enter-active {
	animation: slide-in .2s ease;
}

.slide-leave-active {
	animation: slide-out .2s ease;
}
</style>

