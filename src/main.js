// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store/'
import router from './router'
// import {AlertPlugin,LoadingPlugin,ToastPlugin,ConfirmPlugin } from 'vux'
import Weixin from './utils/weixin.js'
import Vant from 'vant';
import 'vant/lib/index.css';
import './style/common.less'
import './style/animate.css'
import axios from 'axios'
import config from './config/index.js'
import {
  Dialog,
  Toast,
  Area,
  Field,
  CellGroup,
  Popup,
  Picker,
  Cell,
  Loading
} from 'vant';

Vue.config.productionTip = false
Vue.use(Dialog)
  .use(Toast)
  .use(Area)
  .use(Field)
  .use(CellGroup)
  .use(Popup)
  .use(Picker)
  .use(Cell)
  .use(Loading)
/* eslint-disable no-new */
window.$vvue = new Vue({
  el: '#app',
  router,
  store,
  components: {
    App
  },
  template: '<App/>'
})

window.$scrolling = true
window.canPassive = false

document.body.addEventListener('touchmove', function (event) {
  if (!window.canPassive) {
    event.preventDefault()
  }
}, {
  passive: false
})
document.addEventListener('click', (e) => {
  //console.log(e)
  if (e.target && e.target.nodeName == 'IMG') e.preventDefault();
}, {
  passive: false
});

$('body').on('blur', 'input,select', function (event) {
  setTimeout(() => {
    const scrollHeight = document.documentElement.scrollTop || document.body.scrollTop || 0;
    window.scrollTo(0, Math.max(scrollHeight - 1, 0));
  }, 100);
});

Date.prototype.Format = function (fmt) { //author:  
  var o = {
    "M+": this.getMonth() + 1, //月份 
    "d+": this.getDate(), //日 
    "h+": this.getHours(), //小时 
    "m+": this.getMinutes(), //分 
    "s+": this.getSeconds(), //秒 
    "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
    "S": this.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}

Weixin({
  img_url: require('./assets/thumb.png'),
  link: location.href,
  title: '一坛好酒·私享定制，来了！',
  desc: '私享定制，由你开始'
}, () => {})
