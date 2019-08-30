<template>
  <component :is="tag? tag : 'button'" :class='classes' @click="$emit('click')" :style="styleObj">
    <div class="s-btn__text">
      <slot/>
    </div>
    <div class="s-btn__icon" v-if="icon != ''">
      <s-icon :iconFill="fill" icon="search"></s-icon>
    </div>
    
  </component>
</template>
<script>
  import mixins from '../../util/mixins';
  import Colorable from '../../mixins/colorable/index'


  const baseMix = mixins(
    Colorable
  )

  export default {
    name: 'SBtn',
    props: {
      color: String,
      size: String || Object,
      icon: String,
      iconFill: String, 
      tag: String,
      iconPosition: String
    },
    data() {
      return {
        fill: "",
        styleObj: {
          color: this.color
        }
      }
    },
    computed: {
      classes() {
        return {
          's-btn': true,
          's-control': true,
          's-control--small': this.size == 'small' ? true : false,
          's-control--big': !this.size ? true : false,
          's-control--disabled': this.$attrs.disabled == ''? true : false,
        }
      },
    },
    watch: {
      color(n) {
        console.log(n)
      }
    },
    created() {
      if(this.iconFill === undefined) {
        console.log(1)
        this.fill = this.color;
        console.log(this.fill)
      } else {
        this.fill = this.iconFill
      }
    }
  }
</script>
<style lang="stylus">
@import '../../assets/stylus/main.styl'
.s-btn
  display flex
  align-items center
  justify-content center
  min-width 144px
  background-color $color-cornflower
  border-radius 6px
  padding 0 8px
  user-select none
  font-size 16px
  &__text
    padding: 0 8px
  &:focus
    outline none
</style>