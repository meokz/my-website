<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
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
          <a class="thumbnail" v-bind:href="getImageURL">
            <img class="work_img img-responsive" v-bind:src="getImageURL" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageUR2L">
            <img class="work_img img-responsive" v-bind:src="getImageURL2" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL3">
            <img class="work_img img-responsive" v-bind:src="getImageURL3" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL4">
            <img class="work_img img-responsive" v-bind:src="getImageURL4" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL5">
            <img class="work_img img-responsive" v-bind:src="getImageURL5" >
          </a>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const project = {
  "name": "taijyanoran",
  "title": "大蛇の乱",
  "description_jp": "高専祭メイン部署は、機会電気工学科, 情報電子工学科, 土木建築工学科の3つの学科がそれぞれの技術を生かし、1つの作品を創り上げる企画を行っています. 今年は「大蛇の乱」を企画. 2mほどの5体のロボットを、5人のプレイヤーが協力してタブレット端末を用いて倒すゲームです. 機械科の学生がロボットの制御やLEDによる装飾を担当. 建築科の学生が本物の竹を用いた内装・デザインを担当. 情報科の学生がタブレット用のアプリケーションや全体統括のサーバの開発を担当しました. 自身は、タブレット用のアプリケーション開発及び3Dモデリングを担当. ゲーム画面内にロボットのステータスをＡＲ表示したり、サーバと通信する処理を開発しました。また、ゲーム内すべてのUI、2つの武器と6つのアイテムのプログラム+3Dモデルも実装しました。",
  "description_en": "No english description.",
  "youtube": "https://www.youtube.com/embed/pnNvyll-cF0"
}

export default {
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      project: project
    }
  },
  computed: {
    getImageURL: function() {
      return require("~/assets/works/" + this.project.name + "/img/img1.jpg")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/img2.jpg")
    },
    getImageURL3: function() {
      return require("~/assets/works/" + this.project.name + "/img/img3.jpg")
    },
    getImageURL4: function() {
      return require("~/assets/works/" + this.project.name + "/img/img4.jpg")
    },
    getImageURL5: function() {
      return require("~/assets/works/" + this.project.name + "/img/img5.jpg")
    }
  }
}
</script>