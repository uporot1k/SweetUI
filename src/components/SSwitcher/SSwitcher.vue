<template lang="pug">
  .switcher
    s-btn(
      v-for="(item, index) in list"
      :key="index"
      v-bind="item.props"
    )
      | {{item.content}}
</template>
<script>
  export default {
    props: {
      items: {
        type: String || Object,
      }
    },
    computed: {
      list() {
        // TODO support for object
        let items = this.items

        let test = items.map((item, index) => {
          let box = {};
          box.props = {};
          box.content = item;
          if (index == 2) {
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