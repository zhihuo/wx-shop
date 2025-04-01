<template>
  <div class="pageClass">
    <div class="top_search">
      <div class="search_read_only">
        <navigator class="search_content" url="/pages/search/main">
            <i class="iconfont icon-search"></i>
            <div class="search_input">搜索商品</div>
        </navigator>
      </div>
    </div>
    <div class="classify" :style="{ height: (windowHeight - 50) + 'px' }">
      <scroll-view class="classify_catetory" scroll-y scroll-with-animation="true" :style="{ height: (windowHeight-50) + 'px' }">
        <view :class="item.active? 'name active' : 'name' "  v-for="item in rootcateList" :key="item" @click="changeCate" :data-code="item.code">
            {{item.name}}
        </view>
      </scroll-view>
      <scroll-view class="classify_detail" scroll-y scroll-with-animation="true" :style="{height: (windowHeight-50) + 'px'}">
        <view class="children">
          <navigator hover-class="none" class="children_item" v-for="(item, index) in childcateList" :for-item="item" :key="index" :url="'/pages/search?cateCode=' + item.code + '&title=' + item.name">
            <image class="child_image" :src="item.thumLogo"/>
            <view class="child_name">{{item.name}}</view>
          </navigator>
        </view>
    </scroll-view>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      windowHeight: 0,
      rootcateList: [
        { name: '上衣', code: 1, active: true },
        { name: '裤子', code: 2, active: false },
        { name: '裙子', code: 3, active: false }
      ],
      childcateList: [],
      // 上衣
      jacketList: [
        { name: '风衣', code: 1, thumLogo: 'http://sujiefs.com/upload/images/20171006/201710061145211681060_thumbnail.jpg' },
        { name: 'T恤', code: 2, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161803198792334_thumbnail.jpg' },
        { name: '衬衫', code: 3, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161804083693788_thumbnail.jpg' },
        { name: '风衣', code: 4, thumLogo: 'http://sujiefs.com/upload/images/20171006/201710061145211681060_thumbnail.jpg' }
      ],
      // 裤子
      trousersList: [
        { name: '九分裤', code: 1, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161849396808035_thumbnail.jpg' },
        { name: '休闲裤', code: 2, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161849490916198_thumbnail.jpg' }
      ],
      // 裙子
      skirtList: [
        { name: '连衣裙', code: 1, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161904263180558_thumbnail.jpg' },
        { name: '半身裙', code: 2, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161906298645469_thumbnail.jpg' }
      ]
    }
  },
  created () {
    this.childcateList = this.jacketList
  },
  methods: {
    changeCate (e) {
      let code = e.currentTarget.dataset.code
      // 设置一级分类的选中状态
      for (var i = 0; i < this.rootcateList.length; i++) {
        var rootCate = this.rootcateList[i]
        rootCate.active = false
        if (rootCate.code === code) {
          rootCate.active = true
        }
      }
      // 判断切换的时候，数据如何显示
      this.childcateList = code === 1 ? this.jacketList : (code === 2 ? this.trousersList : this.skirtList)
    }
  },
  onLoad () {
    this.windowHeight = 603
  }
}
</script>
<style lang="less" scoped>
.pageClass{
  background: #f5f5f5;
  .search_read_only {
    align-items: center;
    display: flex;
    margin: 0 auto;
    width: 650rpx;
  }
  .search_read_only .search_content {
    display: flex;
    align-items: center;
    border-radius: 100rpx;
    color: #999;
    width: 100%;
    background: #efefef;
    padding: 0 30rpx;
    height: 55rpx;
    margin: 0 auto;
  }
  .search_read_only .search_content .search_input {
    font-size: 26rpx;
  }
  .search_read_only .icon-search {
    font-size:28rpx;
    margin-right:5px;
  }
  .search_read_only .icon-message {
    font-size: 50rpx;
  }
  .top_search {
    padding: 20rpx 0rpx;
    background: #fff;
  }
  .classify {
    display: flex;
    position: relative;
    .classify_catetory {
      width: 200rpx;
      position: relative;
      z-index: 1;
      .name {
        text-align: center;
        height: 100rpx;
        line-height: 100rpx;
        font-size: 28rpx;
        color: #666;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
      }
      .active {
        border-left: 6rpx solid #ff6a3c;
        background: #fff;
        color: #ff6a3c;
      }
    }
    .classify_detail {
      position: relative;
      z-index: 999;
      // margin-left: -15rpx;
      background: #fff;
      padding: 15px 10px 10px 30px;
      .classify_item {}
      .title {
        font-size: 30rpx;
        color: #333;
        margin-left: 25rpx;
      }
      .children {
        display: flex;
        flex-wrap: wrap;
        margin: 20rpx 0rpx;
      }
      .child_image {
        width: 60px;
        height: 60px;
      }
      .child_name {
        font-size: 26rpx;
        color: #666;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        width: 170rpx;
      }
      .children_item {
        height: 200rpx;
        width: 170rpx;
        text-align: center;
      }
    }
  }
}
</style>


