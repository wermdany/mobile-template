<template>
  <div class="tab-bar">
    <transition name="van-slide-up">
      <van-tabbar v-if="use" v-model="currentName" :active-color="primary">
        <van-tabbar-item
          v-for="item in list"
          @click="change(item.name)"
          :icon="item.icon"
          :key="item.id"
          :name="item.name"
        >
          <span>{{ item.text }}</span>
        </van-tabbar-item>
      </van-tabbar>
    </transition>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import styleVar from "@/styles/var.less";
import { mapState } from "vuex";
export default {
  name: "TabBar",
  components: {
    vanTabbar: Tabbar,
    vanTabbarItem: TabbarItem
  },
  data() {
    this.primary = styleVar.primary;
    this.list = [
      {
        to: "/settings/index",
        text: "index",
        icon: "home-o",
        name: "index"
      },
      {
        to: "/home/index",
        text: "home",
        icon: "friends-o",
        name: "home"
      },
      {
        to: "",
        text: "my",
        icon: "setting-o",
        name: "my"
      }
    ];
    return {};
  },
  computed: {
    ...mapState("tabbar", ["use", "name"]),
    currentName: {
      get() {
        return this.name;
      },
      set(val) {
        this.$store.dispatch("tabbar/setName", val);
      }
    }
  },
  methods: {
    change(current) {
      const item = this.list.find(v => v.name === current);
      if (item && item.to && this.$route.path != item.to) {
        this.$router.replace(item.to);
      }
    }
  }
};
</script>
<style lang="less">
.tab-bar {
  height: @systemTabBarHeight;
}
</style>
