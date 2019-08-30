import Vue from 'vue'
import isCssColor from '../../util/isCssColor';

export default Vue.extend({
  name: 'colorable',
  props: {
    color: String,
  },
  data() {
    return {
      styleObj: {}
    }
  },
  methods: {
    setTextColor(color) {
      if(isCssColor(color)) {
        this.color = color;
      }  
    },
    // mounted() {
    //   this.styleObj.color = this.color
    //   console.log(color)
    //   debugger
    // }
  },
  watch: {
    color(newVal) {
      console.log(newVal)
      this.styleObj.color = newVal
      console.log(this.styleObj)
    }
  },
})