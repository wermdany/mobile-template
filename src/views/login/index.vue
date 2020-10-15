<template>
  <div>
    <ul>
      <router-link to="/index"> to index</router-link>
      <input type="text" name="" id="" />
      <li v-for="i in 1000" :key="i">
        {{ i + "B" }}

        <span>111</span>
      </li>
    </ul>
    <div class="ca">11</div>
  </div>
</template>
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
