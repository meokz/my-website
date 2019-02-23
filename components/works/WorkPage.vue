<template>
  <div>
    <h2>{{ project.title }}</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <Video v-bind:url="project.youtube" v-bind:frameborder="0"/>
      </div>
      <div class="col-xs-12 col-sm-6">
        <div class="work_caption">
          <p>{{ project.description_en }}</p>
          <p>{{ project.description_jp }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
h2 {
    font-size: 24px;
    font-weight: normal;
    color: #3F4F51;
    text-align: center;
    margin: 0;
    margin-bottom: 20px;
    padding: 10px;
    border-bottom: solid 1px #E0E0E0;
}
</style>

<script>
import Video from '~/components/Video.vue'

export default {
  components: {
    Video
  },
  props: [
    'project'
  ]
}
</script>