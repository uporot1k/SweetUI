<template lang="pug">
  component(
    :is="tag"
    :class="classes"
  )
    .s-btn__content
      .s-btn__text
        slot
      .s-btn__icon.icon(
        :class="[iconPosition === 'left' ? 'icon--left' : 'icon--right']"
        v-if="icon != undefined"
      )  
        s-icon(
          :icon="icon"
        )  
</template>
<script>
  import './SBtn.styl'

  export default {
    name: 'SBtn',
    props: {
      tag: {
        type: String,
        default: 'button'
      },
      size: {
        type: [String, Object],
        default: 'big'
      },
      type: String,
      icon: String,
      iconFill: String, 
      iconPosition: String
    },
    data() {
      return {
        fill: "",
        
      }
    },
    computed: {
      classes() {
        return {
          's-btn': true,
          's-control': true,
          's-btn--small': this.size === 'small',
          's-btn--big': this.size === 'big',
          's-btn--disabled': this.$attrs.disabled ? true : false,
          's-btn--outlined': this.$attrs.outlined === true,
          's-btn--rounted': this.$attrs.rounted === true,
          [`is-${this.type}`]: this.type != undefined ? true : false,

        }
      },
    },

    created() {
      console.log(this.$attrs)
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