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
          <a class="thumbnail" href="/works/spacewars/img/img2.jpg">
            <img class="work_img img-responsive" src="/works/spacewars/img/img2.jpg" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/spacewars/img/img3.jpg">
            <img class="work_img img-responsive" src="/works/spacewars/img/img3.jpg" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/spacewars/img/img4.jpg">
            <img class="work_img img-responsive" src="/works/spacewars/img/img4.jpg" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/spacewars/img/img5.jpg">
            <img class="work_img img-responsive" src="/works/spacewars/img/img5.jpg" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/spacewars/img/img6.jpg">
            <img class="work_img img-responsive" src="/works/spacewars/img/img6.jpg" >
          </a>
        </div>
        <div class="col-xs-12 col-sm-6">
          <a class="thumbnail" href="/works/spacewars/img/img1.jpg">
            <img class="work_img img-responsive" src="/works/spacewars/img/img1.jpg" >
          </a>
        </div>
      </div>
      
    </section>
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import MyHeader from '~/components/MyHeader.vue'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "SpaceWars"

export default {
  mixins: [Meta],
  components: {
    MyHeader,
    WorkPage
  },
  data() {
    return {
      meta: {
        title: title,
        description: '2人対戦型のゲーム。ゲームコントローラ対応.',
        type: 'article',
        url: 'https://meo-cs.net/works/spacewars/',
        image: 'https://meo-cs.net/works/spacewars/img/img1.jpg',
      },
      project: {
        "name": "spacewars",
        "title": title,
        "description_jp": "2人対戦型のゲーム。ゲームコントローラ対応. 12星座のキャラクターから1つ選び、固有スキルを使いこなして敵リーダーを倒すと勝利になります. プレイヤーは「攻撃」「召喚」「必殺技」の3つのコマンドを使い分け、味方リーダーの周りを固めたり、敵ユニットを蹴散らして攻撃していきます. ユニットはHPが0になるか、ステージから落とされると消滅します. 敵ユニットをステージから落として倒すと、もう1ターンの行動が可能. いろいろな戦略を楽しむだけでなく、グラフィクスエフェクトと物理演算による爽快なプレイを楽しむことができます. Unityによるゲームプログラミングを担当しました。",
        "description_en": "No english description.",
        "youtube": ""
      }
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