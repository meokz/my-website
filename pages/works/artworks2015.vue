<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <h2>{{ project.title }}</h2>

      <div class="row">
        <div class="work_caption">
          <h3>Math</h3>
          <p><span class="glyphicon glyphicon-align-left"></span>友人のTwitterヘッダー用に制作</p>
          <p><span class="glyphicon glyphicon-wrench"></span>AviUtl</p>
          <p><span class="glyphicon glyphicon-time"></span>2015/05/08</p>
          <a class="thumbnail" v-bind:href="getImageURL">
            <img v-bind:src="getImageURL" class="img-responsive">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="work_caption">
          <h3>Building</h3>
          <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
          <p><span class="glyphicon glyphicon-time"></span>2015/02/18</p>
          <a class="thumbnail" v-bind:href="getImageURL2">
            <img v-bind:src="getImageURL2" class="img-responsive">
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
  "name": "artworks2015",
  "title": "ArtWorks 2015",
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
      return require("~/assets/works/" + this.project.name + "/img/yousay_ver2.jpg")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/building.jpg")
    }
  }
}
</script>