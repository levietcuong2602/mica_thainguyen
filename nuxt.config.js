// const nodeExternals = require('webpack-node-externals');

export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      },
      {
        rel: 'stylesheet',
        href: 'https://use.fontawesome.com/releases/v5.7.2/css/all.css'
      },
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: '#fff'
  },
  /*
   ** Global CSS
   */
  css: [
    '~/node_modules/simple-line-icons/css/simple-line-icons.css',
    'swiper/dist/css/swiper.css',
    '~/assets/css/style.css',
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    '~/plugins/bootstrap-vue.js',
    '~/plugins/element-ui.js',
    {
      src: '~plugins/vue-awesome-swiper',
      ssr: false
    },
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [],
  /*
   ** Build configuration
   */
  env: {
    browser: true
  },
  build: {
    /*
     ** You can extend webpack config here
     */
    vendor: [
      'vue-awesome-swiper'
    ],
    extend(config, ctx) {}
  }
}
