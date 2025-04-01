<template>
  <div class="counter-warp">
  <!--登录区域-->
   <div class="login-area">
      <div v-if="userInfo === ''">
        <img class="login-area-img" :src='img_head' alt="头像"/>
      </div>
      <div v-if="userInfo !== ''">
        <img class="login-area-img" :src='url_img' alt="头像"/>
      </div>
      <div class="login-area-info"><span v-if="userInfo === ''">HI，游客</span><span v-if="userInfo !== ''">{{userInfo.nickName}}</span></div>
   </div>
  </div>
</template>

<script>
// Use Vuex
import utils from '@/utils/index'
export default {
  data () {
    return {
      userInfo: {},
      hasMobile: '',
      img_head: '/static/images/head.png',
      url_img: ''
    }
  },
  computed: {
  },
  created () {
  },
  onLoad: function (options) {
    // this.userInfo = wx.getStorageSync('userInfo')
    // 页面初始化 options为页面跳转所带来的参数
  },
  onShow: function () {
    // 页面初始化 options为页面跳转所带来的参数
    this.userInfo = wx.getStorageSync('userInfo')
    // 不知道为什么，https的不显示，要http状态下才可以显示出图片
    if (this.userInfo.avatarUrl) {
      this.url_img = this.userInfo.avatarUrl.replace('https', 'http')
    }
    if (!this.userInfo) {
      wx.showModal({
        title: '',
        confirmColor: '#b4282d',
        content: '请登陆',
        success: function (res) {
          if (res.confirm) {
            utils.redirect(true)
          }
        }
      })
    }
  }
}
</script>

<style lang="less" scoped>
  .login-area{
    display:flex;
    flex-direction:column;
    padding:50rpx 0;
    align-items:center;
    background:#333;
    width:750rpx;
    border-radius:5px;
    &-img{
      width: 80px;
      height: 80px;
      border-radius: 50%;
      background-size: cover;
    }
    &-info{
      margin-top: 20px;
      color: #fff;
    }
  }
</style>
