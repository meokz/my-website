<template>
  <li>
    <a v-bind:href="item.url" v-bind:target="item.target" v-html="item.title"></a>
  </li>
</template>

<script>
export default {
  props: [
    'item'
  ]
}
</script>
