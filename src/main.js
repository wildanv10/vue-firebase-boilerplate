import Vue from "vue";
import App from "./App.vue";
import router from "./router/router";
import store from "./store/store";
import Buefy from "buefy";
import "buefy/dist/buefy.css";
import "./registerServiceWorker";
import "./services/firebase/initializeApp";

Vue.use(Buefy);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
