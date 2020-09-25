/**
 *  抛出一个错误
 * @export void
 * @param {String} title 错误标题
 * @param {String} message 错误信息
 */
export function warn(title, message) {
  const err = new Error();
  err.name = title;
  err.message = message;
  throw err;
}
