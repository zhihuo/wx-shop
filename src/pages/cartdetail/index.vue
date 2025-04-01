<template>
  <div class="cartdetail-area">
    details
  </div>
</template>

<script>
// Use Vuex
import { mapGetters, mapActions, mapMutations } from 'vuex'
export default {
  data () {
    return {
      keyword: ''
    }
  },
  created () {
    // 调用深度拷贝原始数据
    this.copyData()
  },
  computed: {
    ...mapGetters([
      'copylist',
      'listdata'
    ])
  },
  methods: {
    // 收藏
    collectEvent: function (index) {
      // 调用收藏方法
      this.collect(index)
    },
    ...mapActions([
      'copyData'
    ]),
    ...mapMutations([
      'collect',
      'fillterData'
    ])
  },
  onLoad: function () {
    console.log('onLoad step')
  },
  onReachBottom: function () {
    wx.showLoading({
      title: '加载更多文章'
    })
  },
  watch: {
    'keyword': function (newValue, oldValue) {
      // const dom = this
      if (newValue !== oldValue) {
        // this.$store.commit('fillterData', newValue)
        // dom.listdata = dom.fillterData(dom.copylist, newValue)
        this.fillterData(newValue)
      }
    }
  }
}
</script>

<style scoped lang="less">
  .typelist-area{
    .weui{
      &-search{
        &-bar{
          background-color:inherit;
          border:none;
          height:9vh;
          overflow:hidden;
          &__form{
            border-bottom-right-radius:0px;
            border-top-right-radius:0px;
            // height:6vh;
            line-height:6vh;
          }
          &__input{
            line-height: 6vh;
            padding-top: 2px;
          }
          &__btn{
            width:80px;
            text-align:center;
            height:6vh;
            line-height:6vh;
            background-color:rgb(102, 175, 243);
            color:#fff;
            border-bottom-right-radius:5px;
            border-top-right-radius:5px;
          }
        }
      }
      &-grids, &-grid{
        border: none;
      }
      &-grid{
        padding: 5px;
      }
    }
    .search {
      &-item {
        margin-top: 1px;
        margin-bottom: 10px;
        padding: 10px;
        font-size: 16px;
      }
      &-hot {
        &-list {
          padding: 0px 12px;
          &__item {
            font-size: 14px;
            position: relative;
            text-align:center;
            .iconfont{
              font-size: 40px;
            }
            .fav{
              // visibility: hidden;
              &-line{
                font-size: 12px;
                display:flex;
                justify-content:center;
                &-word{
                  margin: 0px;
                }
                &-icon{
                  font-size: 16px;
                  margin: -2px 2px 0 2px;
                  cursor: pointer;
                }
              }
            }
          }
          
          &__name {
            font-size: 12px;
            // font-weight: bold;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }
    }
    .iconred{
      color: red;
    }
  }
</style>
