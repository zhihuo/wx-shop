require("common/manifest.js");
require("common/vendor.js");
global.webpackJsonp([5],{

/***/ 44:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_style_less__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__styles_style_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__styles_style_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_weui_less__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__styles_weui_less___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__styles_weui_less__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_font_iconfont_css__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__styles_font_iconfont_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__styles_font_iconfont_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(53);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.prototype.$store = __WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */];
__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */].mpType = 'app';

var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 46:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__(49);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(47)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */
var __vue_template__ = null
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __vue_template__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/App.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-9d6d00fc", Component.options)
  } else {
    hotAPI.reload("data-v-9d6d00fc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 47:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

/* harmony default export */ __webpack_exports__["a"] = ({
  created: function created() {
    // 调用API从本地缓存中获取数据
    var logs = wx.getStorageSync('logs') || [];
    logs.unshift(Date.now());
    wx.setStorageSync('logs', logs);
    console.log('app created and cache logs by setStorageSync');
  }
});

/***/ }),

/***/ 50:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 51:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 52:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 53:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vuex__ = __webpack_require__(5);

// https://vuex.vuejs.org/zh-cn/intro.html
// make sure to call Vue.use(Vuex) if using a module system



__WEBPACK_IMPORTED_MODULE_1_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */]);

var store = new __WEBPACK_IMPORTED_MODULE_2_vuex__["a" /* default */].Store({
  state: {
    count: 0,
    // 原始数据
    listdata: [{
      icon: 'icon-yingercanju',
      img: 'http://sujiefs.com/upload/images/20180314/201803141132256826302_thumbnail.jpg',
      name: '潮流条纹长袖上衣T18C028',
      id: 1,
      url: '/pages/cartdetail/main',
      active: false,
      price: 10,
      count: 0,
      total: 0
    }, {
      icon: 'icon-canju2',
      img: 'http://sujiefs.com/upload/images/20180314/201803141614502396659_thumbnail.jpg',
      name: '时尚印花蕾丝长袖打底衫T18C0113',
      id: 2,
      url: '/pages/counter/main',
      active: false,
      price: 10,
      count: 0,
      total: 0
    }, {
      icon: 'icon-canju3',
      img: 'http://sujiefs.com/upload/images/20180314/201803141048246599455_thumbnail.jpg',
      name: '百搭印花短袖上衣T18C027',
      id: 3,
      // url: '/pages/counter/main',
      active: false,
      price: 1,
      count: 0,
      total: 0
    }, {
      icon: 'icon-jiajujiafang',
      img: 'http://sujiefs.com/upload/images/20180314/201803141056200954178_thumbnail.jpg',
      name: '百搭印花长袖上衣T18C025',
      id: 4,
      url: '/pages/counter/main',
      active: false,
      price: 1,
      count: 0,
      total: 0
    }, {
      icon: 'icon-canju',
      img: 'http://sujiefs.com/upload/images/20180314/201803141101541265640_thumbnail.jpg',
      name: '优雅印花长袖上衣T18C026',
      id: 5,
      url: '/pages/counter/main',
      active: false,
      price: 1,
      count: 0,
      total: 0
    }, {
      icon: 'icon-canju4',
      img: 'http://sujiefs.com/upload/images/20180315/201803151620335076856_thumbnail.jpg',
      name: '韩版潮流镂空上衣T18C0114',
      id: 6,
      url: '/pages/counter/main',
      active: false,
      price: 1,
      count: 0,
      total: 0
    }, {
      icon: 'icon-canju5',
      img: 'http://sujiefs.com/upload/images/20180317/201803171652200177094_thumbnail.jpg',
      name: '韩版潮流简约条纹上衣T18C017',
      id: 7,
      url: '/pages/counter/main',
      active: false,
      price: 1,
      count: 0,
      total: 0
    }, {
      icon: 'icon-canju6',
      img: 'http://sujiefs.com/upload/images/20181127/201811271437585838514_thumbnail.jpg',
      name: '黑色条纹不倒绒薄款金丝绒阔腿裤',
      id: 8,
      url: '/pages/counter/main',
      active: false,
      price: 1,
      count: 0,
      total: 0
    }],
    // copy原始数据
    copylist: [],
    collectlist: [],
    copyCollectlist: []
  },
  getters: {
    count: function count(state) {
      return state.count;
    },
    listdata: function listdata(state) {
      return state.listdata;
    },
    copylist: function copylist(state) {
      return state.copylist;
    },
    collectlist: function collectlist(state) {
      return state.collectlist;
    },
    copyCollectlist: function copyCollectlist(state) {
      return state.copyCollectlist;
    }
  },
  actions: {
    copyData: function copyData(_ref) {
      var commit = _ref.commit,
          state = _ref.state;

      // 调用 mutations 的copy方法
      commit('copy', state.listdata);
    },
    copyCollectData: function copyCollectData(_ref2) {
      var commit = _ref2.commit,
          state = _ref2.state;

      // 调用 mutations 的copy方法
      commit('copyCollect', state.collectlist);
    },

    // 初始化调用此方法，过滤掉没有收藏的商品，即只显示收藏
    filetrCollect: function filetrCollect(_ref3) {
      var commit = _ref3.commit;

      commit('collectfileter');
    }
  },
  mutations: {
    increment: function increment(state) {
      var obj = state;
      obj.count += 1;
    },
    decrement: function decrement(state) {
      var obj = state;
      obj.count -= 1;
    },
    // 收藏标签
    collect: function collect(state, index) {
      state.copylist[index].active = !state.copylist[index].active;
      // 提示添加／取消
      wx.showToast({
        title: state.copylist[index].active ? '添加成功' : '取消成功'
      });
    },
    // copy 原始数据，用于过滤方法
    copy: function copy(state, list) {
      state.copylist = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(list));
      // return state.copylist
    },
    // copy 原始数据，用于过滤方法
    copyCollect: function copyCollect(state, list) {
      state.copyCollectlist = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(list));
    },
    // 搜索过滤方法，listdatat原始数据，copylist过滤的数据,keyword 过滤的关键字
    fillterData: function fillterData(state, keyword) {
      state.copylist = state.listdata.filter(function (v) {
        return v.name.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1;
      });
    },
    // 购物车删除商品模块, idv表示ID值
    delData: function delData(state, idv) {
      var v = parseInt(idv, 10);
      for (var i = 0; i < state.copylist.length; i++) {
        // id 值相等，即设置选择状态为false
        if (v === state.copylist[i].id) {
          state.copylist[i].active = false;
        }
      }
      // 过滤数据，删除之后，收藏的标签也跟着没有（暂时这么做，坑来的，公用一套数据的结果）
      state.copyCollectlist = state.copylist.filter(function (v) {
        if (v.active === true) {
          return v;
        }
      });
    },
    // 过滤已经收藏的
    collectfileter: function collectfileter(state) {
      state.collectlist = state.copylist.filter(function (v) {
        if (v.active === true) {
          return v;
        }
      });
    },
    // 搜索过滤方法，listdatat原始数据，copylist过滤的数据,keyword 过滤的关键字
    fillterCollectData: function fillterCollectData(state, keyword) {
      state.copyCollectlist = state.collectlist.filter(function (v) {
        return v.name.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1;
      });
    }
  }
});

/* harmony default export */ __webpack_exports__["a"] = (store);

/***/ })

},[44]);
//# sourceMappingURL=app.js.map