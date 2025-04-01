require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([6],{

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(192);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 192:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_082260fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(195);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(193)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-082260fa"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_082260fa_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/ucenter/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-082260fa", Component.options)
  } else {
    hotAPI.reload("data-v-082260fa", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 193:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 194:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_index__ = __webpack_require__(36);
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
      userInfo: {},
      hasMobile: '',
      img_head: '/static/images/head.png',
      url_img: ''
    };
  },

  computed: {},
  created: function created() {},

  onLoad: function onLoad(options) {
    // this.userInfo = wx.getStorageSync('userInfo')
    // 页面初始化 options为页面跳转所带来的参数
  },
  onShow: function onShow() {
    // 页面初始化 options为页面跳转所带来的参数
    this.userInfo = wx.getStorageSync('userInfo');
    // 不知道为什么，https的不显示，要http状态下才可以显示出图片
    if (this.userInfo.avatarUrl) {
      this.url_img = this.userInfo.avatarUrl.replace('https', 'http');
    }
    if (!this.userInfo) {
      wx.showModal({
        title: '',
        confirmColor: '#b4282d',
        content: '请登陆',
        success: function success(res) {
          if (res.confirm) {
            __WEBPACK_IMPORTED_MODULE_0__utils_index__["a" /* default */].redirect(true);
          }
        }
      });
    }
  }
});

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter-warp"
  }, [_c('div', {
    staticClass: "login-area"
  }, [(_vm.userInfo === '') ? _c('div', [_c('img', {
    staticClass: "login-area-img",
    attrs: {
      "src": _vm.img_head,
      "alt": "头像"
    }
  })]) : _vm._e(), _vm._v(" "), (_vm.userInfo !== '') ? _c('div', [_c('img', {
    staticClass: "login-area-img",
    attrs: {
      "src": _vm.url_img,
      "alt": "头像"
    }
  })]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "login-area-info"
  }, [(_vm.userInfo === '') ? _c('span', [_vm._v("HI，游客")]) : _vm._e(), (_vm.userInfo !== '') ? _c('span', [_vm._v(_vm._s(_vm.userInfo.nickName))]) : _vm._e()])])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-082260fa", esExports)
  }
}

/***/ })

},[191]);
//# sourceMappingURL=main.js.map