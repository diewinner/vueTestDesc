<template>
  <div class="inputChecked-item-content">
    <div  v-for="content in inputsContent">
      <input-checked-item-content-item  :key="content.bookName"
                                        :bookName="content.bookName"
                                        :author="content.author"
                                        :imgSrc="content.img"/>
    </div>
  </div>
</template>

<script>
export default {
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
