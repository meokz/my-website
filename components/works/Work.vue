<template>
  <div class="work">
    <a class="work_img thumbnail" v-bind:href="project.url">
      <img class="img-responsive"  v-bind:src="getImageURL">
    </a>
    <div class="work_caption">
      <h3>{{ project.title }}</h3>
      <p><span class="glyphicon glyphicon-time"></span>{{ project.date }}</p>
      <p><span class="glyphicon glyphicon-user"></span>{{ project.people }}人</p>
      <p><span class="glyphicon glyphicon-check"></span>{{ project.description }}</p>
    </div>
  </div>
</template>

<style scoped>
.work {
    margin: 5% 0px 5% 0px;
}

.work_img {
    margin: 0;
    overflow: hidden;
}

.work_img img {
    -moz-transition: -moz-transform 0.5s ease-out;
    -webkit-transition: -webkit-transform 0.5s ease-out;
    -o-transition: -o-transform 0.5s ease-out;
    -ms-transition: -ms-transform 0.5s ease-out;
    transition: transform 0.5s ease-out;
}

.work_img img:hover {
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
}

.work_caption{
    padding: 1% 1% 1% 1%;
}

.work_caption h2 {
    font-size: 20px;
    font-weight: normal;
    color: #4A4A4A;
    margin: 0;
    padding: 10px 0 10px;
    border-bottom: solid 1px #E0E0E0;
}

.work_caption p {
    font-size: 14px;
    color: #696969;
    margin: 0;
    padding-top: 5px;
    padding-left: 5px;
}

.work_caption span {
    margin-right: 7px;
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
      return require("~/assets/works/" + this.project.url + "/thumbnail.jpg")
    }
  }
}
</script>