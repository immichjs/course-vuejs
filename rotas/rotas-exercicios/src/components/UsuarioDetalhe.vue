<template>
  <div class="usuario-detalhe">
    <h3>Usuário detalhe</h3>
    <hr>
    <p><strong>Código:</strong>{{ id }}</p>
    <!-- <router-link tag="button" primario :to="`/usuario/${id}/editar`">Editar</router-link> -->
    <router-link tag="button" primario :to="{ name: 'editarUsuario', params: { id }, query: { completo: true, lingua: 'pt-br' }, hash: '#footer' }">Editar</router-link>
  </div>
</template>

<script>
/* eslint-disable no-console */
export default {
  props: ['id'],
  beforeRouteEnter (to, from, next) {
    console.log('Dentro do componente -> usuário detalhe')
    
    const auth = true
    auth ? next() : (next(false), alert('Usuário não autenticado'))
  }
}
</script>

<style>

</style>
