import Login from "@/views/pages/auth/Login.vue";
import Register from "@/views/pages/auth/Register.vue";

export default [
  {
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      hasMenu: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: Register,
    meta: {
      hasMenu: false,
    },
  },
];
