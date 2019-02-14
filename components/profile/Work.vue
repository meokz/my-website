<template>
  <div class="work">
    <a href="./works/mistflow/">
      <div class="row">
        <div class="col-xs-4 col-sm-4">
          <div class="thumbnail">
            <img class="img-responsive" src="~/assets/profile/img/mistflow.jpg"/>
          </div>
        </div>
        <div class="col-xs-8 col-sm-8">
          <h3>{{ work.title }}</h3>
          <p v-show="!isEnglish">{{ work.jp }}</p>
          <p v-show="isEnglish">{{ work.en }}</p>
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

const work = {
  title: "MistFlow",
  jp: "手の姿勢検出を元に変化する霧の形状を推定し，投影される映像と実際の霧スクリーンの流れが自然に一致することを目指したフォグディスプレイを研究開発しました。",
  en: "This research presents a fog display for visualization of adaptive shape-changing flow.",
  tag: [
    "IDW 2018", "SIGGRAPH Asia 2017", "情報処理学会インタラクション2017"
  ]
}

export default {
  components: {
    Tag
  },
  data() {
    return {
      work: work
    }
  },
  props: [
    'isEnglish'
  ]
}
</script>
