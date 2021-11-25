<template>
  <div class="register">
    <span class="title">Register</span>
    <form class="form" @submit.prevent="handleRegister">
      <label>Username</label>
      <input
        class="input"
        type="text"
        placeholder="Enter your username..."
        required
        v-model="register.username"
      />
      <label>Email</label>
      <input
        class="input"
        type="text"
        placeholder="Enter your email..."
        v-model="register.email"
        required
      />
      <label>Password</label>
      <input
        class="input"
        type="password"
        placeholder="Enter your password..."
        v-model="register.password"
        required
      />
      <button class="register-button">Register</button>
    </form>
    <span class="error" v-if="error">
      Oh shit!!! We have an error <br />
      Please try again :)</span
    >
    <button class="login-button">
      <router-link to="/login">Login</router-link>
    </button>
  </div>
</template>

<script>
import BlogService from "../services/BlogService";

export default {
  name: "Register",
  data() {
    return {
      register: {
        username: "",
        email: "",
        password: "",
      },
      error: false,
    };
  },
  methods: {
    handleRegister() {
      BlogService.postAuth(this.register)
        .then(() => {
          this.register = {
            username: "",
            email: "",
            password: "",
          };
          this.$router.push("/login");
        })
        .catch((error) => {
          this.error = true;
          console.log("There was an error:" + error);
        });
    },
  },
};
</script>

<style scoped>
.register {
  height: calc(100vh - 50px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.5),
      rgba(255, 255, 255, 0.5)
    ),
    url("https://images.pexels.com/photos/317355/pexels-photo-317355.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940");
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

.register-button {
  margin-top: 20px;
  cursor: pointer;
  background-color: teal;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 10px;
  text-align: center;
}

.error {
  margin-top: 20px;
  color: red;
}

.login-button {
  position: absolute;
  top: 60px;
  right: 20px;
  background-color: lightcoral;
  cursor: pointer;
  padding: 10px;
  border: none;
  border-radius: 10px;
}

.login-button > a {
  color: white;
}
</style>