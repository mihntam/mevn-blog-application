<template>
  <div class="single">
    <single-post />
    <side-bar />
  </div>
</template>

<script>
import SinglePost from "../components/SinglePost.vue";
import SideBar from "../components/SideBar.vue";

export default {
  name: "Single",
  components: {
    SinglePost,
    SideBar,
  },
};
</script>

<style scoped>
.single {
  display: flex;
}
</style>
