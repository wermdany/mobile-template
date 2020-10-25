<template>
  <div>
    <ul>
      <input type="text" name="" id="" />
      <li v-for="i in 1000" :key="i">
        {{ i + "B" }}
        <router-link to="/index"> to index</router-link>
        <span>111</span>
      </li>
    </ul>
    <div class="ca">11</div>
  </div>
</template>
<script>
export default {
  name: "login",
  mounted() {
    this.a();
  },
  methods: {
    a() {
      console.log(this.a);
    }
  }
};
</script>
<style lang="less" scoped>
li {
  writing-mode: vertical-lr;
  > span {
    writing-mode: horizontal-tb;
  }
}
.ca {
  position: fixed;
  bottom: 15px;
}
</style>
