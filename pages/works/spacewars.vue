<template>
  <div>
    <WorkPage v-bind:project="project"/>

    <div class="row">
      <div class="work_caption">
        <h3><span class="glyphicon glyphicon-user"></span>担当</h3>
        <p>Director / Scripting / Motion Graphcis / Physical Simulation / 3D Modeling</p>
        <h3><span class="glyphicon glyphicon-wrench"></span>使用ツール</h3>
        <p>Unity / C# / Blender / AfterEffects etc.</p>
        <h3><span class="glyphicon glyphicon-bookmark"></span>その他</h3>
        <p><a href="http://comfes2015.github.io/" target="_blank">中国高専コンピュータフェスティバル2015 ソフトウェア部門1位</a></p>
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
  </div>
</template>

<script>
import Meta from '~/assets/Meta.js'
import WorkPage from '~/components/works/WorkPage.vue'

const title = "SpaceWars"

export default {
  mixins: [Meta],
  layout: 'project',
  components: {
    WorkPage
  },
  data() {
    return {
      meta: {
        title: title,
        description: '2人対戦型のゲーム。ゲームコントローラ対応.',
        type: 'article',
        url: 'https://kazukiotao.com/works/spacewars/',
        image: 'https://kazukiotao.com/works/spacewars/img/img1.jpg',
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
}
</script>
