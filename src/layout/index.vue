<template>
  <div class="mobile-layout">
    <nav-bar />
    <section>
      <router-view />
    </section>
    <tab-bar></tab-bar>
  </div>
</template>
<script>
import NavBar from "./components/NavBar";
import TabBar from "./components/TabBar";
export default {
  name: "MobileLayout",
  components: {
    NavBar,
    TabBar
  }
};
</script>
