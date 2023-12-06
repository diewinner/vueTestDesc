<template>
  <div class="head_container">
    <div class="name_brand">
      Brooklyn Public Library
    </div>
    <div class="btns">
      <nav class="nav_container">
        <nav-item :key="item" :text="item" v-for="item in arr" class="nav_item">{{ item }}</nav-item>
      </nav>
      <div class="svg">
        <profileSvg/>
      </div>
    </div>
  </div>
</template>

<script>

import ProfileSvg from "~/components/icons/profileSvg.vue";

export default {
  components: {ProfileSvg},
  data() {
    return {
      arr: ['About', 'Favorites', 'Coffee shop', 'Contacts', 'Library Card']
    }
  },
}
</script>

<style lang="scss" scoped>
.head_container {
  display: flex;
  justify-content: space-between;
}

.name_brand {
  color: #fff;
  font-size: 30px;
  line-height: 50px;
  letter-spacing: 0.6px;
}

.btns {
  display: flex;
  gap: 40px;
}

.svg {
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

}

.nav_container {
  display: flex;
  gap: 30px;
}

.nav_item {
  color: #fff;
  font-size: 20px;
  font-family: "Inter", sans-serif;
  line-height: 50px;
  cursor: pointer;
}
</style>
