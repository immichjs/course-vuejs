<template>
  <div class="display">
    {{ value }}
  </div>
</template>

<script>
export default {
  props: ['value']
}
</script>

<style>
.display {
  grid-column: span 4;
  background-color: #0004;
  color: #fff;
  font-family: monospace;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  overflow: hidden;
  font-size: 2.1rem;
  padding: 20px;
}
</style>
