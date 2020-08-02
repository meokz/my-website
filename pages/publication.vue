<template>
  <div>
    <div class="row">
      <div class = "lang-button">
        <LanguageButton v-bind:flag="isEnglish" @on-toggle-change="onIsEnglishChange"/>
      </div>
    </div>

    <h2>Publication</h2>
    <div>
      <h3 v-show="!isEnglish">書籍</h3>
      <h3 v-show="isEnglish">Book</h3>
      <ol>
        <ListItem v-show="!isEnglish" v-for="item in books_jp" v-bind:key="item.id" v-bind:item="item" />
        <ListItem v-show="isEnglish" v-for="item in books_en" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3 v-show="!isEnglish">卒業論文</h3>
      <h3 v-show="isEnglish">Thesis</h3>
      <ol>
        <div v-show="!isEnglish">
          <ListItem v-bind:item="thesis_jp[0]" />
          <p>平成30年度 筑波大学情報学群情報メディア創成学類 卒業論文（指導教官・落合陽一）</p>
          <ListItem v-bind:item="thesis_jp[1]" />
          <p>平成28年度 徳山高専情報電子工学科 卒業論文（指導教官・古賀崇了）</p>
        </div>
        <div v-show="isEnglish">
          <ListItem v-bind:item="thesis_en[0]" />
          <p>Bachelor thesis in University of Tsukuba.（Advisor, Yoichi Ochiai）</p>
          <ListItem v-bind:item="thesis_en[1]" />
          <p>Foundation thesis in National Institute of Technology, Tokuyama College.（Advisor, Takanori Koga）</p>
        </div>
      </ol>
      <h3 v-show="!isEnglish">査読あり国際会議 - オーラル発表</h3>
      <h3 v-show="isEnglish">International Conference with Peer Review - Oral Presentation</h3>
      <ol>
        <ListItem v-for="item in international_papers" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3 v-show="!isEnglish">査読あり国際会議 - ポスター発表</h3>
      <h3 v-show="isEnglish">International Conference with Peer Review - Posters</h3>
      <ol>
        <ListItem v-for="item in posters" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3 v-show="!isEnglish">査読あり国際会議 - デモ発表</h3>
      <h3 v-show="isEnglish">International Conference with Peer Review - Demos</h3>
      <ol>
        <ListItem v-for="item in demos" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3 v-show="!isEnglish">国際会議 - 招待講演</h3>
      <h3 v-show="isEnglish">International Conference - Invited Talk</h3>
      <ol>
        <ListItem v-for="item in invited_talk" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3 v-show="!isEnglish">国内会議</h3>
      <h3 v-show="isEnglish">Domestic Conference (Japanese) </h3>
      <ol>
        <ListItem v-for="item in domestic" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>e-Print</h3>
      <ol>
        <ListItem v-for="item in e_print" v-bind:key="item.id" v-bind:item="item" />
      </ol>
    </div>
  </div>
</template>

<style>
.lang-button {
  padding: 10px 5px 0px 0px;
  float: right;
}

h2 {
    font-size: 18px;
    padding: 0px 10px 10px 10px;
    text-align: center;
    border-bottom: solid 1px #D2D2D2;
}

h3 { font-size: 18px; }

p {
    font-size: 14px;
}

li {
    font-size: 14px;
    margin-bottom: 10px;
}

ul { list-style:none; }
</style>

<script>
import Meta from '~/assets/Meta.js'
import LanguageButton from '~/components/LanguageButton.vue'
import ListItem from '~/components/publication/ListItem.vue'

const books_jp = [
  {
    "id": 1,
    "title" : "山本裕紹 監修. 空中ディスプレイの開発と応用展開. シーエムシー出版, 2018, 267p. (第Ⅲ編，第9章を分担執筆)",
    "url" : "https://www.cmcbooks.co.jp/products/detail.php?product_id=5450",
    "target" : "_blank"
	}
]

const books_en = [
  {
    "id": 1,
    "title" : "Recent Developments and Prospective Applications of Aerial Display. CMC Publishing Co.,Ltd., 2018, 267p. (Written contribution of Part III, Chapter 9 )",
    "url" : "https://www.cmcbooks.co.jp/products/detail.php?product_id=5450",
    "target" : "_blank"
	}
]

const thesis_jp = [
  {
    "id": 2,
    "title" : "Optical Design for See-Through Near-Eye Display using Dihedral Corner Reflector Array",
    "url" : "../works/airmountedeyepiece"
  },
  {
    "id": 1,
    "title" : "霧の形状変化に適応した映像投影を実現するインタラクティブフォグディスプレイの基礎的検討",
    "url" : "../works/mistflow"
  }
]

const thesis_en = [
  {
    "id": 2,
    "title" : "Optical Design for See-Through Near-Eye Display using Dihedral Corner Reflector Array",
    "url" : "../works/airmountedeyepiece"
  },
  {
    "id": 1,
    "title" : "Fundamental Study on Interactive Fog Display Realizing Adaptive Image Projection to Deforming Fog Screen",
    "url" : "../works/mistflow"
  },
]

const international_papers = [
  {
    "title" : "<u>Kazuki Otao</u>, Yuta Itoh, Kazuki Takazawa, Hiroyuki Osone, and Yoichi Ochiai. 2018. Air Mounted Eyepiece: Optical See-Through HMD Design with Aerial Optical Functions. In <em>Proceedings of the 9th Augmented Human International Conference</em> (AH ’18). ACM, New York, NY, USA, Article 1, 7 pages. DOI: https://doi.org/10.1145/3174910.3174911",
    "url" : "../works/airmountedeyepiece",
    "acceptance_rate" : "34.5 % (27 out of 60)",
    "meta": "http://siggraphasia.strikingly.com/technical-briefs"
  },
  {
    "title" : "<u>Kazuki Otao</u>, Yuta Itoh, Hiroyuki Osone, Kazuki Takazawa, Shunnosuke Kataoka, and Yoichi Ochiai. 2017. Light field blender: designing optics and rendering methods for see-through and aerial near-eye display. In <em>SIGGRAPH Asia 2017 Technical Briefs</em> (SA '17). ACM, New York, NY, USA, Article 9, 4 pages. DOI: https://doi.org/10.1145/3145749.3149425",
    "url" : "../works/lightfieldblender",
    "acceptance_rate": "45.0 % (20 out of 58)"
  }
]

const posters = [
   {
    "title": "Yui Atarashi, <u>Kazuki Otao</u>, Takahito Aoto, and Yoichi Ochiai. 2019. Fundus imaging using DCRA toward large eyebox. In <em>SIGGRAPH Asia 2019 Posters</em> (SA ’19). ACM, New York, NY, USA, Article 29, 2 pages. DOI: https://doi.org/10.1145/3355056.3364579",
    "url": "../works/fundus"
  },
  {
    "title": "Shinnosuke Ando, <u>Kazuki Otao</u>, Yoichi Ochiai. 2019. Glass-Beads Display: Evaluation for Aerial Graphics Rendered by Retro-Reflective Particles. In <em>HCI International 2019 Posters</em> (HCII 2019). Communications in Computer and Information Science, vol 1032. Springer, Cham",
    "url": "../works/glassbeads"
  },
  {
    "title" : "Yoichi Ochiai, <u>Kazuki Otao</u>, Yuta Itoh, Shouki Imai, Kazuki Takazawa, Hiroyuki Osone, Atsushi Mori, and Ippei Suzuki. 2018. Make your own Retinal Projector: Retinal Near-Eye Displays via Metamaterials. In <em>SIGGRAPH ’18 Posters</em> (SIGGRAPH ’18). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3230744.3230810",
    "url" : "../works/retinalprojector/"
  },
  {
    "title" : "<u>Kazuki Otao</u> and Takanori Koga. 2017. Mistflow: a fog display for visualization of adaptive shape-changing flow. In <em>SIGGRAPH Asia 2017 Posters</em> (SA '17). ACM, New York, NY, USA, Article 17, 2 pages. DOI: https://doi.org/10.1145/3145690.3145696",
    "url" : "../works/mistflow/"
  },
  {
    "title" : "Shinnosuke Ando, <u>Kazuki Otao</u>, Kazuki Takazawa, Yusuke Tanemura, and Yoichi Ochiai. 2017. Aerial image on retroreflective particles. In <em>SIGGRAPH Asia 2017 Posters</em> (SA '17). ACM, New York, NY, USA, Article 7, 2 pages. DOI: https://doi.org/10.1145/3145690.3145730",
    "url" : "../works/glassbeads"
  }
]

const demos = [
  {
    "title" : "Takahito Aoto, Yuta Itoh, <u>Kazuki Otao</u>, Kazuki Takazawa, and Yoichi Ochiai. 2018. A design for optical cloaking display. In <em>SIGGRAPH ’19 Emerging Technologies</em> (SIGGRAPH ’19). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3305367.3327979",
    "url" : "./works/cloaking"
  },
  {
    "title" : "Yoichi Ochiai, <u>Kazuki Otao</u>, Yuta Itoh, Shouki Imai, Kazuki Takazawa, Hiroyuki Osone, Atsushi Mori, and Ippei Suzuki. 2018. Make your own Retinal Projector: Retinal Near-Eye Displays via Metamaterials. In <em>SIGGRAPH ’18 Emerging Technologies</em> (SIGGRAPH ’18). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3214907.3214910",
    "url" : "../works/retinalprojector/"
  },
  {
    "title" : "<u>Kazuki Otao</u>, Yuta Itoh, Kazuki Takazawa, Hiroyuki Osone, and Yoichi Ochiai. 2018. Transmissive Mirror Device based Near-Eye Displays with Wide Field of View. In <em>SIGGRAPH ’18 Emerging Technologies</em> (SIGGRAPH ’18). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3214907.3214908",
    "url" : "../works/airmountedeyepiece"
  }
]

const invited_talk = [
  {
    "title": "Takanori Koga and <u>Kazuki Otao</u>. 2018. An Interactive Fog Display to Express Adaptive Shape-Changing Flow. In <em>the 25th International Display Workshops</em> (IDW '18).",
    "url": "../works/mistflow"
  }
]

const domestic = [
  {
    "title": "<u>大峠和基</u>, 大谷まゆ. 2020. バナー制作のための背景を考慮した自動テキスト配置. 人工知能学会全国大会論文集 第34回全国大会. 一般社団法人 人工知能学会.",
    "url": "https://www.jstage.jst.go.jp/article/pjsai/JSAI2020/0/JSAI2020_3Rin485/_article/-char/ja/"
  },
  {
    "title" : "<u>大峠和基</u>, 古賀崇了. 2017. 霧の形状変化に適応した映像投影を実現するインタラクティブフォグディスプレイの基礎的検討.インタラクション2017論文集. 情報処理学会, p.752-757.",
    "url" : "../works/mistflow/"
  }
]

const e_print = [
  {
    "title" : "Yoichi Ochiai, <u>Kazuki Otao</u>, Hiroyuki Osone. 2017. Air Mounted Eyepiece: Design Methods for Aerial Optical Functions of Near-Eye and See-Through Display using Transmissive Mirror Device. In <em>ArXiv e-prints</em>. https://arxiv.org/abs/1710.03889",
    "url" : "../works/airmountedeyepiece"
  }
]

export default {
  mixins: [Meta],
  layout: 'base',
  components: {
    LanguageButton,
    ListItem
  },
  data() {
    return {
      isEnglish: false,
      meta: {
        title: 'Publication',
        description: 'Publication | Kazuki Otao / 大峠和基',
        type: 'article',
        url: 'https://kazukiotao.com/publication',
        image: 'https://kazukiotao.com/publication/img/mistflow.jpg',
      },
      books_jp: books_jp,
      books_en: books_en,
      thesis_jp: thesis_jp,
      thesis_en: thesis_en,
      international_papers: international_papers,
      posters: posters,
      demos: demos,
      invited_talk: invited_talk,
      domestic: domestic,
      e_print: e_print
    }
  },
  methods: {
    onIsEnglishChange (flag) {
      this.isEnglish = flag
    }
  }
}

</script>

