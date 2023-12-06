<template>
  <div class="inputChecked-item-content-item">
    <div class="content-text">
      <div class="title">
        <span>Staff Picks</span>
        <div class="title__underline"></div>
        <div class="author-name">
          <div>{{bookName}}</div>
          <div>{{author}}</div>
        </div>
      </div>
    </div>
    <img :src=imgSrc :alt=bookName class="content-img">
  </div>
</template>

<script>
export default {
  props:['bookName','author', 'imgSrc']
}
</script>

<style lang="scss" scoped>
.inputChecked-item-content-item {
  width: 590px;
  height: 555px;
  position: relative;
}

.content-text {
  width: 550px;
  height: 100%;
  border: 1px solid #000;
  padding: 15px 20px;
}

.content-img {
  position: absolute;
  bottom: 0;
  right: 0;
}

.title {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  & span {
    color: #000;
    font-size: 20px;
    line-height: 40px;
    letter-spacing: 2px;
    text-transform: capitalize;
  }
  &__underline {
    width: 60px;
    height: 1px;
    background-color: #BB945F;
  }
}
</style>
