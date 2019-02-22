<template>
  <div>
    <h2>Publication</h2>
    <div>
      <h3>Book - 書籍</h3>
      <ol>
        <ListItem v-for="item in books" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>Thesis - 卒業論文</h3>
      <ol>
        <ListItem v-for="item in thesis" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>International Conference Papers - 査読あり国際会議論文</h3>
      <ol>
        <ListItem v-for="item in international_papers" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>International Conference Posters - 査読あり国際会議ポスター発表</h3>
      <ol>
        <ListItem v-for="item in posters" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>International Conference Demos - 査読あり国際会議デモ発表</h3>
      <ol>
        <ListItem v-for="item in demos" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>International Conference Invited Talk - 国際会議招待講演</h3>
      <ol>
        <ListItem v-for="item in invited_talk" v-bind:key="item.id" v-bind:item="item" />
      </ol>
      <h3>Domestic Conference - 国内会議</h3>
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
import ListItem from '~/components/publication/ListItem.vue'

const books = [
  {
    "id": 1,
    "title" : "山本裕紹 監修. 空中ディスプレイの開発と応用展開 (Recent Developments and Prospective Applications of Aerial Display). シーエムシー出版, 2018, 267p. (第Ⅲ編，第9章を分担執筆)",
    "url" : "https://www.cmcbooks.co.jp/products/detail.php?product_id=5450",
    "target" : "_blank"
	}
]

const thesis = [
  {
    "id": 2,
    "title" : "Optical Design for See-Through Near-Eye Display using Dihedral Corner Reflector Array（Adviser Yoichi Ochiai）平成30年度 筑波大学情報メディア創成学類 卒業論文",
    "url" : "../works/airmountedeyepiece"
  },
  {
    "id": 1,
    "title" : "霧の形状変化に適応した映像投影を実現するインタラクティブフォグディスプレイの基礎的検討（指導教官・古賀崇了准教授）平成28年度 徳山高専情報電子工学科 卒業論文",
    "url" : "../works/mistflow"
  }
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
    ListItem
  },
  data() {
    return {
      meta: {
        title: 'Publication',
        description: 'Publication | Kazuki Otao / 大峠和基',
        type: 'article',
        url: 'https://meo-cs.net/publication',
        image: 'https://meo-cs.net/publication/img/mistflow.jpg',
      },
      books: books,
      thesis: thesis,
      international_papers: international_papers,
      posters: posters,
      demos: demos,
      invited_talk: invited_talk,
      domestic: domestic,
      e_print: e_print
    }
  }
}

</script>

