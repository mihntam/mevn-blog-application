<template>
  <div class="nav">
    <div class="nav-left">
      <i class="nav-icon fab fa-facebook-square"></i>
      <i class="nav-icon fab fa-twitter-square"></i>
      <i class="nav-icon fab fa-instagram-square"></i>
      <i class="nav-icon fab fa-pinterest-square"></i>
    </div>
    <div class="nav-center">
      <ul class="nav-menu">
        <li class="menu-item"><router-link to="/">HOME</router-link></li>
        <li class="menu-item"><router-link to="/about">ABOUT</router-link></li>
        <li class="menu-item" v-if="isLogin">
          <router-link to="/write">WRITE</router-link>
        </li>
        <!-- <li class="menu-item" v-if="isLogin">
          <router-link to="/setting">SETTING</router-link>
        </li> -->
        <li class="menu-item log-out" v-if="isLogin" @click="handleLogout">
          LOGOUT
        </li>
      </ul>
    </div>
    <div class="nav-right nav-menu">
      <router-link v-if="isLogin" to="/setting"
        ><img class="user-image" :src="user.profilePic" alt=""
      /></router-link>
      <div class="non-user" v-else>
        <li class="menu-item"><router-link to="/login">LOGIN</router-link></li>
        <li class="menu-item">
          <router-link to="/register">REGISTER</router-link>
        </li>
      </div>
      <i class="nav-search fas fa-search"></i>
    </div>
    <!-- {{ this.user.profilePic }} -->
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "NavBar",
  computed: { ...mapGetters(["user", "isLogin"]) },
  methods: {
    ...mapActions(["logOut"]),
    handleLogout() {
      this.logOut();
    },
  },
};
</script>

<style scoped>
.nav {
  width: 100%;
  height: 50px;
  background-color: white;
  position: sticky;
  top: 0;
  display: flex;
  z-index: 999;
  align-items: center;
  font-family: "Josefin Sans", sans-serif;
}

.nav-left,
.nav-right {
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-icon {
  font-size: 20px;
  margin-right: 10px;
  color: #444;
  cursor: pointer;
}

.nav-center {
  flex: 6;
}

.nav-menu {
  display: flex;
  justify-content: center;
  margin: 0;
  padding: 0;
  list-style: none;
}

.menu-item > a,
.log-out {
  color: #444;
  text-decoration: none;
  margin-right: 20px;
  font-size: 18px;
  font-weight: 300;
  cursor: pointer;
}

.menu-item > a:hover,
.log-out:hover {
  font-weight: 400;
  color: black;
}

.user-image {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  object-fit: contain;
}
.non-user {
  display: flex;
}

.nav-search {
  font-size: 18;
  color: #666;
  cursor: pointer;
  margin-left: 15px;
}
</style>