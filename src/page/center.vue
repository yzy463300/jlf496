<template>
  <div class="center page bgfull">
    <div class="vtc">
      <div class="container bbox">
        <div class="content bbox">
          <div class="tab">
            <div class="item bbox" v-for="(item,index) in tabList" @click='tabIndex = index' :class="[tabIndex == index ? 'active' : '']">{{item}}</div>
          </div>
          <!-- 我的卡片 -->
          <div class="card_wrap" v-show='tabIndex == 0'>
            <div class="list">
              <div class="item" v-for="(item,index) in cardList">
                <div class="card"><img :class="[item <= 0 ? 'active' : '']" :src="require('../assets/'+(index+1)+'.png')" height="259" width="174" alt=""></div>
                <p class="num">{{item}}</p>
                <div class="click_wrap bbox">
                  <p class="click bbox" :class="[isChose && item>=3 ? 'active' : '']" @click='onCombine(index+1)'>合成抽奖</p>
                </div>
              </div>
            </div>
            <p class="t">集齐“新零售大卖”，可兑换188.88元红包</p>
            <p class="t">3个相同的字，可兑换一次抽奖机会，前往抽奖</p>
            <div class="btn_wrap tc">
              <div class="hb"><img @click="checkFive" src="../assets/btn3.png" height="82" width="287" alt=""></div>
              <div class="cs" @click='exchangeBtn' :class="[isChose ? 'active' : '',btnGray ? 'gray' : '']"></div>
            </div>
          </div>
          <!-- 我的奖品 -->
          <div class="prize_list" v-show='tabIndex == 1'>
            <p class="nomore" v-if='!prizeList.length'>暂无奖品</p>
            <div class="item_wrap" v-for="(item,index) in prizeList" :key="index">
              <div class="item" v-if="item.win_type == 2">
                <div class="center ">
                  <div class="head"><img src="../assets/iqiyi.png" ></div>
                  <p class="name">爱奇艺会员</p>
                  <p class="time">{{new Date(+item.time*1000).Format("yyyy-MM-dd")}}</p>
                  <p class="code qiyicode" :data-clipboard-text='item.prize_value' @click="">兑换码:{{item.prize_value}}</p>
                </div>
                <div class="right ">
                  <p class="exp pub" @click="gotoFlow">兑换说明</p>
                  <p class="copy pub qiyicode" :data-clipboard-text='item.prize_value' @click="">复制券码</p>
                </div>
              </div>
              <div class="item red" v-if="item.win_type == 1">
                <div class="center">
                  <div class="head"><img src="../assets/red.png" ></div>
                  <p class="name" v-if="item.prize_id == 2">8.8元现金红包</p>
                  <p class="name" v-if="item.prize_id == 3">28.8元现金红包</p>
                  <p class="name" v-if="item.prize_id == 4">188.8元现金红包</p>
                  <p class="time">{{new Date(+item.time*1000).Format("yyyy-MM-dd")}}</p>
                  <p class="code gray">已转入微信零钱</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
      <div class="return tc">
        <p class="btn" @click='onReturn'>返回主页</p>
      </div> 
    </div>
    <!-- 抽奖 -->
    <div class="draw alert" v-show="drawShow">
      <div class="main vtc">
        <div class="wheel_wrap">
          <img src="../assets/wheel.png" height="644" width="644" alt="" class="wheel">
          <img src="../assets/draw_btn.png" @click="onDraw" height="228" width="143" alt="" class="start_btn">
        </div>
        <p class="chance tc">你当前抽奖次数：<span class="num">{{+prize_chance}}</span></p>
        <p class="close" @click="drawShow = false"><img src="../assets/close3.png" alt=""></p>
      </div>
    </div>
    <!-- 抽到卡 -->
    <div class="card alert" v-show="cardShow">
      <div class="main vtc">
        <p class="p1 tc">恭喜您获得“{{cardText[card_id-1]}}”卡x1</p>
        <div class="content">
          <img v-if="card_id" :src="require('../assets/'+(card_id)+'.png')" alt="" class="c">
          <img @click='cardShow = false' src="../assets/close1.png" alt="" class="close">
        </div>
        <div class="btn_wrap tc"><p class="btn" @click='checkMyCard'>查看我的卡片</p></div>
      </div>
    </div>
    <!-- 抽到28红包 -->
    <div class="card alert" v-show="red28Show">
      <div class="main vtc">
        <p class="p1 tc">恭喜您获得“现金红包”</p>
        <div class="content">
          <img src="../assets/28.png" class="c">
          <img @click='red28Show = false' src="../assets/close1.png" alt="" class="close">
        </div>
        <div class="btn_wrap tc"><p class="btn" @click='gotoPrize'>查看我的奖品</p></div>
      </div>
    </div>
    <!-- 抽到28红包 -->
    <div class="card alert" v-show="red8Show">
      <div class="main vtc">
        <p class="p1 tc">恭喜您获得“现金红包”</p>
        <div class="content">
          <img src="../assets/8.png" class="c">
          <img @click='red8Show = false' src="../assets/close1.png" alt="" class="close">
        </div>
        <div class="btn_wrap tc"><p class="btn" @click='gotoPrize'>查看我的奖品</p></div>
      </div>
    </div>
    <!-- 抽到爱奇艺 -->
    <div class="card alert" v-show="qiyiShow">
      <div class="main vtc">
        <p class="p1 tc">恭喜您获得“爱奇艺会员”</p>
        <div class="content">
          <img src="../assets/iqiyi_bg.png" class="c">
          <img @click='qiyiShow = false' src="../assets/close1.png" alt="" class="close">
          <p class="qiyi_t tc">爱奇艺会员</p>
          <p class="qiyi_code tc qiyicode" :data-clipboard-text='code' @click="">兑换码：{{code}}</p>
        </div>
        <div class="btn_wrap tc"><p class="btn qiyicode" :data-clipboard-text='code' @click="">点击复制串码</p><p class="btn" @click='gotoPrize'>查看我的奖品</p></div>
      </div>
    </div>
    <!-- 5张未及齐 -->
    <div class="toast alert" v-show="failShow">
      <div class="main vtc bbox">
        <p class="icon tc"><img src="../assets/yihan.png"></p>
        <p class="p1 tc">集齐<span class="strong">5张</span>才可兑换</p>
        <p class="p1 tc">超级现金红包</p>
        <p class="b tc"><img @click='failShow = false' src="../assets/btn7.png"></p>
        <p class="close tc"><img @click='failShow = false' src="../assets/close2.png"></p>
      </div>
    </div>
    <!-- 集齐5张 -->
    <div class="toast alert" v-show="confirmShow">
      <div class="main vtc bbox">
        <p class="icon tc"><img src="../assets/yihan-2.png"></p>
        <p class="p1 tc">已集齐“<span class="strong2">新零售大卖</span>”</p>
        <p class="p1 tc">确定兑换红包?</p>
        <p class="b tc"><img @click='exchangeFive' src="../assets/btn6.png"></p>
        <p class="close tc"><img @click='confirmShow = false' src="../assets/close2.png"></p>
      </div>
    </div>
    <!-- 兑换红包 -->
    <div class="toast alert" v-show="expShow">
      <div class="main vtc bbox">
        <p class="icon tc "><img src="../assets/188.png" class="red"></p>
        <p class="p2 tc">兑换成功</p>
        <p class="p2_1 tc">现金红包会自动发放到微信零钱</p>
        <p class="p2_1 tc">请注意查收</p>
        <p class="b2 tc"><img @click='gotoPrize' src="../assets/btn1.png"></p>
        <p class="close tc"><img @click='expShow = false' src="../assets/close2.png"></p>
      </div>
    </div>
    <!-- 3张是否兑换 -->
    <div class="toast alert" v-show="threeShow">
      <div class="main vtc bbox">
        <p class="icon tc"><img v-if='card_id' :src="require('../assets/'+(card_id)+'.png')" ></p>
        <p class="p3 tc">您将消耗<span class="strong">3张</span></p>
        <p class="p3 tc">合成一次抽奖机会</p>
        <p class="b3 tc"><img @click='exchangeThree' src="../assets/btn6.png"></p>
        <p class="close tc"><img @click='threeShow = false' src="../assets/close2.png"></p>
      </div>
    </div>
    <!-- 3张兑换成功 -->
    <div class="toast alert" v-show="chanceShow">
      <div class="main vtc bbox">
        <p class="icon tc"><img src="../assets/yes.png" ></p>
        <p class="p3 tc" style="margin-bottom:.4rem;">抽奖次数<strong>+1</strong></p>
        <p class="b3 tc"><img @click='gotoDraw' src="../assets/btn6.png"></p>
        <p class="close tc"><img @click='chanceShow = false' src="../assets/close2.png"></p>
      </div>
    </div>
    <!-- prize_b -->
    <img src="../assets/draw_b.png" @click='drawShow = true' height="156" width="131" class="prize_b" alt="">
  </div>
</template>

<script>

import { Toast } from 'vant'
import api from '../api/api.js'

export default {
  data () {
    return {
      tabList:['我的卡片','我的奖品'],
      tabIndex:0,
      cardList:[0,0,0,0,0],
      isChose:false,//是否是兑换次数
      drawShow:false,
      cardShow:false,
      red28Show:false,
      red8Show:false,
      qiyiShow:false,
      chanceShow:false,//抽奖次数+1
      failShow:false,//不足5张
      confirmShow:false,//集齐5张
      threeShow:false,//是否消耗3张
      expShow:false,//兑换红包弹窗
      cardImg:require('../assets/1.png'),
      cardText:['新','零','售','大','卖'],
      code:'H777-B37E-AF1F-7E9H',
      card_id:'',
      is_bind:'',
      prize_chance:'',
      end_time:'',
      rotate: 3600,
      btnGray:true,
      prizeList:[]
    }
  },
  watch:{
    tabIndex(){
      if (this.tabIndex == 0) {
        this.my_cards()
      }
      if (this.tabIndex == 1) {
        this.my_prizes()
      }
    }
  },
  mounted(){
    var clipboard = new ClipboardJS('.qiyicode');
    clipboard.on('success', function(e) {
        Toast('已复制到粘贴板')
        e.clearSelection();
    });
  },
  activated(){
    this.card_id = this.$route.query.card_id
    if (this.card_id) this.cardShow = true
    this.check_auth()
    this.my_cards()
  },
  methods:{
    exchangeBtn(){
      if (!this.btnGray) {
        this.isChose = !this.isChose
      }
    },
    excBtnGray(){
      let hasThree = false
      this.cardList.forEach((item)=>{
        if (item >= 3) {
          hasThree = true
        }
      })
      if (hasThree) {
        this.btnGray = false
      }else{
        this.btnGray = true
      }
    },
    async my_prizes(){
      const res = await api.my_prizes()
      if (res !== false) {
        this.prizeList = res
      }
    },
    async onDraw(){
      const res = await api.draw()
      if (res !== false) {
        this.prize_chance--
        if (res.win_type == 0) {//字卡
          this.card_id = res.card_id
          if (this.card_id == 1) {
            this.wheelMove(45*6,()=>{
              this.cardShow = true
            })
          }
          if (this.card_id == 2) {
            this.wheelMove(45*5,()=>{
              this.cardShow = true
            })
          }
          if (this.card_id == 3) {
            this.wheelMove(45*3,()=>{
              this.cardShow = true
            })
          }
          if (this.card_id == 4) {
            this.wheelMove(45*1,()=>{
              this.cardShow = true
            })
          }
          if (this.card_id == 5) {
            this.wheelMove(45*0,()=>{
              this.cardShow = true
            })
          }
        }else{
          if (res.prize_id == 1) {
            //爱奇艺
            this.wheelMove(45*7,()=>{
              this.code = res.prize_value
              this.qiyiShow = true
            })
          }
          if (res.prize_id == 2) {
            //8.8
            this.wheelMove(45*4,()=>{
              this.red8Show = true
            })
          }
          if (res.prize_id == 3) {
            //28.8
            this.wheelMove(45*2,()=>{
              this.red28Show = true
            })
          }
        }
      }
    },
    async combine(combine_type){
      const res = await api.combine({
        card_id:this.card_id,
        combine_type
      })
      if (res !== false) {
        this.my_cards()
        if (combine_type == 0) {
          // 抽奖
          this.prize_chance++
          this.chanceShow = true
          this.threeShow = false
        }
        if (combine_type == 2) {
          // 兑换红包
          this.expShow = true
          this.confirmShow = false
        }
      }
    },
    async check_auth(){
      const res = await api.check_auth()
      if (res !== false) {
        this.is_bind = res.is_bind
        this.prize_chance = +res.prize_chance
        this.end_time = +res.end_time
      }
    },
    async my_cards(){
      const res = await api.my_cards()
      this.cardList = []
      this.cardList.push(res.card_id1_count)
      this.cardList.push(res.card_id2_count)
      this.cardList.push(res.card_id3_count)
      this.cardList.push(res.card_id4_count)
      this.cardList.push(res.card_id5_count)
      this.excBtnGray()
    },
    wheelMove(rotate,callback){
      $('.wheel').velocity({rotateZ:this.rotate + rotate},2000,()=>{
        setTimeout(()=>{
          $('.wheel').velocity({rotateZ:0})
          callback && callback()
        },900)
      })
    },
    checkFive(){
      let hasFive = true
      this.cardList.forEach((item)=>{
        if (item <= 0) {
          hasFive = false
        }
      })
      if (hasFive) {
        this.confirmShow = true
      }else{
        this.failShow = true
      }
    },
    exchangeFive(){
      // 5张
      this.combine(2)
    },
    exchangeThree(){
      this.combine(0)
    },
    gotoDraw(){
      this.chanceShow = false
      this.threeShow = false
      this.drawShow = true
    },
    gotoPrize(){
      this.tabIndex = 1
      this.red28Show = false
      this.drawShow = false
      this.expShow = false
      this.qiyiShow = false
    },
    onReturn(){
      this.tabIndex = 0
      this.$router.replace('/')
    },
    gotoFlow(){
      this.$router.replace('flow')
    },
    checkMyCard(){
      this.drawShow = false
      this.cardShow = false
    },
    async onCombine(card_id){
      if (!this.isChose || this.cardList[card_id-1] <= 0) return
      this.card_id = card_id
      this.threeShow = true
    }
  },
  components:{

  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang='less' scoped>
  .prize_b{
    width: 1.31rem;
    height: 1.56rem;
    position: fixed;
    right: .2rem;
    top: 50%;
    z-index: 40;
    animation: scale 1s infinite alternate;
  }
  .toast{
    .main{
      padding-top: 1.4rem;
      width: 5.49rem;
      height: 5.63rem;
      background-image: url(../assets/border.png);
      background-size: cover;
    }
    .close{
      width: 100%;
      position: absolute;
      left: 0;
      bottom: -1.3rem;
      img{
        width: .69rem;
      }
    }
    .b{
      margin-top: .2rem;
      img{
        width: 2.97rem;
      }
    }
    .b2{
      img{
        width: 2.97rem;
      }
    }
    .b3{
      img{
        width: 2.97rem;
      }
    }
    .p1{
      font-size: .4rem;
      .strong{
        color: red;
        font-size: .46rem;
      }
      .strong2{
        color:#d50ebb;
      }
    }
    .p2{
      color: red;
      font-size: .36rem;
    }
    .p3{
      font-size: .28rem;
      color: #232371;
      .strong{
        color: red;
        font-size: .46rem;
      }
    }
    .p2_1{
      color: #472F7F;
      font-size: .22rem;
    }
    .icon{
      padding-bottom: .2rem;
      img{
        width: 1.19rem;
      }
      .red{
        width: 1.61rem;
      }
    }
  }
  .card{
    .p1{
      font-size: .36rem;
      color: #fff;
    }
    .btn{
      padding: 0 .2rem;
      margin-top: .5rem;
    }
    .content{
      margin-top: .4rem;
      position: relative;
      padding: 0 .4rem;
      .qiyi_t{
        color: #457707;
        font-size: .36rem;
        width: 100%;
        position: absolute;
        left: 0;
        top: 4.1rem;
      }
      .qiyi_code{
        color: #457707;
        font-size: .22rem;
        width: 100%;
        position: absolute;
        left: 0;
        top: 4.7rem;
      }
      .c{
        width: 3.72rem;
      }
      .close{
        position: absolute;
        right: .2rem;
        top: -.2rem;
        width: .56rem;
        height: .55rem;
      }
    }
  }
  .draw{
    .close{
      padding: .2rem;
      position: absolute;
      right: .4rem;
      top: 0;
      img{
        width: .34rem;
      }
    }
    .chance{
      color: #fff;
      font-size: .22rem;
      .num{
        color: #01edf7;
        font-size: .32rem;
      }
    }
    .wheel_wrap{
      background-image: url(../assets/wheel_border.png);
      background-size: cover;
      width: 7.5rem;
      height: 8.37rem;
      .wheel{
        position: absolute;
        left: .55rem;
        top: 1.43rem;
        width: 6.44rem;
        height: 6.44rem;
      }
      .start_btn{
        position: absolute;
        left: 3rem;
        top: 3rem;
        width: 1.43rem;
        height: 2.28rem;
      }
    }
  }
  .prize_list{
    margin-top: .6rem;
    height: 8.6rem;
    overflow: scroll;
    -webkit-overflow-scrolling : touch;
    .nomore{
      text-align: center;
      color:#9C9C9C; 
      font-size: .26rem;
    }
    .item{
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      padding: .3rem .3rem;
      border-bottom: .02rem solid rgba(255,255,255,.1);
      .head{
        img{width: 1rem;padding-bottom: .1rem;}
      }
      .center{
        margin-right: .2rem;
        .name{
          font-size: .28rem;
        }
        .time{
          font-size: .22rem;
          padding: .05rem 0;
        }
        .code{
          font-size: .28rem;
        }
      }
      .right{
        .exp{
          margin-bottom: .7rem;
        }
        .pub{
          color: #03E8A2;
          border: .02rem solid #03E8A2;
          border-radius: .17rem;
          height: .34rem;
          padding: 0 .2rem;
          font-size: .22rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .red{
      .center{
        .code{
          color:#9C9C9C;
        }
      }
      .head{
        margin-right: .2rem;
      }
    }
  }
  .container{
    width: 7.5rem;
    height: 10.87rem;
    background-image: url(../assets/content.png);
    background-size: cover;
    padding-top: .8rem;
    padding-left: .55rem;
    .card_wrap{
      padding-top: .5rem;
      .t{
        text-align: center;
        font-size: .17rem;
        color: #fff;
      }
      .btn_wrap{
        margin-top: .1rem;
        display: flex;
        align-items: center;
        justify-content: space-around;
        .hb{
          img{
            width: 2.87rem;
            height: .82rem;
          }
        }
        .cs{
          margin-top: .04rem;
          width: 2.77rem;
          height: .71rem;
          background-image: url(../assets/btn2.png);
          background-size: 5.54rem .71rem;
          background-position: left center;
        }
        .cs.active{
          background-position: right center;
        }
        .cs.gray{
          -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
          filter: grayscale(100%);
        }
      }
      .list{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        align-items: center;
        border-bottom: .02rem solid rgba(255,255,255,.1);
        margin-bottom: .1rem;
        .item{
          margin: .1rem .1rem;
          position: relative;
          .num{
            position: absolute;
            right: -.17rem;
            top: -.17rem;
            display: flex;
            align-items: center;
            justify-content: center;
            width: .34rem;
            height: .34rem;
            border-radius: .17rem;
            background-color: #D21977;
            color: #fff;
            font-size: .22rem;
          }
          .click_wrap{
            margin-top: .1rem;
            height: .5rem;
          }
          .click{
            transition: all .5s;
            opacity: 0;
            text-align: center;
            font-size: .22rem;
            color: #fff;
            border-radius: .5rem;
            border: .02rem solid #fff;
          }
          .click.active{
            opacity: 1;
          }
          .card{
            img{
              width: 1.74rem;
              height: 2.59rem;
            }
            .active{
              -webkit-filter: grayscale(100%); /* Chrome, Safari, Opera */
              filter: grayscale(100%);
            }
          }
        }
      }
    }
    .content{
      position: relative;
      width: 6.35rem;
      height: 9.32rem;
      .tab{
        position: relative;
        left: -.033rem;
        margin: -.3rem auto;
        width: 4.57rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .item{
          width: 2.2rem;
          height: .7rem;
          border-radius: .35rem;
          color: #EC51AD;
          border: .03rem solid #EC51AD;
          font-size: .36rem;
          display: flex;
          align-items: center;
          font-weight: bold;
          justify-content: center;
        }
        .item.active{
          color: #fff;
          background-color: #b74592;
        }
      }
    }
  }
  .return{
    margin-top: -.3rem;
  }
  .center{
    background-image: url(../assets/bg1.jpg);
    overflow: hidden;
  } 
</style>
