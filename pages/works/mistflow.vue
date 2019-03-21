<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
        <p><a href="/works/mistflow/docs/mistflow.pdf" target="_blank">SIGGRAPH Asia 2017 Two-page Abstract [PDF 4.5MB]</a></p>
        <p><a href="/works/mistflow/docs/mistflow-poster.pdf" target="_blank">SIGGRAPH Asia 2017 Poster [PDF 4.1MB]</a></p>
        <p><a href="/works/mistflow/docs/paper-Interaction17.pdf" target="_blank">Paper Preprint (Japanese) [PDF 2.8MB]</a></p>
        <p><a href="/works/mistflow/docs/presen-tct.pdf" target="_blank">Presentation (Japanese) [PDF 2.8MB]</a></p>
        <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
        <p>Unity, Leap Motion</p>
        <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
        <p>Takanori Koga and Kazuki Otao. 2018. An Interactive Fog Display to Express Adaptive Shape-Changing Flow. In the 25th International Display Workshops (IDW '18).</p>
        <p><a href="https://www.cmcbooks.co.jp/products/detail.php?product_id=5450" target="_blank">山本裕紹 監修. 空中ディスプレイの開発と応用展開 (Recent Developments and Prospective Applications of Aerial Display). シーエムシー出版, 2018, 267p. (第Ⅲ編，第9章を分担執筆)</a></p>
        <p><a href="https://doi.org/10.1145/3145690.3145696" target="_blank"><u>Kazuki Otao</u> and Takanori Koga. 2017. Mistflow: a fog display for visualization of adaptive shape-changing flow. In <em>SIGGRAPH Asia 2017 Posters</em> (SA '17). ACM, New York, NY, USA, Article 17, 2 pages. DOI: https://doi.org/10.1145/3145690.3145696</a></p>
        <p><a href="http://www.interaction-ipsj.org/proceedings/2017/data/bib/3-504-21.html" target="_blank"><u>大峠和基</u>, 古賀崇了. “霧の形状変化に適応した映像投影を実現するインタラクティブフォグディスプレイの基礎的検討”. 情報処理学会インタラクション2017. 2017, p.752-757.</a></p>
        <p>霧の形状変化に適応した映像投影を実現するインタラクティブフォグディスプレイの基礎的検討（指導教官・古賀崇了准教授）平成28年度　徳山高専情報電子工学科 卒業論文</p>
        <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>
        <p><a href="http://www.interaction-ipsj.org/2017/award/" target="_blank">情報処理学会インタラクション2017 インタラクティブ発表(3日目) 投票上位</a></p>
        <p>徳山工業高等専門学校 卒業研究最終発表 1位 (総合1位)</p>
        <p>徳山工業高等専門学校 卒業研究中間発表 1位</p>
        <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
        <p><a href="http://shiropen.com/2017/12/29/30755" target="_blank">徳山高専ら、浮遊する映像を表現できる霧を用いたフォグディスプレイに触れることができるインタラクション技術を論文にて発表, http://shiropen.com/2017/12/29/30755, Seamless, 2017.12.29</a></p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/mistflow/img/Image.jpg">
          <img class="work_img img-responsive" src="/works/mistflow/img/Image.jpg" >
        </a>
      </div>
        <!-- <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="getImageURL2">
            <img class="work_img img-responsive" v-bind:src="getImageURL2" >
          </a>
        </div> -->
    </div>
  </div>

</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = 'Mistflow'

export default {
  mixins: [Meta],
  layout: 'project',
  components: {
    WorkPage
  },
  data() {
    return {
      meta: {
        title: title,
        description: 'フォグディスプレイの霧の形状を推定し、変化するスクリーンの形状に合わせて映像を投影することを目指し、実装と開発を行いました。',
        type: 'article',
        url: 'https://kazukiotao.com/works/mistflow/',
        image: 'https://kazukiotao.com/works/mistflow/img/Image.jpg',
      },
      project: {
          "name": "mistflow",
          "title": title,
          "description_jp": "手の姿勢検出を元に変化する霧の形状を推定し，投影される映像と実際の霧スクリーンの流れが自然に一致することを目指したフォグディスプレイを開発しました。2017年3月に情報処理学会インタラクション2017にてデモンストレーション発表を行いました。2017年11月にACM SIGGRAPH Asia 2017にてポスター発表を行いました。Virtual Reality系の研究を取り上げるSeamless様に記事を掲載して頂きました。宇都宮大学 山本先生監修の「空中ディスプレイの開発と応用展開」にて分担執筆させて頂きました。",
          "description_en": "Conventional fog displays realized interesting interaction focusing on touching motion to aerial images, there is no expression explicitly taking advantage of the relationship between the physical flow of the screen and a projected image associated with it. Mistform [Tokuda et al. 2017] proposed to predict the shape of the screen. However, it also does not detect the physically deformed shape of the screen by user's action explicitly. We propose a feed-forward approach to create pseudosynchronized image contents with the deformation by users. In the proposed method, a sense of natural synchronization between the shape-changing screen and the projected image is provided by using hand gesture detection and a physical simulation of collision between falling particles and user's hands.",
          "youtube": "https://www.youtube.com/embed/YwNEVw1YgCY"
      }
    }
  }
}
</script>
