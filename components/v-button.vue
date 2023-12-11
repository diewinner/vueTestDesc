<template>
  <button class="button" @click="click">
    {{text}}
  </button>
</template>

<script>
export default {
  props:['text', 'click']
}
</script>

<style lang="scss" scoped>
.button {
  border-radius: 2px;
  border: 1px solid #0C0C0E;
  background: transparent;
  color: #0C0C0E;
  text-align: center;
  font-family: "Inter",sans-serif;
  font-weight: 700;
  letter-spacing: 1px;
  cursor: pointer;
}
</style>
