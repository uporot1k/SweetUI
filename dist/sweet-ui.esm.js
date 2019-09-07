/*! SweetUI v1.0.0-rc.1 | MIT License | github.com/uporot1k/SweetUI */
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

function normalizeComponent(template, style, script, scopeId, isFunctionalTemplate, moduleIdentifier
/* server only */
, shadowMode, createInjector, createInjectorSSR, createInjectorShadow) {
  if (typeof shadowMode !== 'boolean') {
    createInjectorSSR = createInjector;
    createInjector = shadowMode;
    shadowMode = false;
  } // Vue.extend constructor export interop.


  var options = typeof script === 'function' ? script.options : script; // render functions

  if (template && template.render) {
    options.render = template.render;
    options.staticRenderFns = template.staticRenderFns;
    options._compiled = true; // functional template

    if (isFunctionalTemplate) {
      options.functional = true;
    }
  } // scopedId


  if (scopeId) {
    options._scopeId = scopeId;
  }

  var hook;

  if (moduleIdentifier) {
    // server build
    hook = function hook(context) {
      // 2.3 injection
      context = context || // cached call
      this.$vnode && this.$vnode.ssrContext || // stateful
      this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext; // functional
      // 2.2 with runInNewContext: true

      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__;
      } // inject component styles


      if (style) {
        style.call(this, createInjectorSSR(context));
      } // register component module identifier for async chunk inference


      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier);
      }
    }; // used by ssr in case component is cached and beforeCreate
    // never gets called


    options._ssrRegister = hook;
  } else if (style) {
    hook = shadowMode ? function () {
      style.call(this, createInjectorShadow(this.$root.$options.shadowRoot));
    } : function (context) {
      style.call(this, createInjector(context));
    };
  }

  if (hook) {
    if (options.functional) {
      // register for functional component in vue file
      var originalRender = options.render;

      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context);
        return originalRender(h, context);
      };
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate;
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook];
    }
  }

  return script;
}

var normalizeComponent_1 = normalizeComponent;

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
  

  
  normalizeComponent_1(
    { render: __vue_render__, staticRenderFns: __vue_staticRenderFns__ },
    __vue_inject_styles__,
    __vue_script__,
    __vue_scope_id__,
    __vue_is_functional_template__,
    __vue_module_identifier__,
    undefined,
    undefined
  );

var use = function use(plugin) {
  if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(plugin);
  }
};
var registerComponent = function registerComponent(Vue, component) {
  Vue.component(component.name, component);
};
var registerComponentProgrammatic = function registerComponentProgrammatic(Vue, property, component) {
  if (!Vue.prototype.$sweet) Vue.prototype.$sweet = {};
  Vue.prototype.$sweet[property] = component;
};

var Plugin = {
  install: function install(Vue) {
    registerComponent(Vue, Button);
  }
};
use(Plugin);

var icons = {
  "search": "M2 6.5a4.5 4.5 0 1 1 9 0 4.5 4.5 0 0 1-9 0zm8.278 5.29l4.096 3.931a.952.952 0 1 0 1.347-1.347l-4.071-3.907a6.5 6.5 0 1 0-1.372 1.323z",
  "debit-6": "M4.062 16.626c-.165-.5.038-.921.656-1.145l3.249-1.155-.134 1.028c-.077.589-.103 1.107-.089 1.573-.25.078-1.095.339-1.945.552-.871.218-1.538-.25-1.737-.853zm1.745 1.916c-.461.167-.612.48-.489.854.147.449.645.798 1.294.635.606-.151 1.408-.396 1.701-.487-.203-.505-.378-1.035-.479-1.659l-2.027.657zm.193-10.542h2.643l.128-1h-2.771v1zm16-6v9c0 1.104-.896 2-2 2h-1.989l.015.02c-.031.43-.105.906-.222 1.457-.451 2.144-1.637 5.122-.83 8.418-2.312.356-3.651.523-5.992 1.105-.273-4.062-2.266-4.943-1.804-8.47.542-4.137.844-6.461 1.196-9.255.11-.879.731-1.307 1.337-1.307.631 0 1.246.464 1.252 1.366.021 3.303.108 6.593.324 7.393.146.54 1.087.638 1.087-.512l-.002-2.216h5.128c.276 0 .5-.224.5-.5v-4.499h-5.568c-.157-1.461-1.27-2.531-2.721-2.531h-.001c-1.44 0-2.578 1.038-2.806 2.531h-4.904v4.5c0 .276.224.5.5.5h3.757l-.261 2h-3.996c-1.104 0-2-.896-2-2v-9c0-1.104.896-2 2-2h16c1.104 0 2 .896 2 2zm-2 .5c0-.276-.224-.5-.5-.5h-15c-.276 0-.5.224-.5.5v.5h16v-.5zm-14 7.5h2.386l.129-1h-2.515v1zm12-3h-3v1h3v-1z",
  "shipping-box-11": "M17.677 16.879l-.343.195v-1.717l.343-.195v1.717zm2.823-3.324l-.342.195v1.717l.342-.196v-1.716zm3.5-7.602v11.507l-9.75 5.54-10.25-4.989v-11.507l9.767-5.504 10.233 4.953zm-11.846-1.757l7.022 3.2 1.7-.917-7.113-3.193-1.609.91zm.846 7.703l-7-3.24v8.19l7 3.148v-8.098zm3.021-2.809l-6.818-3.24-2.045 1.168 6.859 3.161 2.004-1.089zm5.979-.943l-2 1.078v2.786l-3 1.688v-2.856l-2 1.078v8.362l7-3.985v-8.151zm-4.907 7.348l-.349.199v1.713l.349-.195v-1.717zm1.405-.8l-.344.196v1.717l.344-.196v-1.717zm.574-.327l-.343.195v1.717l.343-.195v-1.717zm.584-.332l-.35.199v1.717l.35-.199v-1.717zm-16.656-4.036h-2v1h2v-1zm0 2h-3v1h3v-1zm0 2h-2v1h2v-1z",
  "shipping-box-2": "M15.744 16.683l.349-.199v1.717l-.349.195v-1.713zm3.414-.227l.342-.196v-1.717l-.343.195v1.718zm-1.429.813l.343-.195v-1.717l-.343.195v1.717zm.578-.329l.349-.199v-1.717l-.349.199v1.717zm-1.152.656l.343-.196v-1.717l-.343.196v1.717zm-.821.467l.343-.195v-1.717l-.343.195v1.717zm6.666-11.122v11.507l-9.75 5.552-12.25-6.978v-11.507l9.767-5.515 12.233 6.941zm-12.236-4.643l-2.106 1.19 8.891 5.234-.002.003 2.33-1.256-9.113-5.171zm1.236 10.59l-9-5.218v8.19l9 5.126v-8.098zm3.493-3.056l-8.847-5.208-2.488 1.405 8.86 5.138 2.475-1.335zm5.507-.696l-7 3.773v8.362l7-3.985v-8.15z",
  "shipping-box-3": "M16.677 17.868l-.343.195v-1.717l.343-.195v1.717zm2.823-3.325l-.342.195v1.717l.342-.195v-1.717zm3.5-7.602v11.507l-9.75 5.552-12.25-6.978v-11.507l9.767-5.515 12.233 6.941zm-13.846-3.733l9.022 5.178 1.7-.917-9.113-5.17-1.609.909zm2.846 9.68l-9-5.218v8.19l9 5.126v-8.098zm3.021-2.809l-8.819-5.217-2.044 1.167 8.86 5.138 2.003-1.088zm5.979-.943l-2 1.078v2.786l-3 1.688v-2.856l-2 1.078v8.362l7-3.985v-8.151zm-4.907 7.348l-.349.199v1.713l.349-.195v-1.717zm1.405-.8l-.344.196v1.717l.344-.196v-1.717zm.574-.327l-.343.195v1.717l.343-.195v-1.717zm.584-.333l-.35.199v1.717l.35-.199v-1.717z",
  "shop-1": "M9.939 0l-.939 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l2.996-4.971h1.943zm-3.052 0l-2.887 4.971v1.098c0 1.066-.933 1.931-2 1.931s-2-.865-2-1.932v-1.097l4.874-4.971h2.013zm17.113 6.068c0 1.067-.933 1.932-2 1.932s-2-.933-2-2v-1.098l-2.887-4.902h2.014l4.873 4.971v1.097zm-10-1.168v1.098c0 1.066-.933 2.002-2 2.002s-2-.933-2-2v-1.098l1.047-4.902h1.905l1.048 4.9zm2.004-4.9l2.993 5.002v1.098c.001 1.067-.93 1.9-1.997 1.9s-2-.933-2-2v-1.098l-.939-4.902h1.943zm-15.004 10v14h10v-2h-8v-10h18v12h2v-14h-22zm18 4h-6v10h6v-10z",
  "shopping-bag-7": "M6 23.73l-3-2.122v-14.2l3 1.359v14.963zm2-14.855v15.125l13-1.954v-15.046l-13 1.875zm5.963-7.875c-2.097 0-3.958 2.005-3.962 4.266l-.001 1.683c0 .305.273.54.575.494.244-.037.425-.247.425-.494v-1.681c.003-1.71 1.416-3.268 2.963-3.268.537 0 1.016.195 1.384.564.422.423.654 1.035.653 1.727v1.747c0 .305.273.54.575.494.243-.037.423-.246.423-.492l.002-1.749c.002-1.904-1.32-3.291-3.037-3.291zm-6.39 5.995c.245-.037.427-.247.427-.495v-2.232c.002-1.71 1.416-3.268 2.963-3.268l.162.015c.366-.283.765-.513 1.188-.683-.405-.207-.858-.332-1.35-.332-2.096 0-3.958 2.005-3.962 4.266v2.235c0 .306.272.538.572.494z",
  "shopping-cart-2": "M24 3l-.743 2h-1.929l-3.474 12h-13.239l-4.615-11h16.812l-.564 2h-13.24l2.937 7h10.428l3.432-12h4.195zm-15.5 15c-.828 0-1.5.672-1.5 1.5 0 .829.672 1.5 1.5 1.5s1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm6.9-7-1.9 7c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5z",
  "shopping-cart-3": "M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z",
  "shopping-cart-5": "M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm-10.563-5l-2.937-7h16.812l-1.977 7h-11.898zm11.233-5h-11.162l1.259 3h9.056l.847-3zm5.635-5l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"
};

//
var script$1 = {
  name: 'SIcon',
  props: {
    icon: String,
    iconFill: String
  },
  computed: {
    path: function path() {
      return icons[this.icon];
    },
    color: function color() {
      return this.iconFill;
    }
  },
  mounted: function mounted() {
    var el = this.$el;
    var path = el.querySelector('path');
    console.log(this);
    path.setAttribute('fill', this.iconFill);
  }
};

/* script */
const __vue_script__$1 = script$1;

/* template */
var __vue_render__$1 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('span',{staticClass:"icon"},[_c('svg',{attrs:{"xmlns":"http://www.w3.org/2000/svg","width":"16","height":"16","viewBox":"0 0 16 16"}},[_c('path',{attrs:{"fill":_vm.color,"d":_vm.path}})])])};
var __vue_staticRenderFns__$1 = [];

  /* style */
  const __vue_inject_styles__$1 = undefined;
  /* scoped */
  const __vue_scope_id__$1 = undefined;
  /* module identifier */
  const __vue_module_identifier__$1 = undefined;
  /* functional template */
  const __vue_is_functional_template__$1 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  normalizeComponent_1(
    { render: __vue_render__$1, staticRenderFns: __vue_staticRenderFns__$1 },
    __vue_inject_styles__$1,
    __vue_script__$1,
    __vue_scope_id__$1,
    __vue_is_functional_template__$1,
    __vue_module_identifier__$1,
    undefined,
    undefined
  );

var Plugin$1 = {
  install: function install(Vue) {
    registerComponent(Vue, Button);
  }
};
use(Plugin$1);

//
var script$2 = {
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
const __vue_script__$2 = script$2;

/* template */
var __vue_render__$2 = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"s-switcher"},_vm._l((_vm.list),function(item,index){return _c('s-btn',_vm._b({key:index,attrs:{"toggle":"toggle"},on:{"click":function($event){return _vm.switchControl(index)}}},'s-btn',item.props,false),[_vm._v(_vm._s(item.content))])}),1)};
var __vue_staticRenderFns__$2 = [];

  /* style */
  const __vue_inject_styles__$2 = undefined;
  /* scoped */
  const __vue_scope_id__$2 = undefined;
  /* module identifier */
  const __vue_module_identifier__$2 = undefined;
  /* functional template */
  const __vue_is_functional_template__$2 = false;
  /* style inject */
  
  /* style inject SSR */
  

  
  normalizeComponent_1(
    { render: __vue_render__$2, staticRenderFns: __vue_staticRenderFns__$2 },
    __vue_inject_styles__$2,
    __vue_script__$2,
    __vue_scope_id__$2,
    __vue_is_functional_template__$2,
    __vue_module_identifier__$2,
    undefined,
    undefined
  );

var Plugin$2 = {
  install: function install(Vue) {
    registerComponent(Vue, Button);
  }
};
use(Plugin$2);



var components = /*#__PURE__*/Object.freeze({
  SBtn: Plugin,
  SIcon: Plugin$1,
  SSwitcher: Plugin$2
});

var SweetUI = {
  install: function install(Vue) {
    for (var componentName in components) {
      Vue.use(components[componentName]);
    }

    registerComponentProgrammatic(Vue, 'config');
  }
};
use(SweetUI);

export default SweetUI;
export { Plugin as SBtn, Plugin$1 as SIcon, Plugin$2 as SSwitcher };
