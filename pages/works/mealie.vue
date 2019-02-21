<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
          <p>Presentation</p>
          <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
          <p><a href="http://dream-exp.net/works/mealie/" target="_blank">Mealie | dream-exp.net</a></p>
          <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
          <p>Presentation (to appear)</p>
          <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>
          <p><a href="http://www.u22procon.com/report/index.html" target="_blank">U-22プログラミング・コンテスト2016 経済産業省商務情報政策局長賞</a></p>
          <p><a href="http://www.u22procon.com/report/index.html" target="_blank">U-22プログラミング・コンテスト2016 OBC賞</a></p>
        </div>
      </div>

      <div class="row">
        <iframe src="//www.slideshare.net/slideshow/embed_code/key/LiJOSxVTVIS2rZ" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"><strong><a href="//www.slideshare.net/ShunnosukeKataoka/u222016mealie-84964898" title="U-22プログラミングコンテスト2016「Mealie」発表スライド" target="_blank">U-22プログラミングコンテスト2016「Mealie」発表スライド</a></strong> from <strong><a href="https://www.slideshare.net/ShunnosukeKataoka" target="_blank">Shunnosuke Kataoka</a></strong></div>
      </div>
      
      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/mealie/img/img1.png">
            <img class="work_img img-responsive" src="/works/mealie/img/img1.png" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/mealie/img/img2.png">
            <img class="work_img img-responsive" src="/works/mealie/img/img2.png" >
          </a>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'


const project = {
 
}

export default {
  mixins: [Meta],
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      meta: {
        title: "Mealie",
        description: 'Mealieは教室に備え付けられたタブレット端末から食堂の食券を予約することができるサービスです。',
        type: 'article',
        url: 'https://meo-cs.net/works/mealie/',
        image: 'https://meo-cs.net/works/mealie/img/img1.png',
      },
      project: {
        "name": "mealie",
        "title": "学食食券オンライン予約システム 「Mealie - ミライ -」",
        "description_jp": "Mealieは教室に備え付けられたタブレット端末から食堂の食券を予約することができるサービスです。U-22プログラミングコンテストの最終審査会でプレゼンテーションを担当しました。",
        "description_en": "No english description",
        "youtube": "https://www.youtube.com/embed/MiFkeutR3ZU"
      }
    }
  },
  computed: {
    getImageURL: function() {
      return require("~/assets/works/" + this.project.name + "/img/img1.png")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/img2.png")
    }
  }
}
</script>