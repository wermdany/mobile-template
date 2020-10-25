const less = require("./vue-cli/less");
const plugins = require("./vue-cli/plugins");
const { getEnv, isDev } = require("./vue-cli/env");
const ENV = getEnv();

console.log(ENV);

const publicPath = ENV.VUE_APP_PUBLIC_PATH;

module.exports = {
  publicPath: isDev ? "/" : publicPath,
  productionSourceMap: false,
  css: {
    loaderOptions: {
      less: less
    }
  },
  configureWebpack: {
    devtool: "source-map",
    plugins: plugins
  }
};
