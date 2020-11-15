<template>
  <div class="home-index">
    <p>过滤 emoji 表情输入</p>
    <van-field label="输入" v-model.trim="text" v-no-emoji></van-field>
    <p>输入1</p>
    <self-input type="text" v-model.trim="text1" v-no-emoji />
    <p>输入1</p>
    <self-input type="text" v-model.trim="text3" v-no-emoji />
    <p>原始</p>
    <input type="text" v-model.trim="text2" v-no-emoji />
  </div>
</template>
<script>
import { noEmoji } from "@/directives";
import SelfInput from "@/components/SelfInput";
import { Field } from "vant";
export default {
  name: "homeIndex",
  components: {
    vanField: Field,
    SelfInput
  },
  data() {
    return {
      text: "",
      text1: "",
      text2: "",
      text3: ""
    };
  },
  mounted() {
    console.log(this.$refs.i);
  },
  methods: {
    focus() {
      const scrollTop = document.documentElement.scrollTop;
      const pageYOffset = window.pageYOffset;
      const body = document.body.scrollTop;
      // window.scrollTo(0, e.offsetTop);

      console.log(window.screenTop);
      console.log(scrollTop, pageYOffset, body);
    }
  },
  directives: {
    noEmoji
  }
};
</script>
