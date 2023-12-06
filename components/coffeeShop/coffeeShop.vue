<template>
  <div class="coffee-shop wrapper_component">
    <title-component :title="title"/>
    <sub-title-component :subtitle="subtitle" class="margin_component"/>
    <content-coffee-shop/>
  </div>
</template>

<script>
export default {
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
