<template>
  <div class="media">
    <h2>Media</h2>
    <div>
      <!-- <h3>Radio</h3>
      <ol>
        <MediaItem v-for="item in radio" v-bind:key="item.id" v-bind:item="item" />
      </ol> -->
      <h3>Web</h3>
      <ol>
        <MediaItem v-for="item in web_personal" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>Web (Project)</h3>
      <ol>
        <MediaItem v-for="item in web" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>Web Radio</h3>
      <ol>
        <MediaItem v-for="item in webradio" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>TV</h3>
      <ol>
        <MediaItem v-for="item in tv_project" v-bind:key="item.id" v-bind:item="item" />
      </ol>
    </div>
  </div>
</template>

<script>
import MediaItem from '~/components/profile/MediaItem.vue'

const radio = [
  {
    "id": 3,
    "title" : "クラスタ",
    "url" : "https://twitter.com/cl842",
    "media_name" : "FM84.2MHz ラヂオつくば",
    "date" : "2018.11.07 20:00-21:00"
  },
  {
    "id": 2,
    "title" : "クラスタ",
    "url" : "https://twitter.com/cl842",
    "media_name" : "FM84.2MHz ラヂオつくば",
    "date" : "2018.10.03 20:00-21:00"
  },
  {
    "id": 1,
    "title" : "FUTURES 落合陽一 RADIO PIXIE DUST",
    "url" : "http://park.gsj.mobi/voice/show/6129",
    "media_name" : "JFN「FUTURES」",
    "date" : "2018.4.23 5:30～6:00"
  }
]

const webradio = [
  {
    "id": 3,
    "title" : "#41 プロコンと高専祭実行委員の内積はほぼ0",
    "url" : "https://www.kure-rad.io/app/radios/41",
    "media_name" : "ちょっときいて呉高専",
    "date" : "2018.10.08"
  },
  {
    "id": 2,
    "title" : "筑波大のミスター候補！？",
    "url" : "https://youtu.be/Y33JWxePPTo",
    "media_name" : "勝手に高専ラジオ",
    "date" : "2018.9.27"
  },
  {
    "id": 1,
    "title" : "ふたりがたり#7 vs 大峠 和基",
    "url" : "https://youtu.be/FX6AbaPJsWc",
    "media_name" : "ふたりがたり",
    "date" : "2018.2.27"
  }
]

const web_personal = [
  {
    "id": 4,
    "title" : "「その機能って本当に使うの？」落合陽一の弟子、高専出身の未踏エンジニアが見せるプロダクトへのこだわり。",
    "url" : "https://and-engineer.com/articles/Xsn9YxEAACUAEB8b",
    "media_name" : "アンドエンジニア",
    "date" : "2020.07.28"
  },
  {
    "id": 3,
    "title" : "初心者でもYouTube風「テロップ」を簡単に。世界一やさしい動画編集アプリ誕生秘話",
    "url" : "https://careerhack.en-japan.com/report/detail/1403",
    "media_name" : "キャリアハック",
    "date" : "2020.06.23"
  },
  {
    "id": 2,
    "title" : "落合陽一の筑波大「デジタルネイチャー研究室」に潜入！人もお金も集まるイノベーションの源泉とは？",
    "url" : "https://finders.me/articles.php?id=804",
    "media_name" : "FINDERS",
    "date" : "2019.03.22"
  },
  {
    "id": 1,
    "title" : "【特集】ミスター筑波2018 大峠和基さんインタビュー",
    "url" : "https://magazine.mast.tsukuba.ac.jp/archives/3828",
    "media_name" : "MAST Web",
    "date" : "2019.01.29"
  }
]

const tv_project = [
  {
    "id": 1,
    "title" : "エンタテ！区",
    "url" : "https://rkb.jp/e-sekai/",
    "media_name" : "RKB毎日放送",
    "date" : "2020.06.17"
  }
]

const web = [
  {
    "id": 12,
    "title" : "筑波大学とピクシーダストテクノロジーズ株式会社、どの位置から見ても鮮明な空中画像を提供できるガラスビーズを用いた空中映像投影手法を発表",
    "url" : "https://shiropen.com/seamless/glass-beads-display",
    "media_name" : "Seamless",
    "date" : "2019.07.25"
  },
  {
    "id": 11,
    "title" : "注目の網膜投影技術 落合陽一氏らが開発した実機を体験",
    "url" : "https://www.moguravr.com/dng-retinal-projector/",
    "media_name" : "Mogura VR",
    "date" : "2018.08.25"
  },
  {
    "id": 10,
    "title" : "【SIGGRAPH2018】先端技術コーナーを一挙レポ 日本からも多数出展",
    "url" : "https://www.moguravr.com/siggraph-2018-e-tech-report-ar-vr/",
    "media_name" : "Mogura VR",
    "date" : "2018.08.23"
  },
  {
    "id": 9,
    "title" : "筑波大学ら、網膜に画像を直接投影することで、現実空間と仮想オブジェクトの調和を実現する透過型ミラーデバイスを用いたレーザ投影システムを発表",
    "url" : "https://shiropen.com/seamless/make-your-own-retinal-projector",
    "media_name" : "Seamless",
    "date" : "2018.06.20"
  },
  {
    "id": 8,
    "title" : "SIGGRAPH 2018 Emerging Technologiesでのシースルー型HMD試作機のデモンストレーション展示に関するお知らせ",
    "url" : "http://pixiedusttech.com/010/",
    "media_name" : "Pixie Dust Tecnologies, Inc.",
    "date" : "2018.06.20"
  },
  {
    "id": 7,
    "title" : "徳山高専ら、浮遊する映像を表現できる霧を用いたフォグディスプレイに触れることができるインタラクション技術を論文にて発表",
    "url" : "http://shiropen.com/2017/12/29/30755",
    "media_name" : "Seamless",
    "date" : "2017.12.29"
  },
  {
    "id": 6,
    "title" : "落合陽一氏ら、AR向け技術を続々発表 キーワードは広視野・透過型",
    "url" : "http://www.moguravr.com/pixiedusttech-ar/",
    "media_name" : "Mogura VR",
    "date" : "2017.11.24"
  },
  {
    "id": 5,
    "title" : "ピクシーダストテクノロジーズとデジタルネイチャーグループ、透過型ミラーデバイスを用いたAR向け広視野シースルーHMD実現方式を論文にて発表。ボケの再現などを可能に",
    "url" : "http://shiropen.com/2017/11/22/29800",
    "media_name" : "Seamless",
    "date" : "2017.11.22"
  },
  {
    "id": 4,
    "title" : "AR向け広視野シースルーHMDを実現する新方式Light Field Blenderを開発",
    "url" : "http://pixiedusttech.com/004/",
    "media_name" : "Pixie Dust Technologies, Inc.",
    "date" : "2017.11.22"
  },
  {
    "id": 3,
    "title" : "落合陽一氏ら、広視野角・網膜投影のメガネ型HMD発表",
    "url" : "http://www.moguravr.com/glasses-hmd/",
    "media_name" : "Mogura VR",
    "date" : "2017.11.16"
  },
  {
    "id": 2,
    "title" : "筑波大デジタルネイチャーグループら、新しい空中映像表示技術「Air Mounted Eyepiece」発表",
    "url" : "http://panora.tokyo/43491/",
    "media_name" : "PANORA VR",
    "date" : "2017.10.30"
  },
  {
    "id": 1,
    "title" : "筑波大学（Digital Nature Group）、広視野角の光学シースルーHMDを実現するための新手法「AME」を論文にて発表。VRクオリティを空中で再現",
    "url" : "http://shiropen.com/2017/10/27/29009",
    "media_name" : "Seamless",
    "date" : "2017.10.27"
  }
]

export default {
  components: {
    MediaItem
  },
  data() {
    return {
      radio: radio,
      webradio: webradio,
      web_personal: web_personal,
      web: web,
      tv_project: tv_project
    }
  }
}
</script>
