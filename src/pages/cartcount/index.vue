<template>
  <div class="cartcount-area">
    <!--搜索-->
    <div class="cartcount-area-nodata" v-if="copyCollectlist.length < 1">
        <p>购物车空空如也～</p>
        <div class="gocart__btn" @click="goindex">再去逛逛吧</div>
    </div>
    <!--展示列表-->
    <div class="cartcount-area-datalist" v-if="copyCollectlist.length >= 1">
      <div class="cartcount-area-datalist-items">
        <div class="cartcount-area-datalist-items__item" v-for="(item,index) in copyCollectlist" :key="index" >
          <div class="item-img"><image class="child_image" :src="item.img"/></div>
          <div class="item-des">
            <div class="item-name">{{item.name}} </div>
            <div class="item-price">单价：¥{{item.price}}</div>
            <div class="del-x" @click="delItem(item.id)">删除</div>
          </div> 
          <span class="itemcount">
            <count  :listdata="copyCollectlist" :initcount="item.count" :total="item.total" :price="item.price" :index="index" v-on:countevent="counteventFun"></count>
          </span>
        </div>
      </div>
      <div class="total-area">计的总价: <span class="totalprice">¥{{countval}}</span> </div>
    </div>
  </div>
</template>

<script>
// Use Vuex
import { mapGetters, mapActions, mapMutations } from 'vuex'
import count from '@/components/count.vue'
export default {
  data () {
    return {
      keyword: '',
      countval: 0,
      // 所有商品数量
      pricetotal: []
      // copyCollectlist: [
      //   {
      //     icon: 'icon-yingercanju',
      //     name: '婴儿餐具',
      //     url: '/pages/counter/main',
      //     active: false,
      //     price: 10,
      //     count: 1,
      //     total: 0
      //   },
      //   {
      //     icon: 'icon-canju2',
      //     name: '餐具2',
      //     url: '/pages/counter/main',
      //     active: false,
      //     price: 10,
      //     count: 1,
      //     total: 0
      //   },
      //   {
      //     icon: 'icon-canju3',
      //     name: '餐具3',
      //     url: '/pages/counter/main',
      //     active: false,
      //     price: 1,
      //     count: 1,
      //     total: 0
      //   }
      // ]
    }
  },
  created () {
    // 调用深度拷贝原始数据
    // this.copyData()
  },
  computed: {
    ...mapGetters([
      'copylist',
      'copyCollectlist'
    ]),
    countTotal: function () {
      const dom = this
      const v = dom.pricetotal
      var countlist = 0
      for (let i = 0; i < v.length; i++) {
        countlist += v[i]
      }
      return countlist
    }
  },
  methods: {
    ...mapActions([
      'filetrCollect',
      'copyCollectData'
    ]),
    ...mapMutations([
      'delData'
    ]),
    // 插件返回的数据
    counteventFun (e, index) {
      this.pricetotal[index] = e
    },
    // 删除模块
    delItem (id) {
      this.delData(id)
    },
    goindex (e) {
      console.log('e===', e)
      wx.switchTab({
        url: '/pages/index/main'
      })
    }
  },
  onShow: function () {
    // 初始化过滤，选中的显示
    this.filetrCollect()
    // 调用深度拷贝
    this.copyCollectData()
    console.log('copyCollectlist==', this.copyCollectlist)
  },
  components: {
    'count': count
  },
  watch: {
    // json 数组需要深监听才能监听到变化
    'copyCollectlist': {
      handler: function (newVal, oldVal) {
        const dom = this
        dom.countval = 0
        // 计算总价格
        if (newVal) {
          for (let i = 0; i < newVal.length; i++) {
            dom.countval += newVal[i].total
          }
        }
      },
      deep: true
    }
  }
}
</script>

<style scoped lang="less">
  .cartcount-area{
      &-nodata{
          padding: 35px 10px 20px;
          text-align: center;
          p{
              margin: 15px auto 30px;

          }
      }
      .gocart__btn{
        width:80px;
        margin: 0 auto;
        text-align:center;
        height:6vh;
        line-height:6vh;
        background-color:rgb(240, 64, 64);
        color:#fff;
        border-radius:5px;
      }
      &-datalist{
          padding: 10px;
          border: 1px solid #ddd;
          margin:5px;
          // border-radius:5px;
          &-items{
            &__item{
              margin: 10px;
              border: 1px solid #d8d8d8;
              background-color: #fff;
              padding: 10px;
              box-shadow:0px 2px 5px #efefef;
              border-radius:5px;
              overflow: hidden;
              display: flex;
              position: relative;
              .item-img{
                .child_image {
                  width: 50px;
                  height: 50px;
                }
              }
              .item-des{
                float: left;
                width:145px;
                .item-name{
                  font-size:24rpx;
                  overflow:hidden;
                }
              }
              .itemcount{
                float: right;

              }
              .del-x{
                color: red;
                font-size: 12px;
                border-radius: 5px;
                border: 1px solid red;
                text-align:center;
                vertical-align:middle;
                position: absolute;
                right:3px;
                top:3px;
              }
            }
          }
          .total-area{
            margin: 10px;
            border:1px solid #ccc;
            border-radius: 5px;
            padding: 15px;
            .totalprice{
              text-align:left;
              // margin-top:8px;
              background-color:lightskyblue;
              border-radius:5px;
              color:#fff;
              display: inline-block;
              min-width:45px;
              padding:3px;
            }
          }
      }
  }
</style>
