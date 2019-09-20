import SIcon from './SIcon.vue'
import { registerComponent, use } from '../../util/registration';

const Plugin = {
  install(Vue) {
    registerComponent(Vue, SIcon)
  }
}

use(Plugin)

export default Plugin;

export {
  SIcon
}