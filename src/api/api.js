import Vue from 'vue'
import config from '../config/index.js'
import { Toast,Dialog  } from 'vant';
import axios from 'axios'

const ajax = axios.create({
  baseURL:config.baseUrl,
  withCredentials: true,
})
const api = {
	checkLogin(params){
		return ajax.get(`checkLogin`,{params}).then(res=>{
			if (res.data.errno == 0) {
				return res.data.data
			}else if (res.data.errno == 10001) {
				location.replace(`http://app2.weixin87.cn/hrfld/index/auth?front_url=${location.href}`)
			}else{
				Dialog.alert({
				  message: res.data.errmsg
				})
				return false
			}
		})
	},
	submit(params){
		loading()
		return ajax.post(`submit`,params).then(res=>{
			Toast.clear();
			if (res.data.errno == 0) {
				return res.data.data
			}else{
				Dialog.alert({
				  message: res.data.errmsg
				})
				return false
			}
		})
	},
}

function loading(){
	return Toast.loading({
	  message: '加载中...',
	  loadingType: 'spinner',
	  duration: 0,
	});
}

export default api