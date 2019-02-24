<template>
  <li>
    <a v-bind:href="item.url" target="_blank">{{ getString }}</a>
  </li>
</template>

<script>
export default {
  props: [
    'item'
  ],
  computed: {
    getString: function() {
      return this.item.title + ", " + this.item.url + ", " + this.item.media_name + ", " + this.item.date
    },
    getURL: function() {
      return "/works/" + this.item.url
    }
  }
}
</script>
