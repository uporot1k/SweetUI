import { _ as __vue_normalize__, r as registerComponent, u as use } from './registration-040b0c23.js';

//
var script = {
  props: {
    items: {
      type: Array || Object
    }
  },
  data: function data() {
    return {
      activeIndex: null
    };
  },
  methods: {
    switchControl: function switchControl(index) {
      console.log(index);

      if (this.activeIndex == null) {
        this.activeIndex = index;
        this.list[this.activeIndex].props.active = true;
        this.$forceUpdate();
        console.log(this.$children[index], this.list[this.activeIndex].props.active);
      }
    }
  },
  computed: {
    list: function list() {
      // TODO support for object
      var items = this.items;
      var test = items.map(function (item, index) {
        var box = {};
        box.props = {
          active: false,
          rounded: false
        };
        box.content = item;

        if (index !== 1) {
          box.props.rounded = true;
        }

        return box;
      });
      console.log(test);
      return test;
    }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"s-switcher"},_vm._l((_vm.list),function(item,index){return _c('s-btn',_vm._b({key:index,attrs:{"toggle":"toggle"},on:{"click":function($event){return _vm.switchControl(index)}}},'s-btn',item.props,false),[_vm._v(_vm._s(item.content))])}),1)};
var __vue_staticRenderFns__ = [];

  /* style */
  const __vue_inject_styles__ = undefined;
  /* scoped */
  const __vue_scope_id__ = undefined;
  /* module identifier */
  const __vue_module_identifier__ = undefined;
  /* functional template */
  const __vue_is_functional_template__ = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  var SSwitcher = __vue_normalize__(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Button);
  }
};
use(Plugin);

export default Plugin;
export { SSwitcher };
