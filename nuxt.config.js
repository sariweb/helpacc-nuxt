/* eslint-disable no-console */
import colors from 'vuetify/es5/util/colors'
import axios from 'axios'

const PROD_URL = 'http://helpacc.ru'
const siteURL = process.dev ? process.env.DEV_URL : PROD_URL

const dynamicRoutes = () => {
  const routes = axios
    .get(`${siteURL}/wp-json/wp/v2/posts?page=1&per_page=20`)
    .then((res) => {
      return res.data.map(post => `/${post.slug}`)
    })
  console.log(routes)
  return routes
}

export default {
  // Target (https://go.nuxtjs.dev/config-target)
  target: 'static',

  // Global page headers (https://go.nuxtjs.dev/config-head)
  head: {
    titleTemplate: '%s - helpacc-nuxt',
    title: 'helpacc-nuxt',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css?family=Alata|Open+Sans&display=swap'
      }
    ]
  },

  // Customize the progress-bar color
  loading: { color: '#eee' },

  // Global CSS (https://go.nuxtjs.dev/config-css)
  css: ['~/assets/mixins.scss'],

  // Plugins to run before rendering page (https://go.nuxtjs.dev/config-plugins)
  plugins: [
    '~/plugins/posts.server.js',
    '~/plugins/settings.server.js',
    '~/plugins/tags.server.js',
    '~/plugins/categories.server.js',
    '~/plugins/dateformat.js'
  ],

  generate: {
    routes: dynamicRoutes
  },

  // Auto import components (https://go.nuxtjs.dev/config-components)
  components: true,

  // Modules for dev and build (recommended) (https://go.nuxtjs.dev/config-modules)
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/vuetify
    '@nuxtjs/vuetify',
    '@nuxtjs/dotenv'
  ],

  // Modules (https://go.nuxtjs.dev/config-modules)
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios'
  ],

  // Build configuration
  build: {
    /*
     ** You can extend webpack config here
     */
    extend (config, ctx) {}
  },

  // Axios module configuration (https://go.nuxtjs.dev/config-axios)
  axios: {},

  // Vuetify module configuration (https://go.nuxtjs.dev/config-vuetify)
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: true,
      themes: {
        dark: {
          primary: colors.blue.darken2,
          accent: colors.grey.darken3,
          secondary: colors.amber.darken3,
          info: colors.teal.lighten1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      }
    }
  }
}
