<template>
  <div class="item tc" id="jiu2">
    <div class="vtc">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="p1"><img src="../assets/7/71.png" alt=""></div>
      <div class="p2">
        <div class="img_wrap hide" v-for="(item,index) in list" :key="index">
         <img class="" :src="item" alt="">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      list: [
        require("../assets/7/b1.png"),
        require("../assets/7/b2.png"),
        require("../assets/7/b3.png"),
        require("../assets/7/b4.png"),
        require("../assets/7/b5.png"),
        require("../assets/7/b6.png")
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.animate($("#jiu2 .p2 .img_wrap"));
    });
  },
  components: {},
  methods: {
    animate(dom) {
      dom
        .eq(this.index++)
        .anime(
          "jiuAnimeLeft",
          "1.1s",
          "cubic-bezier(0.06, 0.96, 0.31, 1.1)",
          "both",
          { display: "block" },
          function() {
            $(this).hide();
          }
        );
      if (this.index >= this.list.length) {
        this.index = 0;
      }
      setTimeout(() => {
        this.animate(dom);
      }, 500);
    }
  }
};
</script>

<style  lang='less' scoped>
.vtc {
  height: 100%;
}
.logo {
  img {
    width: 0.82rem;
    height: 0.77rem;
  }
}
.p1 {
  animation: gai 1s cubic-bezier(0.21, 1.12, 0.21, 1.2) 0.5s both;
  margin: 1% auto;
  img {
    width: 4.17rem;
  }
}
.p2 {
  position: relative;
  width: 100%;
  height: 60%;
  .img_wrap {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }
  img {
    height: 100%;
  }
}
.item {
  background-image: url(../assets/7/bg7.jpg);
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
