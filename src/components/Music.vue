<template>
  <div id="music" @click="onClick" :class="{isPlay:isPlay}">
     <audio id="music-bgm" :src="src" :autoplay="autoplay" :loop="loop"></audio>
  </div>
</template>
<script>
  import Weixin from '../utils/weixin.js'
  export default {
    name:'Music',
    data () {
      return {
          autoplay:'autoplay',
          loop:'loop',
          isPlay:true,//IOS自动播放
          bgm : null,
      }
    },
    props:['src'],
    mounted(){
      this.bgm = document.getElementById('music-bgm');
      Weixin({
        img_url : require('../images/thumb.jpg'),
        link : location.href.split('#')[0],
        title : '',
        desc : ''
      },
      ()=>{
        this.bgm.play();
      })
    },
    methods:{
     onClick(){
      this.isPlay = !this.isPlay;
      this.isPlay ? this.bgm.play() : this.bgm.pause();
     },
    },
  }
</script>

<style lang="less" scoped>
  #music{
    position: fixed;
    right: 20px;
    top: 120px;
    z-index: 80;
    width: 48px;
    height: 48px;
    background-image: url(http://img.cntapp.com/h5/dragon/assets/music.png);
    background-size: 96px 48px;
    color: #fff;
  }
  #music.isPlay{
    background-position: right center;
  }
</style>
