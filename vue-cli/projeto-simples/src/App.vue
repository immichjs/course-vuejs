<template>
  <div id="#app">
    {{ title }}
    <button @click="title += '#'">Alterar</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Teste data usando Vue-cli'
    }
  }
}
</script>

<style>
  #app {
    background: chocolate;
    color: #fff;
  }
</style>