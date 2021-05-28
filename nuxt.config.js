import colors from 'vuetify/es5/util/colors'

export default {
  ssr: false,  
  target: 'static',
  
  head: {
    title: 'Nuxt Page Scroll',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Test Nuxt page scrolling' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
  },
  
  css: [
  ],
 
  plugins: [
    
  ],
  
  components: true,
  
  buildModules: [
    '@nuxtjs/vuetify',
  ],
  
  modules: [
    
  ],
  
  vuetify: {
    customVariables: ['~/assets/variables.scss'],
    theme: {
      dark: false,
      themes: {
        light: {
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
  },
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  }
}
