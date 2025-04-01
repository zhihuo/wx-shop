require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([4],{

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(61);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 61:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ccbc2b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(79);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(62)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-8ccbc2b0"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_8ccbc2b0_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/cartcount/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-8ccbc2b0", Component.options)
  } else {
    hotAPI.reload("data-v-8ccbc2b0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 62:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_count_vue__ = __webpack_require__(75);

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
      keyword: '',
      countval: 0,
      // 所有商品数量
      pricetotal: []
      // copyCollectlist: [
      //   {
      //     icon: 'icon-yingercanju',
      //     name: '婴儿餐具',
      //     url: '/pages/counter/main',
      //     active: false,
      //     price: 10,
      //     count: 1,
      //     total: 0
      //   },
      //   {
      //     icon: 'icon-canju2',
      //     name: '餐具2',
      //     url: '/pages/counter/main',
      //     active: false,
      //     price: 10,
      //     count: 1,
      //     total: 0
      //   },
      //   {
      //     icon: 'icon-canju3',
      //     name: '餐具3',
      //     url: '/pages/counter/main',
      //     active: false,
      //     price: 1,
      //     count: 1,
      //     total: 0
      //   }
      // ]
    };
  },
  created: function created() {
    // 调用深度拷贝原始数据
    // this.copyData()
  },

  computed: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["c" /* mapGetters */])(['copylist', 'copyCollectlist']), {
    countTotal: function countTotal() {
      var dom = this;
      var v = dom.pricetotal;
      var countlist = 0;
      for (var i = 0; i < v.length; i++) {
        countlist += v[i];
      }
      return countlist;
    }
  }),
  methods: __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({}, Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["b" /* mapActions */])(['filetrCollect', 'copyCollectData']), Object(__WEBPACK_IMPORTED_MODULE_1_vuex__["d" /* mapMutations */])(['delData']), {
    // 插件返回的数据
    counteventFun: function counteventFun(e, index) {
      this.pricetotal[index] = e;
    },

    // 删除模块
    delItem: function delItem(id) {
      this.delData(id);
    },
    goindex: function goindex(e) {
      console.log('e===', e);
      wx.switchTab({
        url: '/pages/index/main'
      });
    }
  }),
  onShow: function onShow() {
    // 初始化过滤，选中的显示
    this.filetrCollect();
    // 调用深度拷贝
    this.copyCollectData();
    console.log('copyCollectlist==', this.copyCollectlist);
  },
  components: {
    'count': __WEBPACK_IMPORTED_MODULE_2__components_count_vue__["a" /* default */]
  },
  watch: {
    // json 数组需要深监听才能监听到变化
    'copyCollectlist': {
      handler: function handler(newVal, oldVal) {
        var dom = this;
        dom.countval = 0;
        // 计算总价格
        if (newVal) {
          for (var i = 0; i < newVal.length; i++) {
            dom.countval += newVal[i].total;
          }
        }
      },
      deep: true
    }
  }
});

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_count_vue__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_006ea7a5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_count_vue__ = __webpack_require__(78);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(76)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-006ea7a5"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_count_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_006ea7a5_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_count_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/count.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] count.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-006ea7a5", Component.options)
  } else {
    hotAPI.reload("data-v-006ea7a5", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 76:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 77:
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

// Use Vuex
// import store from './store'
// import { mapGetters } from 'vuex'
/* harmony default export */ __webpack_exports__["a"] = ({
  // computed: {
  //   count () {
  //     return store.state.count
  //   }
  // },
  data: function data() {
    return {
      count: 0,
      total: 0
    };
  },
  created: function created() {
    this.count = this.initcount;
    console.log('init:', this.count);
  },

  // computed: {
  // },
  methods: {
    increment: function increment() {
      this.count += 1;
      this.total = this.count * this.price;
      this.listdata[this.index].total = this.total;
      this.$emit('countevent', this.total, this.index);
      // this.$store.commit('increment')
    },
    decrement: function decrement() {
      if (this.count >= 1) {
        this.count -= 1;
        this.total = this.count * this.price;
        this.listdata[this.index].total = this.total;
        this.$emit('countevent', this.total, this.index);
      }
      // this.$store.commit('decrement')
    },

    // 监听input的输入数字
    countchange: function countchange() {
      var dom = this;
      var thisval = dom.count === '' ? '' : parseInt(dom.count, 10);
      if (thisval < 0 || thisval === '') {
        // 不可以为负数
        dom.count = thisval < 0 ? 0 : thisval;
        dom.total = 0;
        dom.listdata[dom.index].total = dom.total;
      } else {
        dom.total = thisval * dom.price;
        dom.listdata[dom.index].total = dom.total;
      }
    }
  },
  onShow: function onShow() {
    // 打开页面都清空选择的总价格
    this.initcount = 0;
    this.count = 0;
  },
  // initcount: 初始化的个数，price：价格,  index索引值
  props: ['initcount', 'total', 'price', 'index', 'listdata']
});

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "counter-warp"
  }, [_c('div', {
    staticClass: "count-area"
  }, [_c('span', {
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.increment
    }
  }, [_vm._v("+")]), _vm._v(" "), _c('input', {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: (_vm.count),
      expression: "count"
    }],
    staticClass: "inputcount",
    attrs: {
      "placeholder": "请输入",
      "eventid": '1'
    },
    domProps: {
      "value": (_vm.count)
    },
    on: {
      "input": [function($event) {
        if ($event.target.composing) { return; }
        _vm.count = $event.target.value
      }, _vm.countchange]
    }
  }), _vm._v(" "), _c('span', {
    attrs: {
      "eventid": '2'
    },
    on: {
      "click": _vm.decrement
    }
  }, [_vm._v("-")])]), _vm._v(" "), _c('div', {
    staticClass: "totalprice"
  }, [_vm._v("价格：¥" + _vm._s(_vm.total))])])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-006ea7a5", esExports)
  }
}

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "cartcount-area"
  }, [(_vm.copyCollectlist.length < 1) ? _c('div', {
    staticClass: "cartcount-area-nodata"
  }, [_c('p', [_vm._v("购物车空空如也～")]), _vm._v(" "), _c('div', {
    staticClass: "gocart__btn",
    attrs: {
      "eventid": '0'
    },
    on: {
      "click": _vm.goindex
    }
  }, [_vm._v("再去逛逛吧")])], 1) : _vm._e(), _vm._v(" "), (_vm.copyCollectlist.length >= 1) ? _c('div', {
    staticClass: "cartcount-area-datalist"
  }, [_c('div', {
    staticClass: "cartcount-area-datalist-items"
  }, _vm._l((_vm.copyCollectlist), function(item, index) {
    return _c('div', {
      key: index,
      staticClass: "cartcount-area-datalist-items__item"
    }, [_c('div', {
      staticClass: "item-img"
    }, [_c('image', {
      staticClass: "child_image",
      attrs: {
        "src": item.img
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "item-des"
    }, [_c('div', {
      staticClass: "item-name"
    }, [_vm._v(_vm._s(item.name) + " ")]), _vm._v(" "), _c('div', {
      staticClass: "item-price"
    }, [_vm._v("单价：¥" + _vm._s(item.price))]), _vm._v(" "), _c('div', {
      staticClass: "del-x",
      attrs: {
        "eventid": '1-' + index
      },
      on: {
        "click": function($event) {
          _vm.delItem(item.id)
        }
      }
    }, [_vm._v("删除")])]), _vm._v(" "), _c('span', {
      staticClass: "itemcount"
    }, [_c('count', {
      attrs: {
        "listdata": _vm.copyCollectlist,
        "initcount": item.count,
        "total": item.total,
        "price": item.price,
        "index": index,
        "eventid": '2-' + index,
        "mpcomid": '0-' + index
      },
      on: {
        "countevent": _vm.counteventFun
      }
    })], 1)])
  })), _vm._v(" "), _c('div', {
    staticClass: "total-area"
  }, [_vm._v("计的总价: "), _c('span', {
    staticClass: "totalprice"
  }, [_vm._v("¥" + _vm._s(_vm.countval))])])]) : _vm._e()])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-8ccbc2b0", esExports)
  }
}

/***/ })

},[60]);
//# sourceMappingURL=main.js.map