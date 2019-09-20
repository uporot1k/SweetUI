import * as components from './components'

// import config, { setOptions } from './util/config'
// import { use, registerComponentProgrammatic } from './util/plugins'

// // Импорт vue компонента
// import component from './my-component.vue';

// Объявление функции установки, выполняемой Vue.use()
export function install(Vue) {
  for (let componentKey in components) {
    if (install.installed) return;
    install.installed = true;
    Vue.component(componentKey, components[componentKey]);
  }
}

// Создание значения модуля для Vue.use()
const plugin = {
  install
};

// Автоматическая установка, когда vue найден (например в браузере с помощью тега <script>)
let GlobalVue = null;
if (typeof window !== 'undefined') {
  GlobalVue = window.Vue;
} else if (typeof global !== 'undefined') {
  GlobalVue = global.Vue;
}
if (GlobalVue) {
  GlobalVue.use(plugin);
}

// Экспорт компонента, для использования в качестве модуля (npm/webpack/etc.)
// export default component;

export * from './components'


// const SweetUI = {
//     install(Vue, options = {}) {
//         // Options
//         setOptions(Object.assign(config, options))
//         // Components
//         for (let componentKey in components) {
//             Vue.use(components[componentKey])
//         }
//         // Config component
//         const SweetUIProgrammatic = {
//             setOptions(options) {
//                 setOptions(Object.assign(config, options))
//             }
//         }
//         registerComponentProgrammatic(Vue, 'config', SweetUIProgrammatic)
//     }
// }

// use(SweetUI)

// export default SweetUI

// export all components as vue plugin

