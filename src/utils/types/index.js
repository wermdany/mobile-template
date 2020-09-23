
const toString = Object.prototype.toString
/**
 *  获取类型
 */
export const getType = _ => toString.call(_)

export const isArray = _ => getType(_) === "[object Array]"

export const isObject = _ => getType(_) === "[object Object]"

export const isDef = _ => _ !== undefined && _ !== null