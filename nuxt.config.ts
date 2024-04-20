import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxtjs/google-fonts',
    'nuxt-icon',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  app: {
    head: {
        title: "Valle del Volcán",
        meta: [
            { name: 'description', content: 'Página web para la purificadora Valle del Volcán'}
        ],
        link: [
          { rel: 'stylesheet', href: 'https://fonts.google.com/share?selection.family=Dosis:wght@200..800'}
        ]
    },
    pageTransition: { name: 'page', mode: 'out-in' }
},
})
