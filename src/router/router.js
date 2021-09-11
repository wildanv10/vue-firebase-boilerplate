import Vue from "vue";
import VueRouter from "vue-router";
import Store from "@/store/store";
import Home from "@/views/pages/Home.vue";
import Categories from "@/views/pages/Categories.vue";
import Profile from "@/views/pages/Profile.vue";
import auth from "./pages/auth";
import utils from "./pages/utils";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  ...auth,
  ...utils,
  {
    path: "/categories",
    name: "categories",
    component: Categories,
    meta: {
      requiresAuth: true,
    },
  },
  {
    path: "/profile",
    name: "profile",
    component: Profile,
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
    if (Store.state.auth.user.accessToken) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
