<template>
  <div class="componente">
    <h2>As Informações de Usuário</h2>
    <p>Vários detalhes...</p>
    <p>
      Nome do Usuário: <strong>{{ inverterNome() }}</strong>
    </p>
    <p>Idade do usuario: <strong>{{ idade }}</strong></p>
    <button @click="reiniciarNome">Reiniciar Nome</button>
    <button @click="reiniciarFn()">Reiniciar nome (callback)</button>
  </div>
</template>

<script>
import barramento from '@/barramento'

export default {
  props: {
    nome: {
      type: String,
      default: 'Anônimo',
      //   required: true,
      //   default() {
      //     return Array(10).fill(0).join(',');
      //   },
    },
    reiniciarFn: Function,
    idade: Number,
  },
  methods: {
    inverterNome() {
      return this.nome.split('').reverse().join('');
    },
    reiniciarNome() {
      //   const novoNome = 'pedro';
      this.$emit('nomeMudou', 'Pedro');
    },
  },
  created() {
    barramento.quandoIdadeMudar(idade => this.idade = idade)
  }
};
</script>

<style scoped>
.componente {
  flex: 1;
  background-color: #ec485f;
  color: #fff;
}
</style>
