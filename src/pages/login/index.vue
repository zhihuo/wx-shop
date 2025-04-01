<template>
  <div class="counter-warp">
  <!--登陆-->
    <div class="weui-cells weui-cells_form">
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">账户</label></div>
        <div class="weui-cell__bd weui-cell_primary"><input type="tel" class="weui-input" placeholder="手机号码" v-model="userInfo.name"/></div>
      </div>
      <div class="weui-cell">
        <div class="weui-cell__hd"><label class="weui-label">密码</label></div>
        <div class="weui-cell__bd weui-cell_primary"><input type="password" class="weui-input" placeholder="不少于6位" v-model="userInfo.pwd"/></div>
      </div>
    </div>
    <div class="weui-cells__tips"></div>
    <div class="weui-btn-area">
        <a class="weui-btn weui-btn_primary" @click="getUserInfo()">登录</a>
    </div>
    <a href="/register" class="important-tips">没账户，去注册</a>
  </div>
</template>

<script>
// Use Vuex
// import utils from '@/utils/index'
export default {
  data () {
    return {
      userInfo: {
        name: '',
        pwd: ''
      },
      name: '',
      pwd: '',
      hasMobile: ''
    }
  },
  methods: {
    getUserInfo () {
      // 调用登录接口
      // utils.login().then((res) => {
      //   this.userInfo = res.userInfo
      //   wx.setStorageSync('userInfo', res.userInfo)
      //   wx.setStorageSync('token', res.userInfo)
      //   console.warn('登录中')
      //   wx.switchTab({
      //     url: '/pages/ucenter/main'
      //   })
      // }).catch((err) => {
      //   console.log(err)
      // })
      // 因为用的是自己申请的AppID，所以不能直接用微信自己的登录接口获取用户信息，暂时写死数据
      const rawData = { nickName: '夕阳一瞥',
        gender: 1,
        language: 'zh_CN',
        city: 'Shenzhen',
        province: 'Guangdong',
        country: 'China',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/kZWw8VUrXAw7KbBc90jVC3r9kEnwd0obibCLg1iaicJOyartx4PVbzl0EWSyX7V7gqu1LPLDTdZmmX3ruIhyibaYiaw/132' }
      this.userInfo = rawData
      wx.setStorageSync('userInfo', this.userInfo)
      wx.setStorageSync('token', this.userInfo)
      wx.switchTab({
        url: '/pages/ucenter/main'
      })
    }
  },
  computed: {
  },
  created () {
  },
  onLoad: function (options) {
  },
  onShow: function () {
    // 页面初始化 options为页面跳转所带来的参数
  }
}
</script>

<style>
</style>
