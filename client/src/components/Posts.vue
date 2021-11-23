<template>
  <div class="posts">
    <Post v-for="post in posts" :key="post._id" :post="post" />
  </div>
</template>

<script>
import Post from "@/components/Post.vue";

export default {
  name: "Posts",
  props: {
    posts: undefined,
  },
  components: { Post },
};
</script>

<style scoped>
.posts {
  flex: 9;
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}
</style>
