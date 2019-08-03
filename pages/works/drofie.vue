<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
        <p>Android Programming</p>
        <h3><span class="glyphicon glyphicon-wrench"></span>使用ツール</h3>
        <p>Android Studio etc.</p>
        <h3><span class="glyphicon glyphicon-link"></span>外部リンク</h3>
        <p><a href="http://perfectstarperfect.style/post/150665140897/drofie" target="_blank">ぺんぎんらぼ - drofie</a></p>
        <h3><span class="glyphicon glyphicon-bookmark"></span>その他</h3>
        <p>サイバーエージェントKyotoHack 特別賞</p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/drofie/img/img1.png">
          <img class="work_img img-responsive" src="/works/drofie/img/img1.png" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/drofie/img/img2.jpg">
          <img class="work_img img-responsive" src="/works/drofie/img/img2.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/drofie/img/img3.png">
          <img class="work_img img-responsive" src="/works/drofie/img/img3.png" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/drofie/img/img4.png">
          <img class="work_img img-responsive" src="/works/drofie/img/img1.png" >
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'


const title = 'Drofie'

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
        description: 'drofieは観光地などに設置されたドローンで特別な自撮りを撮影し、旅の思い出を作ることのできるサービスです。',
        type: 'article',
        url: 'https://kazukiotao.com/works/drofie/',
        image: 'https://kazukiotao.com/works/drofie/img/img1.png',
      },
      project: {
        "name": "drofie",
        "title": title,
        "description_jp": "drofieは観光地などに設置されたドローンで特別な自撮りを撮影し、旅の思い出を作ることのできるサービスです。Androidアプリを立ち上げると地図上に撮影スポットが表示されます。撮影スポットでドローンの種類（空撮、水中など）を選ぶと、ドローンからの映像がスマホの画面にリアルタイムで表示されます。あとは、ポーズを決めてシャッターを切ると、迫力のある自撮りを撮ることができます。Androidアプリのプログラミングを担当しました。",
        "description_en": "No english description.",
        "youtube": ""
      }
    }
  }
}
</script>
