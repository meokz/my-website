<template>
  <div>
    <h2>{{ project.title }}</h2>

    <div class="row">
      <div class="work_caption">
        <h3>Math</h3>
        <p><span class="glyphicon glyphicon-align-left"></span>友人のTwitterヘッダー用に制作</p>
        <p><span class="glyphicon glyphicon-wrench"></span>AviUtl</p>
        <p><span class="glyphicon glyphicon-time"></span>2015/05/08</p>
        <a class="thumbnail" href="/works/artworks2015/img/yousay_ver2.jpg">
          <img src="/works/artworks2015/img/yousay_ver2.jpg" class="img-responsive">
        </a>
      </div>
    </div>

    <div class="row">
      <div class="work_caption">
        <h3>Building</h3>
        <p><span class="glyphicon glyphicon-wrench"></span>Blender</p>
        <p><span class="glyphicon glyphicon-time"></span>2015/02/18</p>
        <a class="thumbnail" href="/works/artworks2015/img/building.jpg">
          <img src="/works/artworks2015/img/building.jpg" class="img-responsive">
        </a>
      </div>
    </div>

  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "ArtWorks 2015"

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
        description: 'ArtWorks2015',
        type: 'article',
        url: 'https://meo-cs.net/works/artwork2015/',
        image: 'https://meo-cs.net/works/artwork2015/img/yousay_ver2.jpg',
      },
      project: {
        "name": "artworks2015",
        "title": title,
      }
    }
  }
}
</script>