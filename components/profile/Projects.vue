<template>
  <div class="project">
    <h2 v-show="!isEnglish">Project</h2>
    <h2 v-show="isEnglish">Project (Selected) </h2>
    <div>
      <ProjectDetail v-for="work in projects" v-bind:key="work.name" v-bind:work="work" v-bind:isEnglish="isEnglish"/>
    </div>
    <p  v-show="!isEnglish" align="right"><a href="/works">{{detail}} 全てのプロジェクト一覧</a></p>
    <p  v-show="isEnglish" align="right"><a href="/works">{{detail}} All Project</a></p>
  </div>
</template>

<script>
import ProjectDetail from '~/components/profile/ProjectDetail.vue'

const projects = [
  {
    name: "telorain",
    title_jp: "telorain: SNS向けテロップ自動生成アプリ",
    title_en: "telorain: Automatic caption generation for videos",
    description_jp: "誰でも簡単にテロップを作ることができるiOSアプリを開発しました．開発したアプリでは，動画を選択するだけでテロップが自動で生成され，必要に応じてユーザが編集を加えることができます．",
    description_en: "We developed an iOS app with an automatic caption generation algorithm for entertainment movies.",
    tag: [
      "2020年度未踏アドバンスト事業採択", "2019年度未踏事業スーパクリエータ認定", "2019年度未踏事業採択",
    ]
  },
  {
    name: "mistflow",
    title_jp: "MistFlow",
    title_en: "MistFlow: A Fog Display for Visualization of Adaptive Shape-Changing Flow",
    description_jp: "空中浮遊ディスプレイを開発しました。手の姿勢検出を元に変化する霧の形状をコンピュータシミュレーションにより推定し，実際の霧スクリーンの流れが自然に一致するような投影映像をレンダリングします。",
    description_en: "We propose an interactive fog display to express the adaptive shape-changing flow of a fog screen caused by interactions with the viewer. We present the design specifications of the proposed system, evaluation results of a user study, and some application contents to use the proposed system effectively.",
    tag: [
      "IDW 2018", "SIGGRAPH Asia 2017", "情報処理学会インタラクション2017"
    ]
  },
  {
    name: "reink",
    title_jp: "Re:ink：干渉可能なプロジェクションマッピング",
    title_en: "\"Re:ink\": Digital Interactive Painting for Architectural Model with Projection Mapping System",
    description_jp: "Re:inkは真っ白になった工場を学園祭の来場者の手によって蘇らせるインスタレーションです。Unityを用いて映像を生成・同期することで，再生するたびに異なるストーリーが展開します。",
    description_en: "We digitally painted the texture on a white architectural model with multiple projectors. Video sources are rendered in real time on Unity, allowing viewers to interact with drawn texture.",
    tag: []
  },
  {
    name: "smartmakura",
    title_jp: "Smart枕",
    title_en: "Smart Makura: Pillow Type Device for Sensing and Intervening User's Sleep",
    description_jp: "Smart枕はAndroid端末と枕型デバイスが連携する新しいライフハックプロダクトです。枕型デバイスに組み込まれた圧力センサとバイブレーションを用いてユーザを確実に起こすとともに，睡眠情報を記録し，最適な睡眠時間を教えてくれます。",
    description_en: "We developed a pillow device consisting of sensors and vibrators. The pillow is connected with the Android application to records sleep and wakes up users.",
    tag: [
      "パソコン甲子園2014"
    ]
  }
]

export default {
  components: {
    ProjectDetail
  },
  data() {
    return {
      projects: projects,
      detail: ">>>",
    }
  },
  props: [
    'isEnglish'
  ]
}

</script>

