<template>
  <div>
    <Rotulo nome="Nome">
      <input type="text" v-model="value.name"/>
    </Rotulo>
    <Rotulo nome="Sobrenome">
      <input type="text" v-model="value.secondName"/>
    </Rotulo>
</div>
</template>

<script>
import Rotulo from './Rotulo.vue'

export default {
  components: {
    Rotulo,
  },
  props: {
    value: { type: Object, required: true }
  },
}
</script>

<style>

</style>
