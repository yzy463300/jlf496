<template>
  <div class="item tc" id="jiu1">
    <div class="vtc">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="p1"><img src="../assets/6/61.png" alt=""></div>
      <div class="p2"><img class="hide" v-for="(item,index) in list" :key="index" :src="item" alt=""></div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      index: 0,
      list: [
        require("../assets/6/a1.png"),
        require("../assets/6/a2.png"),
        require("../assets/6/a3.png"),
        require("../assets/6/a4.png"),
        require("../assets/6/a5.png"),
        require("../assets/6/a6.png")
      ]
    };
  },
  mounted() {
    setTimeout(() => {
      this.animate($("#jiu1 .p2 img"));
    }, 1300);
  },
  components: {},
  methods: {
    animate(dom) {
      dom
        .eq(this.index++)
        .anime(
          "jiuAnimeLeft",
          "1s",
          "cubic-bezier(0.14, 0.85, 0.28, 0.98)",
          "both",
          { display: "inline" },
          () => {
            setTimeout(() => {
              dom.anime(
                "jiuAnimeRight",
                "1.5s",
                "cubic-bezier(0.14, 0.85, 0.28, 0.98)",
                "both",
                () => {
                  dom.eq(this.index - 1).hide();
                  if (this.index >= this.list.length) {
                    this.index = 0;
                  }
                  this.animate(dom);
                }
              );
            }, 500);
          }
        );
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
  margin: 5% auto;
  img {
    width: 4.97rem;
  }
}
.p2 {
  width: 100%;
  height: 60%;
  img {
    height: 100%;
  }
}
.item {
  background-image: url(../assets/6/bg6.jpg);
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
