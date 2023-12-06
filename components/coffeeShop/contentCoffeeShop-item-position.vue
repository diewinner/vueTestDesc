<template>
  <div class="position">
    <div class="position__text">{{pos}}</div>
    <div class="line_between"></div>
    <div class="position__text">${{price}}</div>
  </div>
</template>

<script>
export default {
  props:['pos','price']
}
</script>

<style lang="scss" scoped>
.position {
  display: flex;
  align-items: center;
  gap: 60px;
  &__text {
    color: #000;
    font-family: 'Inter', sans-serif;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 2px;
  }
}
.line_between {
  width: 100px;
  height: 1px;
  background: #BB945F;
}
</style>
