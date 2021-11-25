import Vue from "vue";
import Router from "vue-router";
import Home from "../pages/Home.vue";
import Write from "../pages/Write.vue";
import About from "../pages/About.vue";
import Login from "../pages/Login.vue";
import Register from "../pages/Register.vue";
import Setting from "../pages/Setting.vue";
import Single from "../pages/Single.vue";

Vue.use(Router);

export default new Router({
  data: {},
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home,
    },
    {
      path: "/write",
      name: "Write",
      component: Write,
    },
    {
      path: "/about",
      name: "About",
      component: About,
    },
    {
      path: "/login",
      name: "Login",
      component: Login,
    },
    {
      path: "/register",
      name: "Register",
      component: Register,
    },
    {
      path: "/setting",
      name: "Setting",
      component: Setting,
    },
    {
      path: "/post/:postId",
      name: "Post",
      component: Single,
    },
    {
      path: "*",
      redirect: "/",
    },
  ],
});
