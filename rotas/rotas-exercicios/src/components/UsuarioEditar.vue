<template>
  <div class="usuario-editar">
    <h3>Usuário Editar</h3>
    <hr>
    <p><strong>Código: </strong>{{ id }}</p>
    <p><strong>Código: </strong>{{ $route.params.id }}</p>
    <p><strong>Completo: </strong>{{ $route.query.completo ? 'Sim' : 'Não' }}</p>
    <p><strong>Língua: </strong>{{ $route.query.lingua }}</p>
    
    <button primario @click="confirmou = true">Confirmar</button>
    <div id="footer">
      <h3>Curso Vue</h3>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      confirmou: false,
    }
  },
  beforeRouteLeave (to, from, next) {
    if (this.confirmou) {
      next()
    } else {
      if (confirm('Tem certeza que deseja confirmar?')) {
        next()
      } else {
        next(false)
      }
    }
  },
  props: ['id']
}
</script>

<style>
#footer {
  margin-top: 768px;
}
</style>
