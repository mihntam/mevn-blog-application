<template>
  <div class="login">
    <span class="title">Login</span>
    <form class="form">
      <label>Email</label>
      <input class="input" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input
        class="input"
        type="password"
        placeholder="Enter your password..."
      />
      <button class="login-button">Login</button>
    </form>
    <button class="register-button">
      <router-link to="/register">Register</router-link>
    </button>
  </div>
</template>

<script>
export default {
  name: "Login",
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