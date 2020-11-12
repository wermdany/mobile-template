<template>
  <div class="home-index">
    <p>过滤 emoji 表情输入</p>
    <van-field label="输入框" v-no-emoji v-model.trim="text"></van-field>
    <p>{{ text.length }}</p>
  </div>
</template>
<script>
import { Field } from "vant";
import { noEmoji } from "@/directives";
export default {
  name: "homeIndex",
  components: {
    vanField: Field
  },
  data() {
    return {
      text: ""
    };
  },
  directives: {
    noEmoji
  }
};
</script>
