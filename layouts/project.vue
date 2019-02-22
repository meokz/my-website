<template>
  <div>
    <MyHeader/>

    <section class="container">
      <!-- 各ページのテンプレート挿入 -->
      <nuxt/>
    </section>
  </div>
</template>

<style>

a:link    { color: #000000; }
a:visited { color: #000000; }
a:hover   { color: #ff0000; }
a:active  { color: #ff8000; }

.container {
    background: #FFFFFF;
    padding: 0px 50px 50px 50px;
}

</style>

<script>
import MyHeader from '~/components/MyHeader.vue'

export default {
  components: {
    MyHeader,
  },
}
</script>