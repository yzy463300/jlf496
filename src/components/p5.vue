<template>
  <div class="item tc">
    <div class="vtc">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <p class="p1"><img src="../assets/5/51.png" alt=""></p>
      <p class="p2"><img src="../assets/5/52.png" alt=""></p>
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
  margin-top: 0.8rem;
  width: 100%;
  img {
    width: 0.82rem;
    height: 0.77rem;
  }
}
.p1 {
  animation: gai 1s cubic-bezier(0.21, 1.12, 0.21, 1.2) 1s both;
  margin: 0.3rem 0;
  img {
    width: 4.13rem;
  }
}
.p2 {
  animation: zoomIn 1s cubic-bezier(0.21, 1.12, 0.21, 1.2) 1s both;
  width: 100%;
  img {
    width: 5.04rem;
  }
}
.item {
  background-image: url(../assets/5/bg5.jpg);
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
