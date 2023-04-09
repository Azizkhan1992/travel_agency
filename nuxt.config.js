export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'travel_agency',
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
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
			{ src: 'https://code.iconify.design/2/2.0.3/iconify.min.js', body: true },
		],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    'ant-design-vue/dist/antd.css',
    '~/styles/styles.scss',
    '@fortawesome/fontawesome-svg-core/styles.css'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    '@/plugins/antd-ui',
    '@/plugins/fontawesome.js',
    // { src: '~/plugins/swiper.client.js', mode: 'client' }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    '@nuxtjs/i18n'
  ],
  i18n: {
    locales: [
      {
        code: 'uz',
        name: 'O\'zbek'
      },
      {
        code: 'en',
        name: 'English'
      },
      {
        code: 'ru',
        name: 'Русский'
      }
    ],
    defaultLocale: 'uz',
    // noPrefixDefaultLocale: true,
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected'
    },
    switchLocalePath: '/:lang/:route',
    setLocaleCookie: true,
    getLocaleCookie: 'i18n_loc',
    vueI18n: {
      fallbackLocale: 'ru',
      messages: {
        uz: require('./locales/uz.json'),
        en: require('./locales/en.json'),
        ru: require('./locales/ru.json'),
      },
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
