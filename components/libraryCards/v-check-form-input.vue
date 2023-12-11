<template>
  <input type="text" :placeholder="placeholder" class="custom_input text_style"/>
</template>

<script>
export default {
  props:['placeholder']
}
</script>

<style lang="scss" scoped>
.text_style {
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 0.6px;
  color: #BB945F;
}
  .custom_input {
    padding: 8px 20px;
    border: none;
    border-radius: 10px;
    &::placeholder {
      color: #8E8E8E;
    }
  }
</style>
