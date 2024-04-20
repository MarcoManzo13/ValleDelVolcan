import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

export default defineNuxtConfig({
  //...
  build: {
    transpile: ['vuetify'],
  },
  modules: [
    '@nuxt/fonts',
    'nuxt-icon',
    (_options, nuxt) => {
      nuxt.hooks.hook('vite:extendConfig', (config) => {
        // @ts-expect-error
        config.plugins.push(vuetify({ autoImport: true }))
      })
    },
    //...
  ],
  fonts : {
    families: [
      { name: 'Dosis', provider: 'google' },
    ],
    defaults: {
      weights: [400],
      styles: ['normal'],
    },
  },
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
    },
    pageTransition: { name: 'page', mode: 'out-in' }
},
})
