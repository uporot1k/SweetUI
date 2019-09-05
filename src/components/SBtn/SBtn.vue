<template lang="pug">
  component(
    :is="tag"
    :class="classes"
    @click="$emit('click')"
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
      active: {
        type: Boolean,
        default: false,
      },
      type: String,
      icon: String,
      iconFill: String, 
      iconPosition: String
    },
    data() {
      return {
        activeState: this.active,
        
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
          's-btn--rounded': this.$attrs.rounded === true,
          's-btn--active': this.activeState,
          [`is-${this.type}`]: this.type != undefined ? true : false,

        }
      },
    },
    methods: {
      // toggleBtn() {
      //   console.log(this)
      //   if (this.$attrs.disabledToggle != true) {
      //     this.activeState = !this.activeState;
      //     this.$emit('toggle', this.activeState);
      //   }
      // }
    },
    mounted() {
      // console.log(this)
      // const self = this;
      // let element = this.$el;

      // if(this.$attrs.hasOwnProperty('toggle')) {

      //   element.addEventListener('click', this.toggleBtn);
      // }
    }
  }
</script>