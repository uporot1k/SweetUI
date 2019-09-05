'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var registration = require('./registration-897b4dff.js');

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

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
var script = {
  name: 'SBtn',
  props: {
    tag: {
      type: String,
      default: 'button'
    },
    size: {
      type: [String, Object],
      default: 'big'
    },
    active: {
      type: Boolean,
      default: false
    },
    type: String,
    icon: String,
    iconFill: String,
    iconPosition: String
  },
  data: function data() {
    return {
      activeState: this.active
    };
  },
  computed: {
    classes: function classes() {
      return _defineProperty({
        's-btn': true,
        's-control': true,
        's-btn--small': this.size === 'small',
        's-btn--big': this.size === 'big',
        's-btn--disabled': this.$attrs.disabled ? true : false,
        's-btn--outlined': this.$attrs.outlined === true,
        's-btn--rounded': this.$attrs.rounded === true,
        's-btn--active': this.activeState
      }, "is-".concat(this.type), this.type != undefined ? true : false);
    }
  },
  methods: {// toggleBtn() {
    //   console.log(this)
    //   if (this.$attrs.disabledToggle != true) {
    //     this.activeState = !this.activeState;
    //     this.$emit('toggle', this.activeState);
    //   }
    // }
  },
  mounted: function mounted() {// console.log(this)
    // const self = this;
    // let element = this.$el;
    // if(this.$attrs.hasOwnProperty('toggle')) {
    //   element.addEventListener('click', this.toggleBtn);
    // }
  }
};

/* script */
const __vue_script__ = script;

/* template */
var __vue_render__ = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c(_vm.tag,{tag:"component",class:_vm.classes,on:{"click":function($event){return _vm.$emit('click')}}},[_c('div',{staticClass:"s-btn__content"},[_c('div',{staticClass:"s-btn__text"},[_vm._t("default")],2),(_vm.icon != undefined)?_c('div',{staticClass:"s-btn__icon icon",class:[_vm.iconPosition === 'left' ? 'icon--left' : 'icon--right']},[_c('s-icon',{attrs:{"icon":_vm.icon}})],1):_vm._e()])])};
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
  

  
  var SBtn = registration.__vue_normalize__(
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
    registration.registerComponent(Vue, Button);
  }
};
registration.use(Plugin);

exports.SBtn = SBtn;
exports.default = Plugin;
