export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'mini-dnevnik-client',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  components:true,
  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/tailwindcss"
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    ['@nuxtjs/axios'],
    ['@nuxtjs/auth-next']
  ],

  axios: {
    //baseURL:'http://localhost:80',
    debug: process.env.AXIOS_DEBUG_MODE || false,
    headers: {
      "Content-Type": "application/json",
    },
    credentials: true,
    //proxy: false,
  },
  // proxy: {
  //   '/laravel': {
  //     target: 'https://laravel-auth.nuxtjs.app',
  //     //target: 'http://localhost',
  //     pathRewrite: { '^/laravel': '/' }
  //   }
  // },
  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: 'http://localhost',
        endpoints:{
          login:{ url: '/api/users/login', method: 'post',propertyName: "token"},
          logout:{ url: '/api/users/logout', method: 'post'},
          user:{ url: '/api/users/info', method: 'get'},
        }
      }
    }
  },
  
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
