<!--发现好商品-->
<template>
  <div class="bc">
    <div class="weui-flex" v-for="(item,index) in list" :key="index">
      <div class="weui-flex__item discover_list">
        <navigator :url="item.url +'?id='+ item.code" class="placeholder item" hover-class="">
            <img :src="item.img" class="discover_img"/>
            <div class="info">{{item.tarname}}: {{item.name}}</div>
          </navigator>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['list']
}
</script>

<style scoped lang="less">
.bc {
  background:#f7f7f7;
  width: 100%;
  .discover_list{
    .discover_img {
        width: 100%;
        height: 390rpx;
    }
    .info {
        padding: 5rpx;
        color: #000000;
        font-size: 26rpx;
        line-height: 35rpx;
        display: flex;
        align-items: center;
    }
    .item {
        background: #fff;
        padding: 15rpx;
        margin-bottom: 15rpx;
    }
  }
}
</style>
