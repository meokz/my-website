module.exports = {
  head: {
    htmlAttrs: {
      prefix: 'og: http://ogp.me/ns#'
    },
    // title: 'Kazuki Otao / 大峠和基',
    titleTemplate: '%s | Kazuki Otao / 大峠和基',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Here is Kazuki OTAO\'s Portforlio.Programming, Art, Novel, etc.' },
      { hid: 'og:site_name', property: 'og:site_name', content: 'Kazuki Otao / 大峠和基' },
      { hid: 'og:type', property: 'og:type', content: 'website' },
      { hid: 'og:url', property: 'og:url', content: 'http://meo-cs.net/' },
      { hid: 'og:title', property: 'og:title', content: 'Kazuki Otao / 大峠和基' },
      { hid: 'og:description', property: 'og:description', content: 'Here is Kazuki OTAO\'s Portforlio.Programming, Art, Novel, etc.' },
      { hid: 'og:image', property: 'og:image', content: 'http://meo-cs.net/profile/portrait/img01.jpg' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon/favicon.ico' },
      { rel: "stylesheet", href: "/css-js/honoka/css/bootstrap.min.css"}
    ],
    script: [
      { src: "/css-js/jquery-3.2.1.min.js"},
      { src: "/css-js/honoka/js/bootstrap.min.js"}
    ]
  },
  loading: { color: '#3B8070' },
  mode: 'universal',
  build: {
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}

