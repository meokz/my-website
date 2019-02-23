<template>
  <div>
    <MyHeader/>

    <section class="container">
      <!-- 各ページのテンプレート挿入 -->
      <nuxt />
    </section>
  </div>
</template>

<style>

a:link    { color: #000000; }
a:visited { color: #000000; }
a:hover   { color: #ff0000; }
a:active  { color: #ff8000; }

.lang-button {
  padding: 10px 5px 0px 0px;
  float: right;
}

.work_caption {
  padding: 0px 50px;
  margin-bottom: 20px;
}

.work_caption h3 {
    font-size: 18px;
    font-weight: normal;
    color: #4A4A4A;
    margin: 0;
    padding: 10px 0 10px;
    border-bottom: solid 1px #E0E0E0;
}

.work_caption h3 span {
    margin-right: 10px;
}

.work_caption p {
    font-size: 16px;
    color: #4A4A4A;
    margin: 0;
    padding: 5px;
    margin-bottom: 5px;
}

</style>

<style scoped>

.container {
    background: #FFFFFF;
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