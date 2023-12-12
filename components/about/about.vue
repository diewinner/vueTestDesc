<template>
  <div class="about_container wrapper_component">
    <titleComponent :title="title"/>
    <subTitleComponent :subtitle="subtitle" class="margin_subtitle"/>
    <vCarousel :sliderItems="sliderItems"/>
  </div>
</template>

<script>
import VCarousel from "@/components/about/vCarousel.vue";
import SubTitleComponent from "@/components/subTitleComponent.vue";
import TitleComponent from "@/components/titleComponent.vue";

export default {
  components: {TitleComponent, SubTitleComponent, VCarousel},
  data() {
    return {
      title: 'about',
      subtitle: 'The Brooklyn Library is a free workspace, a large number of books and a cozy coffee shop inside',
      sliderItems: [
        {
          id: 1,
          img: 'slide1.jpg',
          name: 'first slide',
        },
        {
          id: 2,
          img: 'slide2.jpg',
          name: 'second slide',
        },
        {
          id: 3,
          img: 'slide3.jpg',
          name: 'third slide',
        },
        {
          id: 4,
          img: 'slide4.jpg',
          name: 'four slide',
        },
        {
          id: 5,
          img: 'slide5.jpg',
          name: 'five slide',
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.about_container {
  padding-top: 20px;
  background: #fff;
}

.margin_subtitle {
  margin-top: 40px;
  margin-bottom: 20px;
}
</style>
