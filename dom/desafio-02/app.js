new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        callAlert() {
            alert('Botão foi clicado')
        },
        newValue(event) {
            this.valor = event.target.value
        }
    }
})