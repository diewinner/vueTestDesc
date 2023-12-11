<template>
  <div class="footer flex_column">
    <div class="footer__main_info">
      <div class="footer__main_info__contact flex_column">
        <div class="footer__main_info__contact__text">286 Cadman Plaza, New York, NY 11238, United States</div>
        <div class="footer__main_info__contact__icons">
          <twitter-svg/>
          <instagram-svg/>
          <facebook-svg/>
        </div>
      </div>
      <div class="footer__main_info__time flex_column">
        <div class="footer__main_info__time__item">
          Mon - Fri
          08:00 am - 07:00 pm
        </div>
        <div class="footer__main_info__time__item">
          Sat - Sun
          10:00 am - 06:00 pm
        </div>
      </div>
    </div>
    <div class="footer_line">
    </div>
    <div class="footer__author">
      <span class="footer__author__item">2023</span>
      <span class="footer__author__item">The Rolling Scopes School</span>
      <span class="footer__author__item">diewinner</span>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.flex_column {
  display: flex;
  flex-direction: column;
}

.footer {
  background: #0C0C0E;
  gap: 35px;

  &__main_info {
    display: flex;
    justify-content: space-between;

    &__contact {
      gap: 18px;

      &__text {
        color: #FFF;
        font-family: "Inter", sans-serif;
        font-size: 15px;
        line-height: 20px;
      }

      &__icons {
        display: flex;
        gap: 15px;
      }
    }

    &__time {
      gap: 10px;

      &__item {
        color: #FFF;
        text-align: right;
        font-family: "Inter", sans-serif;
        font-size: 15px;
        line-height: 20px;
      }
    }

    &__author {
      display: flex;
      justify-content: space-between;

      &__item {
        color: #FFF;
        text-align: center;
        font-family: "Inter", sans-serif;
        font-size: 20px;
        line-height: 20px;
        letter-spacing: 2px;
      }
    }
  }

  .footer_line {
    width: 100%;
    height: 1px;
    background: #FFFFFF;
  }
}
</style>
