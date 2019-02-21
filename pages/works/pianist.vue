<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
          <p>Project Manegiment / Presentation / Programming / VR</p>
          <h3><span class="glyphicon glyphicon-file"></span>Documents</h3>
          <p><a href="/works/pianist/docs/pianist_yosen.pdf" target="_blank">予選資料 [PDF 4.7MB]</a></p>
          <p><a href="/works/pianist/docs/pianist_honsen.pdf" target="_blank">本選資料 [PDF 15.3MB]</a></p>
          <h3><span class="glyphicon glyphicon-wrench"></span>Used Tools</h3>
          <p>Unity / C# etc.</p>
          <h3><span class="glyphicon glyphicon-link"></span>Link</h3>
          <p><a href="http://meokz.hatenablog.com/entry/2015/procon26/" target="_blank">高専プロコン26に参加してきた話 - めおしーえす</a></p>
          <h3><span class="glyphicon glyphicon-bookmark"></span>Achievement</h3>
          <p>全国高等専門学校プログラミングコンテスト, 第26回長野大会, 自由部門, 敢闘賞</p>
        </div>
      </div>


      <div class="row">
        <div style="padding-top: 0px">
          <div class="video">
            <iframe src="https://www.youtube.com/embed/qRJWUxsAh3M?start=1135" frameborder="1135" allowfullscreen></iframe>
          </div>
        </div>
      </div>

      <div class="row">
        <iframe src="//www.slideshare.net/slideshow/embed_code/key/3128XfBWb0cFzF" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/kaootao/pianist-2015-84691381" title="Pianist: 鍵盤楽器運指練習システム 予選資料 (高専プロコン2015)" target="_blank">Pianist: 鍵盤楽器運指練習システム 予選資料 (高専プロコン2015)</a> </strong> from <strong><a href="https://www.slideshare.net/kaootao" target="_blank">Kazuki Otao</a></strong> </div>
      </div>
      
      <div class="row">
        <iframe src="//www.slideshare.net/slideshow/embed_code/key/X21DdcDA49sZB" width="595" height="485" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" style="border:1px solid #CCC; border-width:1px; margin-bottom:5px; max-width: 100%;" allowfullscreen> </iframe> <div style="margin-bottom:5px"> <strong> <a href="//www.slideshare.net/kaootao/pianist-2015-84691500" title="Pianist: 鍵盤楽器運指練習システム 本選資料 (高専プロコン2015)" target="_blank">Pianist: 鍵盤楽器運指練習システム 本選資料 (高専プロコン2015)</a> </strong> from <strong><a href="https://www.slideshare.net/kaootao" target="_blank">Kazuki Otao</a></strong> </div>
      </div>

      <div class="row">
        <div class="col-xs-6">
          <a class="thumbnail" href="/works/pianist/img/img1.jpg">
            <img src="/works/pianist/img/img1.jpg" class="img-responsive">
          </a>
        </div>
        <div class="col-xs-6">
          <a class="thumbnail" href="/works/pianist/img/img_slide.jpg">
            <img src="/works/pianist/img/img_slide.jpg" class="img-responsive">
          </a>
        </div>
        <div class="col-xs-6">
          <a class="thumbnail" href="/works/pianist/img/img2.jpg">
            <img src="/works/pianist/img/img2.jpg" class="img-responsive">
          </a>
        </div>
        <div class="col-xs-6">
          <a class="thumbnail" href="/works/pianist/img/img3.jpg">
            <img src="/works/pianist/img/img3.jpg" class="img-responsive">
          </a>
        </div>
      </div>

    </section>
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

export default {
  mixins: [Meta],
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      meta: {
        title: "Pianist",
        description: "OculusRiftにPSEyeを2つ取り付けステレオカメラ化した上で、現実の映像にARで運指アニメーションや運指番号付き楽譜を表示します.さらに、LeapMotionを用いてユーザの運指を取得し、間違った運指を指摘したり、運指をクラウド経由で共有化して練習を促進してくれるというものです.また、MIDIファイルから運指を生成する機能もあるので、運指番号が振られていない曲でも楽曲データさえあれば運指付きの楽譜を生成してくれます. ",
        type: 'article',
        url: 'https://meo-cs.net/works/pianist/',
        image: 'https://meo-cs.net/works/pianist/img/img1.jpg',
      },
      project: {
        "name": "pianist",
        "title": "Pianist―鍵盤楽器運指練習システム―",
        "description_jp": "OculusRiftにPSEyeを2つ取り付けステレオカメラ化した上で、現実の映像にARで運指アニメーションや運指番号付き楽譜を表示します.さらに、LeapMotionを用いてユーザの運指を取得し、間違った運指を指摘したり、運指をクラウド経由で共有化して練習を促進してくれるというものです.また、MIDIファイルから運指を生成する機能もあるので、運指番号が振られていない曲でも楽曲データさえあれば運指付きの楽譜を生成してくれます. 責任者兼プロジェクトマネジメントを担当.開発ではRiftのステレオカメラ化を担当. 本選ではプレゼンテーションを担当しました.",
        "description_en": "No english description.",
        "youtube": "https://www.youtube.com/embed/7xNNoWNeetY"
      }
    }
  }
}
</script>