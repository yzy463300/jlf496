<template>
  <div class="item tc">
    <div class="logo">
      <img src="../assets/logo.png" alt />
    </div>
    <p class="p1"><img src="../assets/1/12.png" alt=""></p>
    <p class="p2"><img src="../assets/1/13.png" alt=""></p>
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
.light {
  width: 7.5rem;
  height: 8.29rem;
}
.logo {
  position: absolute;
  left: 0;
  top: 0.45rem;
  width: 100%;
  img {
    width: 0.82rem;
    height: 0.77rem;
  }
}
.p1 {
  margin-top: 2rem;
  animation: fadeInDown 1s 0.5s both;
  img {
    width: 5.71rem;
    height: 1.5rem;
  }
}
.p2 {
  animation: fadeInUp 1s 0.5s both;
  position: absolute;
  left: 0.1rem;
  bottom: 1.65rem;
  width: 100%;
  img {
    width: 6.4rem;
    height: 5.66rem;
  }
}
.item {
  background-image: url(../assets/1/bg1.jpg);
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
