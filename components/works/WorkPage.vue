<template>
  <div>
    <h2>{{ project.title }}</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <div style="padding-top: 0px">
          <div class="video">
            <iframe v-bind:src="project.youtube" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
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
    margin: 0;
    margin-bottom: 10px;
    padding: 10px;
    border-bottom: solid 1px #E0E0E0;
}
</style>

<script>
export default {
  props: [
    'project'
  ]
}
</script>