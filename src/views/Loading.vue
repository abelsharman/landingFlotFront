<template>
  <v-overlay :value="loading"  :opacity="1" class="">
    <div :style="{background: getBackground}" style="width: 100vw; height: 100vh; padding-top: 40vh">
        <div class="my-loading d-flex flex-column justify-center align-center">
        <img src="../assets/loading.png" alt="">
        <p class="mt-4 text-center">
            Загрузка...
        </p>
        <!-- <v-progress-linear
            class="mt-11"
            height="20"
            color="#FF7F51"
            indeterminate
            rounded
        >
        </v-progress-linear> -->
        </div>
    </div>
  </v-overlay>
</template>

<script>
export default {
  data: () => ({}),
  props: {
    loading: Boolean
  },
  computed:{
      getBackground(){
          return 'linear-gradient(264.1deg, #063661 0%, #078FD3 99.34%)'
      }
  }
};
</script>

<style scoped lang="scss">
* {
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 28px;
  font-family: "Montserrat", sans-serif !important;
  color: #d7dddd;
}
.my-loading {
  width: 80%;
  font-family: "Montserrat", sans-serif !important;
  margin: 0 auto;
}
.loading-page {
  width: 80%;
  height: 100vh;
  background: #fff;
  z-index: 1000;
}
@keyframes scrollBlock {
    0%{
        transform: rotate(0deg);
    }
    100%{
        transform: rotate(-360deg);
    }
}
.my-loading img{
    animation: scrollBlock 10s ease;
}
.my-loading p{
    font-family: "Montserrat", sans-serif !important;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 30px;

    color: #FFFFFF;
}
</style>
