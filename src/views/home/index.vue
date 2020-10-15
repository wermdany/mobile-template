<template>
  <div>
    <ul>
      <router-link to="/a">to a</router-link>
      {{
        $t("common.cancel")
      }}
      <li v-for="i in 1000" :key="i">{{ i + "A" }}</li>
    </ul>
  </div>
</template>
<script>
