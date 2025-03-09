const { defineConfig } = require('@vue/cli-service')
const path = require("path");
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const Timestamp = new Date().getTime();
function resolve(dir) {
  return path.join(__dirname, dir);
}
const TerserPlugin = require('terser-webpack-plugin');

module.exports = defineConfig({
  transpileDependencies: true,
  productionSourceMap: false,
  publicPath: '/',
  assetsDir: 'static',
  filenameHashing: false,
  // integrity: true,
  pages: {
    index: {
      // page 的入口
      entry: 'src/main.js',
      // 模板来源
      template: 'public/index.html',
      // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Index Page',
      // 在这个页面中包含的块，默认情况下会包含
      // 提取出来的通用 chunk 和 vendor chunk。
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    // 当使用只有入口的字符串格式时，
    // 模板会被推导为 `public/subpage.html`
    // 并且如果找不到的话，就回退到 `public/index.html`。
    // 输出文件名会被推导为 `subpage.html`。
  },
  css: {
    // extract: false, // 是否使用css分离插件
    // extract: process.env.NODE_ENV === 'production', // 是否使用css分离插件
    /* extract: {
         filename: `assets/css/[name].${Timestamp}.css`,
         chunkFilename: `assets/css/chunk.[id].${Timestamp}.css`,
     },*/
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      scss: {
      },
    /*  postcss: {
        postcssOptions: {
          plugins: [
            require('postcss-pxtorem')({
              // 把px单位换算成rem单位
              rootValue: 16, // 换算的基数(设计图750的根字体为32)(需求：设计图1920根字体16)
              selectorBlackList: ['weui', 'mu'], // 忽略转换正则匹配项
              propList: ['*']
            })
          ]
        }
      }*/
    } // css预设器配置项
  },
  configureWebpack: {
    optimization: {
      minimize: true,
      minimizer: [new TerserPlugin()],
    },
    resolve: {
      fallback: {
        path: require.resolve('path-browserify'),
      },
      alias: {
        "@": resolve("src"),
        "public": resolve("public"),
        assets: resolve("src/assets"),
      },
    },
    // devtool: false,
    // devtool: 'cheap-source-map',
    // devtool: 'source-map',
    // devtool:process.env.NODE_ENV == "production"  ?  false :  'source-map'
    // devtool: 'eval-source-map',
    // devtool: 'eval',
    // devtool: 'hidden-source-map',
    // devtool: 'nosources-source-map',
    // devtool: 'cheap-module-source-map',
    // devtool: 'inline-source-map',
    plugins: [
        // new BundleAnalyzerPlugin()
    ]
  },
  chainWebpack: config => {
  }
})
