<template>
  <div class="contacts flex_column wrapper_component">
    <titleComponent :title="title"/>
    <div class="contacts__content">
      <div class="contacts__content__text flex_column">
        <h6 class="contacts__content__title text_style">For all Library inquiries:</h6>
        <div class="contacts__content__info flex_column">
          <span class="text_style">Please call (617) 730-2370</span>
          <span class="text_style">For TTY service, please call (617) 730-2370</span>
          <span class="text_style">Putterham Library: (617) 730-2385</span>
        </div>
        <div class="contacts__content__info flex_column">
          <span class="contacts__content__title text_style">Senior Staff</span>
          <div class="text_style">
            Library Director:<strong>Amanda Hirst</strong>
          </div>
        </div>
      </div>
      <div class="contacts__content__map">
        <img src="mapImg.png" alt="map"/>
      </div>
    </div>
  </div>
</template>

<script>
import TitleComponent from "@/components/titleComponent.vue";

export default {
  components: {TitleComponent},
  data() {
    return {
      title:'Our Contacts'
    }
  }
}
</script>

<style lang="scss" scoped>
.text_style {
  color: #000;
  font-family: "Inter",sans-serif;
  font-size: 20px;
  line-height: 40px;
  letter-spacing: 2px;
}

.flex_column {
  display: flex;
  flex-direction: column;
}

.contacts {
  background: #FFFFFF;
  gap: 40px;
  &__content {
    display: flex;
    justify-content: space-between;
    &__text {
      gap: 40px;
    }
    &__title {
      font-weight: 700;
    }
    &__info {
      gap: 20px;
    }
    &__map {
      max-width: 696px;
      max-height: 414px;
      & img {
        width: 100%;
        height: 100%;
      }
    }
  }
}
</style>
