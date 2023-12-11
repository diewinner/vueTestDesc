<template>
  <div class="inputChecked-item">
    <input type="radio" :id="id" :name="id"  :value="value" v-model="selected"
           @click="handleChange" />
    <label :for="id">{{ value }}</label>
  </div>
</template>

<script>
export default {
  props: ['id', 'value', 'nameInput','index'],
  computed: {
    selected: {
      get() {
        return this.$store.getters.getSelected;
      },
      set(value) {
        this.$store.commit('setSelected', value);
      }
    }
  },
  methods: {
    handleChange() {
      this.$store.dispatch('changeSelected');
    },

  }
};
</script>

<style lang="scss" scoped>
.inputChecked-item {
  display: flex;
  gap: 20px;
  justify-content: center;
  align-items: center;
}

input {
  appearance: none;
  border-radius: 50%;
  width: 17px;
  height: 17px;
  border: 1px solid #000;
  margin-right: 5px;

  &:checked {
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
    }

    border: 2px solid #000;
  }
}

</style>
