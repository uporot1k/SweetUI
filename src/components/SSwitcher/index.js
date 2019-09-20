import SSwitcher from './SSwitcher.vue'
import { registerComponent, use } from '../../util/registration';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, SSwitcher)
  }
}

use(Plugin)

export default Plugin;

export {
  SSwitcher
}