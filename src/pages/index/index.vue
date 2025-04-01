<template>
  <div class="container">
    <!--banner-->
    <swiper class="banner" indicator-dots="true" autoplay="true" interval="3000" duration="1000">
      <swiper-item v-for="item in banner" :key="item.id"  >
        <navigator :url="item.link">
          <img :src="item.image_url" background-size="cover"/>
        </navigator>
      </swiper-item>
    </swiper>
    <!--固定模块类型-->
    <div class="weui-flex search-fixation">
      <div v-for="(item,index) in prefecturelist" :key="index" class="weui-flex__item">
        <navigator :url="item.url" class="placeholder search-fixation__item" hover-class="">
          <!-- <i :class="['search-fixation-icon','iconfont',item.icon]" /> -->
          <image :src="item.img" class="search-fixation__nav_icon"/>
          <div class="search-fixation-des">{{item.name}}</div>
        </navigator>
      </div>
    </div>
    <!--商品展示列表-->
    <!-- <div class="weui-loadmore weui-loadmore_line">
        <span class="weui-loadmore__tips">直销商品</span>
    </div>
    <div class="weui-grids">
      <navigator v-for="(item,index) in shoplist" :key="index" :url="item.url" class="weui-grid" hover-class="weui-grid-hover">
        <div class="wrap">
          <img class="img" :src="item.imgurl" alt="">
          <div class="mt">
            <p class="brand">{{item.name}}</p>
          </div>
        </div>
      </navigator>
    </div> -->
    <!--好商品-->
    <discover :list='discoverlist'></discover>
    <!--加载更多时动画-->
    <bottomLoadMore :show.sync="showLoading" :message.sync="is_message"></bottomLoadMore>
    <!--弹屏  types:0 图片  1：领红包   show 是否显示  @close 关闭回调  @callback 点击图片回调 或确定回调-->
    <bombscreen :types.sync="tps" :show.sync="is_show_alert" v-on:close="closeAlert" v-on:callback="alertCallback"></bombscreen>
  </div>
</template>

<script>
// import card from '@/components/card'
import discover from '@/components/discover'
import BottomLoadMore from '@/components/bottomLoadMore'
import Bombscreen from '@/components/bomb_screen'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      index: 0,
      array: ['A', 'B', 'C'],
      // 幻灯片
      banner: [
        { id: 1, link: '/pages/indexdetail/main', image_url: 'http://sujiefs.com/upload/images/20180319/201803191442069389248.jpg' },
        { id: 2, link: '/pages/indexdetail/main', image_url: 'http://sujiefs.com/upload/images/20180322/201803221353348299896.jpg' },
        { id: 3, link: '/pages/indexdetail/main', image_url: 'http://sujiefs.com/upload/images/20180321/201803211341067195861.jpg' }
      ],
      // 四个专区数据
      prefecturelist: [
        { name: '签到有礼', url: '/pages/classify/main', img: '../../static/images/icon_nav_01_new.png' },
        { name: '换货专区', url: '/pages/classify/main', img: '../../static/images/icon_nav_02_new.png' },
        { name: '特价专区', url: '/pages/counter/main', img: '../../static/images/icon_nav_03_new.png' },
        { name: '我要补货', url: '/pages/counter/main', img: '../../static/images/icon_nav_04_new.png' }
      ],
      iconItems: [
        {
          icon: 'icon-jiajujiafang',
          name: '家具',
          url: '/pages/classify/main'
        },
        {
          icon: 'icon-shiwu',
          name: '食物',
          url: '/pages/classify/main'
        },
        {
          icon: 'icon-yinliao',
          name: '饮料',
          url: '/pages/counter/main'
        },
        {
          icon: 'icon-fuzhuang',
          name: '服装',
          url: '/pages/counter/main'
        }
      ],
      shoplist: [
        {
          imgurl: '/static/images/f1.png',
          name: '食物',
          url: '/pages/counter/main'
        },
        {
          imgurl: '/static/images/f2.png',
          name: '饮料',
          url: '/pages/counter/main'
        },
        {
          imgurl: '/static/images/h1.png',
          name: '服装',
          url: '/pages/counter/main'
        },
        {
          imgurl: '/static/images/h2.png',
          name: '家具',
          url: '/pages/counter/main'
        }
      ],
      discoverlist: [
        { tarname: '品牌', name: '素洁', url: '/pages/classify/main', code: '1', img: 'http://sujiefs.com/upload/images/20181107/201811071529292978067.jpg' },
        { tarname: '品牌', name: '雅士', url: '/pages/classify/main', code: '2', img: 'http://sujiefs.com/upload/images/20180319/201803191401583397599.jpg' }
      ],
      tps: 0,
      is_show_alert: true,
      is_message: '正在加载中',
      showLoading: true
    }
  },

  components: {
    'discover': discover,
    'bombscreen': Bombscreen,
    'bottomLoadMore': BottomLoadMore
  },

  methods: {
    tabpic (e) {
      console.log('pic===', e)
    },
    binddivTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    bindPickerChange (e) {
      this.index = e.target.value
      console.log('picker==', e)
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    clickHandle (msg, ev) {
      console.log('clickHandle:', msg, ev)
    },
    alertCallback () {
      console.log('跳转')
    },
    closeAlert () {
      this.is_show_alert = false
      console.log('关闭')
    }
  },
  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped lang="less">
.banner {
  width: 750rpx;
  height: 417rpx;
}

.banner image {
  width: 100%;
  height: 417rpx;
}
.search-fixation {
  font-size: 12px;
  text-align: center;
  overflow: hidden;
  // padding: 30rpx 0 20rpx;
  width:100%;
  // color: #404040;
  // display: flex;
  // font-size: 26rpx;
  // justify-content: space-between;
  padding: 17rpx 15rpx;
  &__item {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  &-pic {
    width: 32px;
    height: 32px;
  }
  &__nav_icon{
    height:80rpx;
    margin:0 auto;
    width:80rpx;
    margin-bottom:14rpx;
  }
  &-icon {
    width: 32px;
    height: 32px;
    font-size: 30px;
    margin-bottom: 3px;
  }
  &-des {
    margin: 3px auto;
  }
}

.weui-loadmore {
  &_line{
    margin-top:1.2em;
  }
  &__tips {
    position: relative;
    top: -1em;
    padding: 0 0.55em;
    background-color: #ffffff;
    color: #808080;
  }
}
.weui{
  &-grids{
    width: 100%;
  }
  &-grid{
    width: 50%;
    position: relative;
    height: 20vh;
    background-color:#dbeef773;
    border-bottom-color: #ffffff;
    border-right-color: #ffffff;
    border-bottom-width: 2px;
    border-right-width: 2px;
    .wrap{
      .img{
        width:100px;
        height:100px;
        position:absolute;
        overflow:hidden;
        right:5px;
        top:5px;
      }
      .mt{
      }
    }
    &-hover{
      background-color:#c9ebfb80;
    }
  }
}
</style>
