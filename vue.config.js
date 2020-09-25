const path = require("path");
const resolvePath = file => path.join(__dirname, file);

console.log(resolvePath("./src/styles/vant-var.less"));

const isDev = process.env.NODE_ENV === "development";
const publicPath = process.env.VUE_APP_PUBLIC_PATH;
const isDeBug = process.env.VUE_APP_DEBUG === "true" ? true : false;
const VConsolePlugin = require("vconsole-webpack-plugin");

module.exports = {
  publicPath: isDev ? "/" : publicPath,
  css: {
    loaderOptions: {
      less: {
        modifyVars: {
          /**
           * webpack 在运行的时候会利用 less-loader 创建当前的变量树
           * 即从第一个 less 入口开始 如果 main.js 引入了 less 文件会根据引入顺序
           * 导入 less 文件 因此在这个树中  变量会作用至全局
           * 即在任何 less 中都可以使用这些变量
           * hack 是 less 的一个转译符号
           *
           * 最终编译为:
           * [main.js]入口之中的 less 内容
           * @hack:true;
           * @import "xxxxxx";
           * [...]之后读取到的 less 内容
           *
           *从未达到覆盖 vant 变量 和把 变量作用与全局
           */
          hack: `true;@import "${resolvePath("./src/styles/vant-var.less")}"`
        }
      }
    }
  },
  configureWebpack: {
    plugins: [
      new VConsolePlugin({
        enable: isDeBug
      })
    ]
  }
};
