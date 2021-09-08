<template>
  <div id="app">
    <Main />
  </div>
</template>

<script>
import auth from "./services/firebase/auth";
import Main from "@/views/layouts/Main.vue";
import { mapMutations } from "vuex";

export default {
  components: {
    Main,
  },
  created() {
    this.getAuthState();
  },
  methods: {
    ...mapMutations({
      setLoading: "utils/setLoading",
    }),
    getAuthState() {
      this.setLoading(true);
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
        .catch(() => {})
        .finally(() => this.setLoading(false));
    },
  },
};
</script>
