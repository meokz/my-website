<template>
  <div class="profle">
    <h2>Profile</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-4">
        <Carousel/>
      </div>
      <div class="col-xs-12 col-sm-8">
        <div v-show="!isEnglish">
          <h3>大峠 和基 - おおたお かずき</h3>
          <p>{{ profile.jp }}</p>
          <p align="right"><a href="/profile/resume_2019.pdf" target="_blank">{{detail}} Resume [PDF 51KB] (English)</a></p>
        </div>
        <div v-show="isEnglish">
          <h3>大峠 和基 - Kazuki Otao</h3>
          <p>{{ profile.en }}</p>
          <p align="right"><a href="/profile/resume_2019.pdf" target="_blank">{{detail}} Resume [PDF 51KB]</a></p>
        </div>

      </div>
    </div>

  </div>
</template>

<script>
import Carousel from '~/components/profile/Carousel.vue'

const profile = {
  jp: "1996年広島生まれ．筑波大学大学院図書館情報メディア研究科所属．徳山高専で情報電子を学んだあと，筑波大学に編入．2017年（当時学部3年）からピクシーダストテクノロジーズ株式会社でフルタイムのリサーチエンジニアとして，網膜投影ディスプレイおよび網膜撮像カメラの画像処理技術の開発に従事．学業と仕事を両立しながら2019年筑波大学大学院に進学．2020年に独立して，高品質なテロップを自動で生成するサービス「telorain.com」をリリース．経済産業省所轄の情報処理推進機構より，2019年度未踏事業を通じてスーパクリエータ認定を受ける．",
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
