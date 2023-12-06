<template>
  <div class="title">
    {{title}}
  </div>
</template>

<script>
export default {
  props:['title']
}
</script>

<style lang="scss" scoped>
.title {
  color: #BB945F;
  font-size: 40px;
  font-weight: 400;
  line-height: 40px;
  letter-spacing: 2px;
  text-transform: capitalize;
}
</style>
