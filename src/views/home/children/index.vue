<template>
  <div class="home-index">
    <p>过滤 emoji 表情输入</p>
    <p>原始</p>
    <input type="text" v-model.trim="text2" v-input-limit="emojiReg" />
  </div>
</template>
<script>
import inputLimit from "@/directives/limit";
import emojiReg from "emoji-regex";
export default {
  name: "homeIndex",
  data() {
    this.emojiReg = emojiReg();
    return {
      text: "",
      text1: "",
      text2: "",
      text3: ""
    };
  },
  directives: {
    inputLimit
  }
};
</script>
