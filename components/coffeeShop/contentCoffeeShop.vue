<template>
  <div class="content">
    <content-coffee-shop-item v-for="item in content" :key="item.id" :item="item"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: [
        {
          id:1,
          itemTitle: 'coffee & tea',
          class:'pos_drinks_container',
          posPrice: [
            {
              pos: 'Cold Brew Coffee',
              pos_price: '3',
            },
            {
              pos: 'French Press Pot',
              pos_price: '5',
            },
            {
              pos: 'Espresso',
              pos_price: '2',
            },
            {
              pos: 'Cappuccino',
              pos_price: '4',
            },
            {
              pos: 'Hot tea',
              pos_price: '2',
            },
            {
              pos: 'Cold tea',
              pos_price: '2'
            },
          ],
        },
        {
          id:2,
          itemTitle: 'desserts & cakes',
          class:'pos_desserts_container',
          posPrice: [
            {
              pos: 'Forest Gateau',
              pos_price: '16',
            },
            {
              pos: 'Blue Moon',
              pos_price: '16',
            },
            {
              pos: 'Truffle Cake',
              pos_price: '15',
            },
            {
              pos: 'Chocolate Cake',
              pos_price: '18',
            },
            {
              pos: 'Poet’s Dream Cake',
              pos_price: '16',
            },
            {
              pos: 'Pineapple Cake',
              pos_price: '14'
            },
          ],
        },
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.content {
  display: flex;
  justify-content: space-between;
}
</style>
