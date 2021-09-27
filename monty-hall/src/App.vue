<template>
  <div id="app">
    <div class="form">
      <div v-if="!started">
        <label for="portsAmount">Quantas Portas?</label>
        <input type="text" id="portsAmount" size="3" v-model.number="portsAmount">
      </div>
      <div v-if="!started">
        <label for="selectedPort">Qual porta é premiada?</label>
        <input type="text" id="selectedPort" size="3" v-model.number="selectedPort">
      </div>
      <button v-if="!started" @click="started = true">Iniciar</button>
      <button v-if="started" @click="started = false">Reiniciar</button>
    </div>
    <div class="doors" v-if="started">
      <div v-for="i in portsAmount" :key="i">
        <Door :hasGift="i === selectedPort" :number="i" />
      </div>
    </div>
  </div>
</template>

<script>
import Door from './components/Door.vue'
export default {
  components: {
    Door
  },
  data () {
    return {
      started: false,
      portsAmount: 3,
      selectedPort: 1
    }
  }
}
</script>

<style>
* {
 box-sizing: border-box;
 font-family: sans-serif;
}

body {
  color: #fff;
  background: linear-gradient(to right, #8e2de2, #4a00e0);
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#app h1 {
  border: 1px solid #000;
  background-color: #0004;
  padding: 20px;
  margin-bottom: 60px;
}

.form, .form input, .form button {
  margin-bottom: 10px;
  font-size: 2rem;
}

.doors {
  align-self: stretch;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
}
</style>
