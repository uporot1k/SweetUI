import * as components from './components'

import { use, registerComponentProgrammatic } from './util/registration'

const SweetUI = {
  install(Vue) {
    for (let componentName in components) {
      Vue.use(components[componentName])
    }

    registerComponentProgrammatic(Vue, 'config')
  }
}

use(SweetUI)

export default SweetUI


export * from './components'
