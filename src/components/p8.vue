<template>
  <div class="item tc">
    <div class="logo">
      <img src="../assets/logo.png" alt />
    </div>
    <div class="p1"><img src="../assets/8/81.png" alt=""></div>
    <div class="p2"><img src="../assets/8/82.png" alt=""></div>
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
.logo {
  position: absolute;
  left: 0;
  top: 0.3rem;
  width: 100%;
  img {
    width: 0.82rem;
    height: 0.77rem;
  }
}
.p1 {
  animation: gai 0.7s cubic-bezier(0.21, 1.12, 0.21, 1.2) 0.5s both;
  margin-top: 1.3rem;
  img {
    width: 6.51rem;
  }
}
.p2 {
  animation: fadeInUp 1s 0.5s both;
  position: absolute;
  left: 0.2rem;
  bottom: 1.5rem;
  width: 100%;
  img {
    width: 7.18rem;
  }
}
.item {
  background-image: url(../assets/8/bg8.jpg);
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
