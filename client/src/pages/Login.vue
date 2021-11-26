<template>
  <div class="login">
    <span class="title">Login</span>
    <form class="form" @submit.prevent="handleLogin">
      <label>username</label>
      <input
        class="input"
        type="text"
        placeholder="Enter your username..."
        required
        v-model="login.username"
      />
      <label>Password</label>
      <input
        class="input"
        type="password"
        placeholder="Enter your password..."
        required
        v-model="login.password"
      />
      <button class="login-button" type="submit">Login</button>
    </form>
    <span class="error" v-if="isError">
      Oh shit!!! We have an error <br />
      Please try again :)</span
    >
    <button class="register-button">
      <router-link to="/register">Register</router-link>
    </button>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Login",
  data() {
    return {
      login: {
        username: "",
        password: "",
      },
    };
  },
  computed: {
    ...mapGetters(["user", "isLogin", "isError"]),
  },
  methods: {
    ...mapActions(["loginSuccess", "loginFailed"]),
    handleLogin() {
      BlogService.postLogin(this.login)
        .then((res) => {
          this.register = {
            username: "",
            password: "",
          };
          this.loginSuccess(res.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.loginFailed();
          console.log(this.isLogin);
          console.log("There was an error:" + error);
        });
    },
  },
};
</script>

<style scoped>
.login {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/768473/pexels-photo-768473.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500");
  background-size: cover;
}

.title {
  font-size: 50px;
}

.form {
  margin-top: 20px;
  display: flex;
  flex-direction: column;
}

.form > label {
  margin: 10px 0;
}

.input {
  padding: 10px;
  background-color: white;
  border: none;
  border-radius: 10px;
}

.input:focus {
  outline: none;
}

.login-button {
  margin-top: 20px;
  cursor: pointer;
  color: white;
  background-color: lightcoral;
  padding: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
}

.error {
  margin-top: 20px;
  color: red;
}

.register-button {
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: teal;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 10px;
}

.register-button > a {
  color: white;
}
</style>