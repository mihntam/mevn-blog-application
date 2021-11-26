<template>
  <div class="single-post">
    <div class="single-post-wrapper">
      <img
        v-if="post.photo"
        class="single-post-img"
        :src="path + post.photo"
        alt=""
      />
      <input
        v-if="updateMode"
        type="text"
        class="single-post-title-input"
        autoFocus
        v-model="post.title"
      />
      <h1 v-else class="single-post-title">
        {{ post.title }}
        <div v-if="post.username == user.username" class="single-post-edit">
          <i class="single-post-icon far fa-edit" @click="edit"></i>
          <i
            class="single-post-icon far fa-trash-alt"
            @click="handleDelete"
          ></i>
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
      <textarea
        v-if="updateMode"
        class="single-post-desc-input"
        v-model="post.desc"
      />
      <p v-else class="single-post-desc">
        {{ post.desc }}
      </p>
      <button
        v-if="updateMode"
        class="single-post-button"
        @click="handleUpdate"
      >
        Update
      </button>
    </div>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";
import { mapGetters } from "vuex";

export default {
  name: "SinglePost",
  data() {
    return {
      updateMode: false,
      title: "",
      desc: "",
      post: {},
      path: "http://localhost:5000/images/",
    };
  },
  computed: {
    ...mapGetters(["user"]),
  },
  methods: {
    edit() {
      this.updateMode = true;
    },
    handleUpdate() {
      BlogService.putPost(this.post._id, {
        username: this.user.username,
        title: this.post.title,
        desc: this.post.desc,
      })
        .then(() => {
          alert("This post has been updated!!!");
          this.updateMode = false;

          this.$router.push("/" + this.post._id);
        })
        .catch((error) => {
          console.log("There was an error:" + error.res);
        });
    },
    handleDelete() {
      BlogService.deletePost(this.post._id, {
        data: { username: this.user.username },
      })
        .then(() => {
          alert("The post has been deleted!!!");
        })
        .catch((error) => {
          console.log("There was an error:" + error.res);
        });
    },
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

.single-post-wrapper {
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

.single-post-title-input {
  display: flex;
  margin: 10px;
  font-family: "Lora", serif;
  font-size: 28px;
  text-align: center;
  border: none;
  color: gray;
  border-bottom: 1px solid lightgray;
}

.single-post-title-input:focus {
  outline: none;
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
  display: flex;
  color: #666;
  font-size: 18px;
  line-height: 25px;
}

.single-post-desc::first-letter {
  margin-left: 20px;
  font-size: 30px;
  font-weight: 600;
}
.single-post-desc-input {
  border: none;
  color: #666;
  font-size: 18px;
  line-height: 25px;
}

.single-post-desc-input:focus {
  outline: none;
}

.single-post-button {
  display: flex;
  width: 100px;
  border: none;
  background-color: teal;
  padding: 5px;
  color: white;
  border-radius: 5px;
  cursor: pointer;
  align-self: flex-end;
  margin-top: 20px;
}
</style>
