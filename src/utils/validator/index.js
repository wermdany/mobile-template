import { isArray, isDef } from "@/utils/types";
import { warn } from "@/utils/error";

export function isVueRoutes(itemRoute, path) {
  if (!isArray(itemRoute)) {
    warn("[路由格式错误]", `文件 '${path}' 不是一个数组`);
  }
  itemRoute.forEach(item => {
    if (!isDef(item.path)) {
      throw warn("[路由格式错误]", `文件 '${path}' 缺少键 key`);
    }
    if (item.children) {
      isVueRoutes(item.children, path);
    }
  });
}
