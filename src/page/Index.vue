<template>
  <div class="home">
    <div class="H5 page bgfull">
      <p1 class="i "></p1>
      <p2 class="i hide"></p2>
      <p3 class="i hide"></p3>
      <p4 class="i hide"></p4>
      <p5 class="i hide"></p5>
      <p6 class="i hide"></p6>
      <p7 class="i hide"></p7>
      <p8 class="i hide"></p8>
      <Form class="hide"></Form>
    </div>
  </div>
</template>

<script>
import preload from "../utils/preload.js";
import animeData from "../utils/animeData.js";
import "../utils/h5.js";
import p1 from "../components/p1.vue";
import p2 from "../components/p2.vue";
import p3 from "../components/p3.vue";
import p4 from "../components/p4.vue";
import p5 from "../components/p5.vue";
import p6 from "../components/p6.vue";
import p7 from "../components/p7.vue";
import p8 from "../components/p8.vue";
import Form from "../components/form.vue";
export default {
  data() {
    return {
      count: 0,
      animeImg: ""
    };
  },
  methods: {},
  components: {
    p1,
    p2,
    p3,
    p4,
    p5,
    p6,
    p7,
    p8,
    Form
  },
  methods: {},
  async created() {},
  mounted() {
    const that = this;
    preload(animeData["imgList"], {
      onCompelete() {
        window.H5 = new H5($(".H5"), {
          audio: require("../assets/bgm.mp3"),
          img: require("../assets/white.png"),
          useArrow: true,
          loop: false
        });
      }
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
</style>
