<template>
  <div class="library-cards wrapper_component flex_column">
    <title-component :title="title"/>
    <div class="library-cards__content">
      <div class="library-cards__content__form_container flex_column">
        <div class="library-cards__content__title">Find your Library card</div>
        <v-check-form :title="formTitle" :subtitle="formSubTitle"/>
      </div>
      <not-auth-text/>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      title: 'Digital Library Cards',
      formTitle: 'Find your Library card',
      formSubTitle: 'Brooklyn Public Library',
    }
  }
}
</script>

<style lang="scss" scoped>
.flex_column {
  display: flex;
  flex-direction: column;
}

.library-cards {
  background: #FFFFFF;
  gap: 40px;

  &__content {
    display: flex;
    justify-content: space-between;

    &__form_container {
      min-width: 600px;
      min-height: 453px;
      gap: 30px;
    }

    &__title {
      color: #000;
      font-family: "Inter", sans-serif;
      font-size: 30px;
      letter-spacing: 0.6px;
      align-self: center;
    }
  }
}
</style>
