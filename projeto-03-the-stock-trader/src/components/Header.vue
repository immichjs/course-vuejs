<template>
  <v-toolbar app>
    <v-toolbar-title class="headline text-uppercase mr-4">
      <span>Stock</span>
      <span class="font-weight-light">Trader</span>
    </v-toolbar-title>
    <v-toolbar-items>
      <v-btn flat to="/">Home</v-btn>
      <v-btn flat to="/portfolio">Portifolio</v-btn>
      <v-btn flat to="/stocks">Ações</v-btn>
    </v-toolbar-items>

    <v-spacer></v-spacer>

    <v-toolbar-items>
      <v-btn flat @click="endDay">Finalizar Dia</v-btn>
      <v-menu offset-y>
        <v-btn flat slot="activator" @click="saveData">Salvar Dados</v-btn>
      </v-menu>
      <v-layout align-center>
        <span class="text-uppercase grey--text text--darken-2">Saldo: {{ funds | currency }}</span>
      </v-layout>
    </v-toolbar-items>

  </v-toolbar>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  computed: {
    funds () {
      return this.$store.getters.funds
    }
  },
  methods: {
    ...mapActions(['randomizeStocks']),
    endDay() {
      this.randomizeStocks()
    },
    saveData () {
      const { funds, stockPortfolio, stocks } = this.$store.getters
      this.$http.put('data.json', { funds, stockPortfolio, stocks })
    }
  }
}
</script>

<style>

</style>
