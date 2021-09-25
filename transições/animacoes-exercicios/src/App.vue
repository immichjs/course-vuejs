<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary mb-4" @click="exibir = !exibir">Mostrar Mensagem</b-button>

		<!-- <transition name="fade" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition name="slide" type="animation" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition>

		<transition enter-active-class="animate__animated animate__bounceIn" leave-active-class="animate__animated animate__tada" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition> -->

		<hr>
		<b-select v-model="tipoAnimation" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</b-select>
		<!-- <transition :name="tipoAnimation" appear>
			<b-alert variant="info" show v-if="exibir">{{ msg }}</b-alert>
		</transition> -->
		<transition :name="tipoAnimation" appear mode="out-in">
			<b-alert variant="info" show v-if="exibir" key="info">{{ msg }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ msg }}</b-alert>
		</transition>

		<hr>
		<button @click="exibir2 = !exibir2">Alternar</button>
		<!-- <transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		>
			<div class="caixa" v-if="exibir2"></div>
		</transition> -->

		<hr>
		<b-button variant="primary" class="mr-1" @click="componenteSelecionado = 'AlertaInfo'">Info</b-button>
		<b-button variant="secondary" class="ml-1" @click="componenteSelecionado = 'AlertaAdvertencia'">Advertência</b-button>
		<transition name="fade" mode="out-in">
			<component :is="componenteSelecionado" />
		</transition>

		<hr>
		<b-button @click="adicionarAluno" class="mb-4">Add</b-button>
		<transition-group name="slide" tag="div" appear>
			<b-list-group v-for="(aluno, index) in alunos" :key="aluno">
				<b-list-group-item @click="removerAluno(index)">{{ aluno }}</b-list-group-item>
			</b-list-group>
		</transition-group>
	</div>
</template>

<script>
	/* eslint-disable no-console */

import AlertaAdvertencia from './AlertaAdvertencia'
import AlertaInfo from './AlertaInfo'

export default {
	components: {
		AlertaAdvertencia,
		AlertaInfo
	},
	data () {
		return {
			alunos: ['Roberto', 'Julia', 'Teresa', 'Paulo'],
			msg: 'Uma mensagem de informação para o usuário',
			exibir: false,
			exibir2: false,
			tipoAnimation: 'fade',
			larguraBase: 0,
			componenteSelecionado: 'AlertaInfo'
		}
	},
	methods: {
		adicionarAluno () {
			const s = Math.random().toString(36).substring(2)
			this.alunos.push(s)
		},
		removerAluno (index) {
			this.alunos.splice(index, 1)
		},
		animar (el, done, negative) {
			let rodada = 1
	
			const temp = setInterval(() => {
				const novaLargura = this.larguraBase + (negative ? -rodada * 10 : rodada * 10)

				el.style.width = `${novaLargura}px`
				rodada++
	
				if (rodada > 30) {
					clearInterval(temp)
					done()
				}
			}, 20)
		},
		beforeEnter (el) {
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done) {
			this.animar(el, done, false)
		},
		// afterEnter(el) {
		// 	console.log('afterEnter', el)
		// },
		// enterCancelled () {
		// 	console.log('enterCancelled')
		// },
		beforeLeave (el) {
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done) {
			this.animar(el, done, true)
		},
		// afterLeave(el) {
		// 	console.log('afterLeave', el)
		// },
		// leaveCancelled () {
		// 	console.log('leaveCancelled')
		// }
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
	font-size: 1.5rem;
}

.caixa {
	height: 100px;
	width: 300px;
	margin: 30px auto;
	background-color: lightgreen;
}

.fade-enter, .fade-leave {
	opacity: 0;
}

.fade-enter-active, .fade-leave-active {
	transition: opacity .5s
}

@keyframes slide-in {
	from { transform: translateY(40px); }
	to { transform: translateY(0); }
}
@keyframes slide-out {
	from { transform: translateY(0); }
	to { transform: translateY(40px); }
}

.slide-enter-active {
	animation: slide-in .5s ease;
	transition: opacity .5s;
}

.slide-leave-active {
	position: absolute;
	width: 100%;
	animation: slide-out .5s ease;
	transition: opacity .5s;
}

.slide-enter, .slide-leave-to {
	opacity: 0;
}

.slide-enter-active, .slide-leave-active {
	transition: opacity .5s
}

.slide-move {
	transition: transform 1s
}
</style>
