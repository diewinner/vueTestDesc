<template>
  <div class="position">
    <div class="position__text">{{pos}}</div>
    <div class="line_between"></div>
    <div class="position__text__price">${{price}}</div>
  </div>
</template>

<script>
export default {
  props:{
    pos: {
      type:String,
      default: ''
    },
    price: {
      type:String,
      default: ''
    },
  }
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
    min-width: 212px;
    &__price {
      @extend .position__text;
      min-width: 50px;
    }
  }
}
.line_between {
  width: 100px;
  height: 1px;
  background: #BB945F;
}
</style>
