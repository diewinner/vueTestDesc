<template>
  <div class="inputChecked-item-content-item">
    <div class="content-text">
      <div class="title">
        <span>Staff Picks</span>
        <div class="title__underline"></div>
        <div class="author-name">
          <div class="author-name__bookName">{{ bookName }}</div>
          <div class="author-name__author">{{ author }}</div>
        </div>
        <div class="description">{{ description }}</div>
      </div>
      <vButton class="favorites_btn" :text="textBtn" @btnClick="toggleModal"/>
    </div>
    <img :src=imgSrc :alt=bookName class="content-img">
    <buyCardModal v-show="isShowModal" @closeModal="toggleModal"/>
  </div>
</template>

<script>
import BuyCardModal from "@/components/modals/buyCardModal.vue";
import VButton from "@/components/vButton.vue";

export default {
  components: {VButton, BuyCardModal},
  data() {
    return {
      textBtn: 'Buy',
      isShowModal:false,
    }
  },
  props: ['bookName', 'author', 'imgSrc', 'description'],
  methods: {
    toggleModal() {
      this.isShowModal = !this.isShowModal
      console.log(this.isShowModal)
    }
  }
}
</script>

<style lang="scss" scoped>
.inputChecked-item-content-item {
  width: 590px;
  height: 555px;
  position: relative;
}

.content-text {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

.author-name {
  display: flex;
  flex-direction: column;
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  font-weight: 700;
  line-height: 40px;
  letter-spacing: 2px;

  &__bookName {
    @extend .author-name;
    text-transform: uppercase;
  }

  &__author {
    @extend .author-name;
    text-transform: capitalize;
  }
}

.description {
  max-width: 355px;
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  line-height: 40px;
  letter-spacing: 2px;
  text-transform: capitalize;
}

.favorites_btn {
  align-self: flex-start;
  padding: 9px 27px;
  font-size: 10px;
  transition: all .2s ease;
  &:hover {
    border:1px solid #BB945F;
    color:#BB945F;
  }
  &:active {
    border:1px solid #BB945F;
    color:#fff;
    background: #BB945F;
  }
}
</style>
