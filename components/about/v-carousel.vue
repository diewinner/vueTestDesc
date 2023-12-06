<template>
  <carousel perPage="3" paginationColor="#0c0c0e" paginationActiveColor="#bb945f" paginationSize="16">
    <slide v-for="slide in sliderItems" :key="slide.id">
      <v-carousel-item :src="slide.img" :name="slide.name"/>
    </slide>
  </carousel>
</template>

<script>
import {Carousel, Slide} from 'vue-carousel'

export default {
  props: ['sliderItems'],
  components: {
    Carousel,
    Slide
  }
}
</script>

<style lang="scss" scoped>

</style>
