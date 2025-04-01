<!--搜索栏-->
<template>
  <div class="bar">
    <div class="filter">
      <div :class="[currentType=='zonghe' ? 'nav_active' : 'nav', nav]" data-current="zonghe" @click="orderBy">综合</div>
      <div :class="[nav, currentType=='sale' ? 'nav_active' : 'nav']" data-current="sale" @click="orderBy">销量</div>
      <div class="grid nav">
        <div :class="[price, currentType=='price' ? 'nav_active price' : 'nav price']" data-current="price" @click="orderBy">价格</div>
        <div>
          <div :class="[arrow_up, arrowType=='desc' ? 'arrow_up_red arrow_up' : 'arrow_up arrow_up_gray nav']"></div>
          <div :class="[arrow_down, arrowType=='asc' ? 'arrow_down arrow_down_red' : 'arrow_down arrow_down_gray nav']"></div>
        </div>
      </div>
      <div class="nav" @click="filterSearch"><span class="sx">筛选</span><i class="iconfont icon-filter"></i></div>
    </div>
    <!--筛选测栏-->
    <filterSlider :show="swictchOverlay" v-on:show="isShowSlider"></filterSlider>
  </div>
</template>

<script>
import FilterSlider from '@/components/filterSlider'

export default {
  data () {
    return {
      currentType: '',
      swictchOverlay: false
    }
  },
  components: {
    filterSlider: FilterSlider
  },
  methods: {
    orderBy () {
      console.log('orderBy===')
    },
    filterSearch () {
      this.swictchOverlay = true
    },
    isShowSlider (e) {
      this.swictchOverlay = e
    }
  }
  // props: ['list']
}
</script>

<style scoped lang="less">
 .filter {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background: #fff;
    .nav {
      color: #000000;
      font-size: 26rpx;
      padding: 12px 20px;
      .sx{
        float:left;
      }
    }
    .nav_active {
      color: #f03939;
    }
    .icon-filter {
      font-size: 26rpx;
      color: #666;
      margin-left: 5rpx;
      background-image: url('../../static/images/filter.png');
      width: 16px;
      height: 16px;
      float: left;
      margin-top: 2px;
    }
  }
  .price {
    color: #000000;
    font-size: 26rpx;
    padding: 0 !important;
  }
  .grid {
    display: flex;
    align-items: center;
  }
  /*向上*/
  .arrow_up_red {
    border-color: transparent transparent #f03939;
  }
  .arrow_down_red {
    border-color: #f03939 transparent transparent;
  }
  .arrow_up_gray {
    border-color: transparent transparent #ccc;
  }
  .arrow_down_gray {
    border-color: #ccc transparent transparent;
  }
  .arrow_up {
    width: 0;
    height: 0;
    border-width: 0 10rpx 10rpx;
    border-style: solid;
    margin: 9rpx 10rpx;
    position: relative;
    padding: 0 !important;
  }
  /*向下*/
  .arrow_down {
    width: 0;
    height: 0;
    border-width: 10rpx 10rpx 0;
    border-style: solid;
    /*灰 透明 透明 */
    margin: 9rpx 10rpx;
    position: relative;
    padding: 0 !important;
  }
</style>
