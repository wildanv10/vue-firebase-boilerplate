<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import auth from "./services/firebase/auth";
import Main from "@/views/layouts/Main.vue";
export default {
  components: {
    Main,
  },
  created() {
    auth
      .getAuthState()
      .then((user) => {
        this.$store.dispatch("auth/login", user).then(() => {
          this.$router
            .push({
              name: "home",
            })
            .catch(() => {});
        });
      })
      .catch(() => {});
  },
};
</script>
