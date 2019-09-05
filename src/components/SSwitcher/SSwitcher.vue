<template lang="pug">
  .s-switcher
    //- pre {{list}}
    s-btn(
      v-for="(item, index) in list"
      :key="index"
      v-bind="item.props"
      toggle
      @click="switchControl(index)"
    )
      | {{item.content}}

</template>
<script>
  import { switchOptions } from '../../mixins/switchable/index'
  export default {
    props: {
      items: {
        type: Array || Object,
      }
    },
    data() {
      return {
        activeIndex: null,
      }
    },
    methods: {
      switchControl(index) {
        console.log(index)
        if (this.activeIndex == null) {
          this.activeIndex = index;
          this.list[this.activeIndex].props.active = true;
          this.$forceUpdate()
          console.log(this.$children[index], this.list[this.activeIndex].props.active ) 
        }


      }
    },
    computed: {
      list() {
        // TODO support for object
        let items = this.items

        let test = items.map((item, index) => {
          let box = {};
          box.props = {
            active: false,
            rounded: false,
          }

          box.content = item;
          
          if (index !== 1) {
            box.props.rounded = true
          }
          return box
        })
        console.log(test)
        return test
      }
    }
  }
</script>