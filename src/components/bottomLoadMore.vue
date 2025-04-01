<template>
     <div class="loadMoreGif" v-if="show">
        <image src="../../static/images/loadding.gif" />
        <text>{{message}}</text>
    </div>
</template>
<script>
export default {
  props: ['show', 'message'],
  created () {
    console.log('loding=', this.message, this.show)
  }
}
</script>

<style lang="less">
.loadMoreGif {
    margin: 15rpx auto;
    width: 220rpx;
    display: flex;
    justify-content: center;
    align-items: center;
    text {
        font-size: 30rpx;
        color: #999;
        margin-left: 10rpx;
    }
    image {
        width: 30rpx;
        height: 30rpx;
    }
}
</style>
