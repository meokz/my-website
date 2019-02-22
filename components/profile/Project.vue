<template>
  <li class="row">
    <div class="col-xs-7 col-sm-9 no-padding-left">
      <p v-html="project.title"></p>
    </div>
    <div class="col-xs-5 col-sm-3">
      <a class="thumbnail" v-bind:href="project.url">
        <img class="img-responsive" v-bind:src="getImageURL">
      </a>
    </div>
  </li>
</template>

<style scoped>

.no-padding-left {
    padding-left: 0px;
}

.row {
  padding: 5px;
}

</style>

<script>
export default {
  data() {
    return {

    }
  },
  props: [
    'project'
  ],
  computed: {
    getImageURL: function() {
      return require("~/assets/profile/works/" + this.project.image_url)
    }
  }
}
</script>
