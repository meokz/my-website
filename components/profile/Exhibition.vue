<template>
  <div class="exhibition">
    <h2>Exhibition</h2>
    <div>
      <ol>
        <Project v-for="exhibition in exhibitions" v-bind:key="exhibition.title" v-bind:project="exhibition"/>
      </ol>
    </div>
  </div> 
</template>

<style>

</style>

<script>
import Project from '~/components/profile/Project.vue'

const exhibitions = [
  {
    title: "<p>Shinnosuke Ando, <u>Kazuki Otao</u>, Kazuki Takazawa, Yoichi Ochiai. 2018.</p><p><u>Glass beads display</u></p><p>Media Ambition Tokyo, Roppongi Hills, Tokyo. 2018.2.9-25</p>",
    url: "http://mediaambitiontokyo.jp/glassbeadsdisplay/",
    image_url: "glassbeads.jpg",
  }, 
  {
    title: "<p>森篤史, <u>大峠和基</u>. 2017.</p><p><u>ピタゴラメーカー</u></p><p>「俺のピタゴラ」展, 茨城. 2017.12.16-17</p>",
    url: "https://digitalcontents2017.github.io/",
    image_url: "pitagora-ten.png"
  },
  {
    title: "<p>Digital Nature Group at the University of Tsukuba, Pixie Dust Technologies Inc. 2017.</p><p><u>Recomposition of Human Presence: Waves, Material, and Intelligence</u></p><p>Ars Electronica Festival, Linz, Austria, 2017.09.07-11</p>",
    url: "https://www.aec.at/ai/de/recomposition-of-human-presence/",
    image_url: "ars2017.jpg"
  },
  {
    title: "<p>徳山高専祭メイン部署. 2015.</p><p><u>Re:ink</u></p><p>徳山高専 高専祭, 山口, 2015.10.31-11.1</p>",
    url: "./works/reink/",
    image_url: "reink.jpg"
  },
  {
    title: "<p>徳山高専祭メイン部署. 2014.</p><p><u>大蛇の乱</u></p><p>徳山高専 高専祭, 山口, 2014.11.1-11.2</p>",
    url: "./works/taijyanoran/",
    image_url: "taijyanoran.jpg"
  },
]

export default {
  components: {
    Project
  }, 
  data() {
    return {
      exhibitions: exhibitions
    }
  },
}

</script>