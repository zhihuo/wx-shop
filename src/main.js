import Vue from 'vue'
import App from './App'
import '@/styles/style.less'
import '@/styles/weui.less'
import '@/styles/font/iconfont.css'
import store from '@/store'
Vue.config.productionTip = false
Vue.prototype.$store = store
App.mpType = 'app'

const app = new Vue(App)
app.$mount()
