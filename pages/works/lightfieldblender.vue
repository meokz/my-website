<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

        <div class="row">
          <div class="work_caption">
            <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
            <p><a href="http://digitalnature.slis.tsukuba.ac.jp/2017/09/metamate-glass/" target="_blank">Light Field Blender - Digital Nature Group</a></p>
            <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
            <p><a href="./docs/2017-sa-lfb.pdf" target="_blank">SIGGRAPH Asia 2017 Technical Briefs Preprint [PDF 3.3MB]</a></p>
            <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
            <p>Unity</p>
            <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
            <p><a href="https://doi.org/10.1145/3145749.3149425" target="_blank"><u>Kazuki Otao</u>, Yuta Itoh, Hiroyuki Osone, Kazuki Takazawa, Shunnosuke Kataoka, and Yoichi Ochiai. 2017. Light field blender: designing optics and rendering methods for see-through and aerial near-eye display. In <em>SIGGRAPH Asia 2017 Technical Briefs</em> (SA '17). ACM, New York, NY, USA, Article 9, 4 pages. DOI: https://doi.org/10.1145/3145749.3149425</a></p>
            <h3><span class="glyphicon glyphicon-list"></span>Exhibition</h3>
            <p><a href="https://www.aec.at/ai/de/recomposition-of-human-presence/" target="_blank">Digital Nature Group at the University of Tsukuba, Pixie Dust Technologies Inc. 2017. <u>Recomposition of Human Presence: Waves, Material, and Intelligence.</u> Ars Electronica Festival, Linz, Austria, 2017.09.07-11</a></p>
            <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
            <p><a href="http://www.moguravr.com/pixiedusttech-ar/" target="_blank">落合陽一氏ら、AR向け技術を続々発表 キーワードは広視野・透過型, http://www.moguravr.com/pixiedusttech-ar/, Mogura VR, 2017.11.24</a></p>
            <p><a href="http://shiropen.com/2017/11/22/29800" target="_blank">ピクシーダストテクノロジーズとデジタルネイチャーグループ、透過型ミラーデバイスを用いたAR向け広視野シースルーHMD実現方式を論文にて発表。ボケの再現などを可能に, http://shiropen.com/2017/11/22/29800, Seamless, 2017.11.22</a></p>
          </div>
        </div>

        <div class="row">
          <div class="col-xs-12 col-sm-6">
            <a class="thumbnail" v-bind:href="getImageURL">
              <img class="work_img img-responsive" v-bind:src="getImageURL" >
            </a>
          </div>
        </div>
    </section>
  </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const project = {
  "name": "lightfieldblender",
  "title": "Light Field Blender",
  "description_jp": "This research presents a near-eye light field display for augmented reality using Transmissive Mirror Device instead of conventional optical elements such as half-mirror, free-from optics, and waveguide.",
  "description_en": "Ars Electronica 2017で実機のデモ展示を行いました。SIGGRAPH Asia 2017で登壇発表を行いました。",
  "youtube": "https://www.youtube.com/embed/isgaDS-qXsI"
}

export default {
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      project: project
    }
  },
  computed: {
    getImageURL: function() {
      return require("~/assets/works/" + this.project.name + "/img/Image.jpg")
    }
  }
}
</script>