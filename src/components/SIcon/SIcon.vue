<template>
  <span class="icon">
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 16 16"
      >
    <path :fill="color" :d="path" />
  </svg>
  </span>
  
</template>
<script>

import Icons from './Icons';

export default {
  name: 'SIcon',
  props: {
    icon: String,
    iconFill: String
  },
  computed: {
    path() {
      return Icons[this.icon]
    },
    color() {
      return this.iconFill;
    }
  },
  mounted() {
    const el = this.$el;
    let path = el.querySelector('path');
    console.log(this)
    path.setAttribute('fill', this.iconFill)
    
  }
}
</script>
<style lang="stylus">
  .icon
    display flex
    align-items center
    justify-content center
</style>