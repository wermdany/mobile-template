module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    //vant import setting see https://github.com/ant-design/babel-plugin-import
    [
      "import",
      {
        libraryName: "vant",
        libraryDirectory: "es",
        style: name => `${name}/style/less`
      },
      "vant"
    ]
  ]
};
