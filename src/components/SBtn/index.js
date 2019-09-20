import SBtn from './SBtn.vue'
import { registerComponent, use } from '../../util/registration';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, SBtn)
  }
}

use(Plugin)

export default Plugin;

export {
  SBtn
}