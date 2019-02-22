<template>
  <div>

    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-link"></span>外部リンク</h3>
        <p><a href="https://kosen.team-lab.com/" target="_blank">チームラボオンラインハッカソン</a> (2015)</p>
        <h3><span class="glyphicon glyphicon-bookmark"></span>その他</h3>
        <p>チームラボオンラインハッカソン (2015) 優秀賞</p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/arusen/img/img1.png">
          <img class="work_img img-responsive" src="/works/arusen/img/img1.png" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/arusen/img/img2.jpg">
          <img class="work_img img-responsive" src="/works/arusen/img/img2.jpg" >
        </a>
      </div>
    </div>
      
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = 'あるせん'

export default {
  mixins: [Meta],
  layout: 'project',
  components: {
    WorkPage
  },
  data() {
    return {
      meta: {
        title: title,
        description: '高専でありがちな川柳をGoogle Chromeの上から投稿・閲覧・いいねできるChrome拡張機能です。',
        type: 'article',
        url: 'https://meo-cs.net/works/arusen/',
        image: 'https://meo-cs.net/works/arusen/img/img_top.jpg',
      },
      project: {
        "name": "arusen",
        "title": title,
        "description_jp": "高専でありがちな川柳をGoogle Chromeの上から投稿・閲覧・いいねできるChrome拡張機能です。",
        "description_en": "No english description",
        "youtube": ""
      }
    }
  }
}
</script>