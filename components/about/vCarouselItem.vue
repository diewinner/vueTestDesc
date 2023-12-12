<template>
  <div class="v-carousel-item">
    <img :src=src :alt=name>
  </div>
</template>

<script>
export default {
  props: {
    src: {
      type:String,
      default: '',
    },
    alt: {
      type:String,
      default: '',
    },
  }
}
</script>

<style lang="scss" scoped>
.v-carousel-item {
  width: 450px;
  height: 560px;

  & img {
    width: 100%;
    height: 100%;
  }
}
</style>
