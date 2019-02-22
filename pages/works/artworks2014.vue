<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <h2>{{ project.title }}</h2>

      <div class="row">
        <div class="work_caption">
          <h3>Piano</h3>
          <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
          <p><span class="glyphicon glyphicon-time"></span>2014/09/07</p>
          <a class="thumbnail" v-bind:href="getImageURL">
            <img v-bind:src="getImageURL" class="img-responsive">
          </a>
          <a class="thumbnail" v-bind:href="getImageURL2">
            <img v-bind:src="getImageURL2" class="img-responsive">
          </a>
        </div>
      </div>


      <div class="row">
        <div class="work_caption">
          <h3>IvyGuiter</h3>
          <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
          <p><span class="glyphicon glyphicon-time"></span>2014/08/20</p>
          <a class="thumbnail" v-bind:href="getImageURL3">
            <img v-bind:src="getImageURL3" class="img-responsive">
          </a>
        </div>
      </div>

       <div class="row">
        <div class="work_caption">
          <h3>Tower</h3>
          <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
          <p><span class="glyphicon glyphicon-time"></span>2014/04/20</p>
          <a class="thumbnail" v-bind:href="getImageURL4">
            <img v-bind:src="getImageURL4" class="img-responsive">
          </a>
        </div>
      </div>

      <div class="row">
        <div class="work_caption">
          <h3>Moon</h3>
          <p><span class="glyphicon glyphicon-wrench"></span>Blender / Photoshop</p>
          <p><span class="glyphicon glyphicon-time"></span>2014/02/10</p>
          <a class="thumbnail" v-bind:href="getImageURL5">
            <img v-bind:src="getImageURL5" class="img-responsive">
          </a>
          <a class="thumbnail" v-bind:href="getImageURL6">
            <img v-bind:src="getImageURL6" class="img-responsive">
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

const title = 'ArtWorks 2014'

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
        description: 'ArtWorks2014',
        type: 'article',
        url: 'https://meo-cs.net/works/artworks2014/',
        image: 'https://meo-cs.net/works/artworks2014/img/piano1.jpg',
      },
      project: {
        "name": "artworks2014",
        "title": title,
      }
    }
  },
  computed: {
    getImageURL: function() {
      return require("~/assets/works/" + this.project.name + "/img/piano1.jpg")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/piano2.jpg")
    },
    getImageURL3: function() {
      return require("~/assets/works/" + this.project.name + "/img/ivyguiter.jpg")
    },
    getImageURL4: function() {
      return require("~/assets/works/" + this.project.name + "/img/tower.jpg")
    },
    getImageURL5: function() {
      return require("~/assets/works/" + this.project.name + "/img/moon.jpg")
    },
    getImageURL6: function() {
      return require("~/assets/works/" + this.project.name + "/img/moon_dark.jpg")
    }
  }
}
</script>