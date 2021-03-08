new Vue({
    el: '#desafio',
    data: {
        name: 'Michel',
        age: 19,
        image: 'https://picsum.photos/200/300'
    },
    methods: {
        ageX3() {
            return this.age * 3
        },
        random() {
            return Math.random().toString()
        }
    },
})