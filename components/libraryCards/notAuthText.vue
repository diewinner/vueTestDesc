<template>
  <div class="notAuth">
    <div class="notAuth__title">Get a reader card</div>
    <div class="notAuth__description">You will be able to see a reader card after logging into account or you can register a new account</div>
    <div class="notAuth__btns_container">
      <vButton v-for="btn in btns" :text="btn" class="notAuth__btns_container__btn"/>
    </div>
  </div>
</template>

<script>
import VButton from "@/components/vButton.vue";

export default {
  components: {VButton},
  data() {
    return {
      btns:['Sign Up', 'Log In'],
    }
  }
}
</script>

<style lang="scss" scoped>
.notAuth {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 35px;
  max-width: 456px;
  &__title {
    color: #000;
    text-align: center;
    font-size: 30px;
    letter-spacing: 0.6px;
  }
  &__description {
    color: #000;
    font-family: "Inter",sans-serif;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 0.4px;
  }
  &__btns_container {
    display: flex;
    gap: 20px;
    &__btn {
      font-size: 10px;
      padding: 10px;
    }
  }
}
</style>
