
const env = process.env;

const NODE_ENV = env.NODE_ENV;
console.log(env)
/**
 * 是否是开发环境
 */
export const isDev = () => NODE_ENV === "development"