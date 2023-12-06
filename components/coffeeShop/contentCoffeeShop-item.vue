<template>
  <div class="item_container">
    <content-coffe-shop-item-title :title="item.itemTitle"/>
    <content-coffee-shop-item-position v-for="position in item.posPrice"
                                       :pos="position.pos"
                                       :price="position.pos_price"/>
  </div>
</template>

<script>
export default {
  props: ['item']
}
</script>

<style lang="scss" scoped>
.item_container {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
