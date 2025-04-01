require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],{

/***/ 122:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(123);



var app = new __WEBPACK_IMPORTED_MODULE_0_vue___default.a(__WEBPACK_IMPORTED_MODULE_1__index__["a" /* default */]);
app.$mount();

/***/ }),

/***/ 123:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13dfffdc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__(138);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(124)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-13dfffdc"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13dfffdc_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/pages/indexdetail/index.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13dfffdc", Component.options)
  } else {
    hotAPI.reload("data-v-13dfffdc", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 124:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 125:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_filterbar__ = __webpack_require__(126);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_shopGridList__ = __webpack_require__(134);
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

// import tipMsg from '../../utils/tip'


// Use Vuex
/* harmony default export */ __webpack_exports__["a"] = ({
  data: function data() {
    return {
      //   keyword: ''，
      barTitle: '春夏新品',
      list: [{ attrName: '品牌', name: '素洁' }, { attrName: '年份季节', name: '2018冬季' }],
      discoverlist: [{ tarname: '品牌', name: '素洁', url: '/pages/classify/main', code: '1', img: 'http://sujiefs.com/upload/images/20181107/201811071529292978067.jpg' }, { tarname: '品牌', name: '雅士', url: '/pages/classify/main', code: '2', img: 'http://sujiefs.com/upload/images/20180319/201803191401583397599.jpg' }],
      gridList: [{ thumLogo: 'http://sujiefs.com/upload/images/20180423/201804231129454571221_thumbnail.jpg', name: '新款韩版印花字母短款T恤衫 T18C076', price: '63', marketPrice: '119', saleCount: '6' }, { thumLogo: 'http://sujiefs.com/upload/images/20171005/201710051425394606742_thumbnail.jpg', name: '千鸟格裤子韩版百搭高腰开叉休闲裤P17D640-40', price: '65', marketPrice: '116', saleCount: '8' }]
    };
  },

  components: {
    'filterbar': __WEBPACK_IMPORTED_MODULE_0__components_filterbar__["a" /* default */],
    'shopGridList': __WEBPACK_IMPORTED_MODULE_1__components_shopGridList__["a" /* default */]
  },
  created: function created() {
    console.log('new page details');
  },

  methods: {},
  onLoad: function onLoad(params) {
    // onLoad 参数 params:默认返回url的参数
    console.log('details pages==', params);
    // 设置头部标题显示
    wx.setNavigationBarTitle({ title: this.barTitle });
    // tipMsg.errorMsg('加载失败')
  }
});

/***/ }),

/***/ 126:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_filterbar_vue__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13639f31_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_filterbar_vue__ = __webpack_require__(133);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(127)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-13639f31"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_filterbar_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_13639f31_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_filterbar_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/filterbar.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] filterbar.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-13639f31", Component.options)
  } else {
    hotAPI.reload("data-v-13639f31", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 127:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 128:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_filterSlider__ = __webpack_require__(129);
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
      currentType: '',
      swictchOverlay: false
    };
  },

  components: {
    filterSlider: __WEBPACK_IMPORTED_MODULE_0__components_filterSlider__["a" /* default */]
  },
  methods: {
    orderBy: function orderBy() {
      console.log('orderBy===');
    },
    filterSearch: function filterSearch() {
      this.swictchOverlay = true;
    },
    isShowSlider: function isShowSlider(e) {
      this.swictchOverlay = e;
    }
  }
  // props: ['list']
});

/***/ }),

/***/ 129:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_filterSlider_vue__ = __webpack_require__(131);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6dc1115a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_filterSlider_vue__ = __webpack_require__(132);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(130)
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
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_filterSlider_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_6dc1115a_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_filterSlider_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/filterSlider.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] filterSlider.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-6dc1115a", Component.options)
  } else {
    hotAPI.reload("data-v-6dc1115a", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 130:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 131:
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
    return {};
  },

  props: ['show'],
  methods: {
    close: function close() {
      // this.show = false
      this.swictchOverlay();
    },
    swictchOverlay: function swictchOverlay() {
      this.show = !this.show;
      this.$emit('show', this.show);
      // this.$apply()
    },
    SearchFilter: function SearchFilter() {
      this.swictchOverlay();
    },
    selSKU: function selSKU(e) {
      var sku = e.currentTarget.dataset.sku;
      this.$emit('filterSku', sku);
      this.swictchOverlay();
    }
  }
});

/***/ }),

/***/ 132:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.show) ? _c('div', [_c('div', {
    staticClass: "filter-slider"
  }, [_c('div', {
    staticClass: "block"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("尺码")]), _vm._v(" "), _c('div', {
    staticClass: "item_box"
  }, [_c('div', {
    staticClass: "item",
    attrs: {
      "data-sku": "XS",
      "eventid": '0'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.selSKU($event)
      }
    }
  }, [_vm._v("XS")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "data-sku": "S",
      "eventid": '1'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.selSKU($event)
      }
    }
  }, [_vm._v("S")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "data-sku": "M",
      "eventid": '2'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.selSKU($event)
      }
    }
  }, [_vm._v("M")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "data-sku": "L",
      "eventid": '3'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.selSKU($event)
      }
    }
  }, [_vm._v("L")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "data-sku": "XL",
      "eventid": '4'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.selSKU($event)
      }
    }
  }, [_vm._v("XL")]), _vm._v(" "), _c('div', {
    staticClass: "item",
    attrs: {
      "data-sku": "XXL",
      "eventid": '5'
    },
    on: {
      "click": function($event) {
        $event.stopPropagation();
        _vm.selSKU($event)
      }
    }
  }, [_vm._v("XXL")])])]), _vm._v(" "), _c('div', {
    staticClass: "btn_group"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "btn_right_box"
  }, [_c('div', {
    staticClass: "button type_yellow",
    attrs: {
      "eventid": '6'
    },
    on: {
      "click": _vm.SearchFilter
    }
  }, [_vm._v("确认")])])])]), _vm._v(" "), _c('div', {
    staticClass: "modal-overlay modal-overlay-visible",
    attrs: {
      "eventid": '7'
    },
    on: {
      "click": function($event) {
        _vm.close()
      }
    }
  })]) : _vm._e()
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "btn_left_box"
  }, [_c('div', {
    staticClass: "button type_empity"
  }, [_vm._v("重置")])])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-6dc1115a", esExports)
  }
}

/***/ }),

/***/ 133:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "bar"
  }, [_c('div', {
    staticClass: "filter"
  }, [_c('div', {
    class: [_vm.currentType == 'zonghe' ? 'nav_active' : 'nav', _vm.nav],
    attrs: {
      "data-current": "zonghe",
      "eventid": '0'
    },
    on: {
      "click": _vm.orderBy
    }
  }, [_vm._v("综合")]), _vm._v(" "), _c('div', {
    class: [_vm.nav, _vm.currentType == 'sale' ? 'nav_active' : 'nav'],
    attrs: {
      "data-current": "sale",
      "eventid": '1'
    },
    on: {
      "click": _vm.orderBy
    }
  }, [_vm._v("销量")]), _vm._v(" "), _c('div', {
    staticClass: "grid nav"
  }, [_c('div', {
    class: [_vm.price, _vm.currentType == 'price' ? 'nav_active price' : 'nav price'],
    attrs: {
      "data-current": "price",
      "eventid": '2'
    },
    on: {
      "click": _vm.orderBy
    }
  }, [_vm._v("价格")]), _vm._v(" "), _c('div', [_c('div', {
    class: [_vm.arrow_up, _vm.arrowType == 'desc' ? 'arrow_up_red arrow_up' : 'arrow_up arrow_up_gray nav']
  }), _vm._v(" "), _c('div', {
    class: [_vm.arrow_down, _vm.arrowType == 'asc' ? 'arrow_down arrow_down_red' : 'arrow_down arrow_down_gray nav']
  })])]), _vm._v(" "), _c('div', {
    staticClass: "nav",
    attrs: {
      "eventid": '3'
    },
    on: {
      "click": _vm.filterSearch
    }
  }, [_c('span', {
    staticClass: "sx"
  }, [_vm._v("筛选")]), _c('i', {
    staticClass: "iconfont icon-filter"
  })], 1)]), _vm._v(" "), _c('filterSlider', {
    attrs: {
      "show": _vm.swictchOverlay,
      "eventid": '4',
      "mpcomid": '0'
    },
    on: {
      "show": _vm.isShowSlider
    }
  })], 1)
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13639f31", esExports)
  }
}

/***/ }),

/***/ 134:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_shopGridList_vue__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bedce318_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_shopGridList_vue__ = __webpack_require__(137);
var disposed = false
function injectStyle (ssrContext) {
  if (disposed) return
  __webpack_require__(135)
}
var normalizeComponent = __webpack_require__(0)
/* script */

/* template */

/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = "data-v-bedce318"
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_mpvue_loader_lib_selector_type_script_index_0_shopGridList_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_mpvue_loader_lib_template_compiler_index_id_data_v_bedce318_hasScoped_true_transformToRequire_video_src_source_src_img_src_image_xlink_href_node_modules_mpvue_loader_lib_selector_type_template_index_0_shopGridList_vue__["a" /* default */],
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "src/components/shopGridList.vue"
if (Component.esModule && Object.keys(Component.esModule).some(function (key) {return key !== "default" && key.substr(0, 2) !== "__"})) {console.error("named exports are not supported in *.vue files.")}
if (Component.options.functional) {console.error("[vue-loader] shopGridList.vue: functional components are not supported with templates, they should use render functions.")}

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-bedce318", Component.options)
  } else {
    hotAPI.reload("data-v-bedce318", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ 135:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 136:
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

/* harmony default export */ __webpack_exports__["a"] = ({
  // props: ['list']
  props: {
    list: []
  }
});

/***/ }),

/***/ 137:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('scroll-view', {
    staticClass: "swiper-item-box",
    attrs: {
      "scroll-y": "true"
    }
  }, [_c('div', {
    staticClass: "shop_item"
  }, _vm._l((_vm.list), function(item, index) {
    return _c('navigator', {
      key: item,
      staticClass: "list",
      attrs: {
        "url": ""
      }
    }, [_c('div', {
      staticClass: "image_box"
    }, [_c('image', {
      attrs: {
        "src": item.thumLogo
      }
    })]), _vm._v(" "), _c('div', {
      staticClass: "goods"
    }, [_c('div', {
      staticClass: "product_name"
    }, [_vm._v(_vm._s(item.name))]), _vm._v(" "), _c('div', {
      staticClass: "product_info"
    }, [_c('div', {
      staticClass: "cost_price"
    }, [_vm._v("￥" + _vm._s(item.marketPrice))]), _vm._v(" "), _c('div', {
      staticClass: "price"
    }, [_vm._v("￥" + _vm._s(item.price))]), _vm._v(" "), _c('div', {
      staticClass: "sale_num"
    }, [_vm._v("销量" + _vm._s(item.saleCount) + "件")])])])])
  }))])
}
var staticRenderFns = []
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-bedce318", esExports)
  }
}

/***/ }),

/***/ 138:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "detail-area"
  }, [_c('div', {
    staticClass: "item"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "info"
  }, [_c('div', {
    staticClass: "title"
  }, [_vm._v("春夏新品")]), _vm._v(" "), _vm._l((_vm.list), function(item, index) {
    return _c('div', {
      key: item
    }, [_c('div', {
      staticClass: "doc"
    }, [_c('i', {
      staticClass: "lx"
    }, [_vm._v("◆")]), _vm._v(" " + _vm._s(item.attrName) + ": " + _vm._s(item.name))], 1)])
  })], 2)]), _vm._v(" "), _c('div', {
    staticClass: "filterbar"
  }, [_c('filterbar', {
    attrs: {
      "mpcomid": '0'
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "shop_list"
  }, [_c('shopGridList', {
    attrs: {
      "list": _vm.gridList,
      "eventid": '0',
      "mpcomid": '1'
    },
    on: {
      "update:list": function($event) {
        _vm.gridList = $event
      }
    }
  })], 1)])
}
var staticRenderFns = [function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "img_box"
  }, [_c('image', {
    staticClass: "discover_img",
    attrs: {
      "src": "http://sujiefs.com/upload/images/20180308/201803081427506631167.jpg"
    }
  })])
}]
render._withStripped = true
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);
if (false) {
  module.hot.accept()
  if (module.hot.data) {
     require("vue-hot-reload-api").rerender("data-v-13dfffdc", esExports)
  }
}

/***/ })

},[122]);
//# sourceMappingURL=main.js.map