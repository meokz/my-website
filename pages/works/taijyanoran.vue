<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
        <p>Programming / UI Design / AR / 3D Modeling / Network</p>
        <h3><span class="glyphicon glyphicon-wrench"></span>使用ツール</h3>
        <p>Unity / C# / Blender etc.</p>
        <h3><span class="glyphicon glyphicon-bookmark"></span>その他</h3>
        <p>2014年 高専祭メイン企画</p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/taijyanoran/img/img1.jpg">
          <img class="work_img img-responsive" src="/works/taijyanoran/img/img1.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/taijyanoran/img/img2.jpg">
          <img class="work_img img-responsive" src="/works/taijyanoran/img/img2.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/taijyanoran/img/img3.jpg">
          <img class="work_img img-responsive" src="/works/taijyanoran/img/img3.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/taijyanoran/img/img4.jpg">
          <img class="work_img img-responsive" src="/works/taijyanoran/img/img4.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/taijyanoran/img/img5.jpg">
          <img class="work_img img-responsive" src="/works/taijyanoran/img/img5.jpg" >
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "大蛇の乱"

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
        description: '高専祭メイン部署は、機会電気工学科, 情報電子工学科, 土木建築工学科の3つの学科がそれぞれの技術を生かし、1つの作品を創り上げる企画を行っています.今年は「大蛇の乱」を企画.',
        type: 'article',
        url: 'https://kazukiotao.com/works/taijyanoran/',
        image: 'https://kazukiotao.com/works/taijyanoran/img/img1.jpg',
      },
      project: {
        "name": "taijyanoran",
        "title": title,
        "description_jp": "高専祭メイン部署は、機会電気工学科, 情報電子工学科, 土木建築工学科の3つの学科がそれぞれの技術を生かし、1つの作品を創り上げる企画を行っています. 今年は「大蛇の乱」を企画. 2mほどの5体のロボットを、5人のプレイヤーが協力してタブレット端末を用いて倒すゲームです. 機械科の学生がロボットの制御やLEDによる装飾を担当. 建築科の学生が本物の竹を用いた内装・デザインを担当. 情報科の学生がタブレット用のアプリケーションや全体統括のサーバの開発を担当しました. 自身は、タブレット用のアプリケーション開発及び3Dモデリングを担当. ゲーム画面内にロボットのステータスをＡＲ表示したり、サーバと通信する処理を開発しました。また、ゲーム内すべてのUI、2つの武器と6つのアイテムのプログラム+3Dモデルも実装しました。",
        "description_en": "No english description.",
        "youtube": "https://www.youtube.com/embed/pnNvyll-cF0"
      }
    }
  }
}
</script>
