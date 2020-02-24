module.exports = {
    configureWebpack: {
      resolve: {
        alias: {
          'components': '@/components',
          'content': 'components/content',
          'current':'@/current' ,
          'common': 'components/common',
          'assets': '@/assets',
          'network': '@/network',
          'views': '@/views',
        }
      }
    }
  }
