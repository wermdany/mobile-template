// layout navBar config

import { back } from "@/router";
import { primary, deepPrimary } from "@/styles/var.less";
/**
 * navBar 是否显示下边框 在主体底色与 navBar 相同颜色时有更好的区分
 */
export const NavBarIsBorder = false;
/**
 * navBar 默认显示的标题，它会在页面每次改变时设置
 */
export const NavBarDefaultTitle = {
  type: "icon",
  content: () => import("@/layout/icons/BNUPay")
};
/**
 * navBar 默认右侧的 icon 配置信息，它会在页面每次改变时设置
 */
export const NavBarDefaultLeft = [
  {
    icon: () => import("@/layout/icons/GoBack"),
    event: { click: () => back() }
  }
];
/**
 * navBar 默认右侧的 icon配置信息 ，它会在页面每次改变时设置
 */
export const NavBarDefaultRight = [];
/**
 * navBar 默认样式，它会在页面每次改变时设置
 */
export const NavBarDefaultStyles = {
  background: `linear-gradient(180deg,${primary} 0%,${deepPrimary} 100%)`,
  color: "white"
};

/************************** TabBar ***************************/
/**
 * 是否使用 tabBar
 */
export const TabBarDefaultUse = true;
