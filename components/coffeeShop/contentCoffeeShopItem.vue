<template>
  <div class="item_container">
    <contentCoffeeShopItemTitle :title="item?.itemTitle"/>
    <contentCoffeeShopItemPosition v-for="position in item?.posPrice"
                                       :pos="position?.pos"
                                       :price="position?.pos_price"/>
  </div>
</template>

<script>
import ContentCoffeeShopItemPosition from "@/components/coffeeShop/contentCoffeeShopItemPosition.vue";
import contentCoffeeShopItemTitle from "@/components/coffeeShop/contentCoffeeShopItemTitle.vue";

export default {
  components: {ContentCoffeeShopItemPosition, contentCoffeeShopItemTitle},
  props: {
    item: {
      type: Object,
      default:() => {}
    }
  }
}
</script>

<style lang="scss" scoped>
.item_container {
  display: flex;
  flex-direction: column;
  gap: 40px;
  min-width: 435px;
}
</style>
