'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SBtn = require('./SBtn.js');
var registration = require('./registration-897b4dff.js');



var components = /*#__PURE__*/Object.freeze({
  SBtn: SBtn.default
});

var SweetUI = {
  install: function install(Vue) {
    for (var componentName in components) {
      Vue.use(components[componentName]);
    }

    registration.registerComponentProgrammatic(Vue, 'config');
  }
};
registration.use(SweetUI);

exports.SBtn = SBtn.default;
exports.default = SweetUI;
