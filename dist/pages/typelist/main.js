require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([7],{

/***/ 186:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(187);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 187:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ef350856_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(190);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(188)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-ef350856"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_ef350856_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/typelist/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-ef350856", Component.options)
  } else {
    hotAPI.reload("data-v-ef350856", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 188:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 189:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__);

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

// Use Vuex

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      iconItems: [{
        icon: 'icon-shiwu',
        name: '食物',
        url: '/pages/typelist/main'
      }, {
        icon: 'icon-yinliao',
        name: '饮料',
        url: '/pages/counter/main'
      }, {
        icon: 'icon-fuzhuang',
        name: '服装',
        url: '/pages/counter/main'
      }, {
        icon: 'icon-jiajujiafang',
        name: '家具',
        url: '/pages/counter/main'
      }],
      feeds: [],
      page: 1,
      keyword: '',
      copyfeeds: []
    };
  },
  created: function created() {
    // this.copyfeeds = JSON.parse(JSON.stringify(this.feeds))
  },

  computed: {},
  methods: {
    // 过滤方法，list原始数据，keyword 过滤的关键字
    fillterData: function fillterData(list, keyword) {
      return list.filter(function (v) {
        return v.ArticleTitle.toString().toLowerCase().indexOf(keyword.toString().toLowerCase()) > -1;
      });
    },
    getFeeds: function getFeeds(page) {
      console.log('come in');
      if (page === 1) {
        wx.showLoading({
          title: '加载中'
        });
      }
      var that = this;
      wx.request({
        url: 'https://api.techfoco.com/feed/get?pageNumber=' + page + '&pagesize=10',
        method: 'get',
        header: {
          'content-type': 'application/json'
        },
        success: function success(res) {
          var resdata = JSON.parse(res.data);
          console.log('1:', res);
          if (that.page > 1) {
            var feedTemp = that.feeds;
            that.feeds = feedTemp.concat(resdata);
            that.page = page + 1;
          } else {
            that.feeds = resdata;
            that.page = page + 1;
          }
          that.copyfeeds = JSON.parse(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(that.feeds));
        },
        fail: function fail() {
          wx.showToast({
            title: '异常',
            duration: 1500
          });
        },
        complete: function complete() {
          if (page >= 1) {
            wx.hideLoading();
          }
        }
      });
    },
    // 页面跳转
    tapItem: function tapItem(e) {
      console.log('click===', e);
      var articleId = e.ArticleId;
      wx.navigateTo({
        url: '/pages/indexdetail/main?id=' + articleId
      });
    }
  },
  onLoad: function onLoad() {
    console.log('onLoad step');
    var that = this;
    this.getFeeds(that.page);
  },
  onReachBottom: function onReachBottom() {
    wx.showLoading({
      title: '加载更多文章'
    });
    var that = this;
    this.getFeeds(that.page);
  },
  watch: {
    'keyword': function keyword(newValue, oldValue) {
      var dom = this;
      if (newValue !== oldValue) {
        dom.copyfeeds = dom.fillterData(dom.feeds, newValue);
      }
    }
  }
});

/***/ }),

/***/ 190:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "typelist-area"
  }, [_c('div', {
    staticClass: "weui-search-bar",
    attrs: {
      "id": "searchBar"
    }
  }, [_c('form', {
    staticClass: "weui-search-bar__form"
  }, [_c('div', {
    staticClass: "weui-search-bar__box"
  }, [_c('icon', {
    staticClass: "weui-icon-search_in-box",
    attrs: {
      "type": "search",
      "size": "14"
    }
  }), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.keyword),
      expression: "keyword"
    }],
    staticClass: "weui-search-bar__input",
    attrs: {
      "type": "search",
      "id": "searchInput",
      "placeholder": "搜索",
      "required": "",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.keyword)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.keyword = $event.target.value
      }
    }
  })], 1)])], 1), _vm._v(" "), _vm._l((_vm.copyfeeds), function(item, index) {
    return _c('div', {
      key: index
    }, [_c('div', {
      staticClass: "list",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.tapItem(item)
        }
      }
    }, [_c('div', {
      staticClass: "view_preinfo"
    }, [_c('div', {
      staticClass: "list_preinfo"
    }, [_vm._v(_vm._s(item.CreateDateTime) + " / " + _vm._s(item.ArticleAuthor))])]), _vm._v(" "), _c('div', {
      staticClass: "list_title"
    }, [_vm._v(_vm._s(item.ArticleTitle))]), _vm._v(" "), _c('div', _vm._l((item.Tags), function(c, cindex) {
      return _c('div', {
        key: cindex
      }, [_c('div', {
        staticClass: "list_tag"
      }, [_vm._v(_vm._s(c.TagName))])])
    }))])])
  })], 2)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-ef350856", esExports)
  }
}

/***/ })

},[186]);
//# sourceMappingURL=main.js.map