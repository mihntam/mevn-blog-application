export default {
  loginSuccess({ commit }, data) {
    commit("setUser", data);
    commit("setError", false);
    commit("setLogin", true);
    commit("setUserData", data);
  },
  loginFailed({ commit }) {
    commit("setError", true);
    commit("setLogin", false);
  },
  logOut({ commit }) {
    commit("resetAll");
    commit("clearUserData");
  },
};
