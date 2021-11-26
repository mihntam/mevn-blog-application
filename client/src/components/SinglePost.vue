<template>
  <div class="single-post">
    <div class="singlePostWrapper">
      <img
        v-if="post.photo"
        class="single-post-img"
        :src="path + post.photo"
        alt=""
      />
      <h1 class="single-post-title">
        {{ post.title }}
        <div class="single-post-edit">
          <i class="single-post-icon far fa-edit"></i>
          <i class="single-post-icon far fa-trash-alt"></i>
        </div>
      </h1>
      <div class="single-post-info">
        <span>
          Author:
          <b class="single-post-author">
            <router-link
              :to="{
                path: '/',
                query: { user: post.username },
              }"
            >
              {{ post.username }}
            </router-link>
          </b>
        </span>
        <span>{{ new Date(post.createdAt).toDateString() }}</span>
      </div>
      <p class="single-post-desc">
        {{ post.desc }}
      </p>
    </div>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";

export default {
  name: "SinglePost",
  data() {
    return {
      post: {},
      path: "http://localhost:5000/images/",
    };
  },
  created() {
    const location = this.$route.fullPath;
    const path = location.split("/")[2];

    BlogService.getPost(path)
      .then((res) => {
        this.post = res.data;
      })
      .catch((error) => {
        console.log("There was an error:", error.res);
      });
  },
};
</script>

<style scoped>
.single-post {
  flex: 9;
}

.singlePostWrapper {
  padding: 20px;
  padding-right: 0;
}

.single-post-img {
  width: 100%;
  height: 300px;
  border-radius: 5px;
  object-fit: cover;
}

.single-post-title {
  text-align: center;
  margin: 10px;
  font-size: 28px;
  font-family: "Lora", serif;
}

.single-post-edit {
  float: right;
  font-size: 16px;
}

.single-post-icon {
  margin-left: 10px;
  cursor: pointer;
}

.single-post-icon:first-child {
  color: teal;
}
.single-post-icon:last-child {
  color: tomato;
}

.single-post-info {
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  font-size: 16px;
  color: #be9656;
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
}

.single-post-author {
  margin-left: 5px;
}

.single-post-desc {
  color: #666;
  font-size: 18px;
  line-height: 25px;
}

.single-post-desc::first-letter {
  margin-left: 20px;
  font-size: 30px;
  font-weight: 600;
}
</style>
