<template>
  <div id="app">
    <MyHeader/>
    
    <section class="container">
      <button v-on:click="toggle">Japansese / English</button>

      <Profile v-bind:isEnglish="isEnglish"/>

      <Projects v-bind:isEnglish="isEnglish"/>

      <Career v-bind:isEnglish="isEnglish"/>

      <Link />

      <Publication />

      <Exhibition />
      
    </section>
  </div> <!-- end <div id="app"> -->
</template>

<style>
a:link    { color: #000000; }
a:visited { color: #000000; }
a:hover   { color: #ff0000; }
a:active  { color: #ff8000; }

.container {
    background: #FFFFFF;
}

h2 {
    font-size: 18px;
    padding: 0px 10px 10px 10px;
    text-align: center;
    border-bottom: solid 1px #D2D2D2;
}

h3 { font-size: 16px; }

h4 { font-size: 14px; }

p {
    font-size: 12px;
}

li {
    font-size: 12px;
    margin: 5px;
}

ul { list-style:none; }

</style>

<script>
import MyHeader from '~/components/MyHeader.vue'
import Profile from '~/components/profile/Profile.vue'
import Projects from '~/components/profile/Projects.vue'
import Career from '~/components/profile/Career.vue'
import Link from '~/components/profile/Link.vue'
import Publication from '~/components/profile/Publication.vue'
import Exhibition from '~/components/profile/Exhibition.vue'

export default {
  components: {
    MyHeader,
    Profile,
    Projects,
    Career,
    Link,
    Publication,
    Exhibition
  },
  data() {
    return {
      isEnglish: false
    }
  },
  methods: {
    toggle: function() {
      this.isEnglish = !this.isEnglish
    }
  }
}
</script>

<style>

</style>

