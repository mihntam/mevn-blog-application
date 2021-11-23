<template>
  <div>
    <header-ban />
    <div class="home">
      <posts :posts="posts" />
      <side-bar />
    </div>
  </div>
</template>

<script>
import HeaderBan from "../components/HeaderBan.vue";
import Posts from "../components/Posts.vue";
import SideBar from "../components/SideBar.vue";

import PostService from "../services/PostService";

export default {
  name: "Home",
  components: {
    HeaderBan,
    Posts,
    SideBar,
  },
  data() {
    return {
      posts: [],
    };
  },
  created() {
    PostService.getPosts()
      .then((res) => {
        this.posts = res.data;
      })
      .catch((error) => {
        console.log("There was an error:" + error.res);
      });
  },
};
</script>

<style scoped>
.home {
  display: flex;
}
</style>