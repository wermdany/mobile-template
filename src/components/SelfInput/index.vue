<template>
  <input v-bind="$attrs" v-on="$listeners" />
</template>
<script>
export default {
  name: "SelfInput",
  inheritAttrs: false
};
</script>
