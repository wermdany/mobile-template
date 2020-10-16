<template>
  <header class="nav-bar" :class="{ 'no-placeholder': placeholder }">
    <van-nav-bar fixed :border="isBorder">
      <template #title>{{ title }}</template>
      <template #left>
        <div
          class="van-nav-bar__left--item"
          v-for="item in left"
          :key="item.id"
          v-on="item.event"
        >
          <component :is="item.icon" />
        </div>
      </template>
      <template #right>
        <div
          class="van-nav-bar__right--item"
          v-for="item in right"
          :key="item.id"
          v-on="item.event"
        >
          <component :is="item.icon" />
        </div>
      </template>
    </van-nav-bar>
  </header>
</template>
<script>
import { NavBar } from "vant";
import { layout } from "@/config";
import { mapState } from "vuex";
export default {
  name: "NavBar",
  components: {
    vanNavBar: NavBar
  },
  data() {
    this.isBorder = layout.NavBarIsBorder;
    return {};
  },
  computed: {
    ...mapState("navbar", ["title", "left", "right", "placeholder"])
  }
};
</script>
<style lang="less">
//设置 navbar 高度
.nav-bar {
  height: @systemNavBarHeight;
  color: @systemNavBarColor-placeholder;
  &.no-placeholder {
    height: auto;
    color: @systemNavBarColor;
  }
}
.no-placeholder {
  .van-nav-bar {
    background-color: @transparent;
  }
  .van-nav-bar__title {
    color: @white;
  }
}
.van-nav-bar__left,
.van-nav-bar__right {
  font-size: @systemNavBarLeftAndRightFontSize;
  padding: @systemNavBarLeftAndRightPadding;
  &:active {
    opacity: 1;
  }
}
.van-nav-bar__left--item,
.van-nav-bar__right--item {
  margin-right: @systemNavBarLeftAndRightSpace;
  .openTransition();
  &:active {
    .clickFeedBack();
  }
  &:last-child {
    margin-right: 0;
  }
}
</style>
