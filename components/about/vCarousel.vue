<template>
  <carousel perPage="3" paginationColor="#0c0c0e" paginationActiveColor="#bb945f" minSwipeDistance="2"
            paginationSize="16">
    <slide v-for="slide in sliderItems" :key="slide?.id">
      <vCarouselItem :src="slide?.img" :name="slide?.name"/>
    </slide>
  </carousel>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'
import VCarouselItem from "@/components/about/vCarouselItem.vue";

export default {
  props: {
    sliderItems: {
      type: Array,
      default: () => [],
    }
  },
  components: {
    VCarouselItem,
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>

</style>
