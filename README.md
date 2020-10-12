# mobile-template

> 以 iPhone6 (375*667) 一倍设计稿为基准，划分十份设置 rem ，即 1rem = 37.5px ，高度兼顾自适应，其他按比例转化。

## 配置文件

### 和CSS变量相关的配置

1.  `src/styles/var.less`
2.  `src/styles/vant-var.less` 

以上两个文件修改

>原则上 1 是 2 的 父级，尽可能的在 2 中引用 1 的变量。

### 和项目相关的配置 (JS)

1. `src/config/*`

以上的位置寻找对应文件修改。

## 布局组件

主要有头部导航（NavBar）、主体（section）、底部标签栏（TabBar）三部分组成。

### 头部导航栏（NavBar）

基于 `vant-NavBar` 实现，



# sunliu