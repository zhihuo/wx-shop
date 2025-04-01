<template>
  <div class="typelist-area">
    <!--搜索-->
    <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
                <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" v-model='keyword'/>
            </div>
        </form>
    </div>
    <!--展示列表-->
    <div class="history-list">
        历史记录
    </div>
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
  computed: {
    ...mapGetters([
      'copyCollectlist'
    ])
  },
  created () {
  },
  methods: {
    ...mapActions([
      'filetrCollect',
      'copyCollectData'
    ]),
    ...mapMutations([
      'fillterCollectData'
    ])
  },
  // 打开收藏页才响应的方法,在这里调用的方法，是会根据外部条件改变的
  onShow: function () {
    // 初始化过滤，选中的显示
    this.filetrCollect()
    // 调用深度拷贝
    this.copyCollectData()
  },
  watch: {
    'keyword': function (newValue, oldValue) {
      if (newValue !== oldValue) {
        this.fillterCollectData(newValue)
      }
    }
  }
}
</script>

<style lang="less" scoped>
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
    &-grids{
      .child_image {
        width: 80px;
        height: 80px;
      }
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
        }
        
        &__name {
          font-size: 12px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
  }
}
</style>
