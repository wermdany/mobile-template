// layout navBar config

import { back } from "@/router";

/************************** NavBar ***************************/

/**
 * navBar 是否显示下边框 在主体底色与 navBar 相同颜色时有更好的区分
 */
export const NavBarIsBorder = true;
/**
 * navBar 默认显示的标题，它会在页面每次改变时设置
 */
export const NavBarDefaultTitle = {
  type: "text",
  content: "默认标题"
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

/************************** TabBar ***************************/

/**
 * 是否使用 tabBar
 */
export const TabBarDefaultUse = true;
