export default {
  head: {
    title: 'Конструктор интернет-магазина',
    htmlAttrs: {
      lang: 'ru'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  css: [
    '~assets/styles/main.scss',
    "boxicons/css/boxicons.min.css"
  ],

  styleResources: {
    scss: ['~assets/styles/*.scss']
  },

  components: true,

  modules: [
    '@nuxtjs/style-resources',
  ],
}
