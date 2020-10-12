<template>
  <header class="nav-bar">
    <van-nav-bar fixed :border="isBorder">
      <template #title>{{ navBar.title }}</template>
      <template #left>111111111</template>
      <template #right>111111111</template>
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
    ...mapState("system", ["navBar"])
  }
};
</script>
<style lang="less">
.nav-bar {
  height: @systemNavBarHeight;
}
.van-nav-bar__title {
  font-size: @systemNavBarTitleSize;
}
</style>
