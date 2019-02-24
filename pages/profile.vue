<template>
  <div>
  </div>
</template>

<script>
export default {
  head () {
    return {
      titleTemplate: null,
      title: '大峠和基 / Kazuki Otao',
    }
  },
  layout: 'base',
  beforeCreate() {
    this.$router.push('/')
  }
}
</script>