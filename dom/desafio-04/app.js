new Vue({
	el: '#desafio',
	data: {
		class1: 'destaque',
		divClass1: true,
		userClass: '',
		border: true,
		userClass2: '',
		width: 0
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.class1 = this.class1 == 'destaque' ? 'encolher' : 'destaque'
			}, 1000);
		},
		iniciarProgresso() {
			let valor = 0
			const tempor = setInterval(() => {
				valor += 1
				this.width = `${valor}%`
				if (valor == 100) clearInterval(tempor)
			}, 50)
		},
		setBorder(event) {
			if (event.target.value == 'true') {
				this.border = true
			} else if (event.target.value == 'false') {
				this.border = false
			}
		}
	}
})
