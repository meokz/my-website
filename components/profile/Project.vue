<template>
  <li class="row">
    <div class="col-xs-7 col-sm-9 no-padding-left">
      <p class="small_p"><a href="https://www.cmcbooks.co.jp/products/detail.php?product_id=5450" target="_blank">山本裕紹 監修. 空中ディスプレイの開発と応用展開 (Recent Developments and Prospective Applications of Aerial Display). シーエムシー出版, 2018, 267p. (第Ⅲ編，第9章を分担執筆)</a></p>
    </div>
    <div class="col-xs-5 col-sm-3">
      <a class="thumbnail" href="https://www.cmcbooks.co.jp/products/detail.php?product_id=5450">
        <img class="img-responsive" v-bind:src="getImageURL">
      </a>
    </div>
  </li>
</template>

<style scoped>

</style>

<script>
const project = {
  name: "aerialdisplay"
}

export default {
  data() {
    return {
      project: project
    }
  },
  props: [
    'isEnglish'
  ],
  computed: {
    // getURL: function() {
    //   return "./works/" + this.work.name
    // },
    getImageURL: function() {
      return require("~/assets/profile/works/" + project.name + ".jpg")
    }
  }
}
</script>
