<template>
  <div class="project">
    <h2>Project</h2>
    <div>
      <ProjectDetail v-for="work in projects" v-bind:key="work" v-bind:work="work" v-bind:isEnglish="isEnglish"/>
    </div>
  </div>
</template>

<script>
import ProjectDetail from '~/components/profile/ProjectDetail.vue'

const projects = [
  {
    name: "mistflow",
    title: "MistFlow",
    jp: "手の姿勢検出を元に変化する霧の形状を推定し，投影される映像と実際の霧スクリーンの流れが自然に一致することを目指したフォグディスプレイを研究開発しました。",
    en: "This research presents a fog display for visualization of adaptive shape-changing flow.",
    tag: [
      "IDW 2018", "SIGGRAPH Asia 2017", "情報処理学会インタラクション2017"
    ]
  }, 
  {
    name: "mealie",
    title: "Mealie：学食食券オンライン予約システム",
    jp: "Mealieは教室に備え付けられたタブレット端末から食堂の食券を予約することができるサービスです。遠い食堂まで行く手間を省き，自分の食べたいメニューを確実に予約します。",
    en: "No english description.",
    tag: [
      "U-22プロコン 経済産業省商務情報政策局長賞"
    ]
  }, 
]

export default {
  components: {
    ProjectDetail
  },
  data() {
    return {
      projects: projects
    }
  },
  props: [
    'isEnglish'
  ]
}

</script>

