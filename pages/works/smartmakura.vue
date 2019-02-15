<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
          <p>Android Programming / Presentatoin</p>
          <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
          <p><a href="http://dream-exp.net/works/smartmakura/" target="_blank">Smart枕 | dream-exp.net</a></p>
          <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
          <p><a href="./manual.pdf" target="_blank">Manual [PDF 4.1MB]</a></p>
          <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
          <p>eclipse / Java etc.</p>
          <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>
          <p><a href="http://web-ext.u-aizu.ac.jp/pc-concours/2014hon/final/f_finalteam.html" target="_blank">第12回全国高等学校パソコンコンクール, パソコン甲子園2014, モバイル部門, 本選出場</a></p>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL">
            <img class="work_img img-responsive" v-bind:src="getImageURL" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="getImageURL2">
            <img class="work_img img-responsive" v-bind:src="getImageURL2" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="getImageURL3">
            <img class="work_img img-responsive" v-bind:src="getImageURL3" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="getImageURL4">
            <img class="work_img img-responsive" v-bind:src="getImageURL4" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="getImageURL5">
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
  "name": "smartmakura",
  "title": "Smart枕",
  "description_jp": "Smart枕は、Android端末と枕型デバイスが連携する新しいライフハックプロダクトです。枕型デバイスに組み込まれた圧力センサとバイブレーションを用いてユーザを確実に起こすとともに、睡眠情報を記録し、最適な睡眠時間を教えてくれます。開発ではAndroidアプリケーション本体を担当. パソコン甲子園本選ではプレゼンテーションを担当しました.",
  "description_en": "No english description",
  "youtube": "https://www.youtube.com/embed/MoNLpyuXeA8"
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
      return require("~/assets/works/" + this.project.name + "/img/img4.jpg")
    },
    getImageURL3: function() {
      return require("~/assets/works/" + this.project.name + "/img/img2.jpg")
    },
    getImageURL4: function() {
      return require("~/assets/works/" + this.project.name + "/img/img3.jpg")
    },
    getImageURL5: function() {
      return require("~/assets/works/" + this.project.name + "/img/img5.png")
    }
  }
}
</script>