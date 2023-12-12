<template>
  <transition name="modal_fade">
    <div class="modal-wrapper" @click="close">
      <div class="modal" @click.stop.prevent="clickInsideModal">
        <div class="modal_header">
        <span>
          Buy a library card
        </span>
          <div class="close_btn" @click="close">
            <closeSvg/>
          </div>
        </div>
        <div class="modal_content">
          <div class="modal_content__form">
            <div class="modal_content__form__card">
              <inputModal :nameInput="nameInput1" :name="name1"/>
              <label class="label_expiration" for="expiration">Expiration code</label>
              <div class="expiration_input">
                <input type="text" name="expiration" class="modal_input">
                <input type="text" name="expiration" class="modal_input">
              </div>
              <inputModal :nameInput="nameInput2" :name="name2" class="cvc_input"/>
            </div>
            <div class="modal_content__form__holder">
              <inputModal :nameInput="input.nameInput" :name="input.name" v-for="input in inputs" :key="input.name"/>
            </div>
          </div>
          <div class="modal_content__description">If you are live, work, attend school, or pay property taxes in New York
            State, you can get a $25 digital library card right now using this online form. Visitors to New York State can
            also use this form to apply for a temporary card.
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import InputModal from "@/components/modals/inputModal.vue";
import CloseSvg from "@/components/icons/closeSvg.vue";

export default {
  components: {CloseSvg, InputModal},
  data() {
    return {
      nameInput1: 'Bank card number',
      name1: 'number',
      nameInput2: 'CVC',
      name2: 'cvc',
      inputs: [
        {
          nameInput: 'Cardholder name',
          name: 'cardholder',
        },
        {
          nameInput: 'Postal code',
          name: 'postal',
        },
        {
          nameInput: 'City / Town',
          name: 'city',
        },
      ]
    }
  },
  methods: {
    clickInsideModal(event) {
      event.stopPropagation();
    },
    close() {
      this.$emit('closeModal')
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-wrapper {
  position: fixed;
  display: flex;
  align-items: center;
  background-color: rgb(0, 0, 0, 0.5);
  justify-content: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.modal {
  display: flex;
  flex-direction: column;
  gap: 30px;
  background: #fff;
  z-index: 2;
}

.modal_header {
  display: flex;
  justify-content: flex-end;
  gap: 100px;
  padding-top: 20px;
  padding-bottom: 20px;
  padding-right: 25px;
  background: #000;
  color: #FFF;
  text-align: center;
  font-size: 40px;
  line-height: 20px;
  letter-spacing: 0.8px;
  text-transform: uppercase;
}

.modal_content {
  display: flex;
  gap: 40px;
  padding: 0 40px 40px 40px;

  &__form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    min-width: 200px;

    &__card {
      @extend .modal_content__form;
      gap: 10px;
    }

    &__holder {
      @extend .modal_content__form;
      gap: 10px;
    }
  }

  &__description {
    max-width: 330px;
    color: #8E8E8E;
    font-family: "Inter", sans-serif;
    font-size: 15px;
    line-height: 20px;
    letter-spacing: 2px;
  }
}

.modal_input {
  border: 1px solid #BB945F;
  max-width: 45px;
  padding: 2px 0;

}

.expiration_input {
  display: flex;
  justify-content: flex-start;
  gap: 10px;
}

.label_expiration {
  color: #000;
  font-family: "Inter", sans-serif;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 0.3px;
}

.cvc_input {
  max-width: 45px;
  padding: 2px 0;

}
.close_btn {
  cursor: pointer;
}
.modal_fade-enter,
.modal_fade-leave-active {
  opacity: 0;
}

.modal_fade-enter-active,
.modal_fade-leave-active {
  transition: opacity .5s ease
}
</style>
