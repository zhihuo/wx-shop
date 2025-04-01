require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([9],{

/***/ 139:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(140);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(142);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05e9dabc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(143);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(141)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_05e9dabc_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/login/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-05e9dabc", Component.options)
  } else {
    hotAPI.reload("data-v-05e9dabc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 141:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 142:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
// import utils from '@/utils/index'
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      userInfo: {
        name: '',
        pwd: ''
      },
      name: '',
      pwd: '',
      hasMobile: ''
    };
  },

  methods: {
    getUserInfo: function getUserInfo() {
      // 调用登录接口
      // utils.login().then((res) => {
      //   this.userInfo = res.userInfo
      //   wx.setStorageSync('userInfo', res.userInfo)
      //   wx.setStorageSync('token', res.userInfo)
      //   console.warn('登录中')
      //   wx.switchTab({
      //     url: '/pages/ucenter/main'
      //   })
      // }).catch((err) => {
      //   console.log(err)
      // })
      // 因为用的是自己申请的AppID，所以不能直接用微信自己的登录接口获取用户信息，暂时写死数据
      var rawData = { nickName: '夕阳一瞥',
        gender: 1,
        language: 'zh_CN',
        city: 'Shenzhen',
        province: 'Guangdong',
        country: 'China',
        avatarUrl: 'https://wx.qlogo.cn/mmopen/vi_32/kZWw8VUrXAw7KbBc90jVC3r9kEnwd0obibCLg1iaicJOyartx4PVbzl0EWSyX7V7gqu1LPLDTdZmmX3ruIhyibaYiaw/132' };
      this.userInfo = rawData;
      wx.setStorageSync('userInfo', this.userInfo);
      wx.setStorageSync('token', this.userInfo);
      wx.switchTab({
        url: '/pages/ucenter/main'
      });
    }
  },
  computed: {},
  created: function created() {},

  onLoad: function onLoad(options) {},
  onShow: function onShow() {
    // 页面初始化 options为页面跳转所带来的参数
  }
});

/***/ }),

/***/ 143:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter-warp"
  }, [_c('div', {
    staticClass: "weui-cells weui-cells_form"
  }, [_c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("账户")])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd weui-cell_primary"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.name),
      expression: "userInfo.name"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "tel",
      "placeholder": "手机号码",
      "eventid": '0'
    },
    domProps: {
      "value": (_vm.userInfo.name)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.name = $event.target.value
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cell"
  }, [_c('div', {
    staticClass: "weui-cell__hd"
  }, [_c('label', {
    staticClass: "weui-label"
  }, [_vm._v("密码")])], 1), _vm._v(" "), _c('div', {
    staticClass: "weui-cell__bd weui-cell_primary"
  }, [_c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.userInfo.pwd),
      expression: "userInfo.pwd"
    }],
    staticClass: "weui-input",
    attrs: {
      "type": "password",
      "placeholder": "不少于6位",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.userInfo.pwd)
    },
    on: {
      "input": function($event) {
        if ($event.target.composing) { return; }
        _vm.userInfo.pwd = $event.target.value
      }
    }
  })])])]), _vm._v(" "), _c('div', {
    staticClass: "weui-cells__tips"
  }), _vm._v(" "), _c('div', {
    staticClass: "weui-btn-area"
  }, [_c('a', {
    staticClass: "weui-btn weui-btn_primary",
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        _vm.getUserInfo()
      }
    }
  }, [_vm._v("登录")])]), _vm._v(" "), _c('a', {
    staticClass: "important-tips",
    attrs: {
      "href": "/register"
    }
  }, [_vm._v("没账户，去注册")])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-05e9dabc", esExports)
  }
}

/***/ })

},[139]);
//# sourceMappingURL=main.js.map