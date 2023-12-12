<template>
  <div class="form flex_column">
    <div class="form__content flex_column">
      <span class="form__content__title">{{ this.subtitle }}</span>
      <div class="form__content__inputs_container flex_column">
        <vCheckFormInput v-for="placeholder in placeholders" :placeholder="placeholder"/>
      </div>
    </div>
    <vButton class="form__button" :text="btnText"/>
  </div>
</template>

<script>
import VCheckFormInput from "@/components/libraryCards/vCheckFormInput.vue";
import VButton from "@/components/vButton.vue";

export default {
  components: {VButton, VCheckFormInput},
  props: {
    title: {
      type: String,
      default: '',
    },
    subtitle: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      btnText: 'Check the card',
      placeholders: ['Reader\'s name', 'Card number']
    }
  }
}
</script>

<style lang="scss" scoped>
.flex_column {
  display: flex;
  flex-direction: column;
}

.form {
  border: 3px solid #BB945F;
  padding: 20px 20px 30px 20px;
  gap: 20px;

  &__content {
    background: #BB945F;
    gap: 20px;
    padding: 20px 20px 25px 20px;

    &__title {
      color: #000;
      font-size: 30px;
      line-height: 50px;
      letter-spacing: 0.6px;
    }

    &__inputs_container {
      gap: 25px;
    }
  }

  &__button {
    padding: 10px 40px;
    font-size: 20px;
    align-self: center;
  }
}
</style>
