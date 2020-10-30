<template>
  <header v-if="use" class="nav-bar" :class="{ 'no-placeholder': placeholder }">
    <transition name="van-slide-down">
      <van-nav-bar fixed :border="isBorder">
        <template #title>
          <component v-if="isIcon" :is="title.content" />
          <span v-if="!isIcon">{{ title.content }}</span>
        </template>
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
    </transition>
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
    ...mapState("navbar", ["title", "left", "right", "placeholder", "use"]),
    isIcon() {
      return this.title.type === "icon";
    }
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
.van-nav-bar {
  background: @systemNavBarBackgroundColor-placeholder;
}
.no-placeholder {
  .van-nav-bar {
    background: @transparent;
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
