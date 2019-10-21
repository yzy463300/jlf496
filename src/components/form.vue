<template>
  <div class="item tc">
    
    <div class="vtc">
      <div class="logo">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="title">
        <img src="../assets/form/form_1.png" alt />
      </div>
      <div class="ct">
        <div class="form tc">
          <div class="name input_wrap bbox">
            <p class="h">姓&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;名:</p>
            <input v-model="name" type="text" placeholder="请填写您的姓名" />
          </div>
          <div class="phone input_wrap bbox">
            <p class="h">联系方式:</p>
            <input v-model="phone" type="tel" placeholder="请填写您的电话" />
          </div>
          
          <div class="city input_wrap bbox" @click="cityShow = true">
            <p class="h">收获地址:</p>
            <input disabled="true" v-model="value" type="text" placeholder="请选择所在城市" />
            <img class="arr" src="../assets/form/arr.png" height="18" width="24" alt />
          </div>
          <div class="phone input_wrap bbox">
            <p class="h">详细地址:</p>
            <input v-model="address" type="text" placeholder="请填写详细地址" />
          </div>
          <div class="phone input_wrap bbox">
            <p class="h">备&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;注:</p>
            <input v-model="remarks" type="text" placeholder="" />
          </div>
          <!-- <div class="address input_wrap bbox">
            <p class="h">备注：</p>
            <input v-model="address" type="text" placeholder />
          </div> -->
          <p class=" submit bbox" @click="onSubmit">
            提交信息
            <!-- <img @click="onSubmit" src="../assets/form/submit.png" alt /> -->
          </p>
        </div>
      </div>
      <div class="return" v-if="canClose">
        <img @click="onHide()" src="../assets/form/return.jpg" alt />
      </div>
      <div class="bot" v-else>
        <img src="../assets/form/form_bot.png" alt />
      </div>
      <div class="qrcode"><img src="../assets/form/qrcode.png" alt=""></div>
    </div>
    <van-popup v-model="cityShow" position="bottom">
      <van-area
        title="请选择省市区"
        :area-list="areaList"
        @cancel="cityShow = false"
        @confirm="cityConfirm"
      />
    </van-popup>
  </div>
</template>

<script>
import { Field, CellGroup } from "vant";
import area from "../utils/area.js";
export default {
  data() {
    return {
      name: "",
      phone: "",
      value: "",
      address: "",
      prvince: "",
      city: "",
      area: "",
      remarks: "",
      areaList: area,
      cityShow: false
    };
  },
  props: ["canClose"],
  watch: {
    cityShow() {
      if (this.cityShow) {
        window.$scrolling = false;
        window.canPassive = true;
      } else {
        window.$scrolling = true;
        window.canPassive = false;
      }
    }
  },
  methods: {
    onHide() {
      this.$emit("on-hide");
    },
    onSubmit() {
      if (!this.name) {
        return this.$dialog({ message: "请输入姓名" });
      }
      if (!this.phone || !/^1[3|4|5|7|8][0-9]{9}$/.test(this.phone)) {
        return this.$dialog({ message: "请输入正确手机号" });
      }
      if (!this.city) {
        return this.$dialog({ message: "请选择省市区" });
      }
      if (!this.address) {
        return this.$dialog({ message: "请填写详细地址" });
      }
      $.getJSON(
        "http://g.vsene.cn/index.php?m=guestbook&c=index&a=publish&callback=?",
        {
          title: "jlf496",
          name: this.name,
          telephone: this.phone,
          "extension[姓名]": this.name,
          "extension[手机号]": this.phone,
          "extension[省]": this.prvince,
          "extension[市]": this.city,
          "extension[区]": this.area,
          "extension[详细地址]]": this.address,
          "extension[备注]": this.remarks,
          extcode: "jlf496"
        },
        (json, textStatus) => {
          if (+json.errno === 0) {
            this.$dialog({ message: "提交成功" }).then(() => {
              location.replace(
                location.href.split("#")[0] + "?tmp=" + Date.now()
              );
            });
          } else {
            this.$dialog({ message: "提交失败,请重试" });
          }
        }
      );
    },
    cityConfirm(e) {
      console.log(e);
      this.cityShow = false;
      this.prvince = e[0]["name"];
      this.city = e[1]["name"];
      this.area = e[2]["name"];
      this.value = `${this.prvince} ${this.city} ${this.area}`;
    }
  }
};
</script>

<style  lang='less' scoped>
.qrcode {
  margin-top: 0.1rem;
  img {
    width: 2.73rem;
    margin-right: 0.75rem;
  }
}
.return {
  img {
    width: 2.85rem;
    height: 0.72rem;
  }
}
.bot {
  img {
    width: 6.28rem;
  }
}
.logo {
  width: 100%;
  img {
    width: 0.82rem;
    height: 0.77r;
  }
}
.ct {
  width: 100%;
}
.form {
  .h {
    margin-right: 0.1rem;
    font-size: 0.32rem;
    color: #000;
  }
  .arr {
    width: 0.29rem;
    height: 0.16rem;
  }
  .submit {
    font-size: 0.36rem;
    width: 6.32rem;
    height: 0.7rem;
    line-height: 0.7rem;
    background-color: #ffbe41;
    color: #5d2008;
    border-radius: 0.1rem;
    margin: 0.2rem auto;
    img {
      width: 2.85rem;
      height: 0.72rem;
    }
  }
  .input_wrap {
    padding-left: 0.3rem;
    width: 6.32rem;
    height: 0.7rem;
    line-height: 0.7rem;
    background-color: #fff;
    border-radius: 0.1rem;
    display: flex;
    justify-content: flex-start;
    align-items: baseline;
    margin: 0.2rem auto;
    color: #000;
    img {
      width: 0.24rem;
      height: 0.18rem;
    }
    input {
      color: #000;
      font-size: 0.32rem;
      width: 50%;
      border: none;
      background-color: transparent;
    }
  }
}
.title {
  img {
    width: 6.8rem;
  }
}

.t1 {
  img {
    width: 5.3rem;
    height: 0.79rem;
  }
}
.t2 {
  margin-top: 0.3rem;
  img {
    width: 2.19rem;
    height: 2.86rem;
  }
}
.item {
  background-image: url(../assets/form/form_bg.jpg);
  background-size: cover;
}
</style>
