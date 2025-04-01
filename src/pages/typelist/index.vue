<template>
  <div class="typelist-area">
    <!--搜索-->
    <div class="weui-search-bar" id="searchBar">
        <form class="weui-search-bar__form">
            <div class="weui-search-bar__box">
                <icon class="weui-icon-search_in-box" type="search" size="14"></icon>
                <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" v-model='keyword' required/>
            </div>
        </form>
        <!-- <div class="weui-search-bar__btn" @click="check">查询</div> -->
    </div>
    <!--展示列表-->
    <div v-for="(item, index) in copyfeeds" :key="index">
      <div class="list" @click="tapItem(item)">
        <div class="view_preinfo">
          <div class="list_preinfo">{{item.CreateDateTime}} / {{item.ArticleAuthor}}</div>
        </div>
        <div class="list_title">{{item.ArticleTitle}}</div>
        <div>
          <div v-for="(c, cindex) in item.Tags" :key="cindex">
            <div class="list_tag" >{{c.TagName}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// Use Vuex

export default {
  data () {
    return {
      iconItems: [
        {
          icon: 'icon-shiwu',
          name: '食物',
          url: '/pages/typelist/main'
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
        },
        {
          icon: 'icon-jiajujiafang',
          name: '家具',
          url: '/pages/counter/main'
        }
      ],
      feeds: [],
      page: 1,
      keyword: '',
      copyfeeds: []
    }
  },
  created () {
    // this.copyfeeds = JSON.parse(JSON.stringify(this.feeds))
  },
  computed: {
  },
  methods: {
    // 过滤方法，list原始数据，keyword 过滤的关键字
    fillterData: function (list, keyword) {
      return list.filter((v) => {
        return v.ArticleTitle.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1
      })
    },
    getFeeds: function (page) {
      console.log('come in')
      if (page === 1) {
        wx.showLoading({
          title: '加载中'
        })
      }
      var that = this
      wx.request({
        url: 'https://api.techfoco.com/feed/get?pageNumber=' + page + '&pagesize=10',
        method: 'get',
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          var resdata = JSON.parse(res.data)
          console.log('1:', res)
          if (that.page > 1) {
            var feedTemp = that.feeds
            that.feeds = feedTemp.concat(resdata)
            that.page = page + 1
          } else {
            that.feeds = resdata
            that.page = page + 1
          }
          that.copyfeeds = JSON.parse(JSON.stringify(that.feeds))
        },
        fail: function () {
          wx.showToast({
            title: '异常',
            duration: 1500
          })
        },
        complete: function () {
          if (page >= 1) {
            wx.hideLoading()
          }
        }
      })
    },
    // 页面跳转
    tapItem (e) {
      console.log('click===', e)
      let articleId = e.ArticleId
      wx.navigateTo({
        url: '/pages/indexdetail/main?id=' + articleId
      })
    }
  },
  onLoad: function () {
    console.log('onLoad step')
    var that = this
    this.getFeeds(that.page)
  },
  onReachBottom: function () {
    wx.showLoading({
      title: '加载更多文章'
    })
    var that = this
    this.getFeeds(that.page)
  },
  watch: {
    'keyword': function (newValue, oldValue) {
      const dom = this
      if (newValue !== oldValue) {
        dom.copyfeeds = dom.fillterData(dom.feeds, newValue)
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
            // border-bottom-right-radius:0px;
            // border-top-right-radius:0px;
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
    }
  }
  .list {
    margin: 10px;
    border: 1px solid #d8d8d8;
    border-radius: 5px;
    background-color: #fff;
    padding: 10px;
    box-shadow:0px 2px 5px #efefef;
    &_preinfo{
      color: #cecece;
      font-size: 11px;
    }
    &_title {
      color: #545454;
      padding-top: 3px;
      padding-bottom: 3px;
      display: block;
      font-size: 15px;
    }
    &_tag {
      display: inline;
      padding: 0.1em 0.3em 0.1em 0.3em;
      margin-right: 3px;
      font-size: 11px;
      line-height: 1;
      text-align: center;
      white-space: nowrap;
      vertical-align: baseline;
      border-radius: 0.25em;
      color: #626262;
      font-weight: normal;
    }
  }
</style>
