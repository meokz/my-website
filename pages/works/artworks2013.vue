<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <h2>{{ project.title }}</h2>

      <div class="row">
        <div class="work_caption">
          <h3>PokeDora</h3>
          <p><span class="glyphicon glyphicon-align-left"></span>ポケモンっぽいゲームを作ったときのタイトル画像</p>
          <p>Source : <a href="https://github.com/meokz/JSwingGame">Github</a></p>
          <a class="thumbnail" href="/works/artworks2013/img/pokedora.png">
            <img src="/works/artworks2013/img/pokedora.png" class="img-responsive">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="work_caption">
          <h3>ニルギリ</h3>
          <p><span class="glyphicon glyphicon-align-left"></span>2013年高専祭部活展示に出展したモーショングラフィックス作品</p>
          <p><span class="glyphicon glyphicon-wrench"></span>AviUtl</p>
          <p><span class="glyphicon glyphicon-time"></span>2015/02/18</p>
          <a class="thumbnail" href="/works/artworks2013/img/nirugiri.jpg">
            <img src="/works/artworks2013/img/nirugiri.jpg" class="img-responsive">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="work_caption">
          <h3>MonstarBoll</h3>
            <p><span class="glyphicon glyphicon-align-left"></span>初めてのオリジナル3DCG. 元画像を無くしたため、画質劣化ver</p>
            <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
            <p><span class="glyphicon glyphicon-time"></span>2013/07/15</p>
          <a class="thumbnail" href="/works/artworks2013/img/monsterboll.jpg">
            <img src="/works/artworks2013/img/monsterboll.jpg" class="img-responsive">
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

const title = "ArtWorks 2013"

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
        description: 'ArtWorks2013',
        type: 'article',
        url: 'https://meo-cs.net/works/artworks2013/',
        image: 'https://meo-cs.net/works/artworks2013/img/pokedora.png',
      },
      project: {
        "name": "artworks2013",
        "title": title,
      }
    }
  }
}
</script>