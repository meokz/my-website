<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
          <p>Director / Scripting / Motion Graphcis / Physical Simulation / 3D Modeling</p>
          <h3><span class="glyphicon glyphicon-wrench"></span>使用ツール</h3>
          <p>Unity / C# / Blender / AfterEffects etc.</p>
          <h3><span class="glyphicon glyphicon-bookmark"></span>その他</h3>
          <p>中国高専コンピュータフェスティバル2016 メディア部門1位</p>
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
      </div>
      
    </section>
  </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const project = {
  "name": "blackboard",
  "title": "BlackBoard",
  "description_jp": "Unityを使った映像作品. Blenderによる3Dモデリング、Unityでのアニメーションプログラミング、AfterEffectsでの映像編集を担当しました。",
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