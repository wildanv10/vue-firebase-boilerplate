import NotFound from "@/views/pages/NotFound.vue";

export default [
  {
    path: "*",
    name: "not-found",
    component: NotFound,
    meta: {
      hasMenu: false,
    },
  },
];
