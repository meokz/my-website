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
          <a class="thumbnail" v-bind:href="getImageURL">
            <img v-bind:src="getImageURL" class="img-responsive">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="work_caption">
          <h3>ニルギリ</h3>
          <p><span class="glyphicon glyphicon-align-left"></span>2013年高専祭部活展示に出展したモーショングラフィックス作品</p>
          <p><span class="glyphicon glyphicon-wrench"></span>AviUtl</p>
          <p><span class="glyphicon glyphicon-time"></span>2015/02/18</p>
          <a class="thumbnail" v-bind:href="getImageURL2">
            <img v-bind:src="getImageURL2" class="img-responsive">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="work_caption">
          <h3>MonstarBoll</h3>
            <p><span class="glyphicon glyphicon-align-left"></span>初めてのオリジナル3DCG. 元画像を無くしたため、画質劣化ver</p>
            <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
            <p><span class="glyphicon glyphicon-time"></span>2013/07/15</p>
          <a class="thumbnail" v-bind:href="getImageURL3">
            <img v-bind:src="getImageURL3" class="img-responsive">
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
  "name": "artworks2013",
  "title": "ArtWorks 2013",
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
      return require("~/assets/works/" + this.project.name + "/img/pokedora.png")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/nirugiri.jpg")
    },
    getImageURL3: function() {
      return require("~/assets/works/" + this.project.name + "/img/monsterboll.jpg")
    }
  }
}
</script>