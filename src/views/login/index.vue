<template>
  <div>
    <ul>
      <router-link to="/index"> to index</router-link>
      <li v-for="i in 1000" :key="i">{{ i + "B" }}</li>
    </ul>
  </div>
</template>
