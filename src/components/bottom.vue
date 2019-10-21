<template>
  <div class="bottom">
    <div class="btn left" @click="onApply()">
      <img src="../assets/left.png" alt />
    </div>
    <div class="btn right" @click="onTel()">
      <img src="../assets/right.png" alt />
    </div>
    <Form @on-hide="formShow = false" v-show="formShow" class="form" :canClose="true"></Form>
  </div>
</template>

<script>
import Form from "../components/form";
export default {
  data() {
    return {
      formShow: false
    };
  },
  watch: {
    formShow() {
      if (this.formShow) {
        window.$scrolling = false;
        window.canPassive = true;
      } else {
        window.$scrolling = true;
        window.canPassive = false;
      }
    }
  },
  methods: {
    onApply() {
      this.formShow = true;
    },
    onTel() {
      location.href = "tel:4000-16-16-16";
    }
  },
  components: {
    Form
  }
};
</script>

<style  lang='less' scoped>
.bottom {
  position: absolute;
  left: 0;
  bottom: 0.7rem;
  z-index: 9999;
  display: flex;
  justify-content: center;
  width: 100%;
  align-items: center;
  .btn {
    margin: 0 0.2rem;
  }
}
.left {
  img {
    width: 2.68rem;
    height: 0.78rem;
  }
}
.right {
  img {
    width: 2.68rem;
    height: 0.78rem;
  }
}
</style>
