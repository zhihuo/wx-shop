<template>
  <div v-if="show">
    <div v-if="types===0">
      <div class="pop-alert-box">
        <image src="../../static/images/icon_alert.png" class="icon_alert" @click.stop="callback"/>
        <i class="iconfont icon-close" @click="close"></i>
      </div>
    </div>
    <div v-else>
      <div class="pop-alert-box dialog">
        <div class="alert-content-box">
          <div class="alert-content">
            <image src="../../static/images/icon_alert.png" class="icon_alert_dialog"/>
            <div class="title">恭喜获得红包</div>
            <div class="title-doc">恭喜获得一张卡券，已发放至该账号</div>
          </div>
          <div class="btn_box">
            <div class="button type_red"  @click.stop="callback">点击领取</div>
          </div>
        </div>
          <i class="iconfont icon-close" @click.stop="close"></i>
      </div>
    </div>
    <div class="alert_mask" @click.stop="close"></div>
  </div>
</template>
<script>
export default {
  props: ['show', 'types'],
  created () {
    console.log('1:', this.show)
  },
  methods: {
    close () {
      this.show = false
      console.log('close')
      this.$emit('close')
    },
    callback () {
      console.log('callback')
      this.$emit('callback')
    }
  }
}
</script>
<style lang="less" scoped>
.pop-alert-box {
  position: fixed;
  width: 550rpx;
  height: 550rpx;
  margin-left: -275rpx;
  top: 20%;
  left: 50%;
  z-index: 2001;
  text-align: center;
  &.dialog {
    .alert-content-box {
      width: 100%;
      height: 100%;
      position: relative;
      background: #fff;
      border-radius: 10rpx;
      text-align: center;
    }
    .alert-content {
      padding: 20rpx;
      .title {
        font-weight: bold;
        color:#333;
      }
      .title-doc{
        padding-top: 10rpx;
        color:#999;
      }
    }
    .btn_box {
      width: 100%;
      position: absolute;
      bottom: 30rpx;
      .button{
        width: 90%;
      }

    }
  }
}

.icon_alert {
  width: 100%;
}

.icon_alert_dialog {
  width: 200rpx;
  height: 200rpx;
  margin: 0 auto;
}

.icon-close {
  display: inline-block;
  font-size: 60rpx;
  color: #dedede;
  margin-top: 50rpx;
}

.alert_mask {
  background-color: rgba(0, 0, 0, .6);
  position: fixed;
  z-index: 2000;
  bottom: 0;
  right: 0;
  left: 0;
  top: 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
</style>



