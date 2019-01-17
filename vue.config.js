const VueComponentsIndex = require('./src/utils/webpack-plugin-vueComponentsIndex')

module.exports = {
  chainWebpack: (config) => {
    // cofigure vue-svg-loader
    const svgRule = config.module.rule('svg');
    svgRule.uses.clear();
    svgRule
      .use('vue-svg-loader')
      .loader('vue-svg-loader');
    // configure style-resource-loader
    const types = ['vue-modules', 'vue', 'normal-modules', 'normal'],
          path = require('path')
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
    // configure vue-components-list
    // const vueComponentsList = require('./src/utils/webpack-plugin-vueComponentsList')
    // config
    //   .plugin('vueComponentsList')
    //   .use(vueComponentsList, {rootPath: './src/components'})
  },
  configureWebpack: {
    plugins: [new VueComponentsIndex()]
  }
};