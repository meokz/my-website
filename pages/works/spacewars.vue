<template>
  <div id="app">
    <MyHeader/>

    <section class="container">
      <WorkPage v-bind:project="project"/>

      <div class="row">
        <div class="work_caption">
          <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
          <p>Director / Scripting / Motion Graphcis / Physical Simulation / 3D Modeling</p>
          <h3><span class="glyphicon glyphicon-wrench"></span>使用ツール</h3>
          <p>Unity / C# / Blender / AfterEffects etc.</p>
          <h3><span class="glyphicon glyphicon-bookmark"></span>その他</h3>
          <p>中国高専コンピュータフェスティバル2015 ソフトウェア部門1位</p>
        </div>
      </div>

      <div class="row">
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL2">
            <img class="work_img img-responsive" v-bind:src="getImageURL2" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL3">
            <img class="work_img img-responsive" v-bind:src="getImageURL3" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL4">
            <img class="work_img img-responsive" v-bind:src="getImageURL4" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL5">
            <img class="work_img img-responsive" v-bind:src="getImageURL5" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL6">
            <img class="work_img img-responsive" v-bind:src="getImageURL6" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" v-bind:href="getImageURL">
            <img class="work_img img-responsive" v-bind:src="getImageURL" >
          </a>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const project = {
  "name": "spacewars",
  "title": "SpaceWars",
  "description_jp": "2人対戦型のゲーム。ゲームコントローラ対応. 12星座のキャラクターから1つ選び、固有スキルを使いこなして敵リーダーを倒すと勝利になります. プレイヤーは「攻撃」「召喚」「必殺技」の3つのコマンドを使い分け、味方リーダーの周りを固めたり、敵ユニットを蹴散らして攻撃していきます. ユニットはHPが0になるか、ステージから落とされると消滅します. 敵ユニットをステージから落として倒すと、もう1ターンの行動が可能. いろいろな戦略を楽しむだけでなく、グラフィクスエフェクトと物理演算による爽快なプレイを楽しむことができます. Unityによるゲームプログラミングを担当しました。",
  "description_en": "No english description.",
  "youtube": ""
}

export default {
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      project: project
    }
  },
  computed: {
    getImageURL: function() {
      return require("~/assets/works/" + this.project.name + "/img/img1.jpg")
    },
    getImageURL2: function() {
      return require("~/assets/works/" + this.project.name + "/img/img2.jpg")
    },
    getImageURL3: function() {
      return require("~/assets/works/" + this.project.name + "/img/img3.jpg")
    },
    getImageURL4: function() {
      return require("~/assets/works/" + this.project.name + "/img/img4.jpg")
    },
    getImageURL5: function() {
      return require("~/assets/works/" + this.project.name + "/img/img5.jpg")
    },
    getImageURL6: function() {
      return require("~/assets/works/" + this.project.name + "/img/img6.jpg")
    }
  }
}
</script>