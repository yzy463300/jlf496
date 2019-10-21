<template>
  <div class="item tc">
    <div class="logo">
      <img src="../assets/logo.png" alt />
    </div>
    <div class="p1"><img src="../assets/2/21.png" alt=""></div>
    <div class="p2"><img src="../assets/2/22.png" alt=""></div>
    <img style="width:1.87rem;" src="../assets/2/23.png" alt="" class="b1">
    <img style="width:5.25rem;" src="../assets/2/24.png" alt="" class="b2">
    <img style="width:1.91rem;" src="../assets/2/25.png" alt="" class="b3">
    <img style="width:1.81rem;" src="../assets/2/26.png" alt="" class="b4">
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
.b1 {
  animation: fadeInUp 1s ease 0.5s both;
  position: absolute;
  left: 0.2rem;
  bottom: 1rem;
}
.b2 {
  animation: fadeInUp 1s 0.7s both;
  position: absolute;
  left: 0.9rem;
  bottom: 1.9rem;
}
.b3 {
  animation: fadeInUp 1s 0.9s both;
  position: absolute;
  right: 0.25rem;
  bottom: 2.55rem;
}
.b4 {
  animation: fadeInUp 1s 1.1s both;
  position: absolute;
  right: 1.5rem;
  bottom: 0.75rem;
}
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
  animation: fadeInUp 1s 0.5s both;
  margin-top: 1.7rem;
  img {
    width: 3.38rem;
    height: 1.67rem;
  }
}
.p2 {
  animation: gai 0.3s 1s both;
  margin-top: 0.2rem;
  width: 100%;
  img {
    width: 2.93rem;
    height: 1.87rem;
  }
}
.item {
  background-image: url(../assets/2/bg2.jpg);
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
