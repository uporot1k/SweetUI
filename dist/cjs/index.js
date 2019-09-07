'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var SBtn = require('./SBtn.js');
var registration = require('./registration-897b4dff.js');
var SIcon = require('./SIcon.js');
var SSwitcher = require('./SSwitcher.js');



var components = /*#__PURE__*/Object.freeze({
  SBtn: SBtn.default,
  SIcon: SIcon.default,
  SSwitcher: SSwitcher.default
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
exports.SIcon = SIcon.default;
exports.SSwitcher = SSwitcher.default;
exports.default = SweetUI;
