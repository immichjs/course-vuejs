<template>
    <div class="counter">
        <h1>Contador</h1>
        <span>{{ counter }}</span>
        <button @click="add">+</button>
        <button @click="sub">-</button>
    </div>
</template>

<script>
export default {
    data() {
        return {
            counter: 0
        }
    },
    methods: {
        add() {
            this.counter++
        },
        sub() {
            this.counter--
        }
    }
}
</script>

<style scoped>
    span {
        border-bottom: 1px solid #ccc;
        height: 30px;
        padding: 5px 25px;
    }

    button {
        height: 30px;
        width: 30px;
        border-radius: 15px;
        background: coral;
        outline: none;
        margin-left: 10px;
        color: #fff;
        border: none;
        cursor: pointer;
    }
</style>