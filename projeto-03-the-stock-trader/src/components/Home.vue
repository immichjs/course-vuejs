<template>
  <div>
    <h1 class="display-3 font-weight-light mb-4">Negocie e Consulte suas Ações</h1>
    <v-sheet :elevation="3" class="pa-2 white--text" color="primary">
      <v-icon class="white--text mr-4">info</v-icon>
      <span class="headline font-weight-light">Você pode Salvar & Carregar os Dados</span>
    </v-sheet>
    <v-sheet :elevation="3" class="pa-2 mt-3 white--text darken-1" color="success">
      <v-icon class="white--text mr-4">info</v-icon>
      <span class="headline font-weight-light">Clique em 'Finalizar Dia' para iniciar um novo dia</span>
    </v-sheet>
    <v-divider class="my-4"></v-divider>
    <p class="display-1">Seu Saldo: <strong>{{ funds | currency }}</strong></p>
  </div>
</template>

<script>
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  }
}
</script>

<style>

</style>
