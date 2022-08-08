const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  // 方式一：直接通过CLI提供给我们的选项来配置：
  outputDir: './build',
  publicPath: './',

  // 方式二：通过configureWebpack修改webpack的配置：
  // configureWebpack: {
  //   resolve: {
  //     alias: {
  //       views: '@/views'
  //     }
  //   }
  // }
  // configureWebpack: (config) => {
  //   config.resolve.alias = {
  //     '@': path.resolve(__dirname, './src'),
  //     components: '@/components',
  //     common: '@/common',
  //     utils: '@/utils',
  //     api: '@/api',
  //     views: '@/views'
  //   }
  // }

  // 方式三：通过chainWebpack修改webpack的配置：
  chainWebpack: (config) => {
    config.resolve.alias
      .set('@', path.resolve(__dirname, 'src'))
      .set('views', '@/views')
  },
  configureWebpack: {
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
})
