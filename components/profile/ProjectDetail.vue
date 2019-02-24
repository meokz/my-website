<template>
  <div class="work">
    <a v-bind:href="getURL">
      <div class="row">
    
        <div class="col-xs-4 col-sm-4">
          <div class="thumbnail">
            <img class="img-responsive" v-bind:src="getImageURL"/>
          </div>
        </div>
        <div class="col-xs-8 col-sm-8">
          <h3 v-show="!isEnglish">{{ work.title_jp }}</h3>
          <h3 v-show="isEnglish">{{ work.title_en }}</h3>
          <p v-show="!isEnglish">{{ work.description_jp }}</p>
          <p v-show="isEnglish">{{ work.description_en }}</p>
          <Tag :tags="work.tag"/>
        </div>
      </div>
    </a>
  </div>
</template>

<style scoped>

.thumbnail { 
    margin: 5px 0 5px;
    border: none;
}

.work {
    margin: 10px 5px 10px 5px;
    padding: 5px;
    border: solid 1px #E0E0E0;
    cursor:pointer;
}

.work:hover{
    border: solid 1px #51A7F9;
}

.work a:hover {
    color: #000000;
}

.work h3 { margin: 10px 0 10px 0; }

</style>

<script>
import Tag from '~/components/profile/Tag.vue'

export default {
  components: {
    Tag
  },
  props: [
    'isEnglish',
    'work'
  ],
  computed: {
    getURL: function() {
      return "/works/" + this.work.name
    },
    getImageURL: function() {
      return require("~/assets/profile/img/" + this.work.name + ".jpg")
    }
  }
}
</script>
