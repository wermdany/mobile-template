<template>
  <div id="app">
    <van-button icon="plus" @click="ch">{{ $t("common.cancel") }}</van-button>
  </div>
</template>
<script>
import { setLanguage } from "@/packages/vue-i18n";
import { Button, Dialog } from "vant";

export default {
  components: {
    vanButton: Button
  },
  mounted() {
    this.get();
    Dialog.alert({ title: "1", message: "2" });
  },
  methods: {
    get() {
      setLanguage("ja-JP");
    },
    ch() {
      setLanguage("en-US");
      Dialog.alert({ title: "1", message: "2" });
    }
  }
};
</script>
<style lang="less">
body {
  font-size: 2px;
}
</style>
