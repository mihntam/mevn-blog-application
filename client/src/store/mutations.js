export default {
  setUser(state, user) {
    state.user = user;
  },
  setLogin(state, isLogin) {
    state.login = isLogin;
  },
  setError(state, isError) {
    state.error = isError;
  },
  resetAll(state) {
    state.user = {};
    state.isLogin = false;
    state.error = false;
  },

  setUserData(state, user) {
    state.user = user;
    console.log("user");
    console.log(user);
    localStorage.setItem("user", JSON.stringify(user));
  },

  clearUserData() {
    localStorage.removeItem("user");
    location.reload();
  },
};
