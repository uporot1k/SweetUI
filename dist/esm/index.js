import Plugin from './SBtn.js';
export { default as SBtn } from './SBtn.js';
import { a as registerComponentProgrammatic, u as use } from './registration-040b0c23.js';
import Plugin$1 from './SIcon.js';
export { default as SIcon } from './SIcon.js';
import Plugin$2 from './SSwitcher.js';
export { default as SSwitcher } from './SSwitcher.js';



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
