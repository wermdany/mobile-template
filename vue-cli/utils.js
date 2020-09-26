const path = require("path");
const rootPath = path.resolve(__dirname, "../");
const resolve = file => path.resolve(rootPath, file);
const join = file => path.join(rootPath, file);

module.exports = {
  resolve,
  join
};
