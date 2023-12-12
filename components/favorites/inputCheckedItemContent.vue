<template>
  <div class="inputChecked-item-content">
    <div v-for="content in inputsContent">
      <inputCheckedItemContentItem :key="content?.bookName"
                                      :bookName="content?.bookName"
                                      :author="content?.author"
                                      :description="content?.description"
                                      :imgSrc="content?.img"/>
    </div>
  </div>
</template>

<script>
import InputCheckedItemContentItem from "@/components/favorites/inputCheckedItemContentItem.vue";

export default {
  components: {InputCheckedItemContentItem},
  props: ['inputsContent'],
}
</script>

<style lang="scss" scoped>
.inputChecked-item-content {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 40px;
}
</style>
