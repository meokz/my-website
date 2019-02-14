<template>
  <div id="app">
    <MyHeader/>
    
    <section class="container">
      <button v-on:click="toggle">Japansese / English</button>

      <div id="profile">
        <h2>Profile</h2>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <Carousel/>
          </div>

          <div class="col-xs-12 col-sm-8">
            <h3>大峠 和基 - Kazuki Otao</h3>
            <p v-show="!isEnglish">{{ profile.jp }}</p>
            <p v-show="isEnglish">{{ profile.en }}</p>
            <p align="right"><a href="./profile/portfolio/Resume2017.pdf" target="_blank">{{detail}} Resume (English)</a></p>
          </div>
        </div>
      </div> <!-- end <div id="profile"> -->

      <div id="project">
        <h2>Project</h2>
        <Work v-for="work in works" v-bind:key="work" v-bind:work="work" v-bind:isEnglish="isEnglish"/>
      </div> <!-- end <div id="project"> -->

      <div id="carrer">
        <h2>Career</h2>
        <Career v-bind:isEnglish="isEnglish"/>
      </div>

      <div id="link">
        <h2>Link</h2>
        <Link />
      </div>
    </section>
  </div> <!-- end <div id="app"> -->
</template>

<style>
a:link    { color: #000000; }
a:visited { color: #000000; }
a:hover   { color: #ff0000; }
a:active  { color: #ff8000; }

.container {
    background: #FFFFFF;
}

h2 {
    font-size: 18px;
    padding: 0px 10px 10px 10px;
    text-align: center;
    border-bottom: solid 1px #D2D2D2;
}

h3 { font-size: 16px; }

h4 { font-size: 14px; }

p {
    font-size: 12px;
}

li {
    font-size: 12px;
    margin: 5px;
}

ul { list-style:none; }

</style>

<script>
import MyHeader from '~/components/MyHeader.vue'
import Carousel from '~/components/profile/Carousel.vue'
import Work from '~/components/profile/Work.vue'
import Career from '~/components/profile/Career.vue'
import Link from '~/components/profile/Link.vue'

const profile = {
  jp: "1996年生まれ。2012年から徳山高専で情報電子工学を学んだ後，2017年に筑波大学情報メディア創成学類に編入。ミスター筑波大学2018 (ミスターキャンパス賞/企業賞)，U.22プログラミング・コンテスト (経済産業省商務情報政策局長賞/企業賞)，全国高専プログラミングコンテスト (敢闘賞2回)など多岐に渡る分野で活動。2017年より落合陽一率いるデジタルネイチャー研究室に所属し，バーチャルリアリティを専門に研究を行う。書籍1本，国際会議論文6本，国内会議論文1本。中国地方コンピュータフェスティバルではソフトウェア部門・メディア部門で3年連続最優秀賞を含む4回の受賞。企業ハッカソンではチームラボ (最優秀賞)，サイバーエージェント (特別賞)，レバレジーズ (最優秀賞)に出場。",
  en: "Kazuki Otao was born in 1996. After studying computer science and electronic engineering at National Institute of Technology, Tokuyama College since 2012, he is incorporated into the College of Media Arts, Science and Technology at the University of Tsukuba in 2017. He got a prize in many contests including U-22 programming contest and national college of technology programming contest. He is an expert researcher of the aerial imaging system in Digital Nature Group."
}

const works = [
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
    MyHeader,
    Carousel,
    Work,
    Career,
    Link
  },
  data() {
    return {
      isEnglish: false,
      detail: ">>>",
      profile: profile,
      works: works
    }
  },
  methods: {
    toggle: function() {
      this.isEnglish = !this.isEnglish
    }
  }
}
</script>

<style>

</style>

