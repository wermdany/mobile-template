
const isDev = process.env.NODE_ENV === "development";
const publicPath = process.env.VUE_APP_PUBLIC_PATH;

module.exports = {
  publicPath: isDev ? "/" : publicPath,
};