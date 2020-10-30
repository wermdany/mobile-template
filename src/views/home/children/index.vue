<template>
  <div class="home-index">
    home-index
    <self-button @click="click">123</self-button>
  </div>
</template>
<script>
import SelfButton from "@/components/Button";

export default {
  name: "homeIndex",
  components: {
    SelfButton
  },
  data() {
    return {
      use: false
    };
  },
  methods: {
    click() {
      this.use = !this.use;
      this.$store.dispatch("tabbar/toggleUse", !this.use);
    }
  }
};
</script>
