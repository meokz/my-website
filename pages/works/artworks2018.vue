<template>
  <div>
    <h2>{{ project.title }}</h2>

    <div class="row">
      <div class="work_caption">
        <h3>Abstract 2</h3>
        <p><span class="glyphicon glyphicon-wrench"></span> Modeling: Grasshopper (Rhinoceros), Rendering: Cycles (Blender)</p>
        <p><span class="glyphicon glyphicon-time"></span> 2018/06/26</p>
        <a class="thumbnail" href="/works/artworks2018/img/abstract_2.jpg">
          <img src="/works/artworks2018/img/abstract_2.jpg" class="img-responsive">
        </a>
      </div>
    </div>

    <div class="row">
      <div class="work_caption">
        <h3>Abstract 1</h3>
        <p><span class="glyphicon glyphicon-wrench"></span> Modeling: Grasshopper (Rhinoceros), Rendering: Cycles (Blender)</p>
        <p><span class="glyphicon glyphicon-time"></span> 2018/06/25</p>
        <a class="thumbnail" href="/works/artworks2018/img/abstract_1.jpg">
          <img src="/works/artworks2018/img/abstract_1.jpg" class="img-responsive">
        </a>
      </div>
    </div>
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "ArtWorks 2018"

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
        description: 'ArtWorks 2018',
        type: 'article',
        url: 'https://kazukiotao.com/works/artworks2018/',
        image: 'https://kazukiotao.com/works/artworks2018/img/abstract_2.jpg',
      },
      project: {
        "name": "artworks2018",
        "title": title,
      }
    }
  }
}
</script>
