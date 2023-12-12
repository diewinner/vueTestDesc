<template>
  <div class="coffee-shop wrapper_component">
    <titleComponent :title="title"/>
    <subTitleComponent :subtitle="subtitle" class="margin_component"/>
    <contentCoffeeShop/>
  </div>
</template>

<script>
import TitleComponent from "@/components/titleComponent.vue";
import SubTitleComponent from "@/components/subTitleComponent.vue";
import ContentCoffeeShop from "@/components/coffeeShop/contentCoffeeShop.vue";

export default {
  components: {ContentCoffeeShop, SubTitleComponent, TitleComponent},
  data() {
    return {
      title:'Coffee Shop',
      subtitle:'In our library, we have of cozy coffee shop, welcoming in customers with frothy cappuccinos and friendly conversation. \n' +
        'you can get a favorite book and read in coffee shop. Our barista to cook you best coffee, and also you can try desserts from bakery.',
    }
  }
}
</script>

<style lang="scss" scoped>
.coffee-shop {
  background: #fff;
}
.margin_component {
  margin:40px 0;
}
</style>
