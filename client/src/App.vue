<template>
  <div class="app">
    <nav-bar />
    <router-view />
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import router from "./router";

export default {
  name: "App",
  router,
  components: {
    NavBar,
  },
};
</script>

<style>
</style>
