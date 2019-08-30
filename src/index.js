import './assets/stylus/main.styl'

import Vue from 'vue'
import GlobalRegistration from '~/util/GlobalRegistration'

Vue.config.productionTip = false

GlobalRegistration();  

const app = new Vue({
  el: '#app',
})