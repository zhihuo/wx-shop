<template>
  <div class="detail-area">
    <div class="item">
      <div class="img_box">
        <image class="discover_img" src="http://sujiefs.com/upload/images/20180308/201803081427506631167.jpg"/>
      </div>
      <div class="info">
        <div class="title">春夏新品</div>
        <div v-for="item in list" :key="item">
          <div class="doc"><i class="lx">◆</i> {{item.attrName}}: {{item.name}}</div>
        </div>
      </div>
    </div>
    <!--商品搜索bar-->
    <div class="filterbar">
      <filterbar></filterbar>
    </div>
    <div class="shop_list">
      <!--矩阵商品列表模块-->
      <shopGridList :list.sync="gridList"></shopGridList>
      <!--加载更多时动画-->
      <!-- <bottomLoadMore :show.sync="showLoading" message="正在加载"></bottomLoadMore> -->
      <!--暂无数据显示-->
      <!-- <placeholder :show.sync="is_empty" message="暂无发现数据"></placeholder> -->
    </div>
  </div>
</template>

<script>
// import tipMsg from '../../utils/tip'
import filterbar from '@/components/filterbar'
import shopGridList from '@/components/shopGridList'
// Use Vuex
export default {
  data () {
    return {
    //   keyword: ''，
      barTitle: '春夏新品',
      list: [
        { attrName: '品牌', name: '素洁' },
        { attrName: '年份季节', name: '2018冬季' }
      ],
      discoverlist: [
        { tarname: '品牌', name: '素洁', url: '/pages/classify/main', code: '1', img: 'http://sujiefs.com/upload/images/20181107/201811071529292978067.jpg' },
        { tarname: '品牌', name: '雅士', url: '/pages/classify/main', code: '2', img: 'http://sujiefs.com/upload/images/20180319/201803191401583397599.jpg' }
      ],
      gridList: [
        { thumLogo: 'http://sujiefs.com/upload/images/20180423/201804231129454571221_thumbnail.jpg', name: '新款韩版印花字母短款T恤衫 T18C076', price: '63', marketPrice: '119', saleCount: '6' },
        { thumLogo: 'http://sujiefs.com/upload/images/20171005/201710051425394606742_thumbnail.jpg', name: '千鸟格裤子韩版百搭高腰开叉休闲裤P17D640-40', price: '65', marketPrice: '116', saleCount: '8' }
      ]
    }
  },
  components: {
    'filterbar': filterbar,
    'shopGridList': shopGridList
  },
  created () {
    console.log('new page details')
  },
  methods: {
  },
  onLoad: function (params) {
    // onLoad 参数 params:默认返回url的参数
    console.log('details pages==', params)
    // 设置头部标题显示
    wx.setNavigationBarTitle({ title: this.barTitle })
    // tipMsg.errorMsg('加载失败')
  }
}
</script>

<style scoped lang="less">
.img_box {
  width: 100%;
  height: 370rpx;
  background: #000;
}

.discover_img {
  width: 100%;
  height: 370rpx;
}

.info {
  margin-top: 30rpx;
  padding: 0rpx 30rpx;
  font-size:14px;
  .title {
    margin-bottom: 3px;
    color: #000;
  }
  .doc {
    color: #000000;
    padding-top: 15rpx;
    display: flex;
    align-items: center;
    .lx {
      font-size: 20rpx;
      margin-right: 20rpx;
    }
  }
}
</style>
