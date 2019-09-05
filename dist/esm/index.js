import Plugin from './SBtn.js';
export { default as SBtn } from './SBtn.js';
import { a as registerComponentProgrammatic, u as use } from './registration-040b0c23.js';



var components = /*#__PURE__*/Object.freeze({
  SBtn: Plugin
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
