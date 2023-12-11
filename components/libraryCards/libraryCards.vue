<template>
  <div class="library-cards wrapper_component">
    <title-component :title="title"/>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title:'Digital Library Cards'
    }
  }
}
</script>

<style lang="scss" scoped>
.library-cards {
  display: flex;
  flex-direction: column;
  gap: 40px;
}
</style>
