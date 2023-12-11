<template>
  <div class="inputs_checked">
    <span class="inputs_checked__text">Pick favorites of season</span>
    <div class="inputs_container">
      <input-checked-item v-for="(input, index) in inputs"
                          :key="input.id"
                          :id="input.id"
                          :value="input.value"
                          :nameInput="nameInput"
                          :index="index"
      />
    </div>
  </div>
</template>

<script>
export default {
  props: ['inputs', 'nameInput']
}
</script>

<style lang="scss">
.inputs_checked {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  margin-top: 40px;
  color: #000;

  & span, label {

    font-family: "Inter", sans-serif;
    font-size: 20px;
    font-weight: 700;
    text-align: center;
  }
}

.inputs_container {
  display: flex;
  gap: 90px;
}
</style>
