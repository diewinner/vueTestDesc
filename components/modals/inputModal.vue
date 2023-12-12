<template>
  <div class="input_modal">
    <label :for="input">{{ nameInput }}</label>
    <input type="text" :name="input">
  </div>
</template>

<script>
export default {
  props: {
    input: {
      type: String,
      default: ''
    },
    nameInput: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input_modal {
  display: flex;
  flex-direction: column;
  gap: 10px;

  & label {
    color: #000;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 0.3px;
  }

  & input {
    border: 1px solid #BB945F;
    padding: 2px 0;
  }
}
</style>
