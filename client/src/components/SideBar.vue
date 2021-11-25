<template>
  <div class="side-bar">
    <div class="item">
      <span class="title">ABOUT ME</span>
      <img
        src="https://64.media.tumblr.com/c081f03eed64c2fc7e44c5302629c9e0/tumblr_oqphqntx3W1qbd81ro1_1280.jpg"
        alt=""
      />
      <p class="content">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
    </div>
    <div class="item">
      <span class="title">CATEGORIES</span>
      <ul class="cat">
        <li class="cat-item" v-for="cat in categories" :key="cat._id">
          <router-link
            :to="{
              path: '/',
              query: { cat: cat.name },
            }"
          >
            {{ cat.name }}
          </router-link>
        </li>
      </ul>
    </div>
    <div class="item">
      <span class="title">FOLLOW US</span>
      <div class="social">
        <i class="side-icon fab fa-facebook-square"></i>
        <i class="side-icon fab fa-twitter-square"></i>
        <i class="side-icon fab fa-instagram-square"></i>
        <i class="side-icon fab fa-pinterest-square"></i>
      </div>
    </div>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";

export default {
  name: "SideBar",
  data() {
    return {
      categories: [],
    };
  },
  created() {
    BlogService.getCats()
      .then((res) => {
        this.categories = res.data;
      })
      .catch((error) => {
        console.log("There was an error:" + error.res);
      });
  },
};
</script>

<style scoped>
.side-bar {
  flex: 3;
  height: fit-content;
  margin: 20px;
  padding-bottom: 30px;
  background-color: #fdfbfb;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title {
  margin: 10px;
  padding: 5px;
  width: 80%;
  border-top: solid 1px #a7a4a4;
  border-bottom: solid 1px #a7a4a4;
  text-align: center;
  font-family: "Varela Round", sans-serif;
  font-size: 12px;
  line-height: 19px;
  color: #222222;
  font-weight: 600;
}

.item > img {
  margin-top: 15px;
  width: 250px;
  height: 250px;
  object-fit: cover;
}

.item > p {
  padding: 30px;
}

.cat {
  list-style-type: none;
  margin-bottom: 30px;
}

.cat-item {
  display: inline-block;
  width: 50%;
  margin-top: 15px;
  cursor: pointer;
}

.social {
  margin-top: 15px;
  width: 250px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.side-icon {
  font-size: 16px;
  margin-left: 10px;
}
</style>
