/*! SweetUI v1.0.0 | MIT License | github.com/uporot1k/SweetUI */
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = global || self, factory(global.SBtn = {}));
}(this, function (exports) { 'use strict';

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
    

    
    var SBtn = normalizeComponent_1(
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

  var Plugin = {
    install: function install(Vue) {
      registerComponent(Vue, Button);
    }
  };
  use(Plugin);

  exports.SBtn = SBtn;
  exports.default = Plugin;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
