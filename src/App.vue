<template>
  <div id="app">
    <van-button>{{ $t("common.cancel") }}</van-button>
  </div>
</template>
<script>
import { setLanguage } from "@/packages/vue-i18n";
import { Button } from "vant";
export default {
  components: {
    vanButton: Button
  },
  mounted() {
    this.get();
  },
  methods: {
    get() {
      setLanguage("zh-CN");
    }
  }
};
</script>
<style lang="less">
body {
  font-size: 1PX;
}
</style>
