<template>
  
    <div>
      <MyHeader/>
      
      <section class="container">
        <app-logo/>
        <div class="row">
          <div class="col-xs-12 col-sm-4">
            <h1 class="title">
              a
            </h1>
          </div>
          <div class="col-xs-12 col-sm-4">
            <h2 class="subtitle">
              Nuxt.js project
            </h2>
          </div>
        </div>
        <div class="links">
          <a
            href="https://nuxtjs.org/"
            target="_blank"
            class="button--green">Documentation</a>
          <a
            href="https://github.com/nuxt/nuxt.js"
            target="_blank"
            class="button--grey">GitHub</a>
        </div>
      </section>
    </div>
</template>

<script>
import MyHeader from '~/components/MyHeader.vue'
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo,
    MyHeader
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

