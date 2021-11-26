import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import storeConfigs from "./store";

Vue.use(Vuex);
Vue.config.productionTip = false;

const store = new Vuex.Store(storeConfigs);

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");
