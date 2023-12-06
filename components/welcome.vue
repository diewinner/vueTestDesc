<template>
  <div class="welcome_container wrapper_component">
    <header-page/>
    <div class="welcome_block">welcome to the brooklyn library</div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.welcome_container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 220px;
  background-image: url("@/static/bg.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  height: 600px;
}

.welcome_block {
  color: #FFF;
  padding: 35px 40px;
  font-size: 40px;
  line-height: 50px;
  letter-spacing: 3px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #0C0C0E;
  height: 220px;
  width: 600px;
  text-align: center;
}
</style>
