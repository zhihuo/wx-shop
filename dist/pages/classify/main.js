require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([13],{

/***/ 85:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(86);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 86:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73e8c6fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(89);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(87)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-73e8c6fe"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_73e8c6fe_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/classify/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-73e8c6fe", Component.options)
  } else {
    hotAPI.reload("data-v-73e8c6fe", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 87:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 88:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);

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
      keyword: ''
    };
  },
  created: function created() {
    // 调用深度拷贝原始数据
    this.copyData();
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['copylist', 'listdata'])),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({
    // 收藏
    collectEvent: function collectEvent(index) {
      // 调用收藏方法
      this.collect(index);
    }
  }, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['copyData']), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])(['collect', 'fillterData'])),
  onLoad: function onLoad() {
    console.log('onLoad step');
  },
  onReachBottom: function onReachBottom() {
    wx.showLoading({
      title: '加载更多文章'
    });
  },
  watch: {
    'keyword': function keyword(newValue, oldValue) {
      // const dom = this
      if (newValue !== oldValue) {
        // this.$store.commit('fillterData', newValue)
        // dom.listdata = dom.fillterData(dom.copylist, newValue)
        this.fillterData(newValue);
      }
    }
  }
});

/***/ }),

/***/ 89:
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
  })], 1)])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-grids"
  }, _vm._l((_vm.copylist), function(item, index) {
    return _c('navigator', {
      key: index,
      staticClass: "weui-grid search-hot-list__item",
      attrs: {
        "url": item.url,
        "hover-class": "weui-grid__active"
      }
    }, [_c('image', {
      staticClass: "child_image",
      attrs: {
        "src": item.img
      }
    }), _vm._v(" "), _c('p', {
      staticClass: "search-hot-list__name",
      attrs: {
        "title": item.name
      }
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "fav",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          $event.stopPropagation();
          _vm.collectEvent(index)
        }
      }
    }, [_c('div', {
      staticClass: "fav-line"
    }, [_c('span', {
      staticClass: "fav-line-word"
    }, [_vm._v("收藏")]), _c('span', {
      directives: [{
        name: "show",
        rawName: "v-show",
        value: (item.active),
        expression: "item.active"
      }],
      staticClass: "fav-line-word"
    }, [_vm._v("成功")]), _vm._v(" "), _c('span', [_c('i', {
      staticClass: "fav-line-icon iconfont icon-shoucang",
      class: {
        'iconred': item.active
      }
    })], 1)])])], 1)
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-73e8c6fe", esExports)
  }
}

/***/ })

},[85]);
//# sourceMappingURL=main.js.map