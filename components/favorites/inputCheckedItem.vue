<template>
  <div @click="handleChange" class="inputChecked-item">
    <div class="input" :class="{active: isChecked}"></div>
    <div class="label">{{ value }}</div>

  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    },
    index: {
      type: Number,
      default: 0,
    }
  },
  data() {
    return {
      isChecked: false,
    }
  },
  watch: {
    isChecked(val, oldVal) {
      console.log('val: ' + val, 'oldVal: ' + oldVal)
    }
  },
  mounted() {
    this.index === 0 ? this.isChecked = true : this.isChecked = false
  },
  methods: {
    handleChange() {
      this.isChecked = !this.isChecked;
      this.$emit('toggle', this.isChecked, this.index)
    }
  }
};
</script>

<style lang="scss" scoped>
.inputChecked-item {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.active {
  position: relative;

  &::before {
    content: '';
    border-radius: 50%;
    width: 9px;
    height: 9px;
    background: black;
    position: absolute;
    top: 2px;
    left: 2px;
    border: 2px solid #000;

  }
}

.input {
  border-radius: 50%;
  width: 19px;
  height: 19px;
  border: 1px solid #000;
  margin-right: 5px;
}

</style>
