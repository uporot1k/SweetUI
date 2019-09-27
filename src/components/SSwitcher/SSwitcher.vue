<template lang="pug">
  .s-switcher
    //- pre {{list}}
    s-switcher-control(
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
    },
    computed: {
      list() {
        
      }
    }
  }
</script>