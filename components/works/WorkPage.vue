<template>
  <div class="inner">

    <div class="row">
      <div class = "lang-button">
        <LanguageButton v-bind:flag="isEnglish" @on-toggle-change="onIsEnglishChange"/>
      </div>
    </div>

    <h2>{{ project.title }}</h2>

    <div class="row">
      <div class="col-xs-12 col-sm-6">
        <Video v-bind:url="project.youtube" v-bind:frameborder="0"/>
      </div>
      <div class="col-xs-12 col-sm-6">
        <p v-show="!isEnglish">{{ project.description_jp }}</p>
        <p v-show="isEnglish">{{ project.description_en }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
  
.inner {
    padding: 0px 50px 50px 50px;
}

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
import LanguageButton from '~/components/LanguageButton.vue'
import Video from '~/components/Video.vue'

export default {
  components: {
    Video,
    LanguageButton
  },
  data() {
    return {
      isEnglish: false
    }
  },
  props: [
    'project',
  ],
  methods: {
    onIsEnglishChange (flag) {
      this.isEnglish = flag
    }
  }
}
</script>