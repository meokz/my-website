<template>
  <div class="achievement">
    <h2>Achievement</h2>
    <div>
      <div>
        <h3>Contest</h3>
        <ul>
          <Project v-for="contest in contests" v-bind:key="contest.title" v-bind:project="contest"/>
        </ul>
      </div>
    </div>
  </div> 
</template>


<script>
import Project from '~/components/profile/Project.vue'

const contests = [
  {
    title: "<p>片岡駿之介, <u>大峠和基</u>, 野坂峻大, 伊藤 駿介. 2016</p><p>Mealie -ミライ-</p><p>U-22プログラミング・コンテスト2016, 経済産業省商務情報政策局長賞/OBC賞</p>",
    url: "./works/mealie/",
    image_url: "mealie.jpg",
  }
]

export default {
  components: {
    Project
  }, 
  data() {
    return {
      contests: contests
    }
  },
}

</script>