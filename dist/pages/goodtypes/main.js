require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([10],{

/***/ 100:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(101);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26a85356_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(104);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(102)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-26a85356"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_26a85356_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/goodtypes/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-26a85356", Component.options)
  } else {
    hotAPI.reload("data-v-26a85356", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 102:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 103:
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
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      windowHeight: 0,
      rootcateList: [{ name: '上衣', code: 1, active: true }, { name: '裤子', code: 2, active: false }, { name: '裙子', code: 3, active: false }],
      childcateList: [],
      // 上衣
      jacketList: [{ name: '风衣', code: 1, thumLogo: 'http://sujiefs.com/upload/images/20171006/201710061145211681060_thumbnail.jpg' }, { name: 'T恤', code: 2, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161803198792334_thumbnail.jpg' }, { name: '衬衫', code: 3, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161804083693788_thumbnail.jpg' }, { name: '风衣', code: 4, thumLogo: 'http://sujiefs.com/upload/images/20171006/201710061145211681060_thumbnail.jpg' }],
      // 裤子
      trousersList: [{ name: '九分裤', code: 1, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161849396808035_thumbnail.jpg' }, { name: '休闲裤', code: 2, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161849490916198_thumbnail.jpg' }],
      // 裙子
      skirtList: [{ name: '连衣裙', code: 1, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161904263180558_thumbnail.jpg' }, { name: '半身裙', code: 2, thumLogo: 'http://sujiefs.com/upload/images/20170816/201708161906298645469_thumbnail.jpg' }]
    };
  },
  created: function created() {
    this.childcateList = this.jacketList;
  },

  methods: {
    changeCate: function changeCate(e) {
      var code = e.currentTarget.dataset.code;
      // 设置一级分类的选中状态
      for (var i = 0; i < this.rootcateList.length; i++) {
        var rootCate = this.rootcateList[i];
        rootCate.active = false;
        if (rootCate.code === code) {
          rootCate.active = true;
        }
      }
      // 判断切换的时候，数据如何显示
      this.childcateList = code === 1 ? this.jacketList : code === 2 ? this.trousersList : this.skirtList;
    }
  },
  onLoad: function onLoad() {
    this.windowHeight = 603;
  }
});

/***/ }),

/***/ 104:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "pageClass"
  }, [_c('div', {
    staticClass: "top_search"
  }, [_c('div', {
    staticClass: "search_read_only"
  }, [_c('navigator', {
    staticClass: "search_content",
    attrs: {
      "url": "/pages/search/main"
    }
  }, [_c('i', {
    staticClass: "iconfont icon-search"
  }), _vm._v(" "), _c('div', {
    staticClass: "search_input"
  }, [_vm._v("搜索商品")])], 1)], 1)]), _vm._v(" "), _c('div', {
    staticClass: "classify",
    style: ({
      height: (_vm.windowHeight - 50) + 'px'
    })
  }, [_c('scroll-view', {
    staticClass: "classify_catetory",
    style: ({
      height: (_vm.windowHeight - 50) + 'px'
    }),
    attrs: {
      "scroll-y": "",
      "scroll-with-animation": "true"
    }
  }, _vm._l((_vm.rootcateList), function(item, index) {
    return _c('view', {
      key: item,
      class: item.active ? 'name active' : 'name',
      attrs: {
        "data-code": item.code,
        "eventid": '0-' + index
      },
      on: {
        "click": _vm.changeCate
      }
    }, [_vm._v("\n          " + _vm._s(item.name) + "\n      ")])
  })), _vm._v(" "), _c('scroll-view', {
    staticClass: "classify_detail",
    style: ({
      height: (_vm.windowHeight - 50) + 'px'
    }),
    attrs: {
      "scroll-y": "",
      "scroll-with-animation": "true"
    }
  }, [_c('view', {
    staticClass: "children"
  }, _vm._l((_vm.childcateList), function(item, index) {
    return _c('navigator', {
      key: index,
      staticClass: "children_item",
      attrs: {
        "hover-class": "none",
        "for-item": item,
        "url": '/pages/search?cateCode=' + item.code + '&title=' + item.name
      }
    }, [_c('image', {
      staticClass: "child_image",
      attrs: {
        "src": item.thumLogo
      }
    }), _vm._v(" "), _c('view', {
      staticClass: "child_name"
    }, [_vm._v(_vm._s(item.name))])])
  }))])], 1)])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-26a85356", esExports)
  }
}

/***/ })

},[100]);
//# sourceMappingURL=main.js.map