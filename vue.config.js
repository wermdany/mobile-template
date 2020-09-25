const isDev = process.env.NODE_ENV === "development";
const publicPath = process.env.VUE_APP_PUBLIC_PATH;
const isDeBug = process.env.VUE_APP_DEBUG === "true" ? true : false;
const VConsolePlugin = require("vconsole-webpack-plugin");

module.exports = {
  publicPath: isDev ? "/" : publicPath,
  configureWebpack: {
    plugins: [
      new VConsolePlugin({
        enable: isDeBug
      })
    ]
  }
};
