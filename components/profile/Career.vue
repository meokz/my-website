<template>
  <div class="carrer">
    <h2>Carrer</h2>
    <div v-show="!isEnglish">
      <h4>学歴</h4>
      <ul>
        <li v-for="item in carrer.academic_jp" v-bind:key="item">{{ item }}</li>
      </ul>
      <h4>職歴</h4>
      <ul>
        <li v-for="item in carrer.work_jp" v-bind:key="item">{{ item }}</li>
      </ul>
      <h4>インターン</h4>
      <ul>
        <li v-for="item in carrer.intern_jp" v-bind:key="item">{{ item }}</li>
      </ul>
    </div>

    <div v-show="isEnglish">
      <h4>Academic Background</h4>
      <ul>
        <li v-for="item in carrer.academic_en" v-bind:key="item">{{ item }}</li>
      </ul>
      <h4>Work Experience</h4>
      <ul>
        <li v-for="item in carrer.work_en" v-bind:key="item">{{ item }}</li>
      </ul>
      <h4>Intern</h4>
      <ul>
        <li v-for="item in carrer.intern_en" v-bind:key="item">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
ul {
  padding-left: 5%;
}
h4 {
  padding-left: 5%;
}
</style>

<script>
const carrer = {
  "academic_jp": [
    "2012/04 - 2017/03 　徳山工業高等専門学校 情報電子工学科 (古賀崇了研究室)",
    "2017/04 - 2019/03 　筑波大学 情報学群 情報メディア創成学類 (落合陽一研究室)",
    "2019/04 - present. 　筑波大学大学院 図書館情報メディア研究科 図書館情報メディア専攻 (佐藤哲司研究室)"
  ],
  "academic_en": [
    "2012/04 - 2017/03 　Department of Computer Science and Electronic Engineering, National Institute of Technology, Tokuyama College. (Takanori Koga, Soft Computing Lab.)",
    "2017/04 - 2019/03. 　College of Media Arts, Science and Technology, School of Informatics, University of Tsukuba (Yoichi Ochiai, Digital Nature Group.)",
    "2017/04 - present. 　Graduate School of Library, Information and Media Studies, University of Tsukuba"
  ],
  "work_jp": [
    "2017/09 - 2020/03 　ピクシーダストテクノロジーズ株式会社 リサーチエンジニア",
    "2020/04 - 2021/01 　株式会社ランドスケイプ 社外CTO",
    "2020/04 - present. 　Telorain株式会社 代表取締役"
  ],
  "work_en": [
    "2017/09 - 2020/03 　Pixie Dust Technologies, Inc. Research Enginner",
    "2020/04 - present. 　Telorain Inc. CEO & Founder"
  ],
  "intern_jp": [
    "2015/08 - 2015/09 　チームラボ株式会社 インタラクティブチーム",
    "2019/12 - 2020/01 　株式会社サイバーエージェント AILab",
  ],
  "intern_en": [
    "2015/08 - 2015/09 　teamLab Inc. Interactive Team",
    "2019/12 - 2020/01 　CyberAgent, Inc. AILab",
  ]
}

export default {
  data() {
    return {
      carrer: carrer
    }
  },
  props: [
    'isEnglish'
  ]
}
</script>
