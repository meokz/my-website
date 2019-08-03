<template>
  <div>
    <h2>{{ project.title }}</h2>

    <div class="row">
      <div class="work_caption">
        <h3>Piano</h3>
        <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
        <p><span class="glyphicon glyphicon-time"></span>2014/09/07</p>
        <a class="thumbnail" href="/works/artworks2014/img/piano1.jpg">
          <img src="/works/artworks2014/img/piano1.jpg" class="img-responsive">
        </a>
        <a class="thumbnail" href="/works/artworks2014/img/piano2.jpg">
          <img src="/works/artworks2014/img/piano2.jpg" class="img-responsive">
        </a>
      </div>
    </div>


    <div class="row">
      <div class="work_caption">
        <h3>IvyGuiter</h3>
        <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
        <p><span class="glyphicon glyphicon-time"></span>2014/08/20</p>
        <a class="thumbnail" href="/works/artworks2014/img/ivyguiter.jpg">
          <img src="/works/artworks2014/img/ivyguiter.jpg" class="img-responsive">
        </a>
      </div>
    </div>

      <div class="row">
      <div class="work_caption">
        <h3>Tower</h3>
        <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
        <p><span class="glyphicon glyphicon-time"></span>2014/04/20</p>
        <a class="thumbnail" href="/works/artworks2014/img/tower.jpg">
          <img src="/works/artworks2014/img/tower.jpg" class="img-responsive">
        </a>
      </div>
    </div>

    <div class="row">
      <div class="work_caption">
        <h3>Moon</h3>
        <p><span class="glyphicon glyphicon-wrench"></span>Blender / Photoshop</p>
        <p><span class="glyphicon glyphicon-time"></span>2014/02/10</p>
        <a class="thumbnail" href="/works/artworks2014/img/moon.jpg">
          <img src="/works/artworks2014/img/moon.jpg" class="img-responsive">
        </a>
        <a class="thumbnail" href="/works/artworks2014/img/moon_dark.jpg">
          <img src="/works/artworks2014/img/moon_dark.jpg" class="img-responsive">
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = 'ArtWorks 2014'

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
        description: 'ArtWorks2014',
        type: 'article',
        url: 'https://kazukiotao.com/works/artworks2014/',
        image: 'https://kazukiotao.com/works/artworks2014/img/piano1.jpg',
      },
      project: {
        "name": "artworks2014",
        "title": title,
      }
    }
  }
}
</script>
