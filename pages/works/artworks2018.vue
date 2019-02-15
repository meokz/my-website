<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <h2>{{ project.title }}</h2>

      <div class="row">
        <div class="work_caption">
          <h3>Abstract 2</h3>
          <p><span class="glyphicon glyphicon-wrench"></span> Modeling: Grasshopper (Rhinoceros), Rendering: Cycles (Blender)</p>
          <p><span class="glyphicon glyphicon-time"></span> 2018/06/26</p>
          <a class="thumbnail" v-bind:href="getImageURL">
            <img v-bind:src="getImageURL" class="img-responsive">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="work_caption">
          <h3>Abstract 1</h3>
          <p><span class="glyphicon glyphicon-wrench"></span> Modeling: Grasshopper (Rhinoceros), Rendering: Cycles (Blender)</p>
          <p><span class="glyphicon glyphicon-time"></span> 2018/06/25</p>
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
  "name": "artworks2018",
  "title": "ArtWorks 2018",
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
      return require("~/assets/works/" + this.project.name + "/img/abstract_1.jpg")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/abstract_2.jpg")
    }
  }
}
</script>