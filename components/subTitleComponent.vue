<template>
  <div class="subtitle_container">
    {{subtitle}}
  </div>
</template>

<script>
export default {
  props:{
    subtitle: {
      type:String,
      default:''
    }
  }
}
</script>

<style lang="scss" scoped>
.subtitle_container {
  font-size: 20px;
  font-family: "Inter", sans-serif;
  line-height: 40px;
  text-align: center;
  color:#000;
}
</style>
