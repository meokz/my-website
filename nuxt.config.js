module.exports = {
  head: {
    title: 'Kazuki Otao / 大峠和基',
    meta: [
      { charset: 'utf-8' },
      { 'http-equiv': 'X-UA-Compatible', content: 'IE=edge' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/css/bootstrap.min.css"}
    ],
    script: [
      { src: "https://code.jquery.com/jquery-3.3.1.min.js"},
      { src: 'https://stackpath.bootstrapcdn.com/bootstrap/4.3.0/js/bootstrap.min.js' },
      { src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.0/umd/popper.min.js"}
    ]
  },
  loading: { color: '#3B8070' },
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

