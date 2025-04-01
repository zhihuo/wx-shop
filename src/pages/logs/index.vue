<template>
  <div>
    <ul class="container log-list">
      <li v-for="(log, index) in logs" :class="{ red: aa }" :key="index" class="log-item">
        <card :text="(index + 1) + ' . ' + log"></card>
      </li>
    </ul>
  </div>
</template>

<script>
import { formatTime } from '@/utils/index'
import card from '@/components/card'
export default {
  components: {
    card
  },

  data () {
    return {
      logs: []
    }
  },
  created () {
    const logs = (wx.getStorageSync('logs') || [])
    this.logs = logs.map(log => formatTime(new Date(log)))
  },
  // 下拉刷新事件监听
  onPullDownRefresh: function () {
    // 在标题栏中显示加载
    wx.showNavigationBarLoading()
    // 模拟加载
    setTimeout(function () {
      // 完成停止加载
      wx.hideNavigationBarLoading()
      // 停止下拉刷新
      wx.stopPullDownRefresh()
    }, 1500)
    // Do something when pull down.
    console.log('logs page execute: onPullDownRefresh.')
  },
  onReachBottom: function () {
    // Do something when page reach bottom.
    console.log('logs page execute: onReachBottom.')
  }
}
</script>

<style>
.log-list {
  display: flex;
  flex-direction: column;
  padding: 40rpx;
}

.log-item {
  margin: 10rpx;
}
</style>
