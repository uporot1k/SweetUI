import Vue from 'vue'

function mixin(args) {
  return Vue.extend({ mixins: args });
}

export default mixin;