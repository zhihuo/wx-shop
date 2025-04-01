<!--商品列表模块-->
<template>
  <scroll-view scroll-y="true" class="swiper-item-box">
    <div class="shop_item">
      <navigator class="list" v-for="item in list" :key="item" url="">
        <div class="image_box">
          <image :src="item.thumLogo"/>
        </div>
        <div class="goods">
          <div class="product_name" >{{item.name}}</div>
          <div class="product_info">
            <div class="cost_price">￥{{item.marketPrice}}</div>
            <div class="price">￥{{item.price}}</div>
            <div class="sale_num">销量{{item.saleCount}}件</div>
          </div>
        </div>
      </navigator>
    </div>
  </scroll-view>
</template>
<script>
export default {
  // props: ['list']
  props: {
    list: []
  }
}
</script>
<style lang="less" scoped>
  .shop_item {
    padding: 0rpx 15rpx;
    background: #f7f7f7;
    display: flex;
    flex-wrap: wrap;
    padding-bottom: 30rpx;
  }

  .list:nth-child(odd) {
    margin-right: 10rpx;
  }

  .list {
    background: #fff;
    width: 355rpx;
    margin-top: 15rpx;
    .image_box {
      image {
        width: 100%;
        height: 345rpx;
      }
    }
    .product_name {
      color: #1a1a1a;
      font-size: 28rpx;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 1;
      -webkit-box-orient: vertical;
      word-break: break-all;
    }
    .price {
      color: #de0000;
      font-size: 35rpx;
      font-weight: 600;
    }
    .cost_price {
      color: #666666;
      font-size: 24rpx;
      text-decoration: line-through;
      font-weight: 600;
    }
    .sale_num {
      color: #666666;
      font-size: 22rpx;
    }
    .goods {
      padding: 15rpx 12rpx;
    }
    .product_info {
      padding-top: 20rpx;
      display: flex;
      align-items: flex-end;
    }
    .cost_price {
      padding-left: 20rpx;
    }
    .sale_num {
      padding-left: 20rpx;
    }
  }
</style>

