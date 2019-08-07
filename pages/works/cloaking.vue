<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
        <p><a href="https://digitalnature.slis.tsukuba.ac.jp/2019/08/optical-cloaking-display/" target="_blank">Optical Cloaking Display - Digital Nature Group</a></p>
        <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
        <p><a href="/works/cloaking/docs/cloaking_siggraph_2019_etech.pdf" target="_blank">SIGGRAPH 2019 Emerging Technologies Two-page Abstract [PDF X.XMB]</a></p>
        <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
        <p><a href="https://doi.org/10.1145/3305367.3327979" target="_blank">Takahito Aoto, Yuta Itoh, <u>Kazuki Otao</u>, Kazuki Takazawa, and Yoichi Ochiai. 2018. A design for optical cloaking display. In <em>SIGGRAPH ’19 Emerging Technologies</em> (SIGGRAPH ’19). ACM, New York, NY, USA, 2 pages. DOI: https://doi.org/10.1145/3305367.3327979</a></p>
        <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>
        <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
      </div>
    </div>

     <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/cloaking/img/Image.jpg">
          <img class="work_img img-responsive" src="/works/cloaking/img/Image.jpg" >
        </a>
      </div>
     </div>

  </div>

</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = 'Optical Cloaking Display'

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
        description: '鏡のみで構成される面対象光学系を組み合わせることによって、視点移動可能・全波長対応・能動光学素子不要・隠蔽領域の大型化を達成する光学迷彩 (透明マント) を開発しました。',
        type: 'article',
        url: 'https://kazukiotao.com/works/cloaking/',
        image: 'https://kazukiotao.com/works/cloaking/img/Image.jpg',
      },
      project: {
          "name": "cloaking",
          "title": title,
          "description_jp": "鏡のみで構成される面対象光学系を組み合わせることによって、視点移動可能・全波長対応・能動光学素子不要・隠蔽領域の大型化を達成する光学迷彩 (透明マント) を開発しました。",
          "description_en": "In the graphics research context, optical cloaking that hides an object by relaying a light field is also a kind of display. Despite much interest in the cloaking, large-size cloaking has not been achieved without some limitations and/or assumptions. To solve this problem, a computational design method is proposed for an optical cloaking display via viewpoint transformation. The method uses two kinds of passive optical elements that transfer a point into a plane symmetric point. In the experiments, a novel passive display was developed that optically cloaks the object and transmits a light field properly. Experimental results for the multiviewpoint scene that was captured are presented.",
          "youtube": "https://www.youtube.com/embed/WU0gZm60Qtw"
      }
    }
  }
}
</script>
