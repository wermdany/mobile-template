module.exports = {
  plugins: {
    autoprefixer: {},
    //postcss-pxtorem setting see https://github.com/cuth/postcss-pxtorem
    "postcss-pxtorem": {
      rootValue: 37.5,
      propList: ["*"],
      minPixelValue: 2,
      unitPrecision: 6
    }
  }
};
