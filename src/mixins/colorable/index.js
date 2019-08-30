import Vue from 'vue'
import isCssColor from '../../util/isCssColor';

export default Vue.extend({
  name: 'colorable',
  props: {
    color: String,
  },
  methods: {
    setTextColor(color) {
      if(isCssColor(color)) {
        this.color = color;
      }  
    }
  }
})