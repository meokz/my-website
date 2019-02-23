<template>
  <div class="frame">
    <div class="video">
      <iframe v-bind:src="url" v-bind:frameborder="frameborder" allowfullscreen></iframe>
    </div>
  </div>
</template>

<style scoped>

.frame {
  padding-top: 0px
}

.video {
    position: relative;
    height: 0;
    padding: 30px 0 56.25%;
    overflow: hidden;
}

.video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>

<script>
export default {
  props: [
    'url',
    'frameborder'
  ]
}
</script>