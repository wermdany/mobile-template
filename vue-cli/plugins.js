const VConsolePlugin = require("vconsole-webpack-plugin");
const { isDebug } = require("./env");

const plugins = [
  new VConsolePlugin({
    enable: isDebug
  })
];

module.exports = plugins;
