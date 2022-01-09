export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Daniel Philip Johnson',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: 'icon', type: 'image/png', sizes:"180x180", href: '/apple-touch-icon.png' },
      { rel: 'icon', type: 'image/png', sizes:"32x32", href: '/favicon-32x32.png' },
      { rel: 'icon', type: 'image/png', sizes:"16x16", href: '/favicon-16x16.png' },
      { rel: 'manifest',  href: '/site.webmanifest' }
    ]
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || 'www.danielphilipjohnson.com',
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~assets/styles/tailwind.css', 
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '~/plugins/composition-api.js',
    '~/plugins/rich-text-renderer.js',
    '~/plugins/jsonld.js'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: [
    '~/components',
    '~/components/atoms',
    '~/components/molecules',
    '~/components/organisms',
  ],


  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/typescript
    '@nuxt/typescript-build',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    '@nuxt/image',
    '@nuxtjs/google-analytics',
    '@nuxtjs/gtm',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    [
      "storyblok-nuxt",
      {
        accessToken: "8OqVvKidf8MtqBrCJeyLqAtt",
        cacheProvider: 'memory'
      },
      '@nuxtjs/sitemap',
      '@nuxt/image',
      
    ],
  ],
  image: {
    storyblok: {
      baseURL: 'https://img2.storyblok.com'
    },
    dir: 'assets/img'
  },
  gtm: {
    id: 'GTM-TTNR7QK'
  },
  googleAnalytics: {
    id: 'G-ZW19C938PS'
  },
  sitemap: {
    hostname: 'https://danielphilipjohnson.me/',
    gzip: true,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
  
}
