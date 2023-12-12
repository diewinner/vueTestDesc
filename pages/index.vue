<template>
  <div class="main_container">
    <welcome/>
    <about/>
    <favorites/>
    <coffeeShop/>
    <contacts/>
    <libraryCards/>
    <vFooter/>
  </div>
</template>

<script>
import VFooter from "@/components/vFooter.vue";
import LibraryCards from "@/components/libraryCards/libraryCards.vue";
import Contacts from "@/components/contacts.vue";
import CoffeeShop from "@/components/coffeeShop/coffeeShop.vue";
import Favorites from "@/components/favorites/favorites.vue";
import About from "@/components/about/about.vue";
import Welcome from "@/components/welcome.vue";

export default {
  name: 'IndexPage',
  components: {Welcome, About, Favorites, CoffeeShop, Contacts, LibraryCards, VFooter},

}
</script>
<style>


</style>
