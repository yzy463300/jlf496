<template>
  <div class="item tc">
    <div class="vtc">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <p class="p1"><img src="../assets/3/31.png" alt=""></p>
      <p class="p2"><img src="../assets/3/32.png" alt=""></p>
      <p class="p3"><img src="../assets/3/33.png" alt=""></p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  components: {},
  methods: {}
};
</script>

<style  lang='less' scoped>
.vtc {
  height: 100%;
}
.logo {
  width: 100%;
  img {
    width: 0.82rem;
    height: 0.77rem;
  }
}
.p1 {
  animation: fadeInUp 1s 0.5s both;
  margin-top: 0.3rem;
  img {
    width: 3.17rem;
    height: 1.58rem;
  }
}
.p2 {
  animation: gai 1s cubic-bezier(0.21, 1.12, 0.21, 1.2) 1s both;
  img {
    width: 4.46rem;
    height: 1.7rem;
  }
}
.p3 {
  animation: zoomIn 1s cubic-bezier(0.21, 1.12, 0.21, 1.2) 1s both;
  img {
    width: 4rem;
  }
}
.item {
  background-image: url(../assets/3/bg3.jpg);
  background-size: 7.5rem 16.5rem;
  background-repeat: no-repeat;
  background-position: center bottom;
}
// @media screen and (max-height: 512px) {
//   .item {
//     background-position: center -4.5rem;
//   }
// }
</style>
