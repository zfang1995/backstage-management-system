const path = require('path')
const VueComponentsIndex = require('./src/utils/vue-cli-plugin-componentsIndex/webpack-plugin-vueComponentsIndex')

module.exports = {
  chainWebpack: (config) => {
    // cofigure vue-svg-loader
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    // configure style-resource-loader
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
    function addStyleResource (rule) {
      rule.use('style-resource')
        .loader('style-resources-loader')
        .options({
          patterns: [
            path.resolve(__dirname, './src/assets/styles/index.scss'),
          ],
        })
    }
    types.forEach(type => addStyleResource(config.module.rule('scss').oneOf(type)))
    // configure vue-components-index
    // config.module
    //   .rule('vue')
    //     .test(/\.vue$/)
    //     .use('componentsIndex')
    //       .loader(path.resolve('./src/utils/webpack-loader-vueComponentsIndex'))
  },
  configureWebpack: {
    plugins: [new VueComponentsIndex()],
    devtool: 'source-map'
  }
};