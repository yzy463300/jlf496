<template>
  <div class="item tc">
    <div class="vtc">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <p class="p1"><img src="../assets/4/41.png" alt=""></p>
      <p class="p2"><img src="../assets/4/42.png" alt=""></p>
      <p class="p3"><img src="../assets/4/43.png" alt=""></p>
      <p class="p4"><img src="../assets/4/44.png" alt=""></p>
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
  margin-top: 0.7rem;
  width: 100%;
  img {
    width: 0.82rem;
    height: 0.77rem;
  }
}
.p1 {
  animation: fadeInUp 0.8s cubic-bezier(0.21, 0.88, 0.21, 1.1) 0.5s both;
  margin-top: 0.4rem;
  img {
    width: 1.6rem;
  }
}
.p2 {
  animation: fadeInUp 0.8s cubic-bezier(0.21, 0.88, 0.21, 1.1) 0.7s both;
  margin-top: 0.1rem;
  img {
    width: 1.59rem;
  }
}
.p3 {
  animation: fadeInUp 0.8s cubic-bezier(0.21, 0.88, 0.21, 1.1) 0.9s both;
  margin-top: 0.1rem;
  img {
    width: 2.34rem;
  }
}
.p4 {
  animation: zoomIn 0.8s cubic-bezier(0.21, 0.88, 0.21, 1.1) 1.1s both;
  img {
    width: 5.04rem;
  }
}
.item {
  background-image: url(../assets/4/bg4.jpg);
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center bottom;
}
// @media screen and (max-height: 512px) {
//   .item {
//     background-position: center -4.5rem;
//   }
// }
</style>
