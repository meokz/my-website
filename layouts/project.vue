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

.work_caption {
    margin-bottom: 50px;
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