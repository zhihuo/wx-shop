// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 0,
    // 原始数据
    listdata: [
      {
        icon: 'icon-yingercanju',
        img: 'http://sujiefs.com/upload/images/20180314/201803141132256826302_thumbnail.jpg',
        name: '潮流条纹长袖上衣T18C028',
        id: 1,
        url: '/pages/cartdetail/main',
        active: false,
        price: 10,
        count: 0,
        total: 0
      },
      {
        icon: 'icon-canju2',
        img: 'http://sujiefs.com/upload/images/20180314/201803141614502396659_thumbnail.jpg',
        name: '时尚印花蕾丝长袖打底衫T18C0113',
        id: 2,
        url: '/pages/counter/main',
        active: false,
        price: 10,
        count: 0,
        total: 0
      },
      {
        icon: 'icon-canju3',
        img: 'http://sujiefs.com/upload/images/20180314/201803141048246599455_thumbnail.jpg',
        name: '百搭印花短袖上衣T18C027',
        id: 3,
        // url: '/pages/counter/main',
        active: false,
        price: 1,
        count: 0,
        total: 0
      },
      {
        icon: 'icon-jiajujiafang',
        img: 'http://sujiefs.com/upload/images/20180314/201803141056200954178_thumbnail.jpg',
        name: '百搭印花长袖上衣T18C025',
        id: 4,
        url: '/pages/counter/main',
        active: false,
        price: 1,
        count: 0,
        total: 0
      },
      {
        icon: 'icon-canju',
        img: 'http://sujiefs.com/upload/images/20180314/201803141101541265640_thumbnail.jpg',
        name: '优雅印花长袖上衣T18C026',
        id: 5,
        url: '/pages/counter/main',
        active: false,
        price: 1,
        count: 0,
        total: 0
      },
      {
        icon: 'icon-canju4',
        img: 'http://sujiefs.com/upload/images/20180315/201803151620335076856_thumbnail.jpg',
        name: '韩版潮流镂空上衣T18C0114',
        id: 6,
        url: '/pages/counter/main',
        active: false,
        price: 1,
        count: 0,
        total: 0
      },
      {
        icon: 'icon-canju5',
        img: 'http://sujiefs.com/upload/images/20180317/201803171652200177094_thumbnail.jpg',
        name: '韩版潮流简约条纹上衣T18C017',
        id: 7,
        url: '/pages/counter/main',
        active: false,
        price: 1,
        count: 0,
        total: 0
      },
      {
        icon: 'icon-canju6',
        img: 'http://sujiefs.com/upload/images/20181127/201811271437585838514_thumbnail.jpg',
        name: '黑色条纹不倒绒薄款金丝绒阔腿裤',
        id: 8,
        url: '/pages/counter/main',
        active: false,
        price: 1,
        count: 0,
        total: 0
      }
    ],
    // copy原始数据
    copylist: [],
    collectlist: [],
    copyCollectlist: []
  },
  getters: {
    count: state => state.count,
    listdata: state => state.listdata,
    copylist: state => state.copylist,
    collectlist: state => state.collectlist,
    copyCollectlist: state => state.copyCollectlist
  },
  actions: {
    copyData ({commit, state}) {
      // 调用 mutations 的copy方法
      commit('copy', state.listdata)
    },
    copyCollectData ({commit, state}) {
      // 调用 mutations 的copy方法
      commit('copyCollect', state.collectlist)
    },
    // 初始化调用此方法，过滤掉没有收藏的商品，即只显示收藏
    filetrCollect ({commit}) {
      commit('collectfileter')
    }
  },
  mutations: {
    increment: (state) => {
      const obj = state
      obj.count += 1
    },
    decrement: (state) => {
      const obj = state
      obj.count -= 1
    },
    // 收藏标签
    collect: function (state, index) {
      state.copylist[index].active = !state.copylist[index].active
      // 提示添加／取消
      wx.showToast({
        title: state.copylist[index].active ? '添加成功' : '取消成功'
      })
    },
    // copy 原始数据，用于过滤方法
    copy: function (state, list) {
      state.copylist = JSON.parse(JSON.stringify(list))
      // return state.copylist
    },
    // copy 原始数据，用于过滤方法
    copyCollect: function (state, list) {
      state.copyCollectlist = JSON.parse(JSON.stringify(list))
    },
    // 搜索过滤方法，listdatat原始数据，copylist过滤的数据,keyword 过滤的关键字
    fillterData: function (state, keyword) {
      state.copylist = state.listdata.filter((v) => {
        return v.name.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1
      })
    },
    // 购物车删除商品模块, idv表示ID值
    delData: function (state, idv) {
      let v = parseInt(idv, 10)
      for (let i = 0; i < state.copylist.length; i++) {
        // id 值相等，即设置选择状态为false
        if (v === state.copylist[i].id) {
          state.copylist[i].active = false
        }
      }
      // 过滤数据，删除之后，收藏的标签也跟着没有（暂时这么做，坑来的，公用一套数据的结果）
      state.copyCollectlist = state.copylist.filter((v) => {
        if (v.active === true) {
          return v
        }
      })
    },
    // 过滤已经收藏的
    collectfileter: function (state) {
      state.collectlist = state.copylist.filter((v) => {
        if (v.active === true) {
          return v
        }
      })
    },
    // 搜索过滤方法，listdatat原始数据，copylist过滤的数据,keyword 过滤的关键字
    fillterCollectData: function (state, keyword) {
      state.copyCollectlist = state.collectlist.filter((v) => {
        return v.name.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1
      })
    }
  }
})

export default store
