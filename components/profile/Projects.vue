<template>
  <div class="project">
    <h2>Project</h2>
    <div>
      <ProjectDetail v-for="work in projects" v-bind:key="work.name" v-bind:work="work" v-bind:isEnglish="isEnglish"/>
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
  {
    name: "reink",
    title: "Re:ink：干渉可能なプロジェクションマッピング",
    jp: "Re:inkは真っ白になった工場を学園祭の来場者の手によって蘇らせるインスタレーションです。Unityを用いて映像を生成・同期することで，再生するたびに異なるストーリーが展開します。",
    en: "No english description.",
    tag: []
  },
  {
    name: "smartmakura",
    title: "Smart枕",
    jp: "Smart枕はAndroid端末と枕型デバイスが連携する新しいライフハックプロダクトです。枕型デバイスに組み込まれた圧力センサとバイブレーションを用いてユーザを確実に起こすとともに，睡眠情報を記録し，最適な睡眠時間を教えてくれます。",
    en: "No english description.",
    tag: [
      "パソコン甲子園2014"
    ]
  }, 
  {
    name: "spacewars",
    title: "SpaceWars",
    jp: "自ユニットを弾き飛ばして敵ユニットに攻撃します。ユニットはHPが0になるか，ステージから落とされると消滅します。いろいろな戦略を楽しむだけでなく，グラフィクスエフェクトと物理演算による爽快なプレイを楽しむことができます。",
    en: "No english description.",
    tag: [
      "コンフェス2015 ソフトウェア部門1位"
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

