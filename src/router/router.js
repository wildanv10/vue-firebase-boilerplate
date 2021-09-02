import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store/store";
import Home from "@/views/pages/Home.vue";
import About from "@/views/pages/About.vue";
import auth from "./pages/auth";
import utils from "./pages/utils";

Vue.use(VueRouter);

// const isAuthenticated = Store.state.auth.isAuthenticated;

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  ...auth,
  ...utils,
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      requiresAuth: true,
    },
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (Store.state.auth.isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
