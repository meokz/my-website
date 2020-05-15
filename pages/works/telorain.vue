<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-link"></span>Web</h3>
        <p><a href="https://telorain.com" target="_blank">telorain.com</a></p>
        <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
        <p><a href="/works/telorain/docs/mitou_abstract.pdf" target="_blank">2019年度未踏事業 成果概要書 [PDF 4.8MB]</a></p>
        <p><a href="/works/telorain/docs/mitou_detail.pdf" target="_blank">2019年度未踏事業 成果詳細書 [PDF 1.9MB]</a></p>
        <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
        <p>Swift, Python</p>
        <h3><span class="glyphicon glyphicon-list"></span>Publication</h3>
        <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>
        <p><a href="https://www.ipa.go.jp/jinzai/mitou/2019/gaiyou_ig-3.html" target="_blank">2019年度未踏事業 「機械学習を用いたSNS向けテロップ自動生成」採択（PM: 五十嵐 悠紀）</a></p>
        <h3><span class="glyphicon glyphicon-leaf"></span>Media</h3>
      </div>
    </div>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <a class="thumbnail" href="/works/telorain/img/Image.jpg">
          <img class="work_img img-responsive" src="/works/telorain/img/Image.jpg" >
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

const title = 'telorain'

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
        description: '誰でも簡単にテロップが作れるiOSアプリ',
        type: 'article',
        url: 'https://kazukiotao.com/works/telorain/',
        image: 'https://kazukiotao.com/works/telorain/img/Image.jpg',
      },
      project: {
          "name": "telorain",
          "title": title,
          "description_jp": "本プロジェクトでは，スマートフォンで簡単にテロップを作ることができるモバイルアプリケーションを開発した．開発したアプリでは，動画を選択するだけでテロップが自動で生成され，必要に応じてユーザが編集を加えることができる．また，Social Networking Service（SNS）向けの多彩なテーマを用意した．開発したアプリによって，動画編集の技術がない非クリエータでも気軽に動画にテロップを付けることができる．",
          "description_en": "Automatic caption generation for entertainment videos.",
          "youtube": ""
      }
    }
  }
}
</script>
