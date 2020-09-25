import { RE_Base64 } from "../regexp";

const toString = Object.prototype.toString;
/**
 *  获取类型
 */
export const getType = _ => toString.call(_);
/**
 *  是否是数组
 */
export const isArray = _ => getType(_) === "[object Array]";
/**
 *  是否是对象
 */
export const isObject = _ => getType(_) === "[object Object]";
/**
 *  是否定义
 */
export const isDef = _ => _ !== undefined && _ !== null;
/**
 *  是否是函数
 */
export const isFun = _ => getType(_) === "[object Function]";
/**
 *  是否是波尔类型
 */
export const isBool = _ => getType(_) === "[object Boolean]";
/**
 *  是否是 NaN
 */
export const isNaN = _ => _ !== _;
/**
 *  是否是数字
 */
export const isNumber = _ => getType(_) === "[object Number]" && !isNaN(_);
/**
 *  是否是 Promise
 */
export const isPromise = _ => isDef(_) && isFun(_.then) && isFun(_.catch);
/**
 *  是否是字符串
 */
export const isString = _ => getType(_) === "[object String]";
/**
 *  是否是 Undefined
 */
export const isUndefined = _ => getType(_) === "[object Undefined]";
/**
 *  是否是 Null
 */
export const isNull = _ => getType(_) === "[object Null]";
/**
 *  是否是 RegExp
 */
export const isRegExp = _ => getType(_) === "[object RegExp]";
/**
 *  是否是 Date
 */
export const isDate = _ => getType(_) === "[object Date]";
/**
 *  是否是错误对象
 */
export const isError = _ => getType(_) === "[object Error]";
/**
 *  是否是 File
 */
export const isFile = _ => getType(_) === "[object File]";
/**
 *  是否是 Blob
 */
export const isBlob = _ => getType(_) === "[object Blob]";
/**
 * 是否是 Base64 数据
 */
export const isBase64 = _ => RE_Base64.test(_);
