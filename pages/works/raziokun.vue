<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
          <p>Project Manegiment / Presentation / Programming</p>
          <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
          <p>C# / XNA / MMDX / Kinect SDK etc.</p>
          <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>
          <p><a href="http://www.procon.gr.jp/?page_id=59711" target="_blank">全国高等専門学校プログラミングコンテスト, 第24回旭川大会, 課題部門, 敢闘賞</a></p>
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
      </div>
      
    </section>
  </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const project = {
  "name": "raziokun",
  "title": "RAZIOくん―ラジオ体操支援システム―",
  "description_jp": "RAZIOくん―ラジオ体操練習支援システム―は、Kinectを用いてラジオ体操の採点を行うシステムです。画面には、Kinectから取得したRGB映像の上に3Dモデルによるお手本が表示されます。また、骨格情報よりラジオ体操のアドバイスをしてくれます.カラオケのように自分のラジオ体操を採点してくれる楽しさと、懐かしみのあるスタンプ機能でモチベーションを保ちつつ、ラジオ体操をしてくれることが狙いです. 開発では、システム設計と3D部分やGUI実装を担当しました. 本選ではプレゼンテーションを担当しました.",
  "description_en": "No english description",
  "youtube": ""
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
    }
  }
}
</script>