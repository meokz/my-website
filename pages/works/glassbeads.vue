<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
        <p><a href="https://digitalnature.slis.tsukuba.ac.jp/2019/05/glassbeads/" target="_blank">Glass-beads Display - Digital Nature Group</a></p>
        <p><a href="http://digitalnature.slis.tsukuba.ac.jp/2017/11/glassbeads-display/" target="_blank">Aerial Image on Retroreflective Particles - Digital Nature Group</a></p>
        <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
        <p><a href="/works/glassbeads/docs/HCII_glassbeads_display.pdf" target="_blank">HCI International 2019 Paper [PDF 2.8MB]</a></p>
        <p><a href="/works/glassbeads/docs/glassbeads-hcii2019-poster.pdf" target="_blank">HCI International 2019 Poster [PDF 2.8MB]</a></p>
        <p><a href="/works/glassbeads/docs/AIRP-sa17.pdf" target="_blank">SIGGRAPH Asia 2017 Two-page Abstract [PDF 2.4MB]</a></p>
        <p><a href="/works/glassbeads/docs/poster-sa17.pdf" target="_blank">SIGGRAPH Asia 2017 Poster [PDF 2.2MB]</a></p>
        <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
        <p><a href="https://link.springer.com/chapter/10.1007/978-3-030-23522-2_16" target="_blank">Shinnosuke Ando, <u>Kazuki Otao</u>, and Yoichi Ochiai. 2019. Glass-Beads Display: Evaluation for Aerial Graphics Rendered by Retro-Reflective Particles. In <em>HCI International 2019 Posters</em> (HCII 2019). Communications in Computer and Information Science, vol 1032. Springer, Cham</a></p>
        <p><a href="https://doi.org/10.1145/3145690.3145730" target="_blank">Shinnosuke Ando, <u>Kazuki Otao</u>, Kazuki Takazawa, Yusuke Tanemura, and Yoichi Ochiai. 2017. Aerial image on retroreflective particles. In SIGGRAPH Asia 2017 Posters (SA '17). ACM, New York, NY, USA, Article 7, 2 pages. DOI: https://doi.org/10.1145/3145690.3145730</a></p>
        <h3><span class="glyphicon glyphicon-list"></span>Exhibition</h3>
        <p><a href="http://mediaambitiontokyo.jp/glassbeadsdisplay/" target="_blank">Shinnosuke Ando, <u>Kazuki Otao</u>, Kazuki Takazawa, Yoichi Ochiai. 2018. <u>Glass beads display.</u> Media Ambition Tokyo, Roppongi Hills, Tokyo. 2018.2.9-25</a></p>
        <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
        <p><a href="https://shiropen.com/seamless/glass-beads-display" target="_blank">筑波大学とピクシーダストテクノロジーズ株式会社、どの位置から見ても鮮明な空中画像を提供できるガラスビーズを用いた空中映像投影手法を発表, https://shiropen.com/seamless/glass-beads-display, Seamless, 2019-7-25</a></p>
        <p><a href="https://cgworld.jp/interview/201712-sigasia2017-dgst.html" target="_blank">「SIGGRAPH ASIA 2017 BANGKOK」開催。その見どころを「2018 TOKYO」カンファレンスチェアの安生健一氏が解説, https://cgworld.jp/interview/201712-sigasia2017-dgst.html, CGWORLD.jp, 2017-12-7</a></p>
      </div>
    </div>

    <div class="row">
      <Video v-bind:url="url" v-bind:frameborder="0"/>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'
import Video from '~/components/Video.vue'

const title = "Glassbeads Display"

export default {
  mixins: [Meta],
  layout: 'project',
  components: {
    WorkPage,
    Video
  },
  data() {
    return {
      meta: {
        title: title,
        description: '半面を鏡でコーティングしたガラスビーズを空中スクリーンとして使用することで，高輝度・広視野角な空中映像を実現します。',
        type: 'article',
        url: 'https://kazukiotao.com/works/glassbeads/',
        image: 'https://kazukiotao.com/works/glassbeads/img/Image.jpg',
      },
      project: {
        "name": "glassbeads",
        "title": title,
        "description_jp": "半面を鏡コーティングしたガラスビーズで空中にスクリーンを形成し、プロジェクタで映像を投影することで、空中映像を実現します。従来、霧やガスが空中スクリーンとして用いられてきましたが、Mie散乱による視野角の狭さや画像のボケが問題でした。本研究では、通常、再帰性反射材の素材として使用されるガラスビーズを制御装置から落下させてスクリーンを形成することで、ランダムに回転したガラスビーズが光をあらゆる方向に反射するため，高輝度・広視野角な空中映像を実現します。",
        "description_en": "We present a novel method for rendering aerial images using retroreflective particles. Retro-reflective particles are composed of glass beads that are half-coated with mirror films. They reflect light in different directions without any significant reduction in brightness because the falling particles can rotate in all directions. We evaluate the proposed method through a comparison with conventional aerial screens, such as fog and gas.",
        "youtube": "https://www.youtube.com/embed/Yh3WCuHntbE"
      },
      url: "https://www.youtube.com/embed/sLHKTFW9i90"
    }
  }
}
</script>
