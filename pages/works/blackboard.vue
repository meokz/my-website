<template>
  <div>
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
        <a class="thumbnail" href="/works/blackboard/img/img1.jpg">
          <img class="work_img img-responsive" src="/works/blackboard/img/img1.jpg" >
        </a>
      </div>
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/blackboard/img/img2.jpg">
          <img class="work_img img-responsive" src="/works/blackboard/img/img2.jpg" >
        </a>
      </div>
    </div>
      
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "BlackBoard"

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
        description: 'Unityを使った映像作品。',
        type: 'article',
        url: 'https://meo-cs.net/works/blackboard/',
        image: 'https://meo-cs.net/works/blackboard/img/img1.jpg',
      },
      project: {
        "name": "blackboard",
        "title": title,
        "description_jp": "Unityを使った映像作品. Blenderによる3Dモデリング、Unityでのアニメーションプログラミング、AfterEffectsでの映像編集を担当しました。",
        "description_en": "No english description",
        "youtube": ""
      }
    }
  }
}
</script>