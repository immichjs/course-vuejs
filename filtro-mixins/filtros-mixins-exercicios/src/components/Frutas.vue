<template>
  <div>
    <h1>{{ global }}</h1>
    <ul>
      <li v-for="fruta in frutas" :key="fruta">{{ fruta }}</li>
    </ul>
    <input type="text" v-model="fruta" @keydown.enter="add">
  </div>
</template>

<script>
import mixinFruta from '../mixins/frutasMixin'
import userMixin from '../mixins/userMixin'
export default {
  mixins: [mixinFruta, userMixin],
  created () {
    // eslint-disable-next-line no-console
    console.log('Created - Frutas.vue')
  },
}
</script>

<style>

</style>
