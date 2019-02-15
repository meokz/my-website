<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-link"></span>Webサイト</h3>
          <p></p>
          <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
          <p>HTML / CSS コーディング</p>
          <h3><span class="glyphicon glyphicon-bookmark"></span>成績</h3>
          <p>レバレジーズ株式会社 湯けむりハッカソン HACKERS BATTLE (2017) 優勝</p>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL">
            <img class="work_img img-responsive" v-bind:src="getImageURL" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL2">
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
      </div>
      
    </section>
  </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const project = {
  "name": "projectquest",
  "title": "ProjectQuest",
  "description_jp": "ProjectQuestは，与えられたシステム開発のお題をマッチングしたエンジニア/デザイナと一緒に取り組むことで，様々な人と出会いつつ技術を高めることができるWebサービスです。",
  "description_en": "No english description.",
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
      return require("~/assets/works/" + this.project.name + "/img/main.png")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/abstract.png")
    },
    getImageURL3: function() {
      return require("~/assets/works/" + this.project.name + "/img/detail.png")
    },
    getImageURL4: function() {
      return require("~/assets/works/" + this.project.name + "/img/projectquest.png")
    }
  }
}
</script>