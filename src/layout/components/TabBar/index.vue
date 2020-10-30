<template>
  <div class="tab-bar">
    <transition name="van-slide-up">
      <van-tabbar
        v-if="use"
        v-model="currentName"
        :active-color="primary"
        inactive-color="rgba(0,0,0,0.5)"
      >
        <van-tabbar-item
          v-for="item in list"
          @click="change(item.name)"
          :key="item.id"
          :name="item.name"
        >
          <template #icon="{active}">
            <img v-if="active" :src="item.icon.b" />
            <img v-else :src="item.icon.a" />
          </template>
          <span>{{ $t(item.text) }}</span>
        </van-tabbar-item>
      </van-tabbar>
    </transition>
  </div>
</template>
<script>
import { Tabbar, TabbarItem } from "vant";
import styleVar from "@/styles/var.less";
import { backToNative } from "@/utils/native";
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
        text: "Setting.Settings",
        icon: {
          a: require("@/assets/images/setting3x.png"),
          b: require("@/assets/images/settingSelected3x.png")
        },
        name: "Settings"
      },
      {
        to: "/home/index",
        text: "Setting.BNUPayHome",
        icon: {
          a: require("@/assets/images/home3x.png"),
          b: require("@/assets/images/homeSelected3x.png")
        },
        name: "BNUPayHome"
      },
      {
        to: "",
        text: "Setting.returnBNUPay",
        icon: {
          a: require("@/assets/images/backBNU3x.png"),
          b: require("@/assets/images/backBNUSelected3x.png")
        },
        name: "returnBNUPay"
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
      if (current === "returnBNUPay") {
        this.$nextTick(() => {
          //TODO: 延迟后跳转
          backToNative();
        });
        return;
      }
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
