<template>
  <div class="home-index">
    <p>过滤 emoji 表情输入</p>
    <van-field
      label="输入"
      type="textarea"
      v-model.trim="text"
      v-input-limit="emojiReg"
    ></van-field>
    <p>原始</p>
    <input type="text" v-model.trim="text2" v-input-limit="emojiReg" />
  </div>
</template>
<script>
import { Field } from "vant";
import inputLimit from "@/directives/limit";
import emojiReg from "emoji-regex";
export default {
  name: "homeIndex",
  components: {
    vanField: Field
  },
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
