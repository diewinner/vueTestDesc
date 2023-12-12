<template>
  <div class="title_container">
    <span class="title_container__text">{{ title }}</span>
    <div class="black_line"></div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type:String,
      default:'',
    }
  }
}
</script>

<style lang="scss" scoped>
.title_container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  justify-content: center;
  align-items: center;
  &__text {
    font-size: 40px;
    line-height: 40px;
    letter-spacing: 2px;
    text-transform: capitalize;
    color: #0C0C0E;
  }
}

.black_line {
  background: #0C0C0E;
  width: 50px;
  height: 1px;
}
</style>
