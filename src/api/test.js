import A from "@/packages/axios";
/**
 * 实例
 * 一个请求方法的描述
 * @author xxx
 * @export
 * @param {*} data
 * @returns
 */
export function test(data) {
  return A({
    url: "test",
    method: "get",
    data
  });
}
