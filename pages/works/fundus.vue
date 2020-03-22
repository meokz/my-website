<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
        <p><a href="https://digitalnature.slis.tsukuba.ac.jp/2019/11/fundus_imaging/" target="_blank">Fundus imaging using DCRA toward large eyebox - Digital Nature Group</a></p>
        <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
        <p><a href="/works/fundus/docs/sa2019_abstract_author.pdf" target="_blank">SIGGRAPH Asia 2019 Two-page Abstract [PDF 4MB]</a></p>
        <p><a href="/works/fundus/docs/sa2019_abstract_author.pdf" target="_blank">SIGGRAPH Asia 2019 Poster [PDF 5.5MB]</a></p>
        <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
        <p>
          <a href="https://doi.org/10.1145/3355056.3364579" target="_blank">
            Yui Atarashi, <u>Kazuki Otao</u>, Takahito Aoto, and Yoichi Ochiai. 2019. Fundus imaging using DCRA toward large eyebox. In <em>SIGGRAPH Asia 2019 Posters</em> (SA ’19). ACM, New York, NY, USA, Article 29, 2 pages. DOI: https://doi.org/10.1145/3355056.3364579
          </a>
        </p>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12">
        <a class="thumbnail" href="/works/fundus/img/teaser.jpg">
          <img class="work_img img-responsive" src="/works/fundus/img/teaser.jpg" >
        </a>
      </div>
      <div class="col-xs-12">
        <a class="thumbnail" href="/works/fundus/img/experiment.jpg">
          <img class="work_img img-responsive" src="/works/fundus/img/experiment.jpg" >
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "Fundus imaging using DCRA toward large eyebox"

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
        description: 'Fundus imaging using DCRA toward large eyebox',
        type: 'article',
        url: 'https://kazukiotao.com/works/fundus/',
        image: 'https://kazukiotao.com/works/fundus/img/Image.jpg',
      },
      project: {
        "name": "fundus",
        "title": title,
        "description_jp": "二面角コーナーリフレクターアレイ（DCRA）を使用した新しい眼底撮影法を提案します。DCRAには、光源を面対称位置に結像させる機能があります。この機能を用いて、DCRAを使用して眼球内または眼球上に仮想カメラを生成し、眼底にある網膜を撮影します。提案された方法では、目の動きに頑健な、波長非依存性を持つ簡易な光学系を実現します。",
        "description_en": "We propose a novel fundus imaging system using a dihedral corner reflector array (DCRA) that is an optical component to work as a lens but does not have a focal length or an optical axis. As a sensing application, we use a DCRA for setting a virtual camera in/on an eyeball to capture a fundus. The proposed system has three features; (1) robust to eye movement, (2) wavelength- independent, (3) a simple optical system. The proposed system has a possibility to be applied to preventive medicine for households that can be used in daily life.",
        "youtube": ""}
    }
  }
}
</script>
