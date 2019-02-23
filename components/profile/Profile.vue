<template>
  <div class="profle">
    <h2>Profile</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-4">
        <Carousel/>
      </div>
      <div class="col-xs-12 col-sm-8">
        <h3>大峠 和基 - Kazuki Otao</h3>
        <p v-show="!isEnglish">{{ profile.jp }}</p>
        <p v-show="isEnglish">{{ profile.en }}</p>
        <p v-show="!isEnglish" align="right"><a href="/profile/Resume2017.pdf" target="_blank">{{detail}} 履歴書 (English)</a></p>
        <p v-show="isEnglish" align="right"><a href="/profile/Resume2017.pdf" target="_blank">{{detail}} Resume</a></p>
      </div>
    </div>

  </div>
</template>

<script>
import Carousel from '~/components/profile/Carousel.vue'

const profile = {
  jp: "1996年生まれ。2012年から徳山高専で情報電子工学を学んだ後，2017年に筑波大学情報メディア創成学類に編入。ミスター筑波大学2018 (ミスターキャンパス賞/企業賞)，U.22プログラミング・コンテスト (経済産業省商務情報政策局長賞/企業賞)，全国高専プログラミングコンテスト (敢闘賞2回)など多岐に渡る分野で活動。2017年より落合陽一率いるデジタルネイチャー研究室に所属し，バーチャルリアリティを専門に研究を行う。書籍1本，国際会議論文6本，国内会議論文1本。中国地方コンピュータフェスティバルではソフトウェア部門・メディア部門で3年連続最優秀賞を含む4回の受賞。企業ハッカソンではチームラボ (最優秀賞)，サイバーエージェント (特別賞)，レバレジーズ (最優秀賞)に出場。",
  en: "Kazuki Otao was born in 1996. After studying computer science and electronic engineering at National Institute of Technology, Tokuyama College since 2012, he is incorporated into the College of Media Arts, Science and Technology at the University of Tsukuba in 2017. He got a prize in many contests including U-22 programming contest and national college of technology programming contest. He is an expert researcher of the aerial imaging system in Digital Nature Group."
}

export default {
  components: {
    Carousel
  },
  data() {
    return {
      profile: profile,
      detail: ">>>",
    }
  },
  props: [
    'isEnglish'
  ]
}

</script>