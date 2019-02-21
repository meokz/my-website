<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
          <p><a href="http://digitalnature.slis.tsukuba.ac.jp/2017/11/glassbeads-display/" target="_blank">Aerial Image on Retroreflective Particles - Digital Nature Group</a></p>
          <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
          <p><a href="/works/glassbeads/docs/AIRP-sa17.pdf" target="_blank">SIGGRAPH Asia Two-page Abstract [PDF 2.4MB]</a></p>
          <p><a href="/works/glassbeads/docs/poster-sa17.pdf" target="_blank">SIGGRAPH Asia Poster [PDF 2.2MB]</a></p>
          <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
          <p></p>
          <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
          <p><a href="https://doi.org/10.1145/3145690.3145730" target="_blank">Shinnosuke Ando, <u>Kazuki Otao</u>, Kazuki Takazawa, Yusuke Tanemura, and Yoichi Ochiai. 2017. Aerial image on retroreflective particles. In SIGGRAPH Asia 2017 Posters (SA '17). ACM, New York, NY, USA, Article 7, 2 pages. DOI: https://doi.org/10.1145/3145690.3145730</a></p>
          <h3><span class="glyphicon glyphicon-list"></span>Exhibition</h3>
          <p><a href="http://mediaambitiontokyo.jp/glassbeadsdisplay/" target="_blank">Shinnosuke Ando, <u>Kazuki Otao</u>, Kazuki Takazawa, Yoichi Ochiai. 2018. <u>Glass beads display.</u> Media Ambition Tokyo, Roppongi Hills, Tokyo. 2018.2.9-25</a></p>
          <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
          <p><a href="https://cgworld.jp/interview/201712-sigasia2017-dgst.html" target="_blank">「SIGGRAPH ASIA 2017 BANGKOK」開催。その見どころを「2018 TOKYO」カンファレンスチェアの安生健一氏が解説, https://cgworld.jp/interview/201712-sigasia2017-dgst.html, CGWORLD.jp, 2017-12-7</a></p>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "Glassbeads Display"

export default {
  mixins: [Meta],
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      meta: {
        title: title,
        description: '半面を鏡でコーティングしたガラスビーズを空中スクリーンとして使用することで，高輝度・広視野角な空中映像を実現します。',
        type: 'article',
        url: 'https://meo-cs.net/works/glassbeads/',
        image: 'https://meo-cs.net/works/glassbeads/img/Image.jpg',
      },
      project: {
        "name": "glassbeads",
        "title": title,
        "description_jp": "半面を鏡でコーティングしたガラスビーズを空中スクリーンとして使用することで，高輝度・広視野角な空中映像を実現します。",
        "description_en": "Research Description (Writing)",
        "youtube": "https://www.youtube.com/embed/sLHKTFW9i90"
      }
    }
  },
  computed: {
    getImageURL: function() {
      return require("~/assets/works/" + this.project.name + "/img/Image.jpg")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/sigasi.JPG")
    }
  }
}
</script>