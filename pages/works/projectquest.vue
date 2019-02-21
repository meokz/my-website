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
          <a class="thumbnail" href="/works/projectquest/img/main.png">
            <img class="work_img img-responsive" src="/works/projectquest/img/main.png" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/projectquest/img/abstract.png">
            <img class="work_img img-responsive" src="/works/projectquest/img/abstract.png" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/projectquest/img/detail.png">
            <img class="work_img img-responsive" src="/works/projectquest/img/detail.png" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/projectquest/img/projectquest.png">
            <img class="work_img img-responsive" src="/works/projectquest/img/projectquest.png" >
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

const title = "ProjectQuest"

export default {
  mixins: [Meta],
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      meta: {
        title: title,
        description: 'ProjectQuestは，与えられたシステム開発のお題をマッチングしたエンジニア/デザイナと一緒に取り組むことで，様々な人と出会いつつ技術を高めることができるWebサービスです。',
        type: 'article',
        url: 'https://meo-cs.net/works/projectquest/',
        image: 'https://meo-cs.net/works/projectquest/img/projectquest.png',
      },
      project: {
        "name": "projectquest",
        "title": title,
        "description_jp": "ProjectQuestは，与えられたシステム開発のお題をマッチングしたエンジニア/デザイナと一緒に取り組むことで，様々な人と出会いつつ技術を高めることができるWebサービスです。",
        "description_en": "No english description.",
        "youtube": ""
      }
    }
  }
}
</script>