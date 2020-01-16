module.exports = {
  publicPath: process.env.NODE_ENV === 'production' ? './' : '/',
  runtimeCompiler: true,
  productionSourceMap: false,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableInSFC: true
    },
  },

}