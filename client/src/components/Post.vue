<template>
  <div class="post">
    <img v-if="post.photo" class="post-img" :src="path + post.photo" alt="" />
    <div class="post-info">
      <div class="post-cats">
        <span
          class="post-cat"
          v-for="(categories, index) in post.categories"
          :key="index"
        >
          {{ categories }}
        </span>
      </div>
      <router-link
        :to="{
          name: 'Post',
          params: { postId: post._id },
        }"
      >
        <span class="post-title"> {{ post.title }} </span>
      </router-link>
      <hr />
      <span class="post-date">{{
        new Date(post.createdAt).toDateString()
      }}</span>
    </div>
    <p class="post-desc">
      {{ post.desc }}
    </p>
  </div>
</template>

<script>
export default {
  name: "Post",
  props: {
    post: Object,
  },
  data() {
    return {
      path: "http://localhost:5000/images/",
    };
  },
};
</script>

<style scoped>
.post {
  width: 385px;
  margin: 0px 25px 40px 25px;
  display: flex;
  flex-direction: column;
}

.post-img {
  width: 385px;
  height: 280px;
  object-fit: cover;
  border-radius: 7px;
}

.post-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.post-cat {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 11px;
  color: #be9656;
  line-height: 19px;
  margin-top: 15px;
  margin-right: 10px;
  cursor: pointer;
}

.post-title {
  font-family: "Josefin Sans", Arial, Helvetica, sans-serif;
  font-size: 24px;
  font-weight: 900;
  margin-top: 15px;
  cursor: pointer;
}

.post-date {
  font-family: "Lora", serif;
  font-style: italic;
  font-size: 13px;
  font-weight: 400;
  color: #999999;
  margin-top: 15px;
}

.post-desc {
  font-family: "Varela Round", Arial, Helvetica, sans-serif;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #444444;
  margin-top: 15px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
</style>
